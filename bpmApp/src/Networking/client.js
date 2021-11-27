import {Component} from 'react';
import io from 'socket.io-client';
import {NativeModules} from 'react-native';
import {refreshUserInfo} from '../store/modules/user/Actions';

const {Notification} = NativeModules;

const SOCKET_URL = 'http://192.168.0.133:1880';

class SocketClient {
  initSocket(dispatch = null, roomId = null) {
    this.socket = null;
    this.socket = io(SOCKET_URL, {
      reconnectionDelayMax: 5000,
      reconnectionDelay: 2000,
      timeout: 10000,
      path: '/socket.io',
      transports: ['websocket'],
    });

    this.socket.on('disconnect', function (ret) {
      console.log('cliente desconectou');
    });

    this.socket.on('connect', () => {
      console.log('cliente connectado');
      this.joinSession(roomId);
    });

    this.socket.on('reconnect', () => {
      console.log('reconectado');
    });

    this.socket.connect();

    this.socket.on('join', function (ret) {
      console.log('join ', ret);
    });

    this.socket.on('message', function (ret) {
      console.log('messagem chegou', ret);
      Notification.sendNotification('Nova Mensagem', ret.message);
    });

    this.socket.on('emergencyNotification', function (ret) {
      console.log('notification chegou', ret);
      Notification.sendNotification(ret.title, ret.message);
    });

    this.socket.on('alertAddResponsible', function (ret) {
      console.log('alertAddResponsible chegou', ret);
      Notification.sendNotification('Novo Monitorado', ret);
      dispatch(refreshUserInfo());
    });
  }

  disconect() {
    this.socket?.disconnect();
    this.socket = null;
  }

  joinSession(roomId) {
    this.socket.emit('join', {room: roomId});
  }

  sendNotification(uuid) {
    console.log('aloo', uuid);
    this.socket.emit('emergencyNotification', {room: uuid});
  }

  onConnectSocket() {
    if (this.socket) {
      this.socket.on('connect', () => {
        this.socket.emit('im-connected');
        this.setState({
          connected: true,
        });
      });
    }
  }

  send(status, room) {
    if (room === '') {
      this.socket.emit('status', status);
    } else {
      this.socket.to(room).emit('status', status);
    }
  }
}

//var Socket = new SocketClient();
export default SocketClient;

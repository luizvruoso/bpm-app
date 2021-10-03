import {Component} from 'react';
// import React from 'react-native';
import io from 'socket.io-client/socket.io';

const SOCKET_URL = 'https://';

export default class bpmAppClient extends Component {
  socket = io.connect(SOCKET_URL, {
    transports: ['websocket'],
  });

  state = {
    connected: false,
  };

  componentDidMount() {
    this.onConnectSocket();
  }

  onConnectSocket = () => {
    if (this.socket) {
      this.socket.on('connect', () => {
        this.socket.emit('im-connected');
        this.setState({
          connected: true,
        });
      });
    }
  };

  //   send(status, room) {
  //     this.socket.emit('status', status, room);
  //   }
}

export const URL_API = {
  URL: 'http://177.194.52.168:8082',
  CREDENTIALS: {
    BASIC_AUTH: 'bG91c2xpeG86cGFzc3dvcmQ=',
    BEARER_TOKEN: '',
  },
  AUTH: {
    SEND_CODE: '/api/auth/sendSMS',
    AUTH_CODE: '/api/auth/authCode',
    REGISTER: '/api/auth/signup',
    //salsa lixo
    LOGIN: '/api/auth/signin',
    GET_DATA: 'api/get/data',
    GET_ALL: '/api/get/all',
    GET_USER: '/api/get/user',
    GET_RESPONSIBLE: '/api/get/responsible',
  },
  MONITOR: {
    GET_ALL: '/api/user/monitored',
    ADD_MONITOR: '/api/user/addContacts',
    ADD_DATA_MONITORED: '/api/user/status',
  },
  EMERGENCY_CONTACTS: {
    GET_ALL: '/api/user/emergencyContacts',
    DELETE: '/api/user/removeEmergencyContact',
  },
};

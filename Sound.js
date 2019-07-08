import Sound from 'react-native-sound';

const Q = new Sound(require('./RP4_KICK_1.mp3'));

export const qPressed = () => {
  Q.play((success) => Q.reset());
};

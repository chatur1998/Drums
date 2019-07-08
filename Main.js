import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { qPressed } from './Sound';


const SOUNDS = [
  { Q: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81 },
  { W: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87 },
  { E: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69 },
  { A: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65 },
  { S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', KC: 83 },
  { D: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68 },
  { Z: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90 },
  { X: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88 },
  { C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67 }
];

const QSource = {
  uri: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
};

class Main extends Component {
  /*state = {
    playingStatus: 'nosound',
  }

  async onQPress() {
      const { sound } = await Audio.Sound.create(
        QSource,
        {
          shouldPlay: true,
          isLooping: true
        }
      );
      this.sound = sound;
      this.setState({
        playingStatus: 'playing'
      });
    }

    play = () => {
      switch (this.state.playingStatus) {
        case 'nosound':
          return this.onQPress();
        case 'playing':
          break;
      }
    }
*/

  render() {
    return (
      <View style={styles.container}>
        <Button
          buttonStyle={styles.buttons}
          onPress={qPressed}
          raised
          title='Q'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onWPress.bind(this)}
          raised
          title='W'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onEPress.bind(this)}
          raised
          title='E'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onAPress.bind(this)}
          raised
          title='A'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onSPress.bind(this)}
          raised
          title='S'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onDPress.bind(this)}
          raised
          title='D'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onZPress.bind(this)}
          raised
          title='Z'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onXPress.bind(this)}
          raised
          title='X'
        />
        <Button
          buttonStyle={styles.buttons}
          //onPress={this.onCPress.bind(this)}
          raised
          title='C'
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    width: 50,
    height: 50
  }
};

export default Main;

/*
  onWPress() {
    this.wPressed();
  }

  onEPress() {
    this.ePressed();
  }

  onAPress() {
    this.aPressed();
  }

  onSPress() {
    this.sPressed();
  }

  onDPress() {
    this.dPressed();
  }

  onZPress() {
    this.zPressed();
  }

  onXPress() {
    this.xPressed();
  }

  onCPress() {
    this.cPressed();
  }
  */

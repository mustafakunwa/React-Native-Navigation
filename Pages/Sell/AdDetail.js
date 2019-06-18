import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View ,Image,Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Icon} from 'native-base';
import {RNCamera} from 'react-native-camera';
export class AdDetailsScreen extends React.Component {
    static navigationOptions = {
            title: 'INCLUDE SOME DETAILS',
        };
    constructor(props) {
      super(props);

      this.state = {
        path: null,
      };
    }
    takePicture = async() => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
        this.setState({ path:data.uri })
      }

    };
    renderCamera() {
        return (
          <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
              }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      renderImage() {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: this.state.path }}
              style={styles.preview}
            />
             <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                style={styles.capture}
                onPress={() => this.setState({ path: null })}
                ><Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      render() {
        return (
          <View style={styles.container}>
            {this.state.path ? this.renderImage() : this.renderCamera()}
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    });
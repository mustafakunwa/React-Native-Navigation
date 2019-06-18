import React, {Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Icon} from 'native-base';

export class AdDetailsScreen extends React.Component {
    static navigationOptions = {
            title: 'INCLUDE SOME DETAILS',
        };   
      render() {
        return (
          <Container>
           <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Ad title</Label>
                  <Input autoCompleteType='' />
                </Item>
                <Item floatingLabel>
                  <Label>Description</Label>
                  <Input />
                </Item>
              </Form>
            </Content>
         </Container>
        );
      }
    }
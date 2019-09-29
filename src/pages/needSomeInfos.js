import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import { TextInput, Title, Provider, Surface, Text, Button } from 'react-native-paper';
import api from '../services/api'




const styles=StyleSheet.create({
  margin:{
    marginLeft:8,
    marginRight:8,
    marginTop:8 
  },
  surface: {
    padding: 0,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius:100,
    backgroundColor:"#ff6400",
    color:'white',
    marginTop:120,
    marginLeft:250
  },
})
export default class Form extends Component {

  componentDidMount(){
    api.post()
  }
  async makeRequest() {

    const config = {
        method: 'post',
        url: 'https://parseapi.back4app.com/classes/organization',
        headers: {
          'X-Parse-Application-Id': '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92',
          'X-Parse-REST-API-Key': 'ZMbHFNcQ1Rvh7bIpoctydiF9yRtZDrnJ81pzhtdF',
          'Content-Type': 'application/json'
        },
        }
  
    let res = await axios(config)
  
    console.log(res.status);
  }

  state = {
    text: ''
  };
  render(){
    const { navigate } = this.props.navigation
    return (
      <Provider>
        <Title style={styles.margin}>Registre-se!</Title>
      <TextInput
        style={styles.margin}
        label='Email'
        mode='outlined'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />
            <TextInput
        label='Nome comercial'
        mode='outlined'
        style={styles.margin}
        value={this.state.commercialName}
        onChangeText={commercialName => this.setState({ commercialName })}
      />
            <TextInput
        label='Número do documento'
        mode='outlined'
        style={styles.margin}
        value={this.state.documentNumber}
        onChangeText={documentNumber => this.setState({ documentNumber })}
      />
                  <TextInput
        label='Senha'
        mode='outlined'
        style={styles.margin}
        value={this.state.passwd}
        onChangeText={passwd => this.setState({ passwd })}
      />
                        <TextInput
        label='Telefone'
        mode='outlined'
        style={styles.margin}
        value={this.state.phoneNumber}
        onChangeText={phoneNumber => this.setState({ phoneNumber })}
      />
        <Button style={styles.surface}
        onPress={() => navigate('ongsHub', {name: 'ongsHub'})}>
     <Text style={{color:'white'}}> > </Text>
  </Button>
      </Provider>
      
    );
  }
}
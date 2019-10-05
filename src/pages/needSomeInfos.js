import React, {Component} from 'react';
import {StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'
import { TextInput, Title, Provider, Text, Button } from 'react-native-paper';
import  Parse from  'parse/react-native';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92', // This is your Application ID
  'DwqktoeTq6eNw9eeWNMFNd7AOcRmVDPEONBuwdiZ' // This is your Javascript key
);



const styles=StyleSheet.create({
  margin:{
    marginLeft:10,
    marginRight:10,
    marginTop:10
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
    marginTop:530,
    marginLeft:250,
    position:'absolute',
    zIndex:999
  },
  title:{
    marginLeft:12,
    marginRight:12,
    marginTop:12,
    fontSize: 24,
    color:'#ff6400',

  },
  phoneNumber:{
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom: 100
  }
})
export default class Form extends Component {
  async postONG(){

    const organization = Parse.Object.extend('organization');
    const query = new Parse.Query(organization);
    // here you put the objectId that you want to update
    query.get('xKue915KBG').then((object) => {
      object.set('name', this.state.name);
      object.set('commercialName', this.state.commercialName );
      object.set('phoneNumber', this.state.phoneNumber);
      object.set('organizationType', this.state.organizationType);
      object.set('website', this.state.website);
      object.set('mission', this.state.mission);
      object.set('avaibleContries', this.state.avaibleContries);
      object.set('email', this.state.email );
      object.set('membership', this.state.membership );
      object.set('city', this.state.city );
      object.set('status', this.state.status );
      object.set('govId', this.state.govId );
      object.set('govIdType', this.state.govIdType );
      object.set('local', this.state.local );
      object.save().then((response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== 'undefined') document.write(`Updated organization: ${JSON.stringify(response)}`);
        console.log('Updated organization', response);
      }, (error) => {
        if (typeof document !== 'undefined') document.write(`Error while updating organization: ${JSON.stringify(error)}`);
        console.error('Error while updating organization', error);
      });
    });
  }
 
  //new Parse.Object("localization")
  state = {
    name:'',
    commercialName:'',
    phoneNumber:'',
    organizationType:'',
    website:'',
    mission:'',
    avaibleContries:'',
    email:'',
    membership:'',
    city:'',
    status:'',
    govId:'',
    govIdType:'',
    local:'',
  };

  render(){

   
    
    const { navigate } = this.props.navigation
    return (
     

      <Provider >
              <KeyboardAvoidingView>
         <Button style={styles.surface}
                onPress={() => navigate('ongsHub', {name: 'ongsHub'})}>
            <Text style={{color:'white'}}> > </Text>
         </Button>

      <ScrollView style={{backgroundColor:'#fff'}}>
        <Title style={styles.title}>Nos diga algumas informações :)</Title>
          <TextInput

            style={styles.margin}
            label='Email'
            mode='outlined'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.margin}
            label='Nome'
            mode='outlined'
            value={this.state.nome}
            onChangeText={nome => this.setState({ nome })}
          />
                <TextInput
            label='Nome comercial'
            mode='outlined'
            style={styles.margin}
            value={this.state.commercialName}
            onChangeText={commercialName => this.setState({ commercialName })}
          />
                <TextInput
            keyboardType={'numeric'}
            label='Número do documento'
            mode='outlined'
            style={styles.margin}
            value={this.state.documentNumber}
            onChangeText={documentNumber => this.setState({ documentNumber })}
          />
                <TextInput
            label='Tipo de organização'
            mode='outlined'
            style={styles.margin}
            value={this.state.organizationType}
            onChangeText={organizationType => this.setState({ organizationType })}
          />
                <TextInput
            keyboardType={'password'}
            label='Senha'
            mode='outlined'
            style={styles.margin}
            value={this.state.passwd}
            onChangeText={passwd => this.setState({ passwd })}
          />
                  <TextInput
            keyboardType={'numeric'} 
            label='Telefone'
            mode='outlined'
            style={styles.phoneNumber}
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
          />

</ScrollView>
</KeyboardAvoidingView>
      </Provider>
      

    );
  }
}
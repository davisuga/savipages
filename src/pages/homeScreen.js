/* eslint-disable prettier/prettier */
import * as React from 'react';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from 'react-native-ui-kitten';
import { StyleSheet, Text } from 'react-native';
import {theme} from '../theme';

class App extends React.Component {
  render(){

    const {navigate} = this.props.navigation;

    return (
    <ApplicationProvider
    mapping={mapping}
    theme={theme}>
        <Layout style={styles.root}>
          <Text style={styles.text} >Savi</Text>
          <Button size='giant' style={styles.beHelped}  >SER AJUDADO</Button>
          <Button appearance='outline' size='giant' style={styles.help} onPress={() => navigate('howCanHelp', {name: 'howCanHelp'})} >AJUDAR</Button>

        </Layout>
    </ApplicationProvider>
    );
  }
}


const styles = StyleSheet.create({
  help:{
    top:'10%',
    borderRadius:100,
    width:'80%'
  },
  root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  beHelped: {
    top:'8%', 
    borderRadius:100,
    width:'80%'
  },
  text: {
  fontSize:70,

}});
export default App;

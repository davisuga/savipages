/* eslint-disable prettier/prettier */
import * as React from 'react';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Radio, RadioGroup } from 'react-native-ui-kitten';
import { StyleSheet, Text, View } from 'react-native';
import {theme} from '../theme'
import MaterialMessageTextbox from "../../symbols/MaterialMessageTextbox";
import Icon from "@builderx/icons";

export default class App extends React.Component {
    state = {
        selectedIndex: 0,
    };

    onGroupSelectionChange = (selectedIndex: number) => {
        this.setState({
            selectedIndex
        });
    };

    render(){
        

     const {
         navigate
     } = this.props.navigation;

    return (
    <ApplicationProvider
    mapping={mapping}
    theme={theme}>
      <Layout style={styles.root}>
        <Text style={styles.text} >Como você  pode ajudar?</Text>
        <Text style={styles.subText} >Pode ser com mais de uma coisa!</Text>
        <RadioGroup
        style={{flexDirection:'row'}}
        selectedIndex={this.state.selectedIndex}
        onChange={this.onGroupSelectionChange}>
          <Radio />
          <Radio />
          <Radio />
        </RadioGroup>

          <MaterialMessageTextbox style={styles.materialMessageTextbox} />
          <Icon
          onPress={() => goBack()}
          type={"Ionicons"}
          name={"ios-arrow-dropleft-circle"}
          style={styles.icon}
          />
          <Icon
          onPress={() => navigate('howCanHelp', {name: 'howCanHelp'})}
          type={"Ionicons"}
          name={"ios-arrow-dropright-circle"}
          style={styles.icon2}
          />
      </Layout>
    </ApplicationProvider>
      );
    }
  }

const styles = StyleSheet.create({
  navButtom:{
    width:1,
height:1,
  },
  subText:{
    fontSize:20,
  },
  help:{
    top:'10%',
    borderRadius:100,
    width:'80%'
  },
  root:{
    flex:1,
    alignItems:'center',
  },
  beHelped: {
    top:'8%', 
    borderRadius:100,
    width:'80%'
  },
  text: {
  fontSize:78,
  marginLeft:'5%'

},
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  materialMessageTextbox: {
    top: 0,
    left: 0,
    width: "100%",
    height: "54.61%",
    position: "absolute"
  },
  icon: {
    top: 123.72,
    left: '5%',
    position: "absolute",
    color: "#ff6400",
    fontSize: 40,
    width: "9.75%",
    height: "24.28%"
  },
  icon2: {
    top: 124.72,
    left: '85%',
    position: "absolute",
    color: "#ff6400",
    fontSize: 40,
    width: "9.76%",
    height: "24.3%"
},
});


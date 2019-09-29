/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f00a4f',
    accent: '#ff6400',
  },
};

export default class MyComponent extends React.Component {
  state = {
    text: ''
  };

  render(){
    return (
      <PaperProvider theme={theme}>
      <App />
      <TextInput
        label='Email'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
    </PaperProvider>

    );
  }
}

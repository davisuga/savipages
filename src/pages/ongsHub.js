import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import api from '../services/api'
import Axios from 'axios';

class ongsHub extends React.Component{
    componentDidMount(){
        this.loadOffers(0)
    }
    loadOffers = () =>{
            const response = await api.get([]);
    };

    render(){
        return (
                <Card style={{margin:10}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
        )
    }

}
export default MyComponent;
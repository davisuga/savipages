import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import  Parse from  'parse/react-native';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92', // This is your Application ID
  'DwqktoeTq6eNw9eeWNMFNd7AOcRmVDPEONBuwdiZ' // This is your Javascript key
);



class ongsHub extends React.Component{
    state={
        offers:''
    }
  
      loadOffers = () =>{
        const offer = Parse.Object.extend('offer');
        const query = new Parse.Query(offer);
        query.find().then((results) => {
          // You can use the "get" method to get the value of an attribute
          // Ex: response.get("<ATTRIBUTE_NAME>")
          if (typeof document !== 'undefined') document.write(`offer found: ${JSON.stringify(results)}`);
          console.log('offer found', results);
        }, (error) => {
          if (typeof document !== 'undefined') document.write(`Error while fetching offer: ${JSON.stringify(error)}`);
          console.error('Error while fetching offer', error);
        });
      }

    render(){
        return (
                <Card style={{margin:10}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="done" />} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
        )
    }

}
export default ongsHub;
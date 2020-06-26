import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput , Appbar , Button } from 'react-native-paper';


class App extends React.Component {
  state={
    fname:"",
    sname:""
  }
  render() {
    return (
      <View style={styles.container}>
        
      <Appbar.Header>
        
        <Appbar.Content
          title="Love % Calculator"
          style={{alignItems:"center"}}
        />
        
      </Appbar.Header>
   
       <TextInput
          label='person1(male)'
          value={this.state.fname}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          label='person2(feale)'
          value={this.state.sname}
          onChangeText={text => this.setState({ text })}
        />
        <Button icon="camera"
         mode="contained" 
         style={{margin:10}}
        onPress={() => console.log('Pressed')}>
          Calculate
        </Button>
      </View>
    );
  }
  }
  
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

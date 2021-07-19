import React from 'react'
import { Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import db from '../config'


export default class App extends React.Component {
  constructor()
  {
     super()
     this.state={
       displayText:"",text:"",title:""
  }
  } 
     CreationNote = (title,note) => {
    var teamref=db.collection('Notes')
    .add({
     enabled:true,title:this.state.title,note:this.state.text
    })
    this.setState({displayText:note})
  };
  resetdb=()=>{
     var teamref=db.collection('Notes')
   .update({
     enabled:false,title:"",note:""
    })
    this.setState({text:'',title:'',displayText:''})
  }
   render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
 
     <Image
            source={require("../assets/Reminderlogo2.jpg")}
            style={{width:200, height: 200, alignSelf:'center'}}/>

       
             <Text>Note 1</Text>

      <TextInput
      style={styles.input}
      placeHolder="Name of the note"
      onChangeText={(t1)=>{
        this.setState({title:t1})
      }}
      value={this.state.title}
      />

      <TextInput

      style={styles.input2}
      placeHolder=" Type here" multiline='true'
      onChangeText={(t1)=>{
        this.setState({text:t1})
      }}
      value={this.state.text}
      />
       <TouchableOpacity
               onPress={()=>{this.CreationNote(this.state.title,this.state.text)}
              
               }
               >
               <Text style={styles.textbuttongo}>Save</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.resetdb()} style={styles.loginBox} >
            
               <Text style={styles.textbuttongo}>Completed</Text>
            </TouchableOpacity>
            <Text>{this.state.displayText}</Text>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
input:{
  width:220,
  height:60,
  borderWidth:3,
  marginTop:10,
  txtAlign:"center",
  alignSelf:'center',
  color:'black',
  backgroundColor:'lightgreen'
},
textbuttongo:{
     
     marginTop:30,
     
     alignSelf : 'center',
     color: "blue",
     
      fontWeight: 'bold'

  },
  input2:{
  width:210,
  height:90,
  borderWidth:3,
  marginTop:130,
  textAlign:"center",
  alignSelf:'center',
  color:'black',
  backgroundColor:'lightgreen'
},
                                                                                                                                                                                                                                                   
loginBox:{
  backgroundColor:'lightblue',
  borderColor:'black',
  marginTop:10,
 
  marginLeft:15,
 
}

   
});

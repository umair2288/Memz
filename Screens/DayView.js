import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


Styles = StyleSheet.create(

    {
        container :{
            padding : 10,
        },
        note : {
        
            flexDirection:"row",
            marginTop:5,
            marginBottom:5,
            marginRight : 50,
            marginLeft:5,
        },
         textCard : {
             width : 50,
             height : 50,
             backgroundColor : 'black',
             marginRight : 5,
             borderRadius : 10,
        
             
            
         }  
         ,
         textCardDay : {
            fontSize : 35,
            textAlign : 'center',
            color : 'white',
           
         },
         textMessage :{
            height : 50,
            overflow: "hidden",
            marginLeft: 0,
            marginRight : 5,     
            paddingTop:10,
            paddingBottom: 10,
            backgroundColor:"gray",
           
           
         }

         

    }

)

Note = (props)=>{
    return (
    <View style ={Styles.note}>
        <View style = {Styles.textCard}>
            <Text style = {Styles.textCardDay} >{props.date.day}</Text>
        </View>

        <View style = {Styles.textMessage}>
            <Text  >{props.message}</Text>
        </View>
    </View>
    )
}


export default class DayView extends Component {

    notes = [
        {
            key:1,
            date: {
                day : 1,
                Month: 'Feb',
                Year : 2018
            },
            message: 'this is a dummy message his is a dummy messagehis is a dummy messagehis is a dummy message this is a dummy message his is a dummy messagehis is a dummy messagehis is a dummy message',
        },
        {
            key:2,
            date: {
                day : 4,
                Month: 'Feb',
                Year : 2018
            },
            message: 'this is a dummy message 2 this is a dummy message his is a dummy messagehis is a dummy messagehis is a dummy ',
        },

    ]
    
    

    render(){       
        return( 
        <View style = {Styles.container}>
        {this.notes.map(
            (note) =>{
                return (<Note key = {note.key} {...note}></Note>)
            }
        )}
        </View>
        );

    }


}

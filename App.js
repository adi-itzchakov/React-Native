import React, { Component } from 'react';
import {View ,Image,StyleSheet,Text,SectionList, ScrollView} from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollview}>
          <Text style={styles.head}>Meet your new Dogs:</Text>
          <Image 
            source={{uri: "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"}}
            style={styles.img1}  
         />
         <View style={styles.textAbout}>
         <Text style={styles.name1}>{'Meet Roxy,\n10 months old,\nhe loves to run and do yoga,\ngreate with kids!'} </Text>
         </View>

         <Image 
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDCJmVqrgFGz-bQnnlplhMQg31AzD0g4aj2-qbJZlAwn_Eajs&s"}}
            style={styles.img2}  
         />
         <View style={styles.textAbout}>
         <Text style={styles.name2}>{'Meet kali,\n2 months old,she loves to play with ball,\ntoys and good with\nlistening to your problems.\nshe will be your BFF!' }</Text>
         </View>

         <Image 
            source={{uri: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg"}}
            style={styles.img3}  
         />
         <View style={styles.textAbout}>
          <Text style={styles.name1}>{'Meet Gray,\n2 years old,\nhes eyes will make you\nlook at him all day!'}</Text>
         </View>

         <Text style={styles.head}>And somthing different maybe?</Text>
         
         <Image 
            source={{uri: "https://pbs.twimg.com/media/EDVbFLEXYAAy3WK.jpg"}}
            style={styles.img1}  
         />
         <View style={styles.textAbout}>
         <Text style={styles.name3}>{'Meet Mr.Phrizi,\nshe likes to eat carrot\nand to run very fast.'}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  head:{
    fontSize:30,
    color:"black",
    textAlign:"center",
    marginTop:30,
  },
  img1:{
    width:200,
    height:200,
    marginTop:15,
    marginLeft:5
  },
  img2:{
    width:200,
    height:200,
    marginLeft:5,
    marginTop:30
  },
  scrollview:{
    backgroundColor:"#ffd9b3"
  },
  img3:{
    width:200,
    height:200,
    marginLeft:5,
    marginTop:10
  },
  textAbout:{
    marginLeft:220,
    marginTop:-100,
    fontSize:20,
    fontWeight:'bold'
  }
});

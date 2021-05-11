import React, {Component} from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Button, Dimensions} from 'react-native'
import { Directions } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import { Avatar, Card, Title, Paragraph, ProgressBar, Colors, Searchbar } from 'react-native-paper';

import { Grayscale } from 'react-native-color-matrix-image-filters';



import SearchBar from "react-native-dynamic-search-bar";


const headerText = "IT Skills & Get Crypto";

const search="";




const Learn = ()=>
{

    return(

       <View style={{backgroundColor:"white"}}>

                    


           <View>

               <View style={{justifyContent: "space-evenly", flexDirection: "row", backgroundColor: "white", marginVertical: 3, height: 20}}>

                      <TouchableOpacity><Text>Service</Text></TouchableOpacity>
                      <TouchableOpacity><Text>Events</Text></TouchableOpacity>
                      <TouchableOpacity><Text>Learn</Text></TouchableOpacity>
                      <TouchableOpacity><Text>Join</Text></TouchableOpacity>

               </View>

                
                    <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} >

                    <ImageBackground source={require("./Group244.png")}  style={styles.headerImage}>

                            <View style={{left: 200, top: 20}}>
                                    <Text style={{color: "white", fontWeight: "bold"}}>Lear High Skills in Demand</Text>
                                    <Text style={{color: "white", fontWeight: "bold"}}>{headerText} </Text>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontStyle: "italic", color: "white", fontWeight: "bold"}}>powered by </Text>
                                        <Text style={{fontStyle: "italic", fontWeight: "bold" }}>Koin Street</Text>
                                    </View>

                            </View>

                    </ImageBackground>
                  



                    </LinearGradient>


                 </View>



                <View style={styles.bottom}>

                    <ScrollView style={{backgroundColor: "#151371", height: "100%"}}>

                    <SearchBar
  placeholder="Search here"
  onChangeText={(text) => {
    console.log(text);
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>




                        

                


                    </ScrollView>


                    


                    




                </View>









       </View>
    )
}



export default Learn;

const styles = StyleSheet.create(

    {
        headerImage:
        {
            height: 150,
            width: 150,

            
            
            

        
    
        },

        bottom:
        {
        
            
        }
    }



)

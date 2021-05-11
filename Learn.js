import React, {Component, useState, useEffect } from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Button, Dimensions} from 'react-native'
import { Directions } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import { Avatar, Card, Title, Paragraph, ProgressBar, Colors, Searchbar } from 'react-native-paper';

import { Grayscale } from 'react-native-color-matrix-image-filters';

import DropDownPicker from 'react-native-dropdown-picker';


import SearchBar from "react-native-dynamic-search-bar";


const headerText = "IT Skills & Get Crypto";

const search="";


function Picker() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Filter Search"
        style={{width: 230, left: 19, top: 10, height: 30}}
        dropDownContainerStyle={{
            width: 300, left: 19
          }}
     
      />
    );
  }



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
                                    <Text style={{color: "white", fontWeight: "bold"}}>Learn High Skills in Demand</Text>
                                    <Text style={{color: "white", fontWeight: "bold"}}>{headerText} </Text>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontStyle: "italic", color: "white", fontWeight: "bold"}}>powered by </Text>
                                        <Text style={{fontStyle: "italic", fontWeight: "bold" }}>Koin Street</Text>
                                    </View>

                            </View>

                    </ImageBackground>
                  



                    </LinearGradient>


                 </View>


                    

                <View>

                    <ScrollView style={{backgroundColor: "#151371"}} contentContainerStyle={{paddingBottom: 500}} >


                        <View>

                        <SearchBar  placeholder="Search here" onChangeText={(text) => {
                            console.log(text);
                        }}
                        onPressCancel={() => {
                            this.filterList("");
                        }}
                        onPress={() => console.log("press")} style={{top: 7, width: 350}} onSubmitEditing = {()=> {console.log("hello")}}

                        />

                            <Picker/>

                        </View>


                        <Text style={{color: "white", fontSize: 16, fontWeight: "bold", top: 20, left: 19}}>My Courses</Text>
                        <ScrollView horizontal={true} style={{top: 10}}>


                        

                        
                        <Card style = {styles.card}>

                        <LinearGradient colors={['#151371', 'grey', "white", 'grey', '#151371' ]} style={styles.backgroundGradient}>

                                    
                                   

                                    <Card.Title title="Intro To Blockchain" subtitle= "Blockchain Cryptocurrency Fundamentals" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle}/>

                                    <TouchableOpacity style={styles.earnButton}>
                                        <Text>Earn $30</Text>
                                    </TouchableOpacity>

                                    
                                   

                                    <View style={{alignItems:"center"}}>

                                    
                                        <TouchableOpacity style={styles.learnButton}>
                        
                                        <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={styles.gradientButton}>
                                        <Text style={styles.learnText}>Learn</Text>

                                        </LinearGradient>

                                
                                        </TouchableOpacity>

                                     </View>
                                   
                                    

                                    <View style={styles.progressAttrib}>

                                   
                                    
                                            <View style={{flexDirection:"row-reverse"}}>
                                            <Text style={{color: "white", left: 40}}>8.3/10 Modules</Text>

                                            </View>
                                        
                                            <ProgressBar  style={styles.progressBar} progress={0.5}  color= {"rgba(0, 255, 0, 1.0)"}></ProgressBar>
                                            <Text style={styles.completeText}>83% Complete</Text>

                                    </View>
                                    
                            </LinearGradient>


                        </Card>

                        <Card style = {styles.card}>

                        <LinearGradient colors={['#151371', 'grey', "white", 'grey', '#151371' ]} style={styles.backgroundGradient}>

                                    
                                   

                                    <Card.Title title="Intro To Blockchain" subtitle= "Blockchain Cryptocurrency Fundamentals" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle}/>

                                    <TouchableOpacity style={styles.earnButton}>
                                        <Text>Earn $30</Text>
                                    </TouchableOpacity>

                                    
                                   

                                    <View style={{alignItems:"center"}}>

                                    
                                        <TouchableOpacity style={styles.learnButton}>
                        
                                        <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={styles.gradientButton}>
                                        <Text style={styles.learnText}>Learn</Text>

                                        </LinearGradient>

                                
                                        </TouchableOpacity>

                                     </View>
                                   
                                    

                                    <View style={styles.progressAttrib}>

                                   
                                    
                                            <View style={{flexDirection:"row-reverse"}}>
                                            <Text style={{color: "white", left: 40}}>8.3/10 Modules</Text>

                                            </View>
                                        
                                            <ProgressBar  style={styles.progressBar} progress={0.5}  color= {"rgba(0, 255, 0, 1.0)"}></ProgressBar>
                                            <Text style={styles.completeText}>83% Complete</Text>

                                    </View>
                                    
                            </LinearGradient>


                        </Card>

                       


                        </ScrollView>


                        <Text style={{color: "white", fontSize: 16, fontWeight: "bold", top: 20, left: 19}}>My Courses</Text>
                        <ScrollView horizontal={true} style={{top: 10}}>


                        

                        
                        <Card style = {styles.card}>

                        <LinearGradient colors={['#151371', 'grey', "white", 'grey', '#151371' ]} style={styles.backgroundGradient}>

                                    
                                   

                                    <Card.Title title="Intro To Blockchain" subtitle= "Blockchain Cryptocurrency Fundamentals" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle}/>

                                    <TouchableOpacity style={styles.earnButton}>
                                        <Text>Earn $30</Text>
                                    </TouchableOpacity>

                                    
                                   

                                    <View style={{alignItems:"center"}}>

                                    
                                        <TouchableOpacity style={styles.learnButton}>
                        
                                        <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={styles.gradientButton}>
                                        <Text style={styles.learnText}>Learn</Text>

                                        </LinearGradient>

                                
                                        </TouchableOpacity>

                                     </View>
                                   
                                    

                                    <View style={styles.progressAttrib}>

                                   
                                    
                                            <View style={{flexDirection:"row-reverse"}}>
                                            <Text style={{color: "white", left: 40}}>8.3/10 Modules</Text>

                                            </View>
                                        
                                            <ProgressBar  style={styles.progressBar} progress={0.5}  color= {"rgba(0, 255, 0, 1.0)"}></ProgressBar>
                                            <Text style={styles.completeText}>83% Complete</Text>

                                    </View>
                                    
                            </LinearGradient>


                        </Card>

                        <Card style = {styles.card}>

                        <LinearGradient colors={['#151371', 'grey', "white", 'grey', '#151371' ]} style={styles.backgroundGradient}>

                                    
                                   

                                    <Card.Title title="Intro To Blockchain" subtitle= "Blockchain Cryptocurrency Fundamentals" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle}/>

                                    <TouchableOpacity style={styles.earnButton}>
                                        <Text>Earn $30</Text>
                                    </TouchableOpacity>

                                    
                                   

                                    <View style={{alignItems:"center"}}>

                                    
                                        <TouchableOpacity style={styles.learnButton}>
                        
                                        <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={styles.gradientButton}>
                                        <Text style={styles.learnText}>Learn</Text>

                                        </LinearGradient>

                                
                                        </TouchableOpacity>

                                     </View>
                                   
                                    

                                    <View style={styles.progressAttrib}>

                                   
                                    
                                            <View style={{flexDirection:"row-reverse"}}>
                                            <Text style={{color: "white", left: 40}}>8.3/10 Modules</Text>

                                            </View>
                                        
                                            <ProgressBar  style={styles.progressBar} progress={0.5}  color= {"rgba(0, 255, 0, 1.0)"}></ProgressBar>
                                            <Text style={styles.completeText}>83% Complete</Text>

                                    </View>
                                    
                            </LinearGradient>


                        </Card>

                        

                       


                        </ScrollView>

                    
                        


                            
                       
                   

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

        socialMediaButtons:
        {
            left: 10,
            top: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            


        },

        social:
        {
            width: 20,
            height: 20,
            marginRight: 20,

        },

        cardTitle:
        {
            color: "white",
            fontSize: 20

        },

        cardSubtitle:
        {
            color: "white",
            fontSize: 14

        },

        earnButton:
        {
            width: 100, height: 20, backgroundColor: "#9CFF83", alignItems:"center", bottom: 55, left: 225, borderRadius: 5
        },



        card:
        {
            
            top: 20,
            left: 9,
            height: 270,
            width:350,
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            borderRadius: 10,
            marginLeft: 10
         
           
           
        
            
        },

        gradientButton: 
        {
            borderRadius: 8,
            width: 146,
            
            

        },

        backgroundGradient:
        {
            height: 250,
            width: 350,
            borderRadius: 10,
            borderColor: "white",
            borderWidth: 2

        },

        progressBar:
        {
            width: 300,
            height: 10,
            borderColor:"white",
            borderWidth: 0.2,
            borderRadius: 5,
            left: 10,
            top: 5
            
        },

        completeText:
        {
            color: "white",
            top: 7,
            left: 10
        },

        progressAttrib:
        {
            top: 60
        },

        learnButton:
        {

            alignItems: "center",
            top: 50,
            borderRadius: 10,
            borderWidth: 2,
            width: 150,
            
            

           

        },

        learnText:
        {
            color: "white", fontWeight: "bold", fontSize: 16, paddingHorizontal: 50, paddingVertical: 7

        }
    }



)

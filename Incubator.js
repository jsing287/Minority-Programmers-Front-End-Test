import React, {Component} from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Button} from 'react-native'
import { Directions } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import { Avatar, Card, Title, Paragraph, ProgressBar, Colors } from 'react-native-paper';

import { Grayscale } from 'react-native-color-matrix-image-filters';










const textHeader = "Help <Code/>";

const Incubator = ()=>
{

    return(
        
        <View style={styles.container}>




            <View style={{backgroundColor: "white"}}>

            <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={{flexDirection: "row", justifyContent: "space-evenly", }}>


            
                <Button title="Get Built" color="black" backgroundColor="black"/>
                <Button title="Events" color="black"/>
                <Button title="Learn" color="black"/>
                <Button title="Join" color="black"/>

                </LinearGradient>
                

            </View>

           



             <ImageBackground source={require("./incubatorheader.png")} style={styles.headerImage}>
                  

             <View>

                 <TouchableOpacity style={styles.startupButton}>



                    
                            <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]} style={styles.gradientButton}>
                              <Text style={{color: "white", fontWeight: "bold", fontSize: 16, paddingHorizontal: 2}}>View Startups</Text>

                             </LinearGradient>

                    
                 </TouchableOpacity>
                 </View>

                

             
                
             </ImageBackground>
             <LinearGradient colors={['#FF00B8', '#FF655B', '#FFC700' ]}    style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >

                 <ScrollView>
                 <Text style={styles.text}>Featured StartUps</Text>
                 <Text style={{color: "white", left: 10, marginBottom: 5}}>Invest in the next billion dollar company today</Text>
                 <ScrollView horizontal={true}>

                      <Card style = {styles.card}>

                             <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                             <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                             <Text>   50% Complete</Text>
                             <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                             <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                            
                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.bottomButtonsOne}>
                                 <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.bottomButtonsTwo}>
                                 <Text style={styles.buttonTextTwo}>Learn More</Text>
                             </TouchableOpacity>

                            </View>
                            


                      </Card>

                      <Card style = {styles.card}>

                             <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                             <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                             <Text>   50% Complete</Text>
                             <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                             <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                            
                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.bottomButtonsOne}>
                                 <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.bottomButtonsTwo}>
                                 <Text style={styles.buttonTextTwo}>Learn More</Text>
                             </TouchableOpacity>

                            </View>
                            


                      </Card>

                      <Card style = {styles.card}>

                             <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                             <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                             <Text>   50% Complete</Text>
                             <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                             <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                            
                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.bottomButtonsOne}>
                                 <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.bottomButtonsTwo}>
                                 <Text style={styles.buttonTextTwo}>Learn More</Text>
                             </TouchableOpacity>

                            </View>
                            


                      </Card>

                      <Card style = {styles.card}>

                             <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                             <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                             <Text>   50% Complete</Text>
                             <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                             <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                            
                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.bottomButtonsOne}>
                                 <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.bottomButtonsTwo}>
                                 <Text style={styles.buttonTextTwo}>Learn More</Text>
                             </TouchableOpacity>

                            </View>
                            


                      </Card>

                      <Card style = {styles.card}>

                             <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                             <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                             <Text>   50% Complete</Text>
                             <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                             <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                            
                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.bottomButtonsOne}>
                                 <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.bottomButtonsTwo}>
                                 <Text style={styles.buttonTextTwo}>Learn More</Text>
                             </TouchableOpacity>

                            </View>
                            


                      </Card>


       
                     



                 </ScrollView>

                 <Text style={styles.text}>Upcoming Startups</Text>
                 <Text style={{color: "white", left: 10, marginBottom: 5}}>These visionary companies and disruptors are on their journey to change the world.</Text>

                 <ScrollView horizontal={true}>

                    <Card style = {styles.card}>

                        <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                        <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                        <Text>   50% Complete</Text>
                        <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                        <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                        
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.bottomButtonsOne}>
                            <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomButtonsTwo}>
                            <Text style={styles.buttonTextTwo}>Learn More</Text>
                        </TouchableOpacity>

                        </View>
                        


                    </Card>

                    <Card style = {styles.card}>

                        <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                        <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                        <Text>   50% Complete</Text>
                        <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                        <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                        
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.bottomButtonsOne}>
                            <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomButtonsTwo}>
                            <Text style={styles.buttonTextTwo}>Learn More</Text>
                        </TouchableOpacity>

                        </View>
                        


                    </Card>

                    <Card style = {styles.card}>

                        <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                        <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                        <Text>   50% Complete</Text>
                        <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                        <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                        
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.bottomButtonsOne}>
                            <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomButtonsTwo}>
                            <Text style={styles.buttonTextTwo}>Learn More</Text>
                        </TouchableOpacity>

                        </View>
                        


                    </Card>

                    <Card style = {styles.card}>

                        <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                        <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                        <Text>   50% Complete</Text>
                        <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                        <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                        
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.bottomButtonsOne}>
                            <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomButtonsTwo}>
                            <Text style={styles.buttonTextTwo}>Learn More</Text>
                        </TouchableOpacity>

                        </View>
                        


                    </Card>

                    <Card style = {styles.card}>

                        <Avatar.Image style = {styles.avatar} size={50} source={require('./mangoswap.png')}/>
                        <Card.Title title="Mango Swap" subtitle= "Fund Raise $200,000/$400,000" />
                        <Text>   50% Complete</Text>
                        <ProgressBar  style={styles.progressBar} progress={0.5}  color= {Colors.blue400}></ProgressBar>
                        <Paragraph style={styles.paragraph}>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</Paragraph>
                        
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.bottomButtonsOne}>
                            <Text style={styles.buttonTextOne}>Fund StartUp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomButtonsTwo}>
                            <Text style={styles.buttonTextTwo}>Learn More</Text>
                        </TouchableOpacity>

                        </View>
                        


                    </Card>







                    </ScrollView>


                    <ScrollView horizontal={true}>

                        <Grayscale>


                       
                        <ImageBackground source={require("./pictureOne.png")} style={styles.bottomPictures}>
                             <TouchableOpacity style={styles.pictureText}>
                                 <Text style={styles.bottomText}>Advice a Startup</Text>
                             </TouchableOpacity>

 

                         </ImageBackground>

                         </Grayscale>

                         <Grayscale>


                       
                        <ImageBackground source={require("./pictureTwo.png")} style={styles.bottomPictures}>
                             <TouchableOpacity style={styles.pictureTextTwo}>
                                 <Text style={styles.bottomText}>Join Minority Ventures Cohort</Text>
                             </TouchableOpacity>

 

                         </ImageBackground>

                         </Grayscale>


                         <Grayscale>


                       
                        <ImageBackground source={require("./pictureThree.png")} style={styles.bottomPictures}>
                             <TouchableOpacity style={styles.pictureText}>
                                 <Text style={styles.bottomText}>{textHeader}</Text>
                             </TouchableOpacity>

 

                         </ImageBackground>

                         </Grayscale>


                     
                           



                     </ScrollView>
                     
                    <View style={styles.socialMediaButtons}>

                    <TouchableOpacity style={styles.social}>
                        <Image source={require("./facebookLogo.png")} style={styles.logo}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.social}>
                        <Image source={require("./instagramLogo.png")} style={styles.logo}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.social}>
                        <Image source={require("./twitterLogo.png")} style={styles.logo}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.social}>
                        <Image source={require("./linkedlnLogo.png")} style={styles.logo}/>
                    </TouchableOpacity>

                    </View>
                     



                




                 </ScrollView>


                

            



             </LinearGradient>

        </View>

       


    )


}



const styles = StyleSheet.create(

    {
        container:
        {
            flex: 1,

        },


        socialMediaButtons:
        {
            
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

        logo:
        {
            
            width: 20,
            height: 20
        },

        paragraph:
        {
            paddingHorizontal: 5,
            fontSize: 10

        },

        progressBar:
        {
            marginLeft: 3, 
            marginRight: 3, 
            height: 10, 
            borderRadius: 50, 
            borderWidth: 2, 
            borderColor: "black",
            

        },

        headerImage:
        {
            height: 200,
            width:400
         },

         bottomPictures:
         {
            height: 200,
            width:350,
            left: 10,
            top: 20,
            alignItems: "center",
            marginRight: 10

        },

        bottomText:
        {
          
            fontWeight: "bold",
            fontSize: 15,
            color: "white",
            top: 10

        },

        pictureText:
        {
            alignItems: "center",
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 3,
            top: 83,
            width: 170,
            height: 40
            




        },

        pictureTextTwo:
        {
            alignItems: "center",
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 3,
            top: 83,
            width: 230,
            height: 40
            




        },



         linearGradient: {
            
            flex: 1,
            
           
         
          },

          text:
          {
            color: "white",
            fontWeight: "bold",
            marginTop: 30,
            marginLeft: 10,
            fontSize: 20,
            paddingBottom:5

          },
          card:
          {
              marginLeft: 10,
              height: 270,
              width: 300
          },
          startupButton:
          {
              left: 7,
              
              marginTop: 170,
              
              alignItems: "flex-start",
              width: 144,
              

              

          },

          gradientButton:
          {
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 3,

          },

          

          bottomButtonsOne:
          {
              left: 10,
              top: 7,
              backgroundColor: "#141471",
              width: 100,
              height: 40,
              
              borderRadius: 5,
              alignItems: "center"
              
          },

          bottomButtonsTwo:
          {
            left: 15,
            top: 7,
            backgroundColor: "white",
            width: 100,
            height: 40,
           
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "#141471",
            alignItems: "center"

          },

          buttonTextOne:
          {
            color: "white",
            top: 10
            


          },

          buttonTextTwo:
          {
              color: "#141471",
              top: 10,
            
          }
        

    }

    


)



export default Incubator
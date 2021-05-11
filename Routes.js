import React from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'
import HomePage from './HomePage.js';
import Incubator from './Incubator.js';
import Learn from "./Learn.js";
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native'




const Routes = () =>
    (
    <Router>
        <Scene key = "root">
            <Scene key = "homePage" component = {HomePage} title = "Home" initial = {true}/>
            <Scene key = "incubator" component = {Incubator} title =  "Invest in Minority Startups" back = {true} renderBackButton={()=>backButton()}/>
            <Scene key = "learn" component = {Learn} title = "Learn Page" back={true} renderBackButton={()=>backButton()}/>
     
        </Scene>
    </Router>
)


const backButton = ()=>
(
    <TouchableOpacity onPress={()=> {Actions.pop()}}>
      <Image source={require("./minorityLogo.png")} style= {styles.logo}/>
    </TouchableOpacity>

);


const styles = StyleSheet.create(

    {
        logo:
        {
            height: 30,
            width: 30,
            marginLeft: 20,
            marginBottom: 10

        },
    }
)

export default Routes;
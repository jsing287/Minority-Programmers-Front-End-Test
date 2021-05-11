import React, {Component} from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

import {Actions} from 'react-native-router-flux';


class HomePage extends React.Component{


    render()
    {
        return(

            <View>
                <TouchableOpacity onPress={goToIncubator}>
                    <Text>Incubator</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={goToLearn}>
                    <Text>Learn</Text>

                </TouchableOpacity>
            </View>
        )
    }




}

const goToIncubator = () =>
{
    Actions.incubator();

}

const goToLearn = () =>
{
    Actions.learn();

}

export default HomePage

const styles = StyleSheet.create(

    {
        






    }


)
import React from 'react'
import {Text, View, SafeAreaView, Platform, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native'
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <SafeAreaView style = {styles.droidSafeArea}/>

                <ImageBackground source = {require('../assets 2/bg_image.png')} style = {styles.bgImage}/>

                <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>ISS Tracker App</Text>
                </View>

                <TouchableOpacity onPress = {()=>{
                    this.props.navigation.navigate('IssLocation')
                }} style = {styles.rootCard}>
                    <Text style = {styles.rootText}>ISS Location</Text>
                    <Image source = {require('../assets 2/iss_icon.png')} style = {styles.iconImage}>   
                    </Image>
                    <Text style = {styles.knowMore}> Know More --> </Text>
                    <Text style = {styles.bgDigit}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>{
                    this.props.navigation.navigate('Meteors')
                }} style = {styles.rootCard}>
                    <Text style = {styles.rootText}>Meteors</Text>
                    <Image source = {require('../assets 2/meteor_icon.png')} style = {styles.iconImage}>
                    </Image>
                    <Text style = {styles.knowMore}> Know More --> </Text>
                    <Text style = {styles.bgDigit}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>{
                    this.props.navigation.navigate('Update')
                }} style = {styles.rootCard}>
                    <Text style = {styles.rootText}>Updates</Text>
                    <Image source = {require('../assets 2/rocket_icon.png')} style = {styles.iconImage}>
                    </Image>
                    <Text style = {styles.knowMore}> Know More --> </Text>
                    <Text style = {styles.bgDigit}>3</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },

    titleText:{
        fontSize: 40,
        fontWeight: "bold", 
        color: 'white'
    },
    
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    }, 

    rootCard: {
        flex: 0.25, 
        marginLeft: 50, 
        marginRight: 50, 
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 30,
    }, 

    rootText:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30,
    },

    bgImage:{
        flex:1, 
        resizeMode:'cover'
    },

    iconImage:{
        position:'absolute',
        height: 200, 
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    }, 
    
    knowMore:{
        paddingLeft: 30, 
        color:'red',
        fontSize: 15,
    },

    bgDigit:{
        position:'absolute',
        color: 'lightgray',
        fontSize:150,
        right: 20,
        bottom: -15,
        zIndex: -1
    }
})
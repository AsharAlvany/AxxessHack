import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Colors from "../constants/Colors";
import {Svg, SvgUri, Path, Circle} from 'react-native-svg';
import Open1 from '../components/Open1.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ChevLeft from '../components/ChevLeft.js';
import Star from '../components/Star.js';
import Dot from '../components/Dot.js';
//import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Opening1 () {
    return (
        <View style={styles.screen}>
            <ImageBackground style={styles.screen} source={require('../images/openback.png')}>
            {/* <SafeAreaView style={styles.SafeAreaView}> */}
                <View style={styles.header}>
                    <Text style={styles.heading}>Welcome to Meditrina!</Text>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require("../images/logo.png")}/>
                </View>
                <View style={styles.header}>
                    <Text style={styles.caption}>One place to track all your medicinal needs </Text>
                </View>
                <View style={styles.iconBox}>
                    <View style={styles.right}>
                    <ChevLeft strokeWidth={3}/>
                    </View>
                    <View style={styles.dot}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="10" cy="10" r="10" fill={Colors.yellow}/>
                        </Svg>
                    </View>
                    <View style={styles.dot}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="10" cy="10" r="10" fill={Colors.lightBlue}/>
                        </Svg>
                    </View>
                    <View style={styles.dot}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="10" cy="10" r="10" fill={Colors.lightBlue}/>
                        </Svg>
                    </View>
                    <View style={styles.left}>
                    <ChevLeft strokeWidth={3}/>
                    </View>
                </View>
            {/* </SafeAreaView>/ */}
            </ImageBackground>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.darkBlue,
    
        //borderWidth: 5,
        //borderColor: 'red'
    },
    SafeAreaView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '80%'
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        color: Colors.cream
    },
    imageBox: {
        marginTop: '10%',
        marginBottom: '15%'

    },
    caption: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.cream
    },
    iconBox:
    {
        flexDirection: 'row',
        width: '60%',
        marginTop: '10%'
    },
    right:
    {
        transform: [{rotate: '180deg'}],
        marginRight: 35
    },
    left:
    {
        marginLeft: 35
    },
    dot:
    {
        marginLeft: 15,
        marginRight: 15,
    }

});
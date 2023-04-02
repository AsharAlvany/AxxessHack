import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors.js";
import {Svg, SvgUri, Path, Circle} from 'react-native-svg';
import Open1 from '../components/Open1.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ChevLeft from '../components/ChevLeft.js';
import Star from '../components/Star.js';
import Dot from '../components/Dot.js';
//import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function MyPills () {
    return (
        <View style={styles.screen}>
            <ImageBackground style={styles.screen} source={require('../images/background.png')}>
            <StatusBar style={"dark-content"} />
            <SafeAreaView edges={['right', 'left', 'top']} style={styles.SafeAreaView}>
                <View style={styles.header}>
                    <Text style={styles.heading}>My Pills</Text>
                    <TouchableOpacity>
                        <View style={styles.add}>
                            <Text styles={styles.addText}>+</Text> 
                        </View>
                    </TouchableOpacity> 
                </View>
            </SafeAreaView>
            </ImageBackground>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        //alignItems: 'center',
        //backgroundColor: Colors.darkBlue,
    
        //borderWidth: 5,
        //borderColor: 'red'
    },
    SafeAreaView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        borderWidth: 5,
        borderColor: 'red',
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    heading:
    {
        fontWeight: '800',
        fontSize: 35,
        color: Colors.darkBlue
    },
    add:
    {
        //borderWidth: 5,
        backgroundColor: Colors.darkBlue,
        borderRadius: 5,
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    addText:
    {
        fontSize: '50',
        fontWeight: '800',
    }
    

});
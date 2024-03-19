import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

export default function OnboardingItem({ item }) {

    let [ fontsLoaded, fontError ] = useFonts(( Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black ));

    useEffect(() => {

        async function loadResourcesAndDataAsync() {

            try { SplashScreen.preventAutoHideAsync(); } 
            catch (e) { console.warn(e); } 
            finally { await SplashScreen.hideAsync(); }

        }

        if ( !fontsLoaded && !fontError ) { loadResourcesAndDataAsync(); }

    }, [fontsLoaded]);

    const {width} = useWindowDimensions(); 

    return(
        <View style={[styles.container, {width}]}>
            <Image source={item.imagem} style={[styles.image, {width, resizeMode: 'contain' }]}/>
            <View style={{ flex: 0.3}}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'    
    },
    image:{
        flex: 0.7,
        justifyContent: 'center'
    }, 
    titulo:{
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 28,
        marginBottom: 10,
        color: '#E46216',
        textAlign: 'center'
    }, 
    descricao:{
        fontFamily: 'Montserrat_400Regular',
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 64
    }
});

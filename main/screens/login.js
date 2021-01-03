import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#eaeaea', alignItems: 'center' }}>

        <View style={{backgroundColor: '#00bcd4', width: width, borderRadius: 0,padding: 10, alignItems: 'center' }}>
        <Text style={{color: 'red', marginTop: 20, marginBottom: 15,paddingLeft: 7,paddingRight: 7, textAlign: 'center', fontWeight: 'bold', alignItems: 'center' }}>❕</Text>
        </View>

        <Text style={{color: 'red', marginTop: 20, marginBottom: 15,paddingLeft: 7,paddingRight: 7, textAlign: 'center', fontWeight: 'bold', alignItems: 'center' }}>Şikayet bildirimi yapabilmek için giriş yapın veya kayıt olun!</Text>


        <TextInput placeholder='E-posta veya kullanıcı adı'
            style={{ width: width - 20, backgroundColor: 'white', paddingLeft:10 , marginTop: 10, marginBottom: 10, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: 'lightgray', color: '#000' }}    
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            placeholderTextColor='gray'></TextInput>

            <TextInput placeholder='Şifre'
            style={{ width: width - 20, backgroundColor: 'white', paddingLeft:10 , paddingVertical: 20, borderBottomWidth: 0.5, borderColor: 'lightgray', color: '#000' }}    
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            placeholderTextColor='gray'></TextInput>
    
            <TouchableOpacity>



            <View style={{ alignItems: 'center', width: width - 20, padding: 15, backgroundColor: '#9c27b0', marginVertical: 10 }}>
                <Text style={{ fontSize: 12, color: '#fff' }}>Giriş YAP!</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{ alignItems: 'center', width: width - 20, padding: 15, backgroundColor: '#009688', marginVertical: 0 }}>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kayıt OL!</Text>
              </View>
            </TouchableOpacity>
            


    </View>
   
 
   
    
    
    
  );
}



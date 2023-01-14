import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            
            <View style= {styles.container}>

            <SafeAreaView style={styles.droidSafeArea}/>
            
            <View style={styles.appTitle}>
            
            <View style= {styles.appIcon}>
            
            <Image
            
            source={require ("../assets/logo.png")}
            
            style={styles.iconImage}
            
            ></Image>
            
            </View>
            
            <View style={styles.applitleTextContainer}>
            
            <Text style={styles.applitleText}>New Post</Text>
            
            </View>
</View>
         
            
            <View style={styles.fieldsContainer}>
            
            <ScrollView
            
            <Image
            
            source={preview_images[this.state.previewImage]}
            
           
           style={styles-previewimage}></Image>
            </View>
            </View>
        )
    }
}

View style={f height:

    REValue (this.state dropdownHeight) }]>
    
    // code for dropdown picker
    
    «DropDownPicker
    
    items=! [
    
    { label: "Image 1", value:
    
    "image_1" ],
    
    { label: "Image 2", value: "image_2" 1,
    
    { label: "Image 3", value: "image_3" ],
    
    { label: "Image 4", , value: "image_4" J,
    
    { label: "Image 5", value: "image_ 5" ), { label: "Image 6", value:
    
    "image_6" ],
    
    { label: "Image 7", value: "image 7" 1
    
    ]1
    
    defaultValue=[this.state-previewImage]
    
    containerStyle=(f
    
    height: 40,
    
    borderRadius: 20,
    
    marginBottom: 10
    
    onOpen= { () =>
    
    this.getState (f dropdownHeight: 170 ]);
    
    }}
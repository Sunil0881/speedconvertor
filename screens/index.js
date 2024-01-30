import React from 'react';
import {  Text,TouchableOpacity, Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';


const  StyledView = styled(View);
const StyledText = styled(Text);





const Main = () => {

    const navigation = useNavigation();

    const navigateToweight = () => {
        navigation.navigate('Weight calculator');
  
    }

    const navigateTospeed = () => {
        navigation.navigate('Speed calculator');
  
    }

    return (
        <StyledView>
            <StyledText className='text-center text-2xl pb-16'>Choose your option</StyledText>
              <TouchableOpacity
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={navigateToweight}>
            <StyledText style={{ color: 'white', fontSize: 18 }}>weight Conversion</StyledText>
            </TouchableOpacity>     
            <TouchableOpacity
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={navigateTospeed}>
            <StyledText style={{ color: 'white', fontSize: 18 }}>Speed Conversion</StyledText>
            </TouchableOpacity>      
        </StyledView>
     );
}
 
export default Main;

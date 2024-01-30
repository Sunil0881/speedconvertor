import React, {useState, useEffect} from 'react';

import {  Text,TouchableOpacity, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


import { styled } from 'nativewind';



const Final = ({ route }) => {

    const {result} = route.params;

    const StyledView = styled(View);
    const StyledText = styled(Text);
    

    return ( 
        <StyledView>
            <StyledText>the result is :</StyledText>
            <StyledText>{result}</StyledText>
        </StyledView>
     );
}
 
export default Final;


   

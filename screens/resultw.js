import {  Text,TouchableOpacity, TextInput, View } from 'react-native';
import { styled } from 'nativewind';


const Finalw = ({ route }) => {

    const {resultw} = route.params;
    const StyledView = styled(View);
    const StyledText = styled(Text);
    
    return ( 
        <StyledView className='bg-orange-100 h-screen '>
            <StyledText className='text-3xl text-center my-20'>The result is :</StyledText>
            <StyledText className='text-xl text-center text-green-600 font-bold'>{resultw}</StyledText>
        </StyledView>
     );
}
 
export default Finalw;


   

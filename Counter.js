import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { tambahCounter, kurangCounter } from './redux/action'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    return(  
        <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <TouchableOpacity style={{backgroundColor:'grey', paddingBottom:5, paddingLeft:25, paddingTop:5, paddingRight:25}} onPress={()=>dispatch(kurangCounter(counter))}> 
                <Text style={{fontSize:50}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:50, marginLeft:20, marginRight:20}}>{counter}</Text>
            <TouchableOpacity style={{backgroundColor:'grey', paddingBottom:5, paddingLeft:20, paddingTop:5, paddingRight:20}} onPress={()=>dispatch(tambahCounter(counter))}>
                <Text style={{fontSize:50}}>+</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Counter
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import AppText from './AppText'

interface PickerItemProp{
    label: string;
    onpress: () => void;
}

const PickerItem = ({label, onpress} : PickerItemProp) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.text}>
        <AppText>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text:{
        padding:20,

    }
})

export default PickerItem

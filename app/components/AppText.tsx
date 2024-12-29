import React, { ReactNode } from 'react'
import { Text, StyleSheet, Platform, StyleProp, TextStyle } from 'react-native'

import defaultStyles from "../config/styles";

interface AppTextProp {
    children: ReactNode;
    style?:StyleProp<TextStyle>
}

const AppText = ({children, style} : AppTextProp) => {
  return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
   
})

export default AppText

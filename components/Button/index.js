import React, { Component, PropTypes } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './styles'

const Button = props => {
  let buttonStyles = []
  let textStyles = []
  buttonStyles = buttonStyles.concat(styles.button, props.buttonStyle)
  textStyles = textStyles.concat(styles.text, props.textStyle)
  if (props.disabled) {
    buttonStyles = buttonStyles.concat([styles.buttonDisabled, props.buttonDisabled])
    textStyles = textStyles.concat([styles.textDisabled, props.textDisabled])
  }

  return (
    <View style={buttonStyles} isHandlerPress={true} onPress={props.callback}>
      {props.children}
      <Text style={textStyles}>{props.text}</Text>
    </View>
  )
}

export default Button

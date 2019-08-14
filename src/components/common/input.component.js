/**
 * @flow
 */
import React from 'react';
import { StyleSheet, View, TextInput, ImageStyle, ViewStyle } from 'react-native';

export type InputProps = {
  iconColor: string;
  icon: (ImageStyle) => React$Element;
  style: ViewStyle;
  onChangeText: (string) => void;
value: string;
};

const InputComponent = ({ onChangeText, value = null, icon, iconColor = 'red', style = {} }: InputProps): React$Node => (
  <View style={[styles.input__container, style]}>
    <View style={styles.input__icon_wrapper}>
      {icon([styles.input__icon, { tintColor: iconColor }])}
    </View>
    <View style={styles.input__field_wrapper}>
      <TextInput onChangeText={onChangeText} value={value} />
    </View>

  </View>
)
export const Input = InputComponent;
export default Input;

const styles = StyleSheet.create({
  input__container: {
    flexDirection: 'row',
    backgroundColor: '#CCC',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input__icon_wrapper: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input__icon: {
    width: 24,
    height: 24,
  },
  input__field_wrapper: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  input__field: {
    height: 36,
  },

});
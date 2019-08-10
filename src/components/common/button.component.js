/**
 * @flow
 */
import React from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  onPress: ()=> void;
  text: string;
  children: React$Element;
};

class ButtonComponent extends React.Component<ButtonProps> {

  render(): void {
    const { onPress, text, children} = this.props;
    return (
      <TouchableOpacity style={styles.button}
        onPress={onPress}>
          <Text style={styles.button__text}>{text||children}</Text>
        </TouchableOpacity>
    )
  }
}
export const Button = ButtonComponent;
export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    paddingHorizontal: 15,
  },
  button__text: {
    fontSize: 18,
    fontWeight: '100',
  }
});
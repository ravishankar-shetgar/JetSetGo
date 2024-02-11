import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import COLORS from '../../constants/colors';
import styles from './Input.styles';

interface InputProps {
  value: string;
  setInputValue: (value: string) => void;
  /** show icon on right side of input */
  icon?: JSX.Element;
  placeholder: string;
  /** should return true if input is valid */
  inputValidator?: (inputText: string) => boolean;
}

/**  */
const Input: React.FC<InputProps> = props => {
  const {value, setInputValue, placeholder, icon, inputValidator} = props;

  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  const onChangeText = (inputText: string) => {
    setInputValue(inputText);

    if (inputValidator) {
      if (inputText.length === 0) {
        setIsError(false);
        return;
      }

      const isValid = inputValidator(inputText);

      if (isValid) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        isActive ? {borderColor: COLORS.blue} : {},
        isError ? {borderColor: COLORS.errorRed} : {},
      ]}>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey300}
      />
      {icon && <View style={styles.iconView}>{icon}</View>}
    </View>
  );
};

export default React.memo(Input);

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextInputWithValidation = ({
  label,
  placeholder,
  maxLength,
  onValueChange,
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText); // Update the state with the new text

    if (onValueChange) {
      onValueChange(newText); // Call the onValueChange callback if provided
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.labeli} numberOfLines={1} ellipsizeMode="tail">
          {label}
        </Text>
        <TextInput
          value={text}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          onBlur={() => setIsInputEmpty(text.trim() === "")}
          style={[styles.textInput, isInputEmpty && styles.errorInput]}
          maxLength={maxLength}
        />
        {isInputEmpty && (
          <Text style={styles.errorText}>This field is required</Text>
        )}
        <Text>
          {text.length}/{maxLength} characters
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  requiredStar: {
    position: "absolute",
    top: -4,
    left: 30,
    color: "red", // or any color you prefer
    fontSize: 18,
  },
  labeli: {
    flex: 2,
    fontWeight: "bold",
    width: 150,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    paddingLeft: 30, // Add some space for the star icon
    marginTop: 10,
  },
  errorInput: {
    borderColor: "red", // Apply border color to indicate error
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
export default TextInputWithValidation;

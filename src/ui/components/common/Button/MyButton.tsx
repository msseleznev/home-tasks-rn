import {Pressable, StyleSheet, Text} from "react-native";
import React from "react";


type ButtonPropsType = {
    onPress: () => void
}

export const MyButton: React.FC<ButtonPropsType> = ({onPress}) => {


    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.title}>Добавить</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3785CC",
        height: 55,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff"

    }


});

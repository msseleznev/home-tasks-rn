import {Pressable, StyleSheet, View} from "react-native";
import React from "react";
import {SvgDone} from "../../../../assets/svg/SvgDone";
import {SvgUndone} from "../../../../assets/svg/SvgUndone";


type CheckBoxPropsType = {
    onPress: () => void
    isChecked: boolean
}

export const CheckBox: React.FC<CheckBoxPropsType> = ({onPress, isChecked}) => {


    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                {isChecked ? <SvgDone/> : <SvgUndone/>}
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    vector: {
        position: "absolute",
        left: "32.29%",
        right: "32.29%",
        top: "38.21%",
        bottom: "38.21%",
        opacity: 0.34,
        borderWidth: 1.5,
    }
});

import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {width} from "../constants/consttants";
import React, {useState} from "react";
import {TaskType} from "../../types/types";
import {CheckBox} from "./CheckBox/CheckBox";
import {SvgBin} from "../../assets/svg/SvgBin";

type TaskItemPropsType = {
    homeTask: TaskType
}

export const TaskItem: React.FC<TaskItemPropsType> = ({homeTask,}) => {
    const [check, setCheck] = useState(false)

    const finalStyle = !check ? styles.body : styles.isDoneBody
    return (
        <View style={styles.container}>
            <CheckBox onPress={() => setCheck(!check)} isChecked={check}/>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{homeTask.title}</Text>
                <Text style={finalStyle}>{homeTask.body}</Text>
            </View>
            <TouchableOpacity style={styles.bin}>
                <SvgBin/>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskContainer: {
        padding: 10,
        width: width - 120,
    },
    bin: {
        display: "flex",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        width: 37,
        height: 37,
        borderRadius: 10,
        backgroundColor: "#F8F8F8",
    },
    title: {
        fontWeight: "500",
        fontSize: 17,
        color: "#3B3B3B",
    },
    body: {
        fontWeight: "400",
        fontSize: 13,
        color: "#3B3B3B",
    },
    isDoneBody: {
        fontWeight: "400",
        fontSize: 13,
        color: "#6F767E",
        textDecorationLine: "line-through",
    },
});

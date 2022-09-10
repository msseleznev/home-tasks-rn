import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {width} from "../../constants/constants";
import React from "react";
import {TaskType} from "../../../types/types";
import {CheckBox} from "../common/CheckBox/CheckBox";
import {SvgBin} from "../../../assets/svg/SvgBin";

type TaskItemPropsType = {
    homeTask: TaskType
    changeTaskStatus: (id: number, status: boolean) => void
    removeTask: (id: number) => void
}

export const TaskItem: React.FC<TaskItemPropsType> = (
    {
        homeTask: {id, body, title, status},
        changeTaskStatus,
        removeTask
    }) => {
    const onChangeHandler = () => {
        changeTaskStatus(id, !status)
    }
    const onPressHandler = () => {
        removeTask(id)
    }

    const finalStyle = !status ? styles.body : styles.isDoneBody
    return (
        <View style={styles.container}>
            <CheckBox onPress={onChangeHandler} isChecked={status}/>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={finalStyle}>{body}</Text>
            </View>
            <TouchableOpacity style={styles.bin}
                              onPress={onPressHandler}>
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

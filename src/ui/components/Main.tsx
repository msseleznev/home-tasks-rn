import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from "../constants/consttants";
import {TasksList} from "./TasksList";
import {MyButton} from "./Button/MyButton";
import {useState} from "react";

export const Main = () => {
    const [modal, setModal] = useState(false)
    const isModalHandler = () => {
        setModal(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.titleButton}>Показать все задания</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tasksLists}>
                <TasksList/>
                <MyButton onPress={isModalHandler}/>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {},
    filterContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height / 5,
        borderBottomWidth: 1,
        borderColor: "#EEF8FD",
    },
    filterButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#3785CC",
        width: width - 40,
        borderRadius: 10,
        borderWidth: 2,
    },
    titleButton: {
        color: "#3785CC",
        marginVertical: 8,
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
    },
    tasksLists: {
        paddingHorizontal: 17
    }

});

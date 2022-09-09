import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import React from "react";
import {useAppSelector} from "../../hooks/hooks";
import {TaskType} from "../../types/types";
import {TaskItem} from "./TaskItem";

export const TasksList = () => {
    const homeTasks = useAppSelector(state => state.homeTasksSlice.homeTasks)

    const render: ListRenderItem<TaskType> = ({item, }) => {

        return (
            <TaskItem homeTask={item}/>
        )
    }
    return (
        <View>
            <FlatList data={homeTasks}
                      style={styles.container}
                      renderItem={render}
                      keyExtractor={item => item.id + ''}
                      showsVerticalScrollIndicator={false}
                      ItemSeparatorComponent={ItemDivider}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30
    },
});

const ItemDivider = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#EEF8FD",
            }}
        />
    );
}

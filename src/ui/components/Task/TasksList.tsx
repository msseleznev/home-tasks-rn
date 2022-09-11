import {FlatList, ListRenderItem, Modal, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {TaskType} from "../../../types/types";
import {TaskItem} from "./TaskItem";
import {changeStatus, removeTask} from "../../../store/homeTasksSlice";
import {MyButton} from "../common/Button/MyButton";
import {CreateTask} from "../CreateTask/CreateTask";
import {ItemDivider} from "../common/ItemDivider/ItemDivider";
import {Filter} from "../Filter/Filter";


export const TasksList = () => {

    const {homeTasks, filter} = useAppSelector(state => state.homeTasksSlice)
    const dispatch = useAppDispatch()

    let filteredTasks = homeTasks
    if (filter === "Выполненные") {
        filteredTasks = homeTasks.filter(t => t.isDone)
    }
    if (filter === "Не выполненные") {
        filteredTasks = homeTasks.filter(t => !t.isDone)
    }

    const [modalVisible, setModalVisible] = useState(false);
    const isModalHandler = () => {
        setModalVisible(true)
    }
    const removeTaskHandler = (id: number) => {
        dispatch(removeTask({id}))
    }
    const changeStatusHandler = (id: number, isDone: boolean) => {
        dispatch(changeStatus({id, isDone}))
    }

    const render: ListRenderItem<TaskType> = ({item,}) => {
        return (
            <TaskItem homeTask={item}
                      removeTask={removeTaskHandler}
                      changeTaskStatus={changeStatusHandler}/>
        )
    }
    return (
        <View>
            <FlatList data={filteredTasks}
                      renderItem={render}
                      keyExtractor={item => item.id + ""}
                      showsVerticalScrollIndicator={false}
                      stickyHeaderIndices={[0]}
                      ItemSeparatorComponent={ItemDivider}
                      ListHeaderComponent={Filter}
                      ListFooterComponent={MyButton({onPress: isModalHandler})}
                      ListFooterComponentStyle={styles.footer}/>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <CreateTask setModalVisible={setModalVisible}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30
    },
    footer: {
        marginVertical: 30
    }
});



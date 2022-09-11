import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useAppDispatch} from "../../../hooks/hooks";
import {createTask} from "../../../store/homeTasksSlice";

type CreateTaskPropsType = {
    setModalVisible: (value: boolean) => void
}
export const CreateTask: React.FC<CreateTaskPropsType> = ({setModalVisible}) => {

    const dispatch = useAppDispatch()

    const [titleValue, setTitleValue] = useState('')
    const [bodyValue, setBodyValue] = useState('')

    const onSaveTask = () => {
        if (titleValue && bodyValue !== '') {
            dispatch(createTask({
                id: Date.now(),
                title: titleValue,
                body: bodyValue,
                isDone: false
            }))
            setModalVisible(false)
        }
    }
    const onCancel = () => {
        setModalVisible(false)
    }


    return (

        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.modalTitle}>Добавить предмет</Text>
                        <Text style={styles.modalBody}>Укажите заголовок и
                            задание</Text>
                    </View>
                    <TextInput style={styles.input}
                               autoFocus
                               placeholder={'Заголовок'}
                               onChangeText={text => {
                                   setTitleValue(text)
                               }}
                               value={titleValue}/>
                    <TextInput style={styles.input}
                               placeholder={'Задание'}
                               onChangeText={text => {
                                   setBodyValue(text)
                               }}
                               value={bodyValue}/>
                </View>
                <View style={styles.btnContainer}>
                    <Pressable style={[styles.button, styles.separator]}
                               onPress={onCancel}>
                        <Text
                            style={[styles.btnStyle, styles.btnCancel]}>Отмена</Text>
                    </Pressable>
                    <Pressable style={styles.button}
                               onPress={onSaveTask}>
                        <Text
                            style={[styles.btnStyle, styles.btnSave]}>Сохранить</Text>
                    </Pressable>
                </View>
            </View>
        </View>


    )
        ;
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(44,41,41,0.2)"
    },
    modalView: {
        backgroundColor: "rgba(249, 249, 249, 0.94)",
        borderRadius: 14,
        minHeight: 220,
        width: 270,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#FFFFFF"
    },
    btnStyle: {
        fontWeight: "500",
        fontSize: 17,
        textAlign: "center"
    },
    btnSave: {
        color: "#3784CC"
    },
    btnCancel: {
        color: "#C3C3C5"
    },
    modalTitle: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 17,
        color: "#3B3B3B"
    },
    modalBody: {
        textAlign: "center",
        fontWeight: "400",
        fontSize: 13,
        color: "#737A82",
        marginTop: 4,
    },
    button: {
        width: "50%",
        height: 50,
        display: "flex",
        justifyContent: "center"
    },
    separator: {
        borderRightWidth: 1,
        borderColor: "#FFFFFF"
    },
    input: {
        height: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        marginTop: 20,
        width: "100%",
        borderWidth: 1,
        borderColor: "#d6d6dc",
        padding: 10,
    },

})



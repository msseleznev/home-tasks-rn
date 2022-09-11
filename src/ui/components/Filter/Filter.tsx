import {
    FlatList,
    ListRenderItem,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import {height, width} from "../../constants/constants";
import React, {useState} from "react";
import {ItemDivider} from "../common/ItemDivider/ItemDivider";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {FilterOptionsType} from "../../../types/types";
import {changeFilter} from "../../../store/homeTasksSlice";


export const Filter = () => {
    const filter =useAppSelector(state => state.homeTasksSlice.filter)
    const dispatch = useAppDispatch()

    const sortOptions: FilterOptionsType[] = ['Показать все задания', 'Выполненные', 'Не выполненные']
    const [modalVisible, setModalVisible] = useState(false);

    const setSort = (item: FilterOptionsType) => {
        dispatch(changeFilter(item))
        setModalVisible(false)
    }
    const isModalHandler = () => {
        setModalVisible(true)
    }

    const render: ListRenderItem<FilterOptionsType> = ({item,}) => {
        const finalStyle = item === filter ? styles.active : styles.inActive
        return (
            <Pressable style={{height: 54, display: 'flex', justifyContent: 'center'}}
                       onPress={() => setSort(item)}>
                <Text style={[finalStyle, styles.text]}>{item}</Text>
            </Pressable>
        )
    }
    return (
        <View style={styles.filterContainer}>
            <Pressable style={styles.filterButton} onPress={isModalHandler}>
                <Text style={styles.titleButton}>{filter}</Text>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FlatList data={sortOptions}
                                  style={{width: "100%"}}
                                  renderItem={render}
                                  ItemSeparatorComponent={() => ItemDivider({color: 'white'})}/>
                    </View>

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height / 5,
        borderBottomWidth: 1,
        borderColor: "#EEF8FD",
        marginBottom: 20,
        backgroundColor: "#ffffff"
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(44,41,41,0.2)"
    },
    modalView: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(249, 249, 249, 0.94)",
        borderRadius: 14,
        height: 165,
        maxWidth: 350,
        width: width - 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
    },
    active: {
        color: "#3785CC"
    },
    inActive: {
        color: "#737A82",
    }

})

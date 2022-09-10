import {Pressable, StyleSheet, Text, View} from "react-native";
import {height, width} from "../../constants/constants";

export const Sort = () => {
    return (
        <View style={styles.filterContainer}>
            <Pressable style={styles.filterButton}>
                <Text style={styles.titleButton}>Показать все задания</Text>
            </Pressable>
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
})

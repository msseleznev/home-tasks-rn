import {StyleSheet, View} from 'react-native';
import {TasksList} from "./Task/TasksList";


export const Main = () => {
    return (
        <View style={styles.container}>
            <TasksList/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17
    },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Main} from "./src/ui/components/Main";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main/>
          <StatusBar style="auto" />
        </View>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

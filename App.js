import React from "react";
import Header from "./src/components/Header/Header";
import CryptoList from "./src/components/CryptoList/CryptoList";
import { Provider } from "react-redux";
import Store from "./src/Store";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <Provider store={Store}>
      <LinearGradient
        colors={["#4facfe", "#00f2fe"]}
        style={styles.linearGradient}
        start={[0, 0]}
        end={[0.9, 0.4]}
      >
        <Header />
        <CryptoList />
      </LinearGradient>
    </Provider>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});

export default App;

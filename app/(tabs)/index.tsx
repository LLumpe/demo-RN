import {
  Image,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { ModalForm } from "@/components/ModalForm";

export default function HomeScreen() {
  /* 弹出modalform */
  const handlePress = () => {
    setModalVisible(true);
  };

  /* 弹出框是否显示 */
  const [modalVisible, setModalVisible] = useState(false);

  /**
   * @param
   * @return {}
   */
  const handleModalClose = () => {
    setModalVisible(false);
  };

  /**
   * @param
   * @return {}
   */
  const handleModalSubmit = (value: any) => {
    console.log("value", value);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Get started !</ThemedText>
        <ThemedText type="defaultSemiBold">
          Click the button below to view the pop-up box
        </ThemedText>
        <TouchableOpacity
          style={styles.modalButton}
          onPressIn={handlePress} // 按钮按下时触发
          activeOpacity={0.7} // 点击时透明度效果
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </ThemedView>

      <View>
        {/* 使用封装的 ModalForm 组件 */}
        <ModalForm
          visible={modalVisible}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          placeholder="add amount..."
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  modalButton: {
    marginTop: 20,
    backgroundColor: "#7FE0FE",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
});

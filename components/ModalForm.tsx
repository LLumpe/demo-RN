import React, { useState } from "react";
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

// 封装的 ModalForm 组件
export const ModalForm = ({ visible, onClose, onSubmit, placeholder }) => {
  // 输入框可控值
  const [inputValue, setInputValue] = useState("");

  // 存储百分比数据
  const percentages = [
    { percentage: 10, value: 1.59 },
    { percentage: 15, value: 2.38 },
    { percentage: 20, value: 3.18 },
    { percentage: 25, value: 3.98 },
  ];

  const [selectKey, setSelectKey] = useState(0); // 当前选择tips

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleAddPress = () => {
    alert(inputValue);
    onSubmit(inputValue); // 提交输入的内容
    setInputValue(""); // 清空输入框
  };

  const handleCancelPress = () => {
    onClose(); // 关闭 Modal
    setInputValue(""); // 清空输入框
  };

  const handleSelect = (index) => {
    setSelectKey(index); // 更新选中的项
  };

  const renderPercentageItem = (item, index) => {
    const isSelected = selectKey === index;
    return (
      <TouchableOpacity
        key={item.percentage}
        onPress={() => handleSelect(index)}
      >
        <View
          style={[
            styles.modalChooseItem,
            isSelected && styles.modalChooseItemActive,
          ]}
        >
          <Text
            style={[
              styles.modalChooseItemText,
              isSelected && styles.modalChooseItemWhiteText,
            ]}
          >
            {item.percentage}%
          </Text>
          <Text
            style={[
              styles.modalChooseItemValue,
              isSelected && styles.modalChooseItemWhiteValue,
            ]}
          >
            $ {item.value}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Tips</Text>

          <View style={styles.modalInputContainer}>
            <Text style={styles.modalInputText}>$</Text>
            {/* 输入框 */}
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              value={inputValue}
              keyboardType="numeric"
              onChangeText={handleInputChange}
              clearButtonMode="while-editing" // 在编辑时显示清除按钮
              selectionColor="#F8CD5A" // 设置光标颜色
            />
          </View>

          <View style={styles.modalChoose}>
            {percentages.map((item, index) =>
              renderPercentageItem(item, index)
            )}
          </View>

          <View style={styles.buttonContainer}>
            {/* Cancel 按钮 */}
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={handleCancelPress}
              activeOpacity={0.7}
            >
              <Text style={styles.CancelText}>Cancel</Text>
            </TouchableOpacity>
            {/* Add 按钮 */}
            <TouchableOpacity
              style={styles.modalAdd}
              onPress={handleAddPress}
              activeOpacity={0.7}
            >
              <Text style={styles.AddText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明背景
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center", // 垂直居中元素
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalInputText: {
    position: "absolute",
    left: -20,
    height: "100%",
    lineHeight: 40,
    fontSize: 20,
    fontWeight: 600,
    color: "gray",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "ghostwhite",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  modalChoose: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  modalChooseItem: {
    padding: 5,
    backgroundColor: "ghostwhite",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  modalChooseItemActive: {
    backgroundColor: "#F8CD5A",
  },
  modalChooseItemText: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
  modalChooseItemWhiteText: {
    color: "#fff",
  },
  modalChooseItemValue: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  modalChooseItemWhiteValue: {
    color: "#fff",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalCancel: {
    width: 100,
    marginTop: 20,
    paddingVertical: 16,
    backgroundColor: "ghostwhite",
    borderRadius: 40,
  },
  modalAdd: {
    width: 100,
    marginTop: 20,
    paddingVertical: 16,
    backgroundColor: "#F8CD5A",
    borderRadius: 40,
  },
  CancelText: {
    color: "#E2E2E2",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
  AddText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default ModalForm;

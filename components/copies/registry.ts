import ChatGPT from "./chatgpt";
import ExpoBattery from "./expo-battery";
import RayCast from "./raycast";
import rnlearn from "./rnlearn";

export const copies = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "GPT登录界面",
    thumbnail: require("../../assets/thumbs/chatgpt.png"),
    Component: ChatGPT,
  },
  {
    id: "raycast",
    name: "RayCast",
    description: "RayCast深色登录页",
    thumbnail: require("../../assets/thumbs/raycast.png"),
    Component: RayCast,
  },
  {
    id: "expo-battery",
    name: "expo-battery",
    description: "Expo 电池模块最小示例",
    thumbnail: null,
    Component: ExpoBattery,
  },
  {
    id: "rnlearn",
    name: "todo",
    description: "rn-课程学习页",
    thumbnail: null,
    Component: rnlearn,
  },
];

export function getcopybyid(id: string) {
  return copies.find((c) => c.id === id);
}

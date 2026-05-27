import ChatGPT from "./chatgpt";
import RayCast from "./raycast";
import rnlearn from "./rnlearn";
import BatteryInfo from "./battery-info";

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
    id: "rnlearn",
    name: "rnlearn",
    description: "rn-课程学习页",
    thumbnail: null,
    Component: rnlearn,
  },
  {
    id: "battery-info",
    name: "Battery Info",
    description: "电池信息模块测试",
    thumbnail: null,
    Component: BatteryInfo,
  },
];

export function getcopybyid(id: string) {
  return copies.find((c) => c.id === id);
}

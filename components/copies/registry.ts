import ChatGPT from "./chatgpt";
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
    id: "rnlearn",
    name: "rnlearn",
    description: "rn-课程学习页",
    thumbnail: null,
    Component: rnlearn,
  },
];

export function getcopybyid(id: string) {
  return copies.find((c) => c.id === id);
}

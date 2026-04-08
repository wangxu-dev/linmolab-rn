import ChatGPT from "./chatgpt";
import RayCast from "./raycast";

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
];

export function getcopybyid(id: string) {
    return copies.find((c) => c.id === id);
}

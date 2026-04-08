import ChatGPT from "./chatgpt";
import RayCast from "./raycast";

export const copies = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        description: "AI 聊天界面临摹",
        thumbnail: require("../../assets/thumbs/chatgpt.png"),
        Component: ChatGPT,
    },
    {
        id: "raycast",
        name: "RayCast",
        description: "深色登录页临摹",
        thumbnail: require("../../assets/thumbs/raycast.png"),
        Component: RayCast,
    },
];

export function getcopybyid(id: string) {
    return copies.find((c) => c.id === id);
}

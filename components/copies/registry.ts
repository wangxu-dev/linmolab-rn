import ChatGPT from "./chatgpt";

export const copies = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "chgptapp临摹",
    thumbnail: require("../../assets/thumbs/chatgpt.png"),
    Component: ChatGPT,
  },
];

export function getcopybyid(id: string) {
  return copies.find((c) => c.id === id);
}

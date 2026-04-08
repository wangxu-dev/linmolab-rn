# Copy App - UI 临摹练习

一个用于临摹各大 App 界面的 React Native 练习项目。

## 功能

- 首页展示所有临摹项目列表，带缩略图
- 点击进入查看完整临摹界面
- 支持动态添加新的临摹（Registry 模式）

## 技术栈

- React Native
- Expo
- Expo Router（文件系统路由）
- TypeScript

## 已实现的临摹

- ChatGPT - AI 聊天界面
- 微信 - 即时通讯界面

## 运行

```bash
npx expo start
```

使用 Expo Go App 扫码预览。

## 添加新临摹

1. 在 `components/copies/` 下新建文件夹
2. 创建 `index.tsx` 编写界面
3. 准备缩略图放入 `assets/thumbs/`
4. 在 `components/copies/registry.ts` 中注册

## 项目结构

```
app/
├── copy/[id].tsx       # 临摹详情页（动态路由）
├── _layout.tsx         # 根布局
└── index.tsx           # 首页（列表）

components/copies/
├── registry.ts         # 注册中心
├── chatgpt/index.tsx   # ChatGPT 临摹
└── wechat/index.tsx    # 微信临摹
```

# 快速入门

**OhMyLive2D** 是一个应用于浏览器环境且开箱即用的**Live2D**组件, 它支持所有版本的 Live2D 模型, 使用方式足够简单并且高可自定义, 可以快速为您的个人网站添加 Live2D 看板娘, 使您的个人网站变得更具有特色.

`OhMyLive2D` 的初衷是为了解决官方 Cubism SDK 在使用时还需要额外通过 `script` 标签外部引入以及使用和学习成本较高的缺点。而现在它在被 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 驱动的同时又提供了多种导入方式和按需导入的模式，以及更加方便自定义配置的 API。现在你完全可以在 **vite** 或者 **webpack** 中更便捷的使用它，并且无需手动导入其他任何依赖。

> [!TIP]  
> **本项目目前正处于积极维护状态, 欢迎志同道合的伙伴加入 😄**

## Live2D 是什么?

Live2D 是一个向插图灌注生命力并能够进行 2D 立体表现的技术.

更多内容请前往：[Live2D 官方网站](https://www.live2d.com/)

## Cubism 是什么?

Cubism 是 Live2D SDK 的名称，截至目前它一共存在四个版本：Cubism 2、Cubism 3、Cubism 4。Cubism 5

Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

Cubism 5 向后兼容了 Live2D Model 3 并支持 Live2D Model 4 ，但它无法驱动 Live2D Model 2。

> [!TIP]
> 本项目已集成 Cubism 2.1 与 Cubism 5.0.0 ，完整覆盖了从 model2 到 model5 的所有 live2d 模型版本。

## 快速开始

### 安装

::: code-group

```bash [npm]
npm install oh-my-live2d
```

```bash [pnpm]
pnpm add oh-my-live2d
```

```bash [yarn]
yarn add oh-my-live2d
```

:::

### 更新

如需更新 `oh-my-live2d` 你只需要在安装命令后缀加上`@latest`即可更新至当前最新发行版, 当然 `vuepress` 等插件也同理

::: code-group

```bash [npm]
npm install oh-my-live2d@latest
```

```bash [pnpm]
pnpm add oh-my-live2d@latest
```

```bash [yarn]
yarn add oh-my-live2d@latest
```

:::

### 使用

使用方式请查阅: [组件加载](../api/functions/loadOml2d.md)

### 其他支持

-   [在 VitePress 中使用](./vitepress.md)

-   [在 VuePress2 中使用](./vuepress.md)

-   [通过 VitePlugin 方式使用](./vite.md)

-   [在 Hexo 中使用](./hexo.md)

### 模型资源

前往[模型资源](./models.md)选择您喜欢的模型

---
layout: home

hero:
    name: "oh My Live2d Docs"
    text: "Live2D For Web 组件"
    tagline: "这是ohMyLive2d官方文档的备份"
    actions:
        - theme: brand
          text: 快速入门
          link: article/guide/quickStart.md
        - theme: alt
          text: Github
          link: https://github.com/oh-my-live2d/oh-my-live2d

features:
    - title: 开箱即用
      icon: 📦
      details: 默认集成Cubism2.1和Cubism5, 无需手动导入其他任何第三方SDK
    - title: 高可自定义
      icon: 🛠️
      details: 完全可自定义的样式, 灵活可配的菜单模块
    - title: 多种使用场景
      icon: 💡
      details: 支持CDN与ESM两种导入方式, 支持多种文档构建工具中使用, 例如 vitepress、vuepress
---

## 快速体验

您可以通过[stackblitz](https://stackblitz.com/edit/vitejs-vite-shccpw?file=main.js)在线体验

或者在任意项目使用`CDN`导入方式立即体验`oh-my-live2d`

<img align="right" style="margin-left:10px;border-radius: 10px;height:397px" src="/index_img1.gif">

```html
<script src="https://unpkg.com/oh-my-live2d@latest"></script>
<script>
	OML2D.loadOml2d({
		models: [
			{
				path: "https://model.oml2d.com/HK416-1-normal/model.json",
				position: [0, 60],
				scale: 0.08,
				stageStyle: {
					height: 450,
				},
			},
		],
	});
</script>
```

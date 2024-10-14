import { defineConfig } from "vitepress";

export default defineConfig({
	title: "ohMyLive2dDocs",
	description: "oh my live2d的官方文档备份",
	head: [["link", { rel: "icon", href: "public/favicon.ico" }]],
	themeConfig: {
		logo: "/favicon.ico",
		search: {
			provider: "local",
		},

		nav: [
			{ text: "指南", link: "article/guide/quickStart.md" },
			{
				text: "使用示例",
				items: [
					{ text: "在vitepress中使用", link: "article/demo/vitepress.md" },
					{ text: "在vuepress中使用", link: "article/demo/vuepress.md" },
					{ text: "通过vitePlugin使用", link: "article/demo/viteplugin.md" },
					{ text: "在hexo中使用", link: "article/demo/hexo.md" },
				],
			},
			{ text: "Api", link: "article/api/options.md" },
			{ text: "模型资源", link: "article/models.md" },
			{ text: "关于", link: "article/about.md" },
			{ text: "更新日志 v0.19.2", link: "article/CHANGELOG.md" },
		],

		sidebar: {
			"/article/guide/": [
				{
					text: "指南",
					items: [
						{ text: "快速开始", link: "article/guide/quickStart.md" },
						{ text: "模型加载", link: "article/guide/moduleLoad.md" },
						{ text: "自定义图标", link: "article/guide/customIcon.md" },
					],
				},
			],
			"/article/demo/": [
				{
					text: "使用示例",
					items: [
						{ text: "在vitepress中使用", link: "article/demo/vitepress.md" },
						{ text: "在vuepress中使用", link: "article/demo/vuepress.md" },
						{ text: "通过vitePlugin使用", link: "article/demo/viteplugin.md" },
						{ text: "在hexo中使用", link: "article/demo/hexo.md" },
					],
				},
			],
			"/article/api/": [
				{
					text: "配置选项",
					items: [
						{ text: "公共选项", link: "article/api/options.md" },
						{ text: "模型选项", link: "article/api/modelOptions.md" },
						{ text: "菜单选项", link: "article/api/menusOptions.md" },
						{ text: "提示框选项", link: "article/api/tipsOptions.md" },
						{ text: "状态栏选项", link: "article/api/statusBarOptions.md" },
					],
				},
				{
					text: "实例对象",
					items: [
						{ text: "属性", link: "article/api/Oml2dProperties.md" },
						{ text: "方法", link: "article/api/Oml2dMethods.md" },
						{ text: "事件", link: "article/api/Oml2dEvents.md" },
					],
				},
			],
		},

		socialLinks: [{ icon: "github", link: "https://github.com/oh-my-live2d/oh-my-live2d" }],

		footer: {
			message: "本站点在Vitepress上托管",
			copyright: "MIT License | Hacxy, s22y",
		},
	},
});

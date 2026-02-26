import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: 'EdgeCatのBlog',
	subtitle: '溪云初起日沉阁，山雨欲来风满楼',
	// 长 description 利好于 SEO
	description: 'EdgeCat - 在边缘网络上苦苦挣扎|HURRY UP!EdgeCat',
	author: {
		name: 'EdgeCat',
		avatar: 'https://file.catp.cc/avatar.png',
		email: 'i@catp.cc',
		homepage: 'https://catp.cc/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://file.catp.cc/avatar.png',
	language: 'zh-CN',
	timeEstablished: '2025-06-20',
	timeZone: 'Asia/Shanghai',
	url: 'https://blog.catp.cc/',
	defaultCategory: 'OvO',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
			杂谈: { icon: 'ph:chat-bold', color: '#3ba' },
			生活: { icon: 'ph:shooting-star-bold', color: '#f77' },
			代码: { icon: 'ph:code-bold', color: '#77f' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 500,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己部署的 Umami 统计服务
		{ 'src': 'https://zhi.catp.cc/zhi.js', 'data-website-id': 'a1997c81-a42b-46f6-8d1d-8fbd67a8ef41', 'defer': false },
		// 自己网站的 Cloudflare Insights 统计服务
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8aaaaaaf03962"}', 'defer': false },
		// Twikoo 评论系统
		{ src: 'https://lib.baomitu.com/twikoo/1.6.44/twikoo.min.js', defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: 'https://twikoo.catp.cc',
		preload: 'https://twikoo.catp.cc/',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: 'EdgeCat Poster',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'EO Pages'],
	date: blogConfig.timeEstablished,
	comment: 'What happened?',
}

export default blogConfig
















(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{163:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Bit"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../guide/assets.html#相对-urls"}},[t._v("基准 URL")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./../guide/deploy.html#github-页面"}},[t._v("部署教程 > Github 页面")])],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("指定用于 dev 服务器的主机。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("指定用于 dev 服务器的端口。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("提供 Google AnalyticsID 来开启集成功能。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请留意 "),s("a",{attrs:{href:"https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDPR (2018年欧盟数据保护规则改革)"),s("OutboundLink")],1),t._v(", 在合适或者需要的情况下，考虑将 Google Analytics 设置为"),s("a",{attrs:{href:"https://support.google.com/analytics/answer/2763052?hl=zh-Hans",target:"_blank",rel:"noopener noreferrer"}},[t._v("匿名化的 IP"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("PWA 注意事项")]),t._v(" "),s("p",[s("code",[t._v("serviceWorker")]),t._v(" 选项只能处理 service worker。要使你的站点完全符合 PWA，你需要在"),s("code",[t._v(".vuepress/public")]),t._v(" 中提供 Web App 清单和图标。有关更多详细信息，请参阅 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 关于 Web 应用程序清单的文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("此外，只有在你能够使用 SSL 部署你的站点时才能启用此功能，因为 service worker 只能在 HTTPs URLs 下注册。")])]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("指定用于 i18n 支持，要获取更多细节，请参考"),s("router-link",{attrs:{to:"./../guide/i18n.html"}},[t._v("国际化指南")]),t._v("。")],1),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("一个函数，用来控制对于哪些文件，是需要生成 "),s("code",[t._v('<link rel="prefetch">')]),t._v(" 资源提示的。请参考 "),s("a",{attrs:{href:"https://ssr.vuejs.org/zh/api/#shouldpreload",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldPrefetch"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同。")]),t._v(" "),t._m(40),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../default-theme-config/"}},[t._v("默认主题配置")]),t._v(".")],1)]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),s("p",[t._v("是否在每个代码块的左侧显示行号。")]),t._v(" "),t._m(44),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../guide/markdown.html#行号"}},[t._v("行号")])],1)]),t._v(" "),t._m(45),t._v(" "),s("ul",[t._m(46),t._v(" "),s("li",[t._v("Default: "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/lib/markdown/slugify.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("将标题文本转换为别名(slug)的函数。这会影响标题锚点、目录和侧边栏链接生成的 id 和链接。（译者注：此功能是为了解决非 ASCII 码字符生成链接时的 "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/45",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug"),s("OutboundLink")],1),t._v("，具体代码查看 /lib/markdown/slugify 的 slugify 函数）")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-anchor"),s("OutboundLink")],1),t._v(" 的选项。(注意：如果你想自定义标题 id 的话尽量使用 "),s("code",[t._v("markdown.slugify")]),t._v("。)")]),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-table-of-contents"),s("OutboundLink")],1),t._v(" 的选项。(注意：如果你想自定义标题 id 的话尽量使用 "),s("code",[t._v("markdown.slugify")]),t._v("。)")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),s("p",[t._v("修改默认配置，或将额外的插件应用于渲染源文件的 "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" 实例的函数。例如：")]),t._v(" "),t._m(56),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),s("OutboundLink")],1),t._v(" 的选项。注意：指定这个值将会覆盖 autoprefixer，你需要把 autoprefixer 的选项也包含进去。")]),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),s("p",[t._v("提供给 "),s("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylus-loader"),s("OutboundLink")],1),t._v(" 的参数。")]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),s("p",[t._v("提供给 "),s("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" 的参数，用来加载 "),s("code",[t._v("*.scss")]),t._v(" 文件。")]),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),s("p",[t._v("提供给 "),s("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" 的参数，用来加载 "),s("code",[t._v("*.sass")]),t._v(" 文件。")]),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),s("p",[t._v("提供给 "),s("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),s("OutboundLink")],1),t._v(" 的参数。")]),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),s("p",[t._v("修改内部 webpack 配置。如果该值是一个对象，它将被合并到使用 "),s("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),s("OutboundLink")],1),t._v(" 的最终配置中；如果该值是一个函数，它将接收 config 作为第一个参数，并将 "),s("code",[t._v("isServer")]),t._v(" 这个标志作为第二个参数。你可以直接改变配置，或者返回一个要合并的对象：")]),t._v(" "),t._m(70),t._m(71),t._v(" "),t._m(72),t._v(" "),s("p",[t._v("使用 "),s("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(" 修改内部的 webpack 配置。")]),t._v(" "),t._m(73),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"配置参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置参考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基本配置-basic-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置-basic-config","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本配置(basic config)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[this._v("#")]),this._v(" base")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("网站用来部署的基准 URL。如果你打算在子路径下部署你的站点，例如 GitHub 页面，则需要设置此项。如果你打算将你的网站部署到"),e("code",[this._v("https://foo.github.io/bar/")]),this._v("，则应将 "),e("code",[this._v("base")]),this._v(" 设置为 "),e("code",[this._v('"/bar/"')]),this._v("。它应该始终以斜杠开始和结束。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在其他选项中，"),e("code",[this._v("base")]),this._v(" 会自动添加到以 "),e("code",[this._v("/")]),this._v(" 开头的所有 URL 中，因此你只需指定一次即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("另请参考：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("网站描述。这将在页面 HTML 中表现为一个 "),e("code",[this._v("<meta>")]),this._v(" 标签。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head","aria-hidden":"true"}},[this._v("#")]),this._v(" head")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Array")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("[]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("被注入页面 HTML "),e("code",[this._v("<head>")]),this._v(" 额外的标签。每个标签可以用 "),e("code",[this._v("[tagName, { attrName: attrValue }, innerHTML?]")]),this._v(" 的形式指定。例如，要添加自定义图标：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'link'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host","aria-hidden":"true"}},[this._v("#")]),this._v(" host")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("'0.0.0.0'")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[this._v("#")]),this._v(" port")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("number")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("8080")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dest","aria-hidden":"true"}},[this._v("#")]),this._v(" dest")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v(".vuepress/dist")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("指定 "),e("code",[this._v("vuepress build")]),this._v(" 的输出目录。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[this._v("#")]),this._v(" ga")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serviceworker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[this._v("#")]),this._v(" serviceWorker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果设置为 "),e("code",[this._v("true")]),this._v("，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果开发了一个自定义主题，"),e("code",[this._v("Layout.vue")]),this._v(" 组件还将触发以下事件：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("sw-ready")])]),t._v(" "),s("li",[s("code",[t._v("sw-cached")])]),t._v(" "),s("li",[s("code",[t._v("sw-updated")])]),t._v(" "),s("li",[s("code",[t._v("sw-offline")])]),t._v(" "),s("li",[s("code",[t._v("sw-error")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"locales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locales","aria-hidden":"true"}},[this._v("#")]),this._v(" locales")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("{ [path: string]: Object }")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shouldprefetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldprefetch","aria-hidden":"true"}},[this._v("#")]),this._v(" shouldPrefetch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("类型: "),e("code",[this._v("Function")])]),this._v(" "),e("li",[this._v("默认值: "),e("code",[this._v("() => true")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"主题化-theming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题化-theming","aria-hidden":"true"}},[this._v("#")]),this._v(" 主题化(theming)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" theme")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("指定此选项来使用自定义主题。使用 "),e("code",[this._v('"foo"')]),this._v(" 的值，VuePress 将尝试在 "),e("code",[this._v("node_modules/vuepress-theme-foo/Layout.vue")]),this._v(" 加载主题组件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"themeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" themeConfig")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("另请参阅：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-linenumbers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.lineNumbers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("另请参阅：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-slugify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slugify","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.slugify")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Type: "),e("code",[this._v("Function")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-externallinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-externallinks","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.externalLinks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ target: '_blank', rel: 'noopener noreferrer' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("键和值对将被添加到指向外部链接的 "),e("code",[this._v("<a>")]),this._v(" 标签。默认选项将在新窗口中打开外部链接。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-anchor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.anchor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-toc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.toc")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ includeLevel: [2, 3] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" breaks"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      md"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"建立管道-build-pipeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立管道-build-pipeline","aria-hidden":"true"}},[this._v("#")]),this._v(" 建立管道(build pipeline)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" postcss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ plugins: [require('autoprefixer')] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stylus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylus","aria-hidden":"true"}},[this._v("#")]),this._v(" stylus")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ preferPathResolver: 'webpack' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"scss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scss","aria-hidden":"true"}},[this._v("#")]),this._v(" scss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass","aria-hidden":"true"}},[this._v("#")]),this._v(" sass")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{ indentedSyntax: true }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less","aria-hidden":"true"}},[this._v("#")]),this._v(" less")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configurewebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" configureWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object | Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// mutate the config for client")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chainwebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" chainWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// config is an instance of ChainableConfig")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器兼容性-browser-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性-browser-compatibility","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器兼容性(browser compatibility)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"evergreen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evergreen","aria-hidden":"true"}},[this._v("#")]),this._v(" evergreen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你只针对常青树浏览器，请设置为 "),e("code",[this._v("true")]),this._v(" 。这将禁用 IE5 的 ES5 转码和 polyfill，导致更快的构建和更小的文件。")])}],!1,null,null,null);e.default=r.exports}}]);
/*
 * @Description:
 * @version:
 * @Author: 欧阳威
 * @Date: 2024-12-03 10:05:08
 * @LastEditors: Andy
 * @LastEditTime: 2024-12-03 20:05:46
 */
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

export default defineUserConfig({
  bundler: viteBundler(),
  plugins: [
    [
      searchPlugin({
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ],
  ],
  base: process.env.GITHUB == "github" ? "/grammar-club/" : "/",
  dest:
    process.env.GITHUB == "github"
      ? "docs/.vuepress/github"
      : "docs/.vuepress/dist",
  title: "语法俱乐部",
  theme: defaultTheme({
    repo: "1254691710/grammar-club",
    displayAllHeaders: true,
    smoothScroll: true,
    // 确保 nextLinks 和 prevLinks 是 true
    sidebar: {
      "/content/": [
        ["Preface", "序"],
        "Introduction",
        "Contents",
        {
          text: '第一篇 初级句型--简单句',
          collapsable: false,
          children: [
            'Chapter01',
            'Chapter02',
            'Chapter03',
            'Chapter04',
            'Chapter05',
            'Chapter06',
            'Chapter07',
            'Chapter08',
            'Chapter09',
            'Chapter10',
            'Chapter11'
          ]
        },
        {
          text: "第二篇 中级句型--复句",
          collapsable: false,
          children: ["Chapter12", "Chapter13", "Chapter14", "Chapter15"],
        },
        {
          text: "第三篇 高级句型--简化从句",
          collapsable: false,
          children: [
            "Chapter16",
            "Chapter17",
            "Chapter18",
            "Chapter19",
            "Chapter20",
            "Chapter21",
            "Chapter22",
          ],
        },
      ],
    },
    nav: [{ text: "目录", link: "/content/Preface" }],
  }),
});

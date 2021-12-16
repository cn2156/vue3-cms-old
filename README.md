# Vue3 CMS


## 简介

使用Vue3实现简单的CMS
- 后端使用Vue3 + Element Plus
  - 代码在`backend`中
  - 启动命令：`npm run dev`
- 后端使用Vue3 + Ant Design of Vue
  - 代码在`backend-atdv`中
  - 启动命令：`npm run dev`
- 前端使用Vue3 + Vant
  - 代码在`frontend`中
  - 启动命令：`npm run dev`
- 数据在db中
  - 启动命令：`json-server --watch db`


## 后端主要功能

后端主要功能：
- 登录
- 内容管理
  - 具体内容管理，包括添加、更新、查看、删除、启用、禁用
- 评论管理
  - 查看、删除
- 栏目管理
  - 添加、更新、查看、删除、启用、禁用
- 用户管理
  - 添加、查看、删除、启用、禁用、角色分配
- 角色管理
  - 添加、更新、查看、删除、启用、禁用、分配栏目


## 前端主要功能

前端主要功能：
- 查看
- 注册
- 登录
- 评论


## 数据库

数据使用json保存，依靠json-server运行

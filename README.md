# Healthy Living App

Healthy Living 是一个健康生活服务的移动端前端原型，使用手机外壳式界面展示在线问诊预约、附近医疗机构查找、药品购买、保险激活、社区交流和健康计划等核心流程。

> 当前项目为可交互 UI 原型：数据主要来自 `frontend/src/data.js`，页面状态保存在组件内存中，暂无后端 API、真实登录鉴权或跨刷新持久化。

## 功能概览

- **启动与登录**：应用启动后进入 Splash 页并自动跳转登录页；登录页当前为演示入口。
- **首页**：提供附近医院、保险、药房、社区和健康计划的快捷入口。
- **医院与预约**：浏览模拟地图和附近医院列表，查看医院详情、选择医生与可用时间，并完成预约确认。
- **药房购药**：查看药房列表与药品信息，将药品加入购物车，确认订单并查看订单完成页。
- **保险激活**：按“选择方案 -> 上传/扫描卡证 -> 查看说明 -> 激活完成”的多步流程演示。
- **社区**：浏览健康话题帖子，进入发帖页填写标题和内容。
- **健康计划**：填写性别、年龄、身高和体重后获取步行与营养建议页面。

## 技术栈

- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/)
- [Vite 5](https://vitejs.dev/)
- 原生 CSS（见 `frontend/src/styles.css`）

## 快速开始

### 环境要求

- Node.js 18 或更高版本
- npm

### 本地开发

```bash
cd frontend
npm install
npm run dev
```

启动后访问终端输出的本地地址，默认配置为：

```text
http://localhost:5173/
```

### 生产构建与预览

```bash
cd frontend
npm run build
npm run preview
```

Vite 会将构建产物输出到 `frontend/docs`。注意 `frontend/vite.config.js` 中的 `base` 当前设置为 `/Healthy-Living/`，适合部署到 GitHub Pages 的项目站点路径；如部署到域名根路径或其他子路径，请同步调整该值。

## 目录结构

```text
.
├── frontend
│   ├── docs                  # Vite 当前配置的构建输出目录
│   ├── src
│   │   ├── components        # 手机外壳、状态栏、底部导航、顶栏
│   │   ├── pages             # 各业务页面与流程页
│   │   ├── data.js           # 医院、医生、药房、帖子等静态示例数据
│   │   ├── styles.css        # 全局移动端样式
│   │   ├── App.jsx           # 路由表与底部导航显示逻辑
│   │   └── main.jsx          # React 应用入口
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── miro                      # 设计探索与流程图截图
└── BIS design Healthy Living APP.rtb
```

## 主要路由

| 路由 | 页面用途 |
| --- | --- |
| `/` | Splash 启动页 |
| `/login` | 登录入口 |
| `/home` | 首页与服务入口 |
| `/map` | 模拟地图与附近医院 |
| `/hospital/:id` | 医院详情 |
| `/doctor/:id` | 医生详情与时间选择 |
| `/appointment-done` | 预约成功 |
| `/insurance` | 保险激活多步流程 |
| `/pharmacy` | 药房列表 |
| `/pharmacy/:id` | 药房详情、药品与购物车 |
| `/order` | 订单确认 |
| `/order-done` | 订单完成与评价 |
| `/community` | 社区帖子列表 |
| `/community/new` | 发布新帖 |
| `/health` | 个人健康信息填写 |
| `/health/walk` | 步行建议 |
| `/health/nutrition` | 营养建议 |

## 设计资料

- `miro/`：包含产品原型、界面探索和流程设计图片。
- `BIS design Healthy Living APP.rtb`：设计工具导出的设计资料。

## 后续可扩展方向

- 接入真实的用户认证、医院、医生、库存、订单和社区服务 API。
- 为预约、订单、保险状态和社区内容增加持久化存储。
- 补充表单校验、错误状态、空状态和无障碍支持。
- 引入测试框架与 CI 流程，覆盖核心路由和业务交互。

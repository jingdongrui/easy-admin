/**
 * 路由模式 history ｜ hash
 */
type RouterMode = "hash" | "history";

interface ImportMetaEnv {
  /** 项目 base url */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 路由模式 history ｜ hash  */
  readonly VITE_ROUTER_MODE: RouterMode;
  /** 路由加载模式 static ｜ dynamic */
  readonly VITE_ROUTE_LOAD_MODE: string;
  /** 本地存储前缀 */
  readonly VITE_STORAGE_PREFIX: string;
  /** 启动时是否自动打开浏览器 */
  readonly VITE_OPEN: boolean;
}

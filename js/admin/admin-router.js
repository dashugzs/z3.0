// 虚拟管理路径
export const ADMIN_PATH = '/admin';

// 初始化路由监听
export function initAdminRouter(showAdminPanel, showMainContent) {
    // 监听浏览器历史变化
    window.addEventListener('popstate', handleRouteChange);
    
    // 初始加载时处理路由
    handleRouteChange();
    
    // 路由变化处理函数
    function handleRouteChange() {
        const currentPath = window.location.pathname;
        
        if (currentPath === ADMIN_PATH) {
            // 进入管理路径：隐藏主内容，显示管理界面
            showMainContent(false);
            showAdminPanel(true);
        } else {
            // 进入普通路径：显示主内容，隐藏管理界面
            showMainContent(true);
            showAdminPanel(false);
        }
    }
    
    // 导航到管理路径
    function navigateToAdmin() {
        window.history.pushState(null, '管理后台', ADMIN_PATH);
        handleRouteChange();
    }
    
    // 导航到首页
    function navigateToHome() {
        window.history.pushState(null, '首页', '/');
        handleRouteChange();
    }
    
    // 检查当前是否在管理路径
    function isAdminPath() {
        return window.location.pathname === ADMIN_PATH;
    }
    
    return {
        navigateToAdmin,
        navigateToHome,
        isAdminPath
    };
}
    
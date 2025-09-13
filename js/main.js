// 导入管理模块
import { initAdminPanel } from './admin/admin-modal.js';

// 导航数据初始化函数
function initNavigation() {
    // 这里是原有的导航数据初始化逻辑
    // ...
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化导航
    initNavigation();
    
    // 初始化管理后台模块
    initAdminPanel();
});
    
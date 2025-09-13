import * as AdminAPI from './admin-api.js';
import { initAdminRouter } from './admin-router.js';

// DOM元素缓存
let elements = {};
let router;

// 初始化管理后台UI
export function initAdminPanel() {
    // 创建并添加管理界面到页面
    createAdminElements();
    
    // 缓存DOM元素
    cacheElements();
    
    // 初始化路由
    router = initAdminRouter(
        (show) => showAdminPanel(show),
        (show) => showMainContent(show)
    );
    
    // 绑定事件处理
    bindEvents();
    
    // 检查登录状态
    checkLoginStatus();
}

// 创建管理界面元素
function createAdminElements() {
    // 登录弹窗HTML
    const loginModalHTML = `
        <div id="login-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;">
            <div style="background: white; padding: 20px; border-radius: 8px; width: 300px;">
                <h3 style="margin-top: 0;">管理员登录</h3>
                <div style="margin-bottom: 15px;">
                    <label>密钥：</label>
                    <input type="password" id="admin-key" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #ddd; border-radius: 4px;" placeholder="请输入管理密钥">
                </div>
                <button id="login-btn" style="width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    登录
                </button>
                <p id="login-error" style="color: red; margin-top: 10px; display: none;">密钥错误，请重新输入</p>
            </div>
        </div>
    `;
    
    // 管理界面HTML
    const dataManagerHTML = `
        <div id="data-manager" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 1001; overflow: auto; padding: 20px;">
            <div style="max-width: 800px; margin: 0 auto;">
                <h2>导航数据管理 <button id="logout-btn" style="float: right; padding: 5px 10px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">退出</button></h2>
                <p>请输入 JSON 格式的导航数据：</p>
                <textarea id="nav-data-input" style="width: 100%; height: 400px; margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: monospace;"></textarea>
                <button id="save-data-btn" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">保存数据</button>
                <div id="save-status" style="margin-top: 10px; padding: 10px; border-radius: 4px; display: none;"></div>
                <button id="back-btn" style="margin-top: 20px; padding: 10px 20px; background: #ccc; color: black; border: none; border-radius: 4px; cursor: pointer;">返回首页</button>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', loginModalHTML);
    document.body.insertAdjacentHTML('beforeend', dataManagerHTML);
}

// 缓存DOM元素
function cacheElements() {
    elements = {
        loginModal: document.getElementById('login-modal'),
        loginBtn: document.getElementById('login-btn'),
        adminKeyInput: document.getElementById('admin-key'),
        loginError: document.getElementById('login-error'),
        dataManager: document.getElementById('data-manager'),
        navDataInput: document.getElementById('nav-data-input'),
        saveDataBtn: document.getElementById('save-data-btn'),
        saveStatus: document.getElementById('save-status'),
        logoutBtn: document.getElementById('logout-btn'),
        backBtn: document.getElementById('back-btn'),
        mainContent: document.querySelector('.list')
    };
}

// 绑定事件处理函数
function bindEvents() {
    // 登录按钮
    elements.loginBtn.addEventListener('click', handleLogin);
    
    // 保存数据按钮
    elements.saveDataBtn.addEventListener('click', handleSaveData);
    
    // 退出按钮
    elements.logoutBtn.addEventListener('click', handleLogout);
    
    // 返回首页按钮
    elements.backBtn.addEventListener('click', () => router.navigateToHome());
    
    // 点击弹窗外部关闭登录框
    elements.loginModal.addEventListener('click', (e) => {
        if (e.target === elements.loginModal) {
            elements.loginModal.style.display = 'none';
            // 如果未登录且是管理路径访问，不允许关闭登录框
            if (router.isAdminPath() && !AdminAPI.getAdminKey()) {
                setTimeout(() => elements.loginModal.style.display = 'flex', 100);
            }
        }
    });
}

// 检查登录状态
function checkLoginStatus() {
    const adminKey = AdminAPI.getAdminKey();
    if (adminKey && router.isAdminPath()) {
        loadDataManager();
    }
}

// 处理登录
async function handleLogin() {
    const key = elements.adminKeyInput.value.trim();
    if (!key) return;
    
    elements.loginError.style.display = 'none';
    
    try {
        const isValid = await AdminAPI.verifyAdminKey(key);
        if (isValid) {
            AdminAPI.setAdminKey(key);
            elements.loginModal.style.display = 'none';
            loadDataManager();
        } else {
            elements.loginError.style.display = 'block';
        }
    } catch (e) {
        elements.loginError.textContent = '网络错误，请重试';
        elements.loginError.style.display = 'block';
    }
}

// 加载管理界面数据
async function loadDataManager() {
    try {
        const data = await AdminAPI.fetchNavigationData();
        elements.navDataInput.value = JSON.stringify(data, null, 2);
        elements.dataManager.style.display = 'block';
    } catch (e) {
        alert('加载数据失败：' + e.message);
    }
}

// 处理数据保存
async function handleSaveData() {
    try {
        const newData = JSON.parse(elements.navDataInput.value);
        const result = await AdminAPI.saveNavigationData(newData);
        
        if (result.success) {
            elements.saveStatus.textContent = '保存成功！';
            elements.saveStatus.style.backgroundColor = '#d4edda';
            elements.saveStatus.style.color = '#155724';
        } else {
            elements.saveStatus.textContent = '保存失败：' + result.error;
            elements.saveStatus.style.backgroundColor = '#f8d7da';
            elements.saveStatus.style.color = '#721c24';
        }
        
        elements.saveStatus.style.display = 'block';
        setTimeout(() => elements.saveStatus.style.display = 'none', 3000);
    } catch (e) {
        elements.saveStatus.textContent = '错误：' + e.message;
        elements.saveStatus.style.backgroundColor = '#f8d7da';
        elements.saveStatus.style.color = '#721c24';
        elements.saveStatus.style.display = 'block';
    }
}

// 处理退出登录
function handleLogout() {
    AdminAPI.clearAdminKey();
    elements.dataManager.style.display = 'none';
    elements.loginModal.style.display = 'flex';
    elements.adminKeyInput.value = '';
}

// 显示/隐藏管理面板
function showAdminPanel(show) {
    if (show) {
        const adminKey = AdminAPI.getAdminKey();
        if (adminKey) {
            loadDataManager();
        } else {
            elements.loginModal.style.display = 'flex';
        }
    } else {
        elements.loginModal.style.display = 'none';
        elements.dataManager.style.display = 'none';
    }
}

// 显示/隐藏主内容
function showMainContent(show) {
    elements.mainContent.style.display = show ? 'block' : 'none';
}
    
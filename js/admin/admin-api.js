// Worker 基础地址（替换为你的实际Worker地址）
const WORKER_BASE_URL = 'https://daohangshujurongqi.xnss.fun';

// 存储和获取管理员密钥
export function getAdminKey() {
    return localStorage.getItem('adminKey') || '';
}

export function setAdminKey(key) {
    localStorage.setItem('adminKey', key);
}

export function clearAdminKey() {
    localStorage.removeItem('adminKey');
}

// 验证管理员密钥
export async function verifyAdminKey(key) {
    try {
        const res = await fetch(`${WORKER_BASE_URL}/api/nav-data`, {
            headers: { 'X-Auth-Key': key }
        });
        return res.ok;
    } catch (e) {
        console.error('验证密钥失败:', e);
        return false;
    }
}

// 获取导航数据
export async function fetchNavigationData() {
    try {
        const res = await fetch(`${WORKER_BASE_URL}/api/nav-data`, {
            headers: { 'X-Auth-Key': getAdminKey() }
        });
        if (!res.ok) throw new Error('获取数据失败');
        return await res.json();
    } catch (e) {
        console.error('获取导航数据失败:', e);
        throw e;
    }
}

// 保存导航数据
export async function saveNavigationData(data) {
    try {
        const res = await fetch(`${WORKER_BASE_URL}/api/nav-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Key': getAdminKey()
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (e) {
        console.error('保存导航数据失败:', e);
        throw e;
    }
}

    



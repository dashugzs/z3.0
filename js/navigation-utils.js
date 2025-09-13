// 导航工具函数 - 只包含逻辑，不包含数据
const NavigationUtils = {
  /**
   * 生成导航HTML并插入到指定容器
   * @param {string} containerSelector - 容器的CSS选择器
   * @param {Array} data - 导航数据数组
   */
  generateNavigation: function(containerSelector, data) {
    const navContainer = document.querySelector(containerSelector);
    if (!navContainer || !data || !Array.isArray(data)) return;
    
    // 清空现有内容
    navContainer.innerHTML = '';
    
    // 遍历导航数据生成HTML
    data.forEach(category => {
      // 创建分类标题
      const titleLi = document.createElement('li');
      titleLi.className = 'title';
      titleLi.textContent = category.title || '';
      navContainer.appendChild(titleLi);
      
      // 确保links是数组
      if (!category.links || !Array.isArray(category.links)) return;
      
      // 创建链接列表
      category.links.forEach(link => {
        const linkLi = document.createElement('li');
        // 为链接添加默认属性以防数据不完整
        const rel = link.rel || "nofollow";
        const target = link.target || "_blank";
        const url = link.url || "#";
        const name = link.name || "未命名链接";
        
        linkLi.innerHTML = `
          <a rel="${rel}" href="${url}" target="${target}">
            ${name}
          </a>
        `;
        navContainer.appendChild(linkLi);
      });
    });
  },
  
  /**
   * 初始化导航
   */
  init: function() {
    // 确保导航数据已加载
    if (typeof navigationData !== 'undefined') {
      this.generateNavigation('.list ul', navigationData);
    } else {
      console.error('导航数据未加载，请确保先引入navigation-data.js');
    }
  },
  
  /**
   * 添加新的导航分类
   * @param {Object} category - 新分类对象
   */
  addCategory: function(category) {
    if (typeof navigationData !== 'undefined' && category && category.title) {
      navigationData.push(category);
      this.generateNavigation('.list ul', navigationData);
    }
  },
  
  /**
   * 更新导航数据并重新渲染
   * @param {Array} newData - 新的导航数据
   */
  updateNavigation: function(newData) {
    if (newData && Array.isArray(newData)) {
      // 替换全局导航数据
      window.navigationData = newData;
      this.generateNavigation('.list ul', newData);
    }
  }
};

// 页面加载完成后初始化导航
document.addEventListener('DOMContentLoaded', function() {
  NavigationUtils.init();
});

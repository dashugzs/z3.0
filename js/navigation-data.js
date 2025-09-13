// 导航数据 - 只包含数据，不包含任何逻辑
const navigationData = [
  {
    title: "旗下产品",
    links: [
      { name: "小牛搜索", url: "https://xiaoniuss.top/", rel: "nofollow", target: "_blank" },
      { name: "小牛书签", url: "https://b.xiaoniuss.top/", rel: "nofollow", target: "_blank" },
      { name: "小牛插件", url: "https://c.xiaoniuss.top/", rel: "nofollow", target: "_blank" },
      { name: "小牛解析", url: "https://v.xiaoniuss.top/", rel: "nofollow", target: "_blank" },
      { name: "小牛游戏", url: "https://y.xiaoniuss.top/", rel: "nofollow", target: "_blank" },
      { name: "代码编辑", url: "https://c.xiaoniuss.top/bjq/", rel: "nofollow", target: "_blank" },
      { name: "色值选择", url: "https://c.xiaoniuss.top/ys/", rel: "nofollow", target: "_blank" },
      { name: "搜索多开", url: "https://b.xiaoniuss.top/duoss.html", rel: "nofollow", target: "_blank" },
      { name: "小牛导航", url: "https://xydh.fun/guoxiaohan", rel: "nofollow", target: "_blank" },
      { name: "工作区", url: "https://xydh.fun/rongna", rel: "nofollow", target: "_blank" },
      { name: "大叔工作室", url: "https://yunyingguan.top", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "常用电商",
    links: [
      { name: "jd后台", url: "https://shop.jd.com", rel: "nofollow", target: "_blank" },
      { name: "tb后台", url: "https://myseller.taobao.com", rel: "nofollow", target: "_blank" },
      { name: "pdd后台", url: "https://mms.pinduoduo.com", rel: "nofollow", target: "_blank" },
      { name: "抖音电商", url: "https://fxg.jinritemai.com/ffa/mshop/homepage/index", rel: "nofollow", target: "_blank" },
      { name: "政府832", url: "https://www.fupin832.com/", rel: "nofollow", target: "_blank" },
      { name: "有赞后台", url: "https://www.youzan.com", rel: "nofollow", target: "_blank" },
      { name: "翼支付客服", url: "https://h5.bestpay.com.cn/subapps/intelligent-core-h5/manage/index.html?externalUserId=725753262305550340&platformIdentity=newyzfmall#/passport/login", rel: "nofollow", target: "_blank" },
      { name: "翼支付门户", url: "https://h5.bestpay.com.cn/subapps/merchant-portal-h5/index.html#/home", rel: "nofollow", target: "_blank" },
      { name: "翼支付电商", url: "https://merchant-h5.bestpay.com.cn/paas/khd-index-h5/index.html#/login", rel: "nofollow", target: "_blank" },
      { name: "淘宝百科", url: "https://baike.taobao.com/home.htm", rel: "nofollow", target: "_blank" },
      { name: "京麦工作台", url: "https://jm.jd.com/", rel: "nofollow", target: "_blank" },
      { name: "千牛工作台", url: "https://cts.alibaba.com/product/qianniu.htm", rel: "nofollow", target: "_blank" },
      { name: "淘-店侦探", url: "https://www.dianzhentan.com", rel: "nofollow", target: "_blank" },
      { name: "淘-店透视", url: "https://www.diantoushi.com", rel: "nofollow", target: "_blank" },
      { name: "淘-店查查", url: "https://www.dianchacha.com", rel: "nofollow", target: "_blank" },
      { name: "jd博士店长", url: "https://www.jdboshi.com", rel: "nofollow", target: "_blank" },
      { name: "盆友圈广告", url: "https://e.qq.com/resources/wx-moments", rel: "nofollow", target: "_blank" },
      { name: "抖招类目", url: "https://school.jinritemai.com/doudian/web/article/114128", rel: "nofollow", target: "_blank" },
      { name: "顺丰查时", url: "https://www.sf-express.com/chn/sc/price-query", rel: "nofollow", target: "_blank" },
      { name: "D直播伴侣", url: "https://www.dianchacha.com", rel: "nofollow", target: "_blank" },
      { name: "巨量千川", url: "https://qianchuan.jinritemai.com/", rel: "nofollow", target: "_blank" },
      { name: "天猫招商", url: "https://tmzs.taobao.com/join/start/pc", rel: "nofollow", target: "_blank" },
      { name: "东方甄选HT", url: "https://supplier.eastbuy.com/home", rel: "nofollow", target: "_blank" },
      { name: "金山文档", url: "https://www.kdocs.cn/latest", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "社交媒体",
    links: [
      { name: "163邮箱", url: "https://mail.163.com/", rel: "nofollow", target: "_blank" },
      { name: "126邮箱", url: "https://mail.126.com/", rel: "nofollow", target: "_blank" },
      { name: "QQ邮箱", url: "https://mail.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "微博", url: "https://www.weibo.com", rel: "nofollow", target: "_blank" },
      { name: "微信公众号", url: "https://mp.weixin.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "微信", url: "https://weixin.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "QQ", url: "https://im.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "知乎", url: "https://www.zhihu.com/", rel: "nofollow", target: "_blank" },
      { name: "抖音", url: "https://www.douyin.com/", rel: "nofollow", target: "_blank" },
      { name: "橘子网址", url: "https://support.qq.com/product/142721", rel: "nofollow", target: "_blank" },
      { name: "文心一言", url: "https://yiyan.baidu.com/", rel: "nofollow", target: "_blank" },
      { name: "QQ音乐", url: "https://y.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "网易云音乐", url: "https://music.163.com/", rel: "nofollow", target: "_blank" },
      { name: "酷狗音乐", url: "https://www.kugou.com/", rel: "nofollow", target: "_blank" },
      { name: "央视网", url: "https://www.cctv.com/", rel: "nofollow", target: "_blank" },
      { name: "腾讯视频", url: "https://v.qq.com/", rel: "nofollow", target: "_blank" },
      { name: "优酷", url: "https://www.youku.com/", rel: "nofollow", target: "_blank" },
      { name: "爱奇艺", url: "https://www.iqiyi.com/", rel: "nofollow", target: "_blank" },
      { name: "哔哩哔哩", url: "https://www.bilibili.com/", rel: "nofollow", target: "_blank" },
      { name: "橘子盘搜", url: "https://www.nmme.xyz/", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "设计视觉",
    links: [
      { name: "千图网", url: "https://www.58pic.com", rel: "nofollow", target: "_blank" },
      { name: "摄图网", url: "https://699pic.com", rel: "nofollow", target: "_blank" },
      { name: "90设计", url: "http://new.90sheji.com", rel: "nofollow", target: "_blank" },
      { name: "包图网", url: "https://ibaotu.com", rel: "nofollow", target: "_blank" },
      { name: "千库网", url: "https://588ku.com", rel: "nofollow", target: "_blank" },
      { name: "下图网", url: "http://wz.iscvip.cn/index/account/login.html", rel: "nofollow", target: "_blank" },
      { name: "阿里图标", url: "https://www.iconfont.cn/", rel: "nofollow", target: "_blank" },
      { name: "亿景智图", url: "https://zt.changjing.com.cn/", rel: "nofollow", target: "_blank" },
      { name: "猪八戒", url: "https://zbj.com", rel: "nofollow", target: "_blank" },
      { name: "GIF压缩", url: "https://www.asqql.com/wxtpzip", rel: "nofollow", target: "_blank" },
      { name: "PNG压缩", url: "https://compresspng.com/", rel: "nofollow", target: "_blank" },
      { name: "图片压缩", url: "https://docsmall.com/", rel: "nofollow", target: "_blank" },
      { name: "致美化", url: "https://zhutix.com/", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "工具",
    links: [
      { name: "百度网盘", url: "https://pan.baidu.com", rel: "nofollow", target: "_blank" },
      { name: "夸克网盘", url: "https://pan.quark.cn/", rel: "nofollow", target: "_blank" },
      { name: "阿里网盘", url: "https://www.aliyundrive.com/drive", rel: "nofollow", target: "_blank" },
      { name: "蓝奏云盘", url: "https://www.lanzou.com", rel: "nofollow", target: "_blank" },
      { name: "金山文档", url: "https://www.kdocs.cn", rel: "nofollow", target: "_blank" },
      { name: "Teambition", url: "https://www.teambition.com/pan", rel: "nofollow", target: "_blank" },
      { name: "NCM音乐转换", url: "https://ncm.worthsee.com/", rel: "nofollow", target: "_blank" },
      { name: "搜索多开", url: "https://b.xiaoniuss.top/duoss.html", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "开发",
    links: [
      { name: "Github", url: "https://github.com/", rel: "nofollow", target: "_blank" },
      { name: "bootstrapmb", url: "http://www.bootstrapmb.com/", rel: "nofollow", target: "_blank" },
      { name: "jqueryfuns", url: "http://www.jqueryfuns.com/", rel: "nofollow", target: "_blank" },
      { name: "阿里云", url: "https://www.aliyun.com", rel: "nofollow", target: "_blank" },
      { name: "cloudflare", url: "https://dash.cloudflare.com", rel: "nofollow", target: "_blank" },
      { name: "图床贼稳定", url: "https://imagelol.com", rel: "nofollow", target: "_blank" },
      { name: "红包封面", url: "https://cover.weixin.qq.com", rel: "nofollow", target: "_blank" },
      { name: "在线PS", url: "https://www.uupoop.com/", rel: "nofollow", target: "_blank" },
      { name: "图片空间", url: "https://sucai.wangpu.taobao.com/#/manage/pic?_k=3ax2p3", rel: "nofollow", target: "_blank" },
      { name: "联想_Think", url: "https://think.lenovo.com.cn/support/driver/newdriversdownlist.aspx?categoryid=3109781", rel: "nofollow", target: "_blank" }
    ]
  },
  {
    title: "免密下载",
    links: [
      { name: "IDM下载器", url: "https://kdocs.cn/l/sbjXGKoZMjck", rel: "nofollow", target: "_blank" },
      { name: "PE系统", url: "https://kdocs.cn/l/sc6G9pmT6PMv", rel: "nofollow", target: "_blank" },
      { name: "优酷转mp4", url: "https://kdocs.cn/l/stITah8LCVqY", rel: "nofollow", target: "_blank" },
      { name: "OBSx86", url: "https://kdocs.cn/l/skPR83SV3ztz", rel: "nofollow", target: "_blank" },
      { name: "双系统引导", url: "https://kdocs.cn/l/snXQCynQuA8g", rel: "nofollow", target: "_blank" },
      { name: "PS密钥", url: "https://kdocs.cn/l/sqT3ncusPQbT", rel: "nofollow", target: "_blank" },
      { name: "U盘启动", url: "https://kdocs.cn/l/stlTbbvcYanN", rel: "nofollow", target: "_blank" },
      { name: "视频压缩", url: "https://kdocs.cn/l/stMmsstYNt7d", rel: "nofollow", target: "_blank" },
      { name: "会声会影", url: "https://kdocs.cn/l/slZQXINmvxUH", rel: "nofollow", target: "_blank" },
      { name: "屏幕录制", url: "https://kdocs.cn/l/sfRWvMunH0W5", rel: "nofollow", target: "_blank" },
      { name: "腾讯MP4", url: "https://kdocs.cn/l/sjy8YiyE2GLi", rel: "nofollow", target: "_blank" },
      { name: "爱奇艺MP4", url: "https://kdocs.cn/l/sdvNhlVnBgjm", rel: "nofollow", target: "_blank" },
      { name: "AZ播放器", url: "https://kdocs.cn/l/sstjCg4Ey5Ph", rel: "nofollow", target: "_blank" },
      { name: "AZ播放器2", url: "https://kdocs.cn/l/stCZ0h0tj36P", rel: "nofollow", target: "_blank" },
      { name: "PC播放器", url: "https://kdocs.cn/l/skCb0l8Z89pW", rel: "nofollow", target: "_blank" },
      { name: "批量修改", url: "https://kdocs.cn/l/clntcQ575b8E", rel: "nofollow", target: "_blank" },
      { name: "图片工厂", url: "https://kdocs.cn/l/crtAaC0671bG", rel: "nofollow", target: "_blank" },
      { name: "picosmos", url: "http://www.picosmos.net/", rel: "nofollow", target: "_blank" }
    ]
  }
];

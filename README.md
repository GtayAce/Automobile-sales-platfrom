# CarSalesSystem
这是一个基于汽车销售的交易平台,用户可以进行登录之后即可选择自己的喜欢的车型进行购买。
管理员登陆可以进行对整个车行销售情况的查看。


# 效果图
### 首页概览
![HomePage](http://pdi3m4use.bkt.clouddn.com/Home1png.png)
![HomePage1](http://pdi3m4use.bkt.clouddn.com/listcar.png)
### 登录
![Login](http://pdi3m4use.bkt.clouddn.com/Login.png)
### 地图
![map](http://pdi3m4use.bkt.clouddn.com/map.png)
### 天气
![weather](http://pdi3m4use.bkt.clouddn.com/CarSystemWeather.png)
### 我的订单
![Order](http://pdi3m4use.bkt.clouddn.com/Order.png)
# 技术框架
该平台所涉及Web前端基本语法，页面的框架基本是layui和Bootstrap，适合初学Web前端用于练手的项目
* HTML/CSS/Javascript基本编程
* 使用了Ajax、JSON技术，运用其调用API获取JSON数据
* 熟练运用JQuery和Bootstrap框架
* 熟练的使用了layui组件库
# 特点
* 简洁明了的首页，展示了汽车的各种车型及其品牌
* 有地图显示的功能，购车者可以随时查看附近的车行
* 有天气预报的功能，购车者可以随时查询近些天天气信息，预判是否适合出行购买车
* 可以手动输入IP地址进行自动定位
# 接口说明
* 地图接口：该地图的显示是用到了高德地图JS API，使用AMap.Map类创建和展示地图对象。
* IP定位接口：该IP定位功能是调用高德地图API，通过也是Ajax的xmlHttpRequest请求，key是同样也是直接给出的，注册也是免费版本，接口同样有限制。
* 天气接口:  该天气的数据是调用和风天气API,通过是Ajax的xmlHttpRequest请求，key是直接给出的，由于注册的是免费版本，接口数据的调用次数是有限的。
# 项目总结
## 解决跨域和跨页面通信的问题
我使用的是window.postMessage函数
`Window.postMessage(message, targetOrigin, [transfer]);`
### 通信监听方法
```
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
  // For Chrome, the origin property is in the event.originalEvent
  // object.
  var origin = event.origin || event.originalEvent.origin; 
  if (origin !== "http://example.org:8080")
    return;

  // ...
}
```

# 了解websocket
webSocket 是一种通信协议
websocket 是html5开始提供的单个tcp连接上进行全双工通讯协议
http协议是一种无状态的，无连接的，单向的应用层协议，它采用了请求加响应的模型，通信请求只能由客户端发起，服务器端对请求作出应答处理

这种通信模型有一个弊端，http协议无法实现服务器主动向路护短发起请求

这种单向请求有个特点，就是服务器端如果有连续的状态变化，客户端要获得就非常麻烦；
大多数web应用程序通过频繁的异步ajax请求实现长轮询，但轮询的效率比较低，非常浪费资源(因为要不停的连接，或者http连接始终要打开)

# http和websocket的区别
轮询：定时的发送异步请求给服务器端

websocket：
- 握手成功 客户端给服务器端 http请求升级到websocket 101升级
- 发送消息 客户端和浏览器都可以主动发送信息

握手时基于http协议

来自客户端握手的请求头： 
get/ws http/1.1
Upgrade:websocket
connection Upgrade 升级链接

来自服务器端的响应头：
http/1.1 101 状态码

# 编写代码
## 客户端(浏览器)实现
实现websocket的web浏览器将通过该websocket对象公开所有必需的客户端功能
```js
var ws = new webSocket(url)`
```
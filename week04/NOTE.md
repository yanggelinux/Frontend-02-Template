
### 第四周学些笔记

#### 一、浏览器的工作过程

1. 浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面；
2. 把请求回来的 HTML 代码经过解析，构建成 DOM 树；
3. 计算 DOM 树上的 CSS 属性；
4. 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
5. 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
6. 合成之后，再绘制到界面上。
   
###### 从 HTTP 请求回来开始，这个过程并非一般想象中的一步做完再做下一步，而是一条流水线。从 HTTP 请求回来，就产生了流式的数据，后续的 DOM 树构建、CSS 计算、渲染、合成、绘制，都是尽可能地流式处理前一步的产出：即不需要等到上一步骤完全结束，就开始处理上一步的输出，这样我们在浏览网页时，才会看到逐步出现的页面

#### 二、HTTP协议

HTTP 协议是基于 TCP 协议出现的，对 TCP 协议来说，TCP 协议是一条双向的通讯通道，HTTP 在 TCP 的基础上，规定了 Request-Response 的模式。这个模式决定了通讯必定是由浏览器端首先发起的。

##### 1、HTTP格式

![avatar](https://static001.geekbang.org/resource/image/3d/a1/3db5e0f362bc276b83c7564430ecb0a1.jpg)

##### 2、HTTP方法

GET POST HEAD PUT DELETE CONNECT OPTIONS TRACE

##### 3、HTTP Status Code 和 Status Text

1. 1xx：临时回应，表示客户端请继续
2. 2xx：请求成功。200：请求成功。
3. 3xx: 表示请求的目标有变化，希望客户端进一步处理。 301&302：永久性与临时性跳转。 304：跟客户端缓存没有更新。
4. 4xx：客户端请求错误。 403：无权限。404：表示请求的页面不存在。
5. 5xx：服务端请求错误。500：服务端错误。503：服务端暂时性错误，可以一会再试。

##### 4、HTTP Head

HTTP 头可以看作一个键值对。原则上，HTTP 头也是一种数据，我们可以自由定义 HTTP 头和值。

Request Header
![avatar](https://static001.geekbang.org/resource/image/2b/a2/2be3e2457f08bdf624837dfaee01e4a2.png)

 Response Header
 ![avatar](https://static001.geekbang.org/resource/image/ef/c9/efdeadf27313e08bf0789a3b5480f7c9.png)

##### 5、HTTP Body

一些常见的 body 格式

1. application/json
2. application/x-www-form-urlencoded
3. multipart/form-data
4. text/xml

#### 三、解析 HTML 代码 构建DOM树

大体过程
字符流 -----> 状态机 -----> 词token ----->栈 -----> DOM树

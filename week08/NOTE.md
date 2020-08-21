###  第八周学习笔记

#### 一、DOM API

DOM API 大致会包含 4 个部分  

1. 节点：DOM 树形结构中的节点相关 API。
2. 事件：触发和监听事件相关 API。
3. Range：操作文字范围相关 API。
4. 遍历：遍历 DOM 需要的 API。

##### 1、节点API

Node 是 DOM 树继承关系的根节点，它定义了 DOM 节点在 DOM 树上的操作

**关系：**

1. parentNode  --- parentElement
2. childNodes  --- children
3. firstChild  --- firstElementChild
4. lastChild   --- lastElementChild
5. nextSibling --- nextElementSibling
6. previousSibling --- previousElementSibling

**操作：**  

1. appendChild
2. insertBefore
3. removeChild
4. replaceChild

这几个修改型的 API，全都是在父元素上操作的，比如我们要想实现“删除一个元素的上一个元素”，必须要先用 parentNode 获取其父元素。  

其他：  

1. compareDocumentPosition 是一个用于比较两个节点中关系的函数。
2. contains 检查一个节点是否包含另一个节点的函数。
3. isEqualNode 检查两个节点是否完全相同。
4. isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript 中可以用“===”。
5. cloneNode 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝。

**DOM 标准规定了节点必须从文档的 create 方法创建出来，不能够使用原生的 JavaScript 的 new 运算。于是 document 对象有这些方法。**

1. createElement
2. createTextNode
3. createCDATASection
4. createComment
5. createProcessingInstruction
6. createDocumentFragment
7. createDocumentType

**操作属性：**  

1. getAttribute
2. setAttribute
3. removeAttribute
4. hasAttribute
5. getAttributeNode
6. setAttributeNode

**查找元素：**

1. querySelector
2. querySelectorAll
3. getElementById
4. getElementsByName
5. getElementsByTagName
6. getElementsByClassName

**Range**

1. new Range()
2. range.setStart(firstText, 9)
3. range.setEnd(secondText, 4)
4. document.getSelection().getRangeAt(0);

#### 二、事件API


##### 1、捕获和冒泡

**捕获过程是从外向内，冒泡过程是从内向外**  


#### 三、CSSOM API

CSSOM 是 CSS 的对象模型，在 W3C 标准中，它包含两个部分：描述样式表和规则等 CSS 的模型部分（CSSOM），和跟元素视图相关的 View 部分（CSSOM View）。  

`document.styleSheets` document 的 styleSheets 属性表示文档中的所有样式表，这是一个只读的列表，我们可以用方括号运算符下标访问样式表，也可以使用 item 方法来访问，它有 length 属性表示文档中的样式表数量。  

##### 1、CSSOM

修改样式表中的内容
`document.styleSheets[0].insertRule("p { color:pink; }", 0)`
`document.styleSheets[0].removeRule(0)`

获取样式表中特定的规则Rule
`document.styleSheets[0].cssRules`

CSSStyleRule 有两个属性：selectorText 和 style，分别表示一个规则的选择器部分和样式部分。  

CSSOM 还提供了一个非常重要的方法，来获取一个元素最终经过 CSS 计算得到的属性：  
`window.getComputedStyle(elt, pseudoElt);`

##### 2、CSSOM View

CSSOM View 这一部分的 API，可以视为 DOM API 的扩展，它在原本的 Element 接口上，添加了显示相关的功能，这些功能，又可以分成三个部分：窗口部分，滚动部分和布局部分  

**窗口 API**

1. moveTo(x, y) 窗口移动到屏幕的特定坐标；
2. moveBy(x, y) 窗口移动特定距离；
3. resizeTo(x, y) 改变窗口大小到特定尺寸；
4. resizeBy(x, y) 改变窗口大小特定尺寸。

**滚动API**

1. scrollX 是视口的属性，表示 X 方向上的当前滚动距离，有别名 pageXOffset；
2. scrollY 是视口的属性，表示 Y 方向上的当前滚动距离，有别名 pageYOffset；
3. scroll(x, y) 使得页面滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}；
4. scrollBy(x, y) 使得页面滚动特定的距离，支持传入配置型参数 {top, left}。

**元素滚动 API**

1. scrollTop 元素的属性，表示 Y 方向上的当前滚动距离。
2. scrollLeft 元素的属性，表示 X 方向上的当前滚动距离。
3. scrollWidth 元素的属性，表示元素内部的滚动内容的宽度，一般来说会大于等于元素宽度。
4. scrollHeight 元素的属性，表示元素内部的滚动内容的高度，一般来说会大于等于元素高度。
5. scroll(x, y) 使得元素滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}。
6. scrollBy(x, y) 使得元素滚动到特定的位置，支持传入配置型参数 {top, left}。
7. scrollIntoView(arg) 滚动元素所在的父元素，使得元素滚动到可见区域，可以通过 arg 来指定滚到中间、开始或者就近。

**布局 API**

1. window.innerHeight, window.innerWidth 这两个属性表示视口的大小
2. window.outerWidth, window.outerHeight 这两个属性表示浏览器窗口占据的大小
3. window.devicePixelRatio 这个属性非常重要，表示物理像素和 CSS 像素单位的倍率关系
4. window.screen.width, window.screen.height 设备的屏幕尺寸。
5. window.screen.availWidth, window.screen.availHeight 设备屏幕的可渲染区域尺寸，

**元素的布局信息**

1. getClientRects(); getClientRects 会返回一个列表，里面包含元素对应的每一个盒所占据的客户端矩形区域，这里每一个矩形区域可以用 x, y, width, height 来获取它的位置和尺寸
2. getBoundingClientRect()。 这个 API 的设计更接近我们脑海中的元素盒的概念，它返回元素对应的所有盒的包裹的矩形区域，
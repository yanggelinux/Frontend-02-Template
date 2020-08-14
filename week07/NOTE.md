
### 第七周学习笔记

#### 一、CSS排版 盒

盒子模型，英文即box model。无论是div、span、还是a都是盒子。  
但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。  

##### 1、盒子的属性

width、height、padding、border、margin  

1. width和height：内容的宽度、高度（不是盒子的宽度、高度）
2. padding：内边距。
3. border：边框。
4. margin：外边距。

##### 2、标准盒模型和IE盒模型

W3C盒子模型的范围包括 margin border padding content，并且content部分不包含其他部分    
IE盒子模型的范围也包括 margin border padding content，但是content部分包含了border和padding  

在 标准盒子模型中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。  

IE盒子模型中，width 和 height 指的是内容区域+border+padding的宽度和高度。 

##### 3、设置两种模型的宽和高

通过css3新增的属性 box-sizing: content-box | border-box分别设置盒模型为标准模型（content-box）和IE模型（border-box）。  

#### 二、正常流

我们可以用一句话来描述正常流的排版行为，那就是：依次排列，排不下了换行。  
在 CSS 标准中，规定了如何排布每一个文字或者盒的算法，这个算法依赖一个排版的“当前状态”，CSS 把这个当前状态称为“格式化上下文（formatting context）”。

我们可以认为排版过程是这样的： 格式化上下文 + 盒 / 文字 = 位置  

**块级格式化上下文BFC(block formatting context )** 顺次排列元素  
**行内级格式化上下文IFC(inline formatting context)** 顺次排列元素  

##### 当我们要把正常流中的一个盒或者文字排版，需要分成三种情况处理

1. **当遇到块级盒**：排入块级格式化上下文。
2. **当遇到行内级盒或者文字**：首先尝试排入行内级格式化上下文，如果排不下，那么创建一个行盒，先将行盒排版（行盒是块级，所以到第一种情况），行盒会创建一个行内级格式化上下文。
3. **遇到 float 盒**：把盒的顶部跟当前行内级上下文上边缘对齐，然后根据 float 的方向把盒的对应边缘对到块级格式化上下文的边缘，之后重排当前行盒。

##### 一些元素会在内部创建新的块级格式化上下文（bfc），这些元素有

1. 浮动元素
2. 绝对定位元素
3. 非块级但仍能包含块级元素的容器（如 inline-blocks, table-cells, table-captions）
4. 块级的能包含块级元素的容器，且属性 overflow 不为 visible。

##### 外边距折叠

当两个垂直外边距相遇时，他们将形成一个外边距，合并后的外边距高度等于两个发生合并的外边距的高度中的较大者。注意：只有普通文档流中块框的垂直外边距才会发生外边距合并，行内框、浮动框或绝对定位之间的外边距不会合并  

#### Flex排版

##### 一、flex排版的步骤

1. 把 flex 项分行，有 flex 属性的 flex 项可以暂且认为主轴尺寸为 0，所以，它可以一定放进当前行。
2. 计算每个 flex 项主轴尺寸和位置。
3. 计算 flex 项的交叉轴尺寸和位置。

##### 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

##### 三、容器的属性

flex-direction  
flex-wrap  
flex-flow  
justify-content  
align-items  
align-content  

###### 3.1、flex-direction属性

决定属性轴的方向（即项目排列的方向）。  
`.box {
  flex-direction: row | row-reverse | column | column-reverse;
}`  

row（默认值）：主轴为水平方向，起点在左端。  
row-reverse：主轴为水平方向，起点在右端。  
column：主轴为垂直方向，起点在上沿。  
column-reverse：主轴为垂直方向，起点在下沿。  

###### 3.2、flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。    

`.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}`

nowrap（默认）：不换行。  
wrap：换行，第一行在上方。  
wrap-reverse：换行，第一行在下方。  

###### 3.3、flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。  
`.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}`

###### 3.4、justify-content属性

justify-content属性定义了项目在主轴上的对齐方式。  

`.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}`

flex-start（默认值）：左对齐  
flex-end：右对齐  
center： 居中  
space-between：两端对齐，项目之间的间隔都相等。  
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。  

###### 3.5、align-items属性

align-items属性定义项目在交叉轴上如何对齐。  

`.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}`

flex-start：交叉轴的起点对齐。  
flex-end：交叉轴的终点对齐。  
center：交叉轴的中点对齐。  
baseline: 项目的第一行文字的基线对齐。  
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。  

###### 3.6、align-content属性

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。  

`.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}`

flex-start：与交叉轴的起点对齐。  
flex-end：与交叉轴的终点对齐。   
center：与交叉轴的中点对齐。  
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。  
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。  
stretch（默认值）：轴线占满整个交叉轴。  

##### 四、项目的属性  

order  
flex-grow  
flex-shrink  
flex-basis  
flex  
align-self  

###### 4.1、order属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。  
`.item {
  order: <integer>;
}`

###### 4.2 flex-grow属性

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。  
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。   

`.item {
  flex-grow: <number>; /* default 0 */
}`

###### 4.3、flex-shrink属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。  
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。   

`.item {
  flex-shrink: <number>; /* default 1 */
}`

###### 4.4 flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。  
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。    

`.item {
  flex-basis: <length> | auto; /* default auto */
}`

###### 4.5 flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。   
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。  
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。  

`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`

###### 4.6 align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。  

`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
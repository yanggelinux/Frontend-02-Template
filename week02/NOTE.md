# 第二周学习笔记

## 一、js语言通识

### 1、泛用语言分类方法  

#### 语言按照语法分类

##### 1. 非形式语言

1. 中文、英文

##### 2. 形式语言（乔姆斯基谱系）

1. 0型 无限制文法
2. 1型 上下文相关文法
3. 2型 上下文无关文法
4. 3型 正则文法

乔姆斯基谱系上下包含关系（1型一定属性0型但是不一定是2型）  
javascript总体来说是上下文无关文法  

### 2、什么是生产式  

#### 产生式概念

BNF范式（巴科斯范式）  

1. BNF的基本语法： <符号> ::= <使用符号的表达式>
2. 双引号（" "）中的字符串（"word"）代表这些字符本身，而double_quote代表双引号。
3. 双引号外的字符串（有可能带下划线）代表语法部分。
4. 尖括号（< >）中的内容为必选项。
5. 方括号（[ ]）中的内容为可选项。
6. 大括号（{ }）中的内容为可重复0至无限次的项。
7. 竖线（|）表示其左右两侧任选一项，相当于 OR 的意思。
8. ::= 符号表示 “被定义为”的意思。

##### 产生式例子

四则运算
. 1 + 2 * 3  
终结符：  
. Number  
. + -* /    
非终结符  
. `<MultiplicativeExpression>`  
. `<AdditiveExpression>`  

BNF表达式为：

```
<MultiplicativeExpression> ::=
    <Number>
    |<MultiplicativeExpression>"*"<Number>
    |<MultiplicativeExpression>"/"<Number>
<AdditiveExpression> ::=
    <MultiplicativeExpression>
    |<AdditiveExpression>"+"<MultiplicativeExpression>
    |<AdditiveExpression>"-"<MultiplicativeExpression>
```

### 3、深入理解生产式  

### 4、现代语言的分类  

#### 形式语言--用途

##### 数据描述语言

JSON HTML XMAL SQL CSS

##### 编程语言

C C++ JAVA C# Python Ruby Perl Lisp T-SQL Clojure Haskell JavaScript  

#### 形式语言--表达方式

##### 声明式语言

JSON HTML XMAL SQL CSS Lisp Clojure Haskell

##### 命令式语言

C C++ JAVA C# Python Ruby Perl JavaScript  

### 5、编程语言的本质  

#### 动态与静态

##### 动态

1. 在用户设备/在服务器上
2. 产品实际运行时
3. Runtime

##### 静态

1. 在程序员设备上
2. 产品开发时
3. Compiletime

静态类型语言（全部或者几乎全部的类型检查是在编译期进行的）。  
动态类型语言（类型的检查是在运行期进行的）。  

### 6、命令式编程语言的设计方式  

## 二、js类型  

### 1、js7中类型

Undefined  
Null  
Number  
String  
Boolean  
Symbol  
Object  

### 1、Undefined和Null

Undefined 类型表示未定义，它的类型只有一个值，就是 undefined。Undefined 跟 Null 有一定的表意差别，Null 表示的是：“定义了但是为空”。所以，在实际编程时，我们一般不会把变量赋值为 undefined，这样可以保证所有值为 undefined 的变量，都是从未赋值的自然状态。  

Null 类型也只有一个值，就是 null，它的语义表示空值，与 undefined 不同，null 是 JavaScript 关键字，所以在任何代码中，你都可以放心用 null 关键字来获取 null 值。

### 2、Boolean

Boolean 类型有两个值， true 和 false，它用于表示逻辑意义上的真和假，同样有关键字 true 和 false 来表示两个值。

### 3、String

String 用于表示文本数据。String 有最大长度是 2^53 - 1，这在一般开发中都是够用的，但是有趣的是，这个所谓最大长度，并不完全是你理解中的字符数。  因为 String 的意义并非“字符串”，而是字符串的 UTF16 编码，字符串的最大长度，实际上是受字符串的编码长度影响的。  
现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。  

### 4、 Number

Number 类型表示我们通常意义上的“数字”。JavaScript 中的 Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值。
JavaScript 为了表达几个额外的语言场景（比如不让除以 0 出错，而引入了无穷大的概念），规定了几个例外情况：
. NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字；
. Infinity，无穷大；
. -Infinity，负无穷大。

##### 为什么在 JavaScript 中，0.1+0.2 不能 =0.3

浮点数运算的精度问题导致等式左右的结果并不是严格相等，而是相差了个微小的值。

### 4、Symbol 

Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合，在 ES6 规范中，整个对象系统被用 Symbol 重塑。  
Symbol 可以具有字符串类型的描述，但是即使描述相同，Symbol 也不相等。  
创建 Symbol 的方式是使用全局的 Symbol 函数。例如：var mySymbol = Symbol("my symbol");

### 5、Object

Object 是 JavaScript 中最复杂的类型，也是 JavaScript 的核心机制之一。Object 表示对象的意思，它是一切有形和无形物体的总称。  
在 JavaScript 中，对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。

## 三、js对象  

### 1、对象的分类

##### 宿主对象（host Objects）：

由 JS 宿主环境提供的对象，它们的行为完全由宿主环境决定。

##### 内置对象（Built-in Objects）：

由 JS 语言提供的对象。

###### .固有对象（Intrinsic Objects ）：

由标准规定，随着 JS 运行时自动创建的对象实例。

###### .原生对象（Native Objects）：

可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对象。

###### .普通对象（Ordinary Objects）：

由{}语法、Object构造器或者class关键字定义类创建的对象，它能够被原型继承

### 2、宿主对象

JavaScript 宿主对象千奇百怪，但是前端最熟悉的无疑是浏览器环境中的宿主了。

### 3、内置对象-固有对象

固有对象是由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。 固有对象在任何 JavaScript 代码执行前就已经被创建出来了，它们通常扮演者类似基础库的角色。我们前面提到的“类”其实就是固有对象的一种。

### 4、内置对象-原生对象

我们把 JavaScript 中，能够通过语言本身的构造器创建的对象称作原生对象。

### 5、用对象来模拟函数与构造器：函数对象与构造器对象

函数对象的定义是：具有`[[call]]`私有字段的对象，构造器对象的定义是：具有私有字段`[[construct]]`的对象。
任何对象只需要实现`[[call]]`，它就是一个函数对象，可以去作为函数被调用。而如果它能实现`[[construct]]`，它就是一个构造器对象，可以作为构造器被调用。

### 6、特殊行为的对象

除了上面介绍的对象之外，在固有对象和原生对象中，有一些对象的行为跟正常对象有很大区别。

1. Array：Array的length属性根据最大的下标自动发生变化。
2. Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
3. String：为了支持下标运算，String的正整数属性访问会去字符串里查找。
4. Arguments：arguments的非负整数型下标属性跟对应的变量联动。
5. 模块的namespace对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于import吧。
6. 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
7. bind后的function：跟原来的函数相关联。 
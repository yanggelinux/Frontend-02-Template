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

### 6、命令式编程语言的设计方式  

## 二、js类型  

### 1、Number  

### 2、String  

### 3、其他类型  

## 三、js对象  

### 1、对象的基础知识  

### 2、js中的对象

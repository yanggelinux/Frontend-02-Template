// 编写带括号的四则运算产生式

{/* <Expression> ::= 
    <AdditiveExpression><EOF>

<AdditiveExpression> ::= 
    <MultiplicativeExpression>
    |<AdditiveExpression>"+"><MultiplicativeExpression>
    |<AdditiveExpression>"-"<MultiplicativeExpression>


<MultiplicativeExpression> ::= 
    <Number>
    |<MultiplicativeExpression>"*"<Number>
    |<MultiplicativeExpression>"/"<Number>    

<ParenthesisExpression> ::= 
 <AdditiveExpression> 
 | "(" <ParenthesisExpression> ")" 
 | <ParenthesisExpression> "*"<ParenthesisExpression> 
 | <ParenthesisExpression> "/" <ParenthesisExpression> 
 | <ParenthesisExpression> "+" <ParenthesisExpression> 
 | <ParenthesisExpression> "-" <ParenthesisExpression>  */}
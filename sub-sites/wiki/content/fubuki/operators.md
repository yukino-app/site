# Operators

## Unary Operators

### Unary Plus

Unary plus operator (`+`) can be used to represent a positive number.

```title="Syntax"
+operand1
```

```title="Example"
+20
+45.6
+0
+someNumberValue
```

### Unary negation

Unary negation operator (`-`) can be used to represent a negative number or to invert the sign of a number.

```title="Syntax"
+operand1
```

```title="Example"
-50
-12.1
-0
-someNumberValue
```

### Bitwise NOT

Bitwise NOT operator (`~`) can be used to perform binary NOT operation on numbers.

```title="Syntax"
-operand1
```

```title="Example"
~2
~someNumberValue
```

### Logical NOT

Logical NOT operator (`!`) can be used to invert boolean or truthy value. This always returns a boolean value.

```title="Syntax"
!operand1
```

```title="Example"
!true
# false

!false
# true

!someBooleanValue
!someValue
!!someValue
```

### Call

Call operator (`()`) is used to invoke a function. They may take in parameters.

```title="Syntax"
operand1([param1, param2, ..., param3])
```

```title="Example"
someFunctionValue()
someFunctionValue(a, b, c)
main()
display(a, b, c)
```

## Binary Operators

### Declaration

Declaration operator (`:=`) is used to declare a variable in the enclosing lexical scope. Variables cannot be re-declared.

```title="Syntax"
variable := expr
```

```title="Example"
a := 2
b := 3
```

### Assignment

Assignment operator (`=`) can be used to set a new value to a variable.

```title="Syntax"
variable = expr
```

```title="Example"
a = 3
b = 4
```

### Addition

Addition operator (`=`) can be used to add two numbers or concate two strings.

```title="Syntax"
operand1 + operand2
```

```title="Example"
3 + 2
# 5

"Hello" + " World"
# Hello World

"Hello " + 1
# Hello1
```

### Subtraction

Subtraction operator (`-`) can be used to subtract two numbers.

```title="Syntax"
operand1 - operand2
```

```title="Example"
5 - 2
# 3
```

### Multiplication

Multiplication operator (`*`) can be used to multiply two numbers.

```title="Syntax"
operand1 * operand2
```

```title="Example"
9 * 2
# 18
```

### Exponent

Exponent operator (`**`) can be used to calculate exponentiation result of two number.

```title="Syntax"
operand1 ** operand2
```

```title="Example"
2 ** 3
# 8
```

### Division

Division operator (`/`) can be used to divide two numbers.

```title="Syntax"
operand1 / operand2
```

```title="Example"
10 / 3
# 3.333
```

### Floor Division

Floor Division operator (`//`) can be used to floor divide two numbers. This performs floor on the result after division.

```title="Syntax"
operand1 // operand2
```

```title="Example"
10 // 3
# 3
```

### Remainder

Remainder operator (`%`) can be used to get remainder from division of two numbers.

```title="Syntax"
operand1 % operand2
```

```title="Example"
11 % 2
# 1
```

### Equality

Equality operator (`==`) can be used to find if two values are equal.

```title="Syntax"
operand1 == operand2
```

```title="Example"
a == b

1 == 2
# false

"Hello" == "Hello"
# true

"Hello" == "World"
# false
```

### Inequality

Inequality operator (`!=`) can be used to find if two values are not equal.

```title="Syntax"
operand1 != operand2
```

```title="Example"
a != b

1 != 2
# true

"Hello" != "Hello"
# false

"Hello" != "World"
# true
```

### Lesser Than

Lesser Than (`<`) can be used to find if `a` is lesser than `b`.

```title="Syntax"
operand1 < operand2
```

```title="Example"
a < b

1 < 2
# true

4 < 2
# false
```

### Lesser Than Or Equal

Lesser Than Or Equal (`<=`) can be used to find if `a` is lesser than or equal to `b`.

```title="Syntax"
operand1 <= operand2
```

```title="Example"
a <= b

1 <= 2
# true

3 <= 3
# true

4 <= 3
# false
```

### Greater Than

Greater Than (`>`) can be used to find if `a` is greater than `b`.

```title="Syntax"
operand1 > operand2
```

```title="Example"
a > b

1 > 2
# false

4 > 2
# true
```

### Greater Than Or Equal

Greater Than Or Equal (`>=`) can be used to find if `a` is greater than or equal to `b`.

```title="Syntax"
operand1 >= operand2
```

```title="Example"
a >= b

1 >= 2
# false

3 >= 3
# true

4 >= 3
# true
```

### Bitwise OR

Bitwise OR operator (`|`) can be used to perform binary OR operation on two numbers.

```title="Syntax"
operand1 | operand2
```

```title="Example"
a | b

1 | 1
# 1

2 | 4
# 6
```

### Bitwise AND

Bitwise AND operator (`&`) can be used to perform binary AND operation on two numbers.

```title="Syntax"
operand1 & operand2
```

```title="Example"
a & b

1 & 1
# 1

2 & 4
# 0

4 & 4
# 4
```

### Bitwise XOR

Bitwise XOR operator (`^`) can be used to perform binary XOR operation on two numbers.

```title="Syntax"
operand1 ^ operand2
```

```title="Example"
a ^ b

1 ^ 0
# 1

1 ^ 1
# 0

4 ^ 2
# 6
```

### Logical OR

Logical OR operator (`||`) returns `true` if atleast one of two values is `true`.

```title="Syntax"
operand1 || operand2
```

```title="Example"
a || b

true || false
# true

false || false
# false
```

### Logical AND

Logical AND operator (`&&`) returns `true` if both values are `true`.

```title="Syntax"
operand1 && operand2
```

```title="Example"
a && b

true && true
# true

true && false
# false
```

### Nullable OR

Nullable OR operator (`??`) can be used to return a alternative value when the primary value is `null`, i.e. returns right-hand side value if left-hand side value is `null`.

```title="Syntax"
expr1 ?? expr2
```

```title="Example"
a ?? b

null ?? 2
# 2

1 ?? 2
# 1
```

### Member Access

Member Access operator (`.`) can be used to access properties of an object.

```title="Syntax"
object.property
```

```title="Example"
someObjectValue.propertyA
someObjectValue.propertyA.propertyB
```

### Computed Member Access

Member Access operator (`.`) can be used to access properties of an object but they accessor is an expression.

```title="Syntax"
object[expr]
```

```title="Example"
someObjectValue['propertyA']
someObjectValue['propertyA']['propertyB']
```

### Nullable Access

Nullable Access operator (`?.`) can be used to access properties of an object or `null`. This returns `null`, if the accessor is on a `null` value.

```title="Syntax"
value?.property
```

```title="Example"
someObjectValueOrNull?.propertyA
someObjectValueOrNull?.propertyA.propertyB

# can also be used with computed member access
someObjectValueOrNull?.['propertyA']
```

## Ternary Operator

Ternary operator (`?:`) has a condition and two values that is evaluated as per the truthiness of the condition.

```title="Syntax"
condition ? trueExpr : falseExpr
```

```title="Example"
1 > 2 ? "Yes!" : "No!"
# No!

4 < 2 ? 2 : 4
# 4
```

## Grouping

Expressions surrounded by parenthesis (`()`) are evaluated first.

```title="Syntax"
(expr)
```

```title="Example"
1 - (2 + 4)
# -5
```

## Precedence Table

| Name                   | Operator    | Precedence |
| ---------------------- | ----------- | ---------- |
| Default                | -           | 0          |
| Declaration            | `… := …`    | 1          |
| Assignment             | `… = …`     | 1          |
| Ternary                | `… ? … : …` | 1          |
| Logical OR             | `… \|\| …`  | 2          |
| Nullable OR            | `… ?? …`    | 2          |
| Logical AND            | `… && …`    | 3          |
| Bitwise OR             | `… \| …`    | 4          |
| Bitwise XOR            | `… ^ …`     | 5          |
| Bitwise AND            | `… & …`     | 6          |
| Equality               | `… == …`    | 7          |
| Inequality             | `… != …`    | 7          |
| Lesser Than            | `… < …`     | 8          |
| Lesser Than Or Equal   | `… <= …`    | 8          |
| Greater Than           | `… > …`     | 8          |
| Greater Than Or Equal  | `… >= …`    | 8          |
| Addition               | `… + …`     | 9          |
| Subtraction            | `… - …`     | 9          |
| Multiplication         | `… * …`     | 10         |
| Division               | `… / …`     | 10         |
| Floor Division         | `… // …`    | 10         |
| Remainder              | `… % …`     | 10         |
| Exponent               | `… ** …`    | 11         |
| Logical NOT            | `! …`       | 12         |
| Bitwise NOT            | `~ …`       | 12         |
| Unary Plus             | `+ …`       | 12         |
| Unary Negation         | `- …`       | 12         |
| Call                   | `… ()`      | 13         |
| Member Access          | `… . …`     | 13         |
| Computed Member Access | `… [ … ]`   | 13         |
| Nullable Access        | `… ?. …`    | 13         |
| Grouping               | `( … )`     | 14         |

# Statements

Statements is a line of code that commands a task. Each program is made up of sequence of statements. Statements must end with a semi-colon (`;`).

## Declaration & Assignment Statement

Refer [declaration](./operators.md#declaration) and [assignment](./operators.md#assignment) operator.

## Expression Statement

Contains nothing but an expression.

```title="Syntax"
expr;
```

```title="Example"
1 + 1;
"Hello World";
helloWorld;
```

## Block Statement

Creates a lexical scope and contains a sequence of statements.

```title="Syntax"
{
    statement1;
    statement2;
    ...
    statementN;
}
```

```title="Example"
{
    a := 2;
    print a;
}
```

## If-Else Statement

If-else statement is a conditional control-flow statement that allows skipping code. Supports simple `if`, `if-else` and `if-else` ladder.

```title="Syntax"
if (condition)
    statement1

if (condition)
    statement1
else
    statement2

if (condition1)
    statement1
else if (condition2)
    statement2
else
    statement3
```

```title="Example"
if (true) print "Hello World";

if (false) print "Hello World";
else print "Goodbye World";

text := ""
if (true) {
    text = "Hello World";
} else {
    text = "Goodbye World";
}
print text;
```

## While Statement

While statements allows repeating a set of code until the condition goes falsey. `break` and `continue` statement can be used inside a loop.

```title="Syntax"
while (condition) {
    statement
}
```

```title="Example"
i := 0;
while (i < 5) {
    print i;
    i = i + 1;
}
# 0 1 2 3 4
```

### Break Statement

Break statement can be used to terminate the enclosing loop. This is done using the `break` keyword.

```title="Syntax"
break;
```

```title="Example"
i := 0;
while (true) {
    print i;
    i = i + 1;
    if (i > 2) break;
}
# 0 1 2
```

### Continue Statement

Continue statement can be used to skip current iteration. This is done using the `continue` keyword.

```title="Syntax"
continue;
```

```title="Example"
i := 0;
while (i < 6) {
    i = i + 1;
    if (i % 2 == 0) continue;
    print i;
}
# 1 3 5
```

## Try-Catch Statement

Try-catch statement is used to handle exceptions and unintended behaviours. Try-catch consists a `try` block that might throw exceptions and `catch` block that handles the exception.

```title="Syntax"
try {
    tryStatements
} catch (exception) {
    catchStatements
}
```

```title="Example"
try {
    throw "Hello World!";
} catch (err) {
    print err;
}
# Hello World!
```

### Throw Statement

Throw statements can be used to propogate exceptions. This is done using the `throw` keyword.

```title="Syntax"
throw expr;
```

```title="Example"
throw "Hello World!";
throw Exception.new("Oops!");
```

## When Statement

When statements can be used as an alternative to `if-else` ladder. Each case takes in an conditional expression, and is executed if they are truthy. The `else` case is invoked if none evaluates to a truthy value. Atmost one case is executed.

```title="Syntax"
when {
    expr1: statement1
    expr2: statement2
    ...
    exprN: statementN
    else: elseStatement
}
```

```title="Example"
a := 2
b := 3
when {
    a > b: {
        print "Yes";
    }
    else: print "No";
}
# No
```

## Match Statement

Match statements can be used to match values against the case values. Each case takes in an expression that evaluates to a value, and is executed if they are equal. The `else` case is invoked if none matches. Atmost one case is executed.

```title="Syntax"
match (expr) {
    expr1: statement1
    expr2: statement2
    ...
    exprN: statementN
    else: elseStatement
}
```

```title="Example"
a := 0
match (a) {
    -1: {
        print "Found: -1";
    }
    0: print "Found: 0";
    1: print "Found: 1";
    else: print a;
}
# Found: 0
```

## Return Statement

Return statement is used to return a value from the function body to it's call. This is done using the `return` keyword. If no value is specified, `null` value is returned.

```title="Syntax"
return;
return expr;
```

```title="Example"
return;
return null;
return "Hello World";
```

## Import Statements

Import statements are used to import other modules into current module. The top-most lexical scope of the module is mirrored.

```title="Syntax"
import "filename" as variable;
```

```title="Example"
import "utils.fbs" as utils;

print utils.helloWorld;
utils.displayHelloWorld();
```

## Print Statement

Print statement is used to print a value to the terminal. This is done using the `print` keyword. This statement cannot be used if `disablePrint` is set to `true`.

```title="Syntax"
print expr;
```

```title="Example"
print 1;
print "Hello World";
```

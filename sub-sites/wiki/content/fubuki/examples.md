# Examples

## Hello World!

```
print "Hello World!";
```

## Area of shapes

```
square := obj {
    area: fun (side) {
        return side * side;
    },
};

rectangle := obj {
    area: fun (length, breadth) {
        return length * breadth;
    },
};

print "Area of square: " + square.area(5);
print "Area of rectangle: " + rectangle.area(2, 3);
```

## Print until 100 and as a list

```
i := 0;
numbers := list [];
while (i <= 100) {
    print i;
    numbers.add(i);
    i = i + 1;
}
print numbers;
```

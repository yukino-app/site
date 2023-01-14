# Future

## Objects

### Completer

Represents a completable future.

| Property   | Signature              | Description          |
| ---------- | ---------------------- | -------------------- |
| `future`   | `Future`               | The future value     |
| `complete` | `(value: Any) => null` | Resolves the future. |
| `fail`     | `(value: Any) => null` | Fails the future.    |

## `Future.new`

Returns a new `Completer`.

```
completer := Future.new();
future := completer.future;
future.then(-> x {
    print x;
    # 1
});
completer.complete(1);
print future.await();
# 1
```

## `Future.maybeAwait`

Takes in a value and returns the result of the future if it's a future, or just returns the original value.

```
Future.maybeAwait(someFutureValue);
```

## `Future.wait`

Takes in duration in milliseconds and returns a future that resolved after the duration.

```
Future.wait(1000);
# waits 1 second
```

## `Future.awaitAll`

Takes in a list of futures and returns the list of resolved values.

```
Future.awaitAll([futureValue1, futureValue2, ..., futureValueN]);
```

## `Future.any`

Takes in a list of futures and returns the value of any one future.

```
Future.any([futureValue1, futureValue2, ..., futureValueN]);
```

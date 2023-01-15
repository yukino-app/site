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

## `Future.wait`

Takes in duration in milliseconds and returns a future that resolved after the duration.

```
Future.wait(1000).await();
# waits 1 second
```

## `Future.unify`

Takes in a list of functions that return futures and returns the list of resolved values.

```
Future
    .unify([-> : futureValue1, -> : futureValue2, ..., -> : futureValueN])
    .await();
```

## `Future.any`

Takes in a list of that return futures and returns the value of any one future.

```
Future
    .any([-> : futureValue1, -> : futureValue2, ..., -> : futureValueN])
    .await();
```

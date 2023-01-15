## Future

Represents a asynchronous value. Internally represented using Dart's `Future`. Futures are not directly creatable.

```title="Example"
someFutureValue.await();
someFutureValue.then(-> x { print x; });
someFutureValue.catchError(-> err { print err; });
```

| Property     | Signature                       | Description                                    |
| ------------ | ------------------------------- | ---------------------------------------------- |
| `await`      | `() => Any`                     | Returns the result.                            |
| `then`       | `((value: Any) => Any) => Null` | Calls the callback when the value is resolved. |
| `catchError` | `((value: Any) => Any) => Null` | Calls the callback when the future is failed.  |

!!! note

    Never leave instances of `Future`s unawaited. Unawaited futures are ignored by the virtual machine.

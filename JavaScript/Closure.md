# Closure

> A programming pattern that allows variables to be accessible from an outer lexical scope inside nested blocks of code.

## Adding example

An example of closures can be seen in this function that returns another function. The trick to understanding this is understanding how to implement/test the function.

```JS
function translate2d(dx, dy) {
  return function(x, y) {
    return [x + dx, y + dy];
  };
};
```

Since translate2d returns a function we should store the results in a var that is callable:

```JS implementation
// sets dx, dy with 1, 1
const translator = translate2d(1, 1);

// sets x, y and executes the inner function
translator(4, 6) // [5, 7]
```

After the variable calls, we can see that the addition on line 12 takes place.

For the first call 'dx' and 'dy' are being set to (1, 1), respectively, becasue `translate2d` returns the inner function.

So when we call `translator`, we're making the inner call with new `x` and `y` values. Executing the addition of `x+dx` and `y+dy`.

The closure is that the dx, and dy vars were saved when we set the translator variable.

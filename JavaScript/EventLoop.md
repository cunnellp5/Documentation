# JavaScript Event Loop

## Overview

The JavaScript Event Loop is a concept that allows JavaScript to perform non-blocking operations, even though it has a single-threaded execution model. It enables asynchronous programming by handling events and executing callback functions.

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Call Stack](#call-stack)
- [Event Queue](#event-queue)
- [Microtask Queue](#microtask-queue)
- [Examples](#examples)
- [Further Reading](#further-reading)

## How It Works

The Event Loop continuously checks the Call Stack and the Event Queue. If the Call Stack is empty, it takes the first event from the Event Queue and pushes its corresponding callback function onto the Call Stack. This process repeats, allowing JavaScript to handle asynchronous operations.

## Call Stack

The Call Stack is a data structure that keeps track of function calls. When a function is called, it is added to the top of the stack. When the function returns, it is removed from the stack.

## Event Queue

The Event Queue is a data structure that stores events and their corresponding callback functions. When an asynchronous operation completes, its callback function is added to the Event Queue.

## Microtask Queue

The Microtask Queue is similar to the Event Queue but has higher priority. Microtasks include promises and `MutationObserver` callbacks. The Event Loop processes all microtasks before moving on to the next event in the Event Queue.

## Examples

### Example 1: Basic Event Loop

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout
```

### Example 2: browser click vs function click

```javascript
Todo come up with really good example
```

## Further Reading

- [MDN Web Docs: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- [Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [JavaScript Info: Event Loop](https://javascript.info/event-loop)

## Conclusion

Understanding the JavaScript Event Loop is crucial for writing efficient and non-blocking code. By mastering this concept, you can take full advantage of JavaScript's asynchronous capabilities and improve the performance of your applications.

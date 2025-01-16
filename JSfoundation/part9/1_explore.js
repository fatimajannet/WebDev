// asynchronous = ability to have a pause, act sequentially
// js dont have this, we have to inject it
// all the other language is synchronize
// network calls (fetch events), write/read from files, time related functions (time fn), user input: all these requires time to function. They all requires pause
// JS can't run the network call.
// JS have no capability to run most of timer fn

//EVENT LOOP//
/*
In JavaScript, every piece of code you write gets added to something called the call stack. The call stack is where the code is executed line by line. Alongside this, there's an event loop that continuously monitors the call stack to check if there's any work to do.

Now, JavaScript is single-threaded, meaning it can only do one thing at a time in the call stack. But some tasks, like timers or network requests, need more time or capabilities that JavaScript itself doesn't have. These tasks get passed to the browser or the environment (like Node.js/browser/execution engine/node/bun/deno). These environments have special abilities to handle such operations (like managing timers, performing network requests, or accessing files). In fact, this was once the only power of the browser to be able to perform these tasks.

Once the environment finishes handling the task, the result is sent to a queue (known as the task queue or callback queue). The event loop then checks if the call stack is empty. If it is, it picks up tasks from the queue and executes them one by one. 

For example:
1. If you set a timer with `setTimeout`, the function doesn't run immediately. Instead, the timer is handled by the environment. Once the timer ends, the callback function is placed in the queue.
2. While waiting for the timer, JavaScript continues running other synchronous code in the call stack.
3. When the call stack is clear, the event loop takes the timer's callback from the queue and executes it.

 This process creates JavaScript's asynchronous behavior, where some code waits while other tasks are being handled. This is why JavaScript can handle asynchronous tasks, even though it executes code in a single-threaded way. The event loop ensures everything runs in the right order, creating the illusion of multitasking.
*/

//timer function
function sayHello() {
  console.log("I would like to say Hello");
}

//callback function
setTimeout(() => {
  sayHello();
}, 4000); //4000 is 4s

console.log("mahia");

for (let index = 0; index < 10; index++) {
  console.log(index);
}

//the execution order is weird. This is basically the asynchronous nature of JS

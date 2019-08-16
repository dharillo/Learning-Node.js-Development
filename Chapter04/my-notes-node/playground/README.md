# Launch program with debugger

```node inspect debugging.js```

Example terminal output:

```txt
< Debugger listening on ws://127.0.0.1:9229/015ba762-82d2-4934-9291-90e5382caa11
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in file:///Learning-Node.js-Development/Chapter04/my-notes-node/playground/debugging.js:1
> 1 const person = {
  2   name: 'David',
  3 };
debug>
```

Write repl to be able to evaluate values at any given moment

To make the program run until any given line, write debugger; in the script.

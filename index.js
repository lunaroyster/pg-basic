// To build hit up https://bundle-repl.amasad.repl.co/bundle/@amasad/pg-basic

const Basic = require('./basic');
const colors = {};
const keyQueue = ['a', 'b', 'c'];
const display = {
  plot(x, y, color) {
    console.log('plotting', x, y, color);
    colors[`${x}${y}`] = color;
  },
  color(x, y) {
    return colors[`${x}${y}`];
  },

  text(x, y, text, size, color) {
    console.log(text, x, y, text, size, color);
  },

  clear() {
    console.log('display cleared');
  },

  getChar() {
    return keyQueue.pop();
  },

};

const cnsle = {
  write: s => process.stdout.write(s),
  clear: () => console.log('console cleared'),
  input: callback => {
    setTimeout(() => callback('foo'), 1000);
  },
};
const interp = new Basic({
  console: cnsle,
  display,
  debugLevel: 99,
});

interp
  .run(
    `
print 3 XX
`,
  )
  .then(
    () => {
      console.log('done');
    },
    err => {
      console.error('error:');
      console.error(err);
    },
  );

import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('Please turn off the moter.');
  setTimeout(()=>{
    console.log('A gentle reminder!!!')
  },3000)
});

myEmitter.emit('waterFull');

myEmitter.emit('event');
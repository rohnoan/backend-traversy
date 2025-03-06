import {EventEmitter} from 'events';

const myEmitter= new EventEmitter();

function greetHandler(){
    console.log('hi')
}

function byHandler(){
    console.log('bye')
}

myEmitter.on('greet',greetHandler)
myEmitter.on('bye',byHandler);

myEmitter.emit('greet');
myEmitter.emit('bye');
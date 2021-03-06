'use strict';

const HashTable = module.exports = function(size=1024){
  this.size = size;
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').reduce((a,b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, value) {
  this.memory[this.hashKey(key)] = value;
};

HashTable.prototype.get = function(key) {
  return this.memory[this.hashKey(key)];
};

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);

  return this.memory[address] ? delete this.memory[address] : new Error('Invalid Key.');
};

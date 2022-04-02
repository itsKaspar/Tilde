const Rectangle = require('./js/Rectangle.js'); // import from other files
const Circle = require('./js/Circle.js');
const Quadtree = require('./js/Quadtree.js');

if(typeof window !== 'undefined') window.quadtree = { Quadtree, Rectangle, Circle }; // would change Q to the name of the library
else module.exports = { Quadtree, Rectangle, Circle }; // in node would create a context

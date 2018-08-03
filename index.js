var sortStuff = require("./sortModule");

var numArray = sortStuff.makeNumList(1);
sortStuff.makeNumList(453);
sortStuff.makeNumList(2);
sortStuff.makeNumList(23452354);
sortStuff.makeNumList(67);

console.log(sortStuff.makeSortedList(numArray));




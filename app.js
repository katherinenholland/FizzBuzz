
var count = [];

for (var i = 1; i <= 100; i++) {
	if (i % 5 == 0 && i % 3 == 0) {
	count.push("fizz buzz");
	} else if(i % 3 == 0) {
    count.push("fizz");
	} else if(i % 5 == 0) {
	count.push("buzz");
    } else if(i % 3 !== 0, i % 5 !== 0) 
	count.push(i);
};

document.write(count);





 
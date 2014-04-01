
var count = [];

for (var i = 1; i <= 15; i++) {
	if (i % 5 == 0 && i % 3 == 0) {
	alert("fizz buzz");
	count.push("fizz buzz");
	} else if(i % 3 == 0) {
    alert("fizz");
    count.push("fizz");
	} else if(i % 5 == 0) {
	alert("buzz");
	count.push("buzz");
    } else if(i % 3 !== 0, i % 5 !== 0) 
	alert(i);
	count.push(i);
};

document.write(count);





 
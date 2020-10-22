// global isNaN

function sum(a, b) {

 // isNaN is cases-sensitive! isNan / isnan / isnaN will not work
 if(isNaN(a)) {
 	alert("a is not a number")

 }
 else {
  alert("a is a number")
 }
 return a + b;
}

console.log(sum("fe", "5"));

// fizzbuzz

class FizzBuzz
{

 constructor () {
	 this.fizz = 3;
	 this.buzz = 5;
	 this.max = 100;
	 this.result = "";

 }

 calculateFizzBuzz(num) {
	 if (num % this.fizz == 0 && num % this.buzz == 0) {
		 this.result = "fizzbuzz";
	 }
	 else if (num % this.fizz == 0) {
		 this.result = "fizz";
	 }
	 else if (num % this.buzz == 0) {
		 this.result = "buzz";
	 }
	 else {
		 this.result = "";
	 }
	 return this.result;
 }

}

let f = new FizzBuzz();
let i = 0;

for (i = 0; i < f.max; i++) {

 console.log(`${i} ${f.calculateFizzBuzz(i)}`);

}

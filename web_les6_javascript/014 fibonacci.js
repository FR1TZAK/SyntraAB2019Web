// fibonacci

class Fibonacci
{

	constructor () {
  	this.x = 0;
    this.y = 1;
    this.z = 0;
    this.maxItems = 15;
  }

	calculateNew() { // function prefix in class is not allowed
  	this.z = this.x;
  	this.x = this.y;
    this.y = this.x + this.z;
    
    // 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
  }

}

let f = new Fibonacci();
let i = 0;

for (i = 0; i < f.maxItems; i++) {
  console.log(f.x);
  f.calculateNew();
}

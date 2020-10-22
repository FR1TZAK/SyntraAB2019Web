// class

class Person 
{
	constructor() 
	{
  		this.firstName = "Sung";
	}

	printFirstName()
	{ // function prefix in class is not allowed
	  console.log(`First name: ${this.firstName}`);
	}

}

let p = new Person();
console.log(p.firstName); // prints "Sung"
p.printFirstName(); // prints "First name: Sung"
console.log(p.lastName);  // prints undefined

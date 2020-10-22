const numbers = [1, 3, 5, 7];

printLastNumber();
printNumbers();

numbers.push(19); // add item to array
printLastNumber();
printNumbers();

numbers.pop(19); // remove item from array
printLastNumber();
printNumbers();

function printNumbers()
{
    for (let i in numbers)
    {
        console.log(`${numbers[i]}`);
    }
}

function printLastNumber()
{
    console.log(`Last number in list: ${numbers[numbers.length - 1]}`);
}
// json object multidimensional

// NOTATION OPTION 1
let jsonObject = 
{
    users: [
      {
        id: 1,
        firstname: "Samantha",
        lastname: "Goodman",
        email: "sgoodman@gmail.com"
      },
      {
        id: 2,
        firstname: "Marina",
        lastname: "Rone",
        email: "mrone@gmail.com"
      },
      {
        id: 3,
        firstname: "Corey",
        lastname: "Beaulieu",
        email: "cbeaulieu@gmail.com"
      },
      {
        id: 4,
        firstname: "Candy",
        lastname: "Chase",
        email: "cchase@gmail.com"
      },
      {
        id: 5,
        firstname: "Vivien",
        lastname: "May",
        email: "vmay@gmail.com"
      }
    ]
  }

// NOTATION OPTION 2
// let jsonObject = 
// {
//     "users": [
//       {
//         "id": 1,
//         "firstname": "Samantha",
//         "lastname": "Goodman",
//         "email": "sgoodman@gmail.com"
//       },
//       {
//         "id": 2,
//         "firstname": "Marina",
//         "lastname": "Rone",
//         "email": "mrone@gmail.com"
//       },
//       {
//         "id": 3,
//         "firstname": "Corey",
//         "lastname": "Beaulieau",
//         "email": "cbeaulieau@gmail.com"
//       },
//       {
//         "id": 4,
//         "firstname": "Candy",
//         "lastname": "Chase",
//         "email": "cchase@gmail.com"
//       },
//       {
//         "id": 5,
//         "firstname": "Vivien",
//         "lastname": "May",
//         "email": "vmay@gmail.com"
//       }
//     ]
//   }

console.log(jsonObject);
console.log(typeof(jsonObject))

printUsers();
countCategories();
countUsers();

// NOTATION OPTION 1
// function printUsers()
// {
//     console.log(`${jsonObject.users[0].id} ${jsonObject.users[0].firstname} ${jsonObject.users[0].lastname} ${jsonObject.users[0].email}`);
//     // console.log(jsonObject.users[0].id + " " + jsonObject.users[0].firstname + " " + jsonObject.users[0].lastname + " " + jsonObject.users[0].email);
// }

// NOTATION OPTION 2
function printUsers()
{
  let len = 0;
  for (let i in jsonObject.users)
  {
    console.log(`${jsonObject.users[i].id} ${jsonObject.users[i].firstname} ${jsonObject.users[i].lastname} ${jsonObject.users[i].email}`);
    // console.log(jsonObject.users[i].id + " " + jsonObject.users[i].firstname + " " + jsonObject.users[i].lastname + " " + jsonObject.users[i].email);
  } 
}

function countCategories()
{
  let len = 0;
  for (let i in jsonObject)
  {
    len++;
  }
  console.log(`json file has ${len} categories`);
}

function countUsers()
{
  let len = 0;
  for (let i in jsonObject.users)
  {
    len++;
  }
  console.log(`json file has ${len} users`);
}

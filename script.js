const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Drake",
      yearOfBirth: 1900,
      yearOfDeath: 1961,
    },
    {
      name: "Sam",
      yearOfBirth: 1903,
      yearOfDeath: 1980,
    }
  ]

function findTheOldest(people){
    let oldest = 0
    let oldestPerson = "nadie"
    for(let i = 0; i<people.length; i++){
        let edadActual = people[i].yearOfDeath - people[i].yearOfBirth
        if(edadActual > oldest){
            oldest = edadActual
            oldestPerson = people[i].name
        }
    }
    console.log(oldestPerson)
}

findTheOldest(people)
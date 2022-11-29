const today = new Date();
const currentDate = today.getFullYear();

console.log(currentDate)
const findTheOldest = function(people) {
    const age = people.map(function(person){
        if (!person.yearOfDeath) {
            return Number(currentDate) - person.yearOfBirth;
        } else return (person.yearOfDeath - person.yearOfBirth)

    })
    console.log(age)
    const index = age.indexOf(Math.max(...age));
    console.log(people[index])
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;

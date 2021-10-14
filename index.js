// Code your solution here

const squad = ['Dana', 'Herbert', 'George', 'Daniel', 'Herbert']

function findMatching(array, identifier) {
    let drivers = array.filter(driver =>
         driver.toLowerCase() === identifier.toLowerCase()
    );
    return drivers;
}

console.log(findMatching(squad, 'Herbert'));

function fuzzyMatch(array, firstLetters) {
    let initial = array.filter(driver =>
        driver.slice(0, firstLetters.length).toLowerCase() === firstLetters.toLowerCase()
    );
    return initial;
}

console.log(fuzzyMatch(squad, 'dan'));

const crew = [
    {name: 'Dana', hometown: 'gleb'}, 
    {name: 'Herbert', hometown: 'gloob'}, 
    {name: 'Daniel', hometown: 'golb'}, 
    {name: 'Joshua', hometown: 'glab'}, 
    {name: 'Herbert', hometown: 'glub'}
]

function matchName(array, identifier) {
    let background = array.filter(driver =>
        driver.name.toLowerCase() === identifier.toLowerCase()
    );
    return background;
}

console.log(matchName(crew, 'herbert'));
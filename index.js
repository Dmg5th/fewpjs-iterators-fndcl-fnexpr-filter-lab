let drivers = ["Daniel", "Jim", "Tony", "Chris", "daniel"]


function findMatching(array, string){
    let newArray = array.filter(names =>  names.toLowerCase() === string.toLowerCase())
    return newArray 
}

function fuzzyMatch(array, string) {
    let newArray = array.filter(names => names.startsWith(string))
    return newArray   
}

function matchName(array, string){
    return array.filter(obj => obj.name === string)
}
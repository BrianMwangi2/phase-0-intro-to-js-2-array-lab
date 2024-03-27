// Write your solution here
let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
    return cats;
}
function destructivelyPrependCat() {
    let prependCat=cats.unshift("Bob");
    return [prependCat, cats];
}
function destructivelyRemoveFirstCat(){
   if (cats.length > 0) {
    cats.shift();
   }
}
    
function destructivelyRemoveLastCat(){
    if(cats.length > 1){
        cats.pop();
    }
}
function appendCat(){
    let appendedcats = [...cats,"Broom"]
    return appendedcats
}

function prependCat(){
    let prependedcats = ["Arnold", ...cats]
    return prependedcats
}

function removeLastCat(){
    let removedlastcat = cats.slice(0, cats.length -1)
    return removedlastcat
}

function removeFirstCat(){
    let removedfirstcat = cats.slice(1)
    return removedfirstcat
}
function cake(recipe, available){
    let count = 0; 
    while(true){
        for (let ing in recipe) {
            if(!available[ing]) {
                return count;
            } 
            if(available[ing] - recipe[ing] < 0){
                return count;

            }else {
                available[ing] -= recipe[ing] 
            }
        }

        count++;
    }

} 

console.log(cake({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
console.log(cake({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 

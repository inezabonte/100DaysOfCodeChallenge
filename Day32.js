function buildStaircase(height, block) {
    let result = []
    for(let i = 0; i < height; i++) {
       result[i] = [];
       for(let j = 0; j < height; j++) {
           result[i][j] = (i >= j ? block: '_');
       }

    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    } 
}
buildStaircase(4, "A");
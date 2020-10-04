
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = [];
    if (matrix === undefined || matrix.length == 0) {
        return [];
    } else {
    for (i=0; i <= matrix.length-1; i++){
        if ( (i+1)%2 !== 0 ){
            result = result.concat(matrix[i]);
        } else if ( (i+1)%2 == 0){
            result = result.concat(matrix[i].reverse());
        }
    }  
    return result;
    }

}

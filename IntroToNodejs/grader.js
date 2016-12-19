// Node Exercise 2
// Average Grade

function average(arr){
        var sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
        console.log(Math.round(sum/arr.length));
}

var score = [90, 98, 89, 100, 100, 86, 94];
average(score);

var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(score2);
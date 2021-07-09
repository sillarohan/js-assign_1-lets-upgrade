var count_3 = 0, count_5 = 0;

for (let i=1; i<=100; i++){
    str = "";

    count_3++;
    count_5++;

    if (count_3 == 3){
        str += "Fizz";
        console.log(str);
        count_3 = 0;
    }
    if (count_5 == 5){
        str += "Buzz";
        console.log(str);
        count_5 = 0;
    }

    if (str == ""){
        console.log(i);
    }
}
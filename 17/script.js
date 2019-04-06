//1.  Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

// var arr = [1,2,3,4,5];
// var i =0;
// function recArray(arr, i) {
//    document.write(arr[i]+'<br>');
//     i++;
//     if (i<arr.length) { 
//         recArray(arr, i);
//     }
// } 

// alert(recArray(arr, i));

//2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// alert(func (19));

// function func (a) {
//     var sum =0;
//     var arr = String(a).split('');

//     for (i=0;i<arr.length;i++) {
//       sum += Number(arr[i]);  
//     }

//     if(sum>9) {
//         func (sum);
//         sum=func (sum);
//     }

//     return sum; 
// }



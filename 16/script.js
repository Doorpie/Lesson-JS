//1.  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. 

// var str = 'привет мир';
// var result = [];
// var arr = str.split(' ');

// for(i=0;i<arr.length;i++) {
//     result.push(ucfirst(arr[i]));
// }

// var newArr = result.join(' ');
// alert(newArr);


// function ucfirst (str) {
//     return str[0].toUpperCase() + str.substr(1);
// }

//2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// var str = 'var_text_hello';
// var arr = [];

// var newStr = str.split('_');

// for(i=0;i<newStr.length;i++) {
//     if (i==0) {
//         arr.push(newStr[i]);
//     }
//     else {
//         arr.push(ucfirst(newStr[i]));}
// }

// var newArr = arr.join('');

//3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// var arr = ['a','b'];
// var str = 'a'

// function inArray (str, arr) {
//     for (i=0; i<arr.length; i++) {
//         return str === arr[i];
//     }
// }

// alert(inArray(str, arr));

//4.  Дана строка, например, '123456'. Сделайте из нее '214365'.

// var str = '123456';
// var arr = str.split('');
// var result = [];

// for (i=0; i<arr.length;i++){
//     if (arr[i]%2==0) {
//         result[i-1]=arr[i];
//     }
//     else{
//         result[i+1]=arr[i];
//     }
    
// }

// var newResult = result.join('');
// alert(newResult);



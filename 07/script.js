    //Работа с регистром символов
//1. Дана строка 'js'. Сделайте из нее строку 'JS'.

// var a = 'js';
// alert(a.toUpperCase());

//2. Дана строка 'JS'. Сделайте из нее строку 'js'.

// var a = 'JS';
// alert(a.toLowerCase());

    //Работа с length, substr, substring, slice. Работа с indexOf
//3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. 

// var a ='я учу javascript!';
// alert(a.length);

//4.Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). 

// var a ='я учу javascript!';

// alert(a.substr(2,15));
// alert(a.substring(2,18));
// alert(a.slice(2,18));

//5.  Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// var a ='я учу javascript!';
// alert(a.indexOf('учу'));

//6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

// var str = 'abcde'
// var n =3;
// var result;

// if(str.length>n) {
//     result = str.substr(0,n) + '...';
// }

// else {
//     result=str;
// }

// alert(result);

    //Работа с replace
//7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. 

// var a ='Я-учу-javascript!';
// alert(a.replace(/-/g, '!'));

    // Работа с split
//8.  Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// var a ='я учу javascript!';

// var arr = a.split(' ');
// alert(arr);

//9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива

// var a ='я учу javascript!';

// var arr = a.split('');
// alert(arr);

//10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// var data = '2025-12-31';
// var arr = data.split('-');
// var result = arr[2]+'.'+arr[1]+'.'+arr[0];
// alert(result);

    //Работа с join
//11.  Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

// var arr = ['я', 'учу', 'javascript', '!'];
// alert(arr.join('+'));

    //Задачи
//12. Преобразуйте первую букву строки в верхний регистр.

// var a = 'привет';

// alert(a.substr(0,1).toUpperCase()+a.substring(1));

//13. Преобразуйте первую букву каждого слова строки в верхний регистр.

// var a ='я учу javascript!';
// var arr = a.split(' ');
// var result='';
// for (i=0; i<arr.length;i++) {
//     result=result + ' ' + arr[i].substr(0,1).toUpperCase()+arr[i].substring(1);
// }
// alert(result);

//14.  Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

// var a = 'var_test_text';
// var arr = a.split('_');
// for(i=1; i<arr.length;i++){
//         arr[i] = arr[i].substr(0,1).toUpperCase()+arr[i].substring(1);
//     }

// alert(arr.join(''));
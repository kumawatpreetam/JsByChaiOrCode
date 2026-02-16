//Slice : It return part of string based on index last index can't added
//String Method work on Copy of original String
// let str = "PreetamKumawat";
// let strName = str.slice(0, 4);
// console.log(str);
// console.log(strName);

//substring : It return part of string based on index
let str1 = "PreetamKumawat";
let strName1 = str1.substring(1, -4);
console.log(str1);
console.log(strName1);

// differance

//In slice() method negative number work,If we pass negative number it count character from end

//substring() method can't work on negative number,If we pass negative number it consider as a 0

//substr() : It work on original string and it exterate a specific part from string

let str2 = "PreetamKumawat";

let strresult2 = str2.substr(0, 5);

console.log(str2);

console.log(strresult2);

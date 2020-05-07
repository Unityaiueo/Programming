'use struct';
      
//  console.log('hello');
//  console.log('hello');
 console.log("it's me");
 console.log("hel\nlo wor\tld");//\nで改行 \tでタブ一個空く
 console.log("hello"+"world");
 
console.log(typeof 'hello');//型を出力させる
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefine);//undefineは定義されていないという意味
console.log(typeof null);//nullは値がないということ0ではない

console.log('5' * 3);//計算可能
console.log('5' - '3');//上記と同じ
console.log('5' + 3);//文字列連結
console.log(parseInt('5',10)+ 3);//型変換10進数に変えている
console.log(parseInt('hello', 10));//NaNと表示される数値にしようとしたができなかったという意味
const price=1200;
console.log(price > 1000); 
console.log(price < 1000); 
console.log(price >= 1000); 
console.log(price <= 1000); 
console.log(price === 1000);
console.log(price !== 1000);


console.log(Boolean(0));//false
console.log(Boolean('hello'));//true

const score=85;
if (score >= 80) {
  console.log('Great!');
} else {
  console.log('OK...!');
}

score>=80 ? console.log('Great'):console.log('OK');


for (let i = 1; i <= 10; i++){
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`);//文字列に変数の値を埋め込む
}


for (let i = 1; i <= 10; i)
   if (i === 4) {
   if (i % 3 === 0) {
    continue;//条件に合致したときスキップする
   }
  if (i === 4) {
    break;//条件に合致した時にループを抜ける
  }
  console.log(i);
}

function showAd(message='Ad') {//仮引数
  console.log('----------');
  console.log('--- $(message) ---');
  console.log('----------');
}

showAd('Header Ad');//実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAd('Ad');
console.log('Steve is great!');
console.log('Richard isgreat!');
showAd('Fotter Ad');


function sum(a,b,c){
  return a+b+c;//関数内でreturnと書くとそれより下の処理は走らない
}
sum(1,2,3);
sum(3,4,5);
const total=sum(1,2,3)+sum(3,4,5);
console.log(total);

/*const sum=function(a,b,c){
  return a+b+c;
}

const total=sum(1,2,3)+sum(3,4,5);
console.log(total);*/



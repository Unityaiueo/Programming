'use strict'
{
  const scores=[80,90,40,70];//定数には配列の値変更なら可能
  scores.push(60,50);//末尾に挿入する処理
  scores.shift();//先頭に挿入する処理
  scores.splice(1,1,40,50);//splice(変化が開始する位置,削除数,追加する要素)
  console.log(scores[1]);
  console.log(scores.length);//配列の要素数を出す
  for(let i=0;i<scores.length;i++){
    console.log(`Score${i}: ${scores[i]}`);
  }
}
{
  const otherScores=[10,20];
  const scores=[80,90,40,70, ...otherScores];//スプレッド構文 ...でほかの配列を入れ込める
  console.log(scores);

  function sum(a,b){//上記の配列を引数で受け取って計算  
    console.log(a+b);
    
  }
  sum(...otherScores);
}
{
  const scores = [80, 90, 40, 70];
  const [a, b, c, d] = scores;//順番に定数に割り当ててくれる
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(a);
  let x=30;
  let y=70;
  [x,y]=[y,x];//交換
  console.log(x);
  console.log(y);
}
{
  const scores=[80,90,40,70];
  //scores.forEach(score) => {//for文を簡単にしたもの
  scores.forEach((score, index) => {//scoreと要素数を出力させる
  console.log(`Score ${index}: ${score}`);
});
  }

  {
    const prices = [180, 190, 200];
    //const updatedPrices = prices.map((price) => {
    // return price + 20;
    // });
    const updatedPrices = prices.map(price => price + 20);//配列に20プラスしたものを出力 mapを使う
    console.log(updatedPrices);
  }
  {
    const numbers = [1, 4, 7, 8, 10];
    const evenNumbers = numbers.filter(number => number%2===0);//fifterで条件に合うもののみ抽出する
    console.log(evenNumbers);
  }
  {
  const otherProps = {
    r: 4,
    color: 'red',
  };
  {
    const point = {
      y: 180,
      x: 100,
    ...otherProps,
    };
    point.x=120;
    point.z = 90;//プロパティの追加
    delete point.y;//プロパティの削除
    const{x,r, ...others}=point;
    console.log(x);
    console.log(r);
    console.log(others);
    console.log(point.x);//プロパティにアクセスする方法以下二つ
    console.log(point['y']);
  }
}
{
  const point={
    x:100,
    y:100,
  };
  const keys = Object.keys(point);//pointのすべてのキーを配列で取得変数keysに格納
  keys.forEach(key => {
    console.log(`Key: ${key} Value: ${point[key]}`);//文字列を入れる記法
  });
   const points = [//複数の座標管理
   {x: 30, y: 20},
   {x: 10, y: 50},
   {x: 40, y: 40},
 ];
 console.log(points[1].y);

}
{
let x = [1, 2];
let y = [...x];//yに1,2 をコピーする
x[0] = 5;
console.log(x); // [5, 2]
console.log(y); // [1, 2]
}
{
  const str = 'hello';
  console.log(str.length);//文字数取得
  console.log(str.substring(2,4));//substring(開始位置,終了位置
  console.log(str[1]);//配列の位置にアクセスできる
}
{
  const d = [2019, 11, 14];
  console.log(d.join('/'));//指定したもので区切る
  const t = '17:08:24';
  const [hour, minute, second] = t.split(':');//分割代入でそれぞれに入れる
  console.log(hour);
  console.log(minute);
  console.log(second);
}
{
  const scores = [10, 3, 9];
   let sum = 0;
   scores.forEach(score => {
   sum += score;
 });
 const avg = sum / scores.length;
 // console.log(sum);
 // console.log(avg);
 // console.log(Math.floor(avg)); // 7　小数点以下を切り捨て
 // console.log(Math.ceil(avg)); // 8　小数点以下を切り上げ
 // console.log(Math.round(avg)); // 7　四捨五入
 // console.log(avg.toFixed(3)); // 7.333　指定した小数点桁数にする
 console.log(Math.random());
}
{
  console.log(Math.floor(Math.random()*6)+1);
}
{
  const d = new Date();

  console.log(`${d.getMonth()+1} 月 ${d.getDate()}日`);//現在日時で出すgetMonthは0-11までなので+1する
  
}
{
  const d = new Date(2019, 10); // 2019/11/01 00:00:00
  d.setHours(10, 20, 30); // 2019/11/01 10:20:30
  d.setDate(31); // 2019/12/01 10:20:30 ない場合自動補正
  d.setDate(d.getDate() + 3); // 2019/12/04 10:20:30 三日後を取得
  console.log(d);
}
{
  alert('hello');//出てきたダイアログを消す

  const answer = confirm('削除しますか？');//confirmでユーザに確認を求める処理
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
}
{
  let i = 0;

  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(intervalId);//止まる
    }
  }

  const intervalId = setInterval(showTime, 1000);//１秒間隔で実行
}
{
  // const name = 'taguchi';
  const name = 5;

  try {
    console.log(name.toUpperCase());//大文字にする
  } catch (e) {
    console.log(e);//例外が生じた場合に走る処理
  }

  console.log('Finish!');
}
{
  class SponsoredPost {
  constructor(text,spnsore) {
    this.text = text;
    this.likeCount = 0;
    this.sponsor = sponsor;
  }

      show() {
    console.log(`${this.text} - ${this.likeCount}いいね`);
    console.log(`... sponsored by ${this.sponsor}`);
      }
      like(){
        this.likeCount++;
        this.show();
      }
      // thisは使えない
      // 静的メソッド
      static showInfo() {//インスタンスを介さずクラスから直接呼び出す静的メソッドthis使うことはできない
        console.log('Post class version 1.0');
 }
 
  }
  const posts = [
    //new Post('JavaScriptの勉強中…'),
    //new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
    
   /* {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      show:function(post) {
    console.log(`${this.text} - ${this.likeCount}いいね`);//同じオブジェクト内ならthisでおｋ
    },
  },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show:function(post) {
    console.log(`${this.text} - ${this.likeCount}いいね`);
    },
  },*/
  ];
  posts[2].show();
posts[2].like();
  Post.showInfo();
  posts[0].like();
  posts[0].show();
  posts[1].show();
}


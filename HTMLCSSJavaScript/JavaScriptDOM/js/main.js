'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const item0=document.querySelectorAll('li')[0];
    const copy=item0.cloneNode(true);//cloneNodeでtrueで複製
    const ul=document.querySelector('ul');
    const item2=document.querySelectorAll('li')[2];
    ul.insertBefore(copy,item2);
    /*const item2=document.createElement('li');
    item2.textContent='item 2';
    const ul = document.querySelector('ul');//ul要素を取得する
    ul.appendChild(item2);//要素の末尾にitem2を追加*/
    //EventListerで第一引数にイベントの種類を文字列で渡す
     //const targetNode = document.getElementById('target');
     /*targetNode.title = 'This is title!';
     targetNode.style.color = 'red';
     targetNode.style.backgroundColor = 'skyblue';
     targetNode.textContent = 'Changed!';*/
     //targetNode.className = 'my-color my-border';//クラス属性を扱いたいときはNameをつけなくてはならない
     /*if(targetNode.classList.contains('my-color')===true){
       targetNode.classList.remove('my-color');
     }else{
       targetNode.classList.add('my-color');
     }*/
    // targetNode.classList.toggle('my-color');//toggleは二つの状態を切り替える処理
    //targetNode.textContent=targetNode.dataset.translation;//クラス属性とカスタム属性はsetをつけなくてはならない
  });
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
   /* document.getElementById('target').textContent='Changed!';
    document.querySelectorAll('p').forEach((p,index)=>{//pの要素をすべて取得
      p.textContent=`${index}番目のpです`;*/
 // setTimeout(update, 1000);//updateを1秒後に呼び出す

}
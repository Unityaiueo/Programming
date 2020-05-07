'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n=Math.random();
    if(n <0.05){
      btn.textContent='大吉';//5%で出る
    }else if(n<0.2){
      btn.textContent='中吉';//15%で出る
    }else{
      btn.textContent='凶';//80%で出る
    }
    //const results=['大吉','中吉','凶','末吉'];
    //const results=['大吉','大吉','大吉','大吉','凶'];
   // const n =Math.floor(Math.random() * results.length); 
    //btn.textContent=results[n];
    //btn.textContent=results[Math.floor(Math.random() * results.length)];//要素数を入れると楽

    // btn.textContent = n;

    /*switch (n) {
      case 0:
        btn.textContent = '大吉';
        break;
      case 1:
        btn.textContent = '中吉';
        break;
      case 2:
        btn.textContent = '凶';
        break;
    }*/
  });
}
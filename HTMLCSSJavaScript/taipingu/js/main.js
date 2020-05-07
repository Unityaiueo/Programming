'use strict';
{
  const words=[
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];
  let word;
  let loc;
  let score;
  let miss;
  let startTime;
  const timeLimit=3*1000;
  let isPlaying=false;
  const target=document.getElementById('target');
  const scoreLabel=document.getElementById('score');
  const missLabel=document.getElementById('miss');
  const timerLabel=document.getElementById('timer');
  

  function updateTarget(){
    let placeholder='';//underbar格納
    for(let i=0;i<loc;i++){
      placeholder+='_';
    }
    target.textContent=placeholder+word.substring(loc);//部分文字列渡した引数のその位置から最後までの文字列を返す

  }
  function updateTimer(){
    const timeLeft=startTime+timeLimit-Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);//小数点以下二桁まで表示
    const timeoutId=setTimeout(()=>{
      updateTimer();
    },10);

    if(timeLeft<0){
      isPlaying=false;
      clearTimeout(timeoutId);
      timerLabel.textContent='0.00';
      setTimeout(()=>{
        showResult();
       // alert('Game Over');
      },100)

      target.textContent='click to replay';
    }
  }

  function showResult(){
    const accuracy=score*miss===0?0:score/(score+miss)*100;
    alert(`${score}letters,${miss} misses,${accuracy.toFixed(2)}% accuracy`);
  }
  window.addEventListener('click',()=>{
    if(isPlaying===true){
      return;//以降の処理をしたくないため
    }
    isPlaying=true;
    loc=0;
    score=0;
    miss=0;
    scoreLabel.textContent=score;
    missLabel.textContent=miss;
    word=words[Math.floor(Math.random()*words.length)];
    target.textContent=word;
    startTime=Date.now();
    updateTimer();
  })
  window.addEventListener('keydown',e=>{//引数に入ってきたものを表示今回はタイピングしてもらったもの
    if(isPlaying===false){
      return;
    }
    console.log(e.key);
    if(e.key===word[loc]){//wordのloc番目
    loc++; 
     if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
    updateTarget();
    score++;
    scoreLabel.textContent=score;
    }else{
      miss++;
      missLabel.textContent=miss;
    }
  });
}

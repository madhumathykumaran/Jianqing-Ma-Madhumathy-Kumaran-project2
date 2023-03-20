import { toast } from 'react-toastify';
import words from '../../words.js';
import totalWords from '../../total-words-medium.js';
import { Modal } from  'bootstrap';
import statsjson from '../../stats.json';

  let CurBox=0;
  let CurRow=1;
  let guessword="APPLE";//temp
  var colorMap = new Map();
  //export var statistics={"TotalPlayed":5,"Win":3,"Loss":2,"Streak":1,"MaxStreak":1,"Guess":[0,2,0,1,0,0]};

  export function handleKeyDown(key){
    key=''+key.toUpperCase();
    if(CurRow<7){
      console.log("--->"+key);
      if(key.match('ENTER')){
        submitclicked();
        return;
      }
      if(key.match('BACKSPACE')){
        delclicked();
        return;
      }
      if(key.match(/^[A-Z]$/)!=null){
        buttonclickedd(key);
        return;
      }
    }
  }

  export function buttonclicked(e) {
    if(CurBox<6 && CurRow<7){
      console.log("---->"+e.target.value);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );

      allWithClass[CurBox].innerHTML=e.target.value;
      CurBox++;
    }
  }

  export function buttonclickedd(e) {
    if(CurBox<6){
      //console.log(CurRow);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      allWithClass[CurBox].innerHTML=e;
      CurBox++;
    }
  }

  export function changeKeyColor(key, color) {
    //console.log("Key, Color",key, ", "+ color);
    var r = document.querySelector(':root');
    var theme=document.documentElement.getAttribute("data-theme");
    if(theme==='dark'){
        r= document.querySelector('[data-theme=dark]');
    }
    
    var rs = getComputedStyle(r);
    const keyDiv=document.getElementById(key);

    if(colorMap.has(key)){
      if(color==='--color-correct'){
        colorMap.set(key,color);
        //console.log("map",colorMap);
        keyDiv.style.backgroundColor="var("+color+")";
      }
    }else{
      colorMap.set(key,color);
      //console.log("map",colorMap);
      keyDiv.style.backgroundColor="var("+color+")";
    }

  }

  export function submitclicked() {
    let typeWord=getTypedWord();
    const allWithClass = Array.from(
      document.getElementsByClassName('line'+CurRow)
    );

    if(CurBox<6){
      if(CurRow>6){
        return;
      }
      toast.warn('Not Enough Letters!', { position: "top-center", autoClose: 500, 
      hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined});
      
    }else{
      console.log(typeWord);
      if(typeWord===guessword){
        console.log("correct");

        toast.success('🦄 Congrats! You Won', { position: "top-right", autoClose: 800, hideProgressBar: true, 
        closeOnClick: true, pauseOnHover: false,draggable: true, progress: undefined, theme: "light", });

        var myModal = new Modal(document.getElementById("statistics-modal"), {});
        myModal.show();
        CurRow=7;

      }else{
        if(totalWords.includes(typeWord)){
          console.log("continue........");
        }else{
          console.log("return..Not in Wordlist");

          toast.error('Not in Wordlist!', { position: "top-center", autoClose: 500, hideProgressBar: true, 
          closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined});
          return;
        }        
      }

      let tempGuess=guessword;
      let temptype=typeWord;
      var r = document.querySelector(':root');
        var theme=document.documentElement.getAttribute("data-theme");
        if(theme==='dark'){
            r= document.querySelector('[data-theme=dark]');
        }
      var rs = getComputedStyle(r);
      for(let i=0;i<6;i++){
        if(typeWord.charAt(i)===guessword.charAt(i)){
          allWithClass[i].style.backgroundColor = "var(--color-correct)";
          tempGuess = tempGuess.split('');
          tempGuess[i] = ' ';
          tempGuess = tempGuess.join('');
          temptype = temptype.split('');
          temptype[i] = ' ';
          temptype = temptype.join('');
          //console.log("m tempGuess",tempGuess);
          //console.log("m temptype:",temptype);
          changeKeyColor(typeWord.charAt(i), "--color-correct");
        }
        
      }
      for(let i=0;i<6;i++){
        
        if(temptype.charAt(i)!==' ') {
          if(tempGuess.indexOf(typeWord.charAt(i))>-1){
            let indx=tempGuess.indexOf(typeWord.charAt(i));
            allWithClass[i].style.backgroundColor = "var(--color-present)";
            tempGuess = tempGuess.split('');
            tempGuess[indx] = ' ';
            tempGuess = tempGuess.join('');
            temptype = temptype.split('');
            temptype[i] = ' ';
            temptype = temptype.join('');
            changeKeyColor(typeWord.charAt(i), "--color-present");
          }else{
            
              temptype = temptype.split('');
              temptype[i] = '-';
              temptype = temptype.join('');
             
            
          }
          //console.log("tempGuess:",tempGuess);
          //console.log("temptype:",temptype);
        }
      }
      for(let i=0;i<6;i++){
        if(temptype.charAt(i)==='-'){
          changeKeyColor(typeWord.charAt(i), "--color-absent");
          allWithClass[i].style.backgroundColor = "var(--color-absent)";
        }
      }

      CurBox=0;
      CurRow=CurRow+1;
      console.log("return........",CurRow);
      if(CurRow==7){
          var myModal = new Modal(document.getElementById("statistics-modal"), {});
          myModal.show();
          toast.error('Game Over!', { position: "top-right", autoClose: 800, hideProgressBar: true, 
        closeOnClick: true, pauseOnHover: false,draggable: true, progress: undefined, theme: "light", });
      }
      
    }
    
  }
  
  export function delclicked() {
    if(CurBox>0){
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      allWithClass[CurBox-1].innerHTML="";
      CurBox--;
    }    
  }

  export function getTypedWord() {
    let typeWord="";
    const allWithClass = Array.from(
      document.getElementsByClassName('line'+CurRow)
    );
    for(let i=0;i<CurBox;i++){
      typeWord+=allWithClass[i].innerHTML;
    }
    return typeWord;
  }

  export function themeButton() {
    const theme=localStorage.getItem("theme");
    if(theme==="dark"){
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }else{
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }   
  }

  export function colorBlindButton() {
    const colorBlind=localStorage.getItem("color-blind");
    if(colorBlind==="yes"){
      localStorage.setItem("color-blind", "no");
      document.documentElement.setAttribute("color-blind", "no");
    }else{
      localStorage.setItem("color-blind", "yes");
      document.documentElement.setAttribute("color-blind", "yes");
    }
    
  }

  // export function hardmodeButton() {
  //   const mode=localStorage.getItem("mode");
  //   if(mode==="hard"){
  //       localStorage.setItem("mode", "normal");
  //   }else{
  //       localStorage.setItem("mode", "hard");
  //   }   
  // }

  export function initialFunction() {
    const theme=localStorage.getItem("theme");
    if(theme==="dark"){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById('darkThemeSwitch').checked=true;
    } else{
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById('darkThemeSwitch').checked=false;
    }
    
    const colorBlind=localStorage.getItem("color-blind");
    if(colorBlind==="yes"){
        document.documentElement.setAttribute("color-blind", "yes");
        document.getElementById('highContrastMode').checked=true;
    } else{
        document.documentElement.setAttribute("color-blind", "no");
        document.getElementById('highContrastMode').checked=false;
    }
     
    // const mode=localStorage.getItem("mode");
    // if(mode==="hard"){
    //   document.getElementById('hardModeSwitch').checked=true;
    // }else{
    //   document.getElementById('hardModeSwitch').checked=false;
    // }
    // const date=localStorage.getItem("date");
    // var today = new Date().toLocaleDateString();
    const random = Math.floor(Math.random() * totalWords.length);
      guessword=totalWords[random].toUpperCase();
      console.log("guessword:"+guessword);
      localStorage.setItem("guessword", guessword);
  }

  export function onWordChange() {
    const random = Math.floor(Math.random() * totalWords.length);
    guessword=totalWords[random].toUpperCase();
    console.log("guessword:"+guessword);
    localStorage.setItem("guessword", guessword);
    CurBox=0;
    CurRow=1;
    for(let i=1;i<7;i++){
      const allWithClass = Array.from(document.getElementsByClassName('line'+i));
      for (let i=0; i<6; i++){
        allWithClass[i].innerHTML = "";
        allWithClass[i].style.backgroundColor = "";
      }
    }
    colorMap.forEach((value, key) => {
      const keyDiv=document.getElementById(key);
      keyDiv.style.backgroundColor="";
    });
    colorMap = new Map();
  }



  
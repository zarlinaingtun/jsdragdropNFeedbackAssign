//UI
const h2=document.getElementById('h2');
const emojicontainer=document.querySelector('.emoji-container'),
emojicontainer1=document.querySelector('#emoji-container1'),
emojicontainer2=document.querySelector('#emoji-container2');

const feedbackcontainer=document.querySelector('.feedback-container'),
feedbackcontainer1=document.querySelector('#feedback-container1'),
feedbackcontainer2=document.querySelector('#feedback-container2');

const nextbtn=document.querySelector('#nextbtn');
const nextbtn1=document.querySelector('#nextbtn1');
const nextbtn2=document.querySelector('#nextbtn2');
const endbtn=document.querySelector('#end');


const fills=document.querySelectorAll('.fill');



const bad=document.querySelector('.badfill'),
unsatisfied=document.querySelector('.unsatisfiedfill'),
satisfied=document.querySelector('.satisfiedfill'),
good=document.querySelector('.goodfill');

const bad1=document.querySelector('.badfill1'),
unsatisfied1=document.querySelector('.unsatisfiedfill1'),
satisfied1=document.querySelector('.satisfiedfill1'),
good1=document.querySelector('.goodfill1');

const bad2=document.querySelector('.badfill2'),
unsatisfied2=document.querySelector('.unsatisfiedfill2'),
satisfied2=document.querySelector('.satisfiedfill2'),
good2=document.querySelector('.goodfill2');


const feedbackemoji=document.querySelector('.feedbackemoji'),
feedbackemoji1=document.querySelector('#feedbackemoji1'),
feedbackemoji2=document.querySelector('#feedbackemoji2');


const stars=document.querySelectorAll('.fa-star');
let countstars=0;
stars.forEach(star=>{
    star.addEventListener('click',()=>{
       if(star.classList.contains('far')){
           star.classList.replace('far','fas');
           countstars++;

       }
       else{
           star.classList.replace('fas','far'); 
       }
    })  
  
});

let dragemoji='';
bad.addEventListener('dragstart',baddragstart);
bad.addEventListener('dragend',baddragend);

unsatisfied.addEventListener('dragstart',usdragstart);
unsatisfied.addEventListener('dragend',usdragend);

satisfied.addEventListener('dragstart',sdragstart);
satisfied.addEventListener('dragend',sdragend);

good.addEventListener('dragstart',gooddragstart);
good.addEventListener('dragend',gooddragend);

bad1.addEventListener('dragstart',baddragstart);
bad1.addEventListener('dragend',baddragend);

unsatisfied1.addEventListener('dragstart',usdragstart);
unsatisfied1.addEventListener('dragend',usdragend);

satisfied1.addEventListener('dragstart',sdragstart);
satisfied1.addEventListener('dragend',sdragend);

good1.addEventListener('dragstart',gooddragstart);
good1.addEventListener('dragend',gooddragend);

bad2.addEventListener('dragstart',baddragstart);
bad2.addEventListener('dragend',baddragend);

unsatisfied2.addEventListener('dragstart',usdragstart);
unsatisfied2.addEventListener('dragend',usdragend);

satisfied2.addEventListener('dragstart',sdragstart);
satisfied2.addEventListener('dragend',sdragend);

good2.addEventListener('dragstart',gooddragstart);
good2.addEventListener('dragend',gooddragend);

function baddragstart(){
    dragemoji="bad";
    this.classList.add('hold');
}
function baddragend(){
    this.classList.remove('hold');
    emojicontainer.classList.add('hide');
    emojicontainer1.classList.add('hide');
    emojicontainer2.classList.add('hide');
}


function usdragstart(){
    dragemoji="unsatisfied";
    this.classList.add('hold');
}
function usdragend(){
    this.classList.remove('hold');
    emojicontainer.classList.add('hide');
    emojicontainer1.classList.add('hide');
    emojicontainer2.classList.add('hide');
}

function sdragstart(){
    dragemoji="satisfied";
    this.classList.add('hold');
}
function sdragend(){
    this.classList.remove('hold');
    emojicontainer.classList.add('hide');
    emojicontainer1.classList.add('hide');
    emojicontainer2.classList.add('hide');
}

function gooddragstart(){
    dragemoji='good';
    this.classList.add('hold');
}
function gooddragend(){
    this.classList.remove('hold');
    emojicontainer.classList.add('hide');
    emojicontainer1.classList.add('hide');
    emojicontainer2.classList.add('hide');
}

feedbackemoji.addEventListener('dragenter',dragenter);
feedbackemoji.addEventListener('dragleave',dragleave);
feedbackemoji.addEventListener('dragover',dragover);
feedbackemoji.addEventListener('drop',dragdrop);

feedbackemoji1.addEventListener('dragenter',dragenter);
feedbackemoji1.addEventListener('dragleave',dragleave);
feedbackemoji1.addEventListener('dragover',dragover);
feedbackemoji1.addEventListener('drop',dragdrop);

feedbackemoji2.addEventListener('dragenter',dragenter);
feedbackemoji2.addEventListener('dragleave',dragleave);
feedbackemoji2.addEventListener('dragover',dragover);
feedbackemoji2.addEventListener('drop',dragdrop);

function dragenter(e){
    e.preventDefault();
    this.classList.add('hovered');
}
function dragleave(e){
    e.preventDefault();
    this.classList.remove('hovered');
}

function dragover(e){
    e.preventDefault();
   
}

let selectedEmoji=[];
let empty=[];
let countedStar=[];
function dragdrop(){
    this.classList.remove('hovered');
    if(dragemoji==='bad'){
        selectedEmoji.push('bad');
        this.appendChild(bad);
    }
    else if(dragemoji==='unsatisfied'){
        selectedEmoji.push('unsatisfied');
        this.appendChild(unsatisfied);
    }
    else if(dragemoji==='satisfied'){
        selectedEmoji.push('satisfied');
        this.appendChild(satisfied);
    }
    else{
        selectedEmoji.push('good');
        this.appendChild(good);
    }
  
}

let index=1;
nextbtn.addEventListener('click',()=>{
    
    feedbackcontainer1.classList.remove('hide');
    feedbackcontainer.classList.add('hide');
    feedbackcontainer2.classList.add('hide');

  
    emojicontainer1.classList.remove('hide');
    

    // console.log(selectedEmoji);
    // console.log(countstars);
    countedStar.push(countstars);
    countstars=0;
 });
 nextbtn1.addEventListener('click',()=>{
    feedbackcontainer1.classList.add('hide');
    feedbackcontainer.classList.add('hide');
    feedbackcontainer2.classList.remove('hide');

    emojicontainer2.classList.remove('hide');

    countedStar.push(countstars);
    countstars=0;
 });

 endbtn.addEventListener('click',()=>{

  
    countedStar.push(countstars);
    countstars=0;
    // console.log(countedStar);
   
    h2.innerText="Sent Feedback!";
    console.log(selectedEmoji);


 
    feedbackcontainer2.innerHTML=`
    <div class="endtitle"><i class="fas fa-heart fa-2x"></i> <span id="endtitle">Thank You For Giving Time</span> <i class="fas fa-heart fa-2x"></i></div>
    <div class="endfeedback"><strong><span class="type">Customer Service :</span><span class="selectedemoji">${selectedEmoji.shift()}</span></strong>
    <span class="endstar">${countedStar.shift()} stars<i class="far fa-star"></i></span>
    </div>
    <div  class="endfeedback"><strong><span class="type">Taste :</span><span class="selectedemoji">${selectedEmoji.shift()}</span></strong>
    <span class="endstar">${countedStar.shift()} stars<i class="far fa-star"></i></span></div>
    <div  class="endfeedback"><strong><span class="type">Decoration :</span><span class="selectedemoji">${selectedEmoji.shift()}</span></strong>
    <span class="endstar">${countedStar.shift()} stars<i class="far fa-star"></i></span></div>
    <button id="end" onclick="location.reload()">Reload</button>`;

 })









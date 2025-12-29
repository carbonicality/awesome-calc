//wavy text and title colours
const title = document.getElementById('title');
const lines = ['awesome','calculator'];
const colours=['#ff4444','#ff9944','#ffff66','#44ff44','#4477ff'];

let colourIdx = 0;
lines.forEach((line)=>{
    const lineDiv=document.createElement('div');
    line.split('').forEach((char,charIdx)=>{
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay=`${charIdx*0.1}s`;
        span.style.color=colours[colourIdx % colours.length];
        lineDiv.appendChild(span);
        colourIdx++;
    });
    title.appendChild(lineDiv);
});

//make input lbs wavy wowwie zoinks so cool.
const labels = document.querySelectorAll('.input-lb');
labels.forEach(lb => {
    const text = lb.textContent;
    lb.textContent='';
    let charIdx=0;
    Array.from(text).forEach(char => {
        const span = document.createElement('span');
        span.textContent=char;
        span.style.animationDelay = `${charIdx*0.05}s`;
        span.classList.add('wave-char');
        if (char === ' ') {
            span.style.width = '0.3em';
        }
        lb.appendChild(span);
        charIdx++;
    });
});

//more button stuff
const moreBtn = document.querySelector('.more-btn');
moreBtn.addEventListener('click', ()=>{
    document.body.innerHTML = '';
    document.body.style.background = '#fff';
    document.body.style.overflow = 'auto';
    document.body.style.display='flex';
    document.body.style.justifyContent='center';
    const textCont = document.createElement('div');
    textCont.style.fontFamily='comic-sans';
    textCont.style.color='#000';
    textCont.style.padding = '40px';
    textCont.style.fontSize='18px';
    textCont.style.maxWidth = '800px';
    textCont.style.textAlign='center';
    textCont.style.margin = '0 auto';
    textCont.style.lineHeight = '1.6';
    textCont.innerHTML = `
    <h3>more info wowwwwie (credits)</h3>
    <li>deaen - made the original <a href="https://deaen.itch.io/awesomecalculator" target="_blank" style="color:blue;text-decoration:underline;">awesome calculator</a> which is what this project is HEAVILY inspired by</li>
    <li>carbon - made this version for the fudge YSWS</li>
    <li>oh yeah and press ENTER to go back to the actual calculator</li>`;
    document.body.appendChild(textCont);
});

document.addEventListener('keydown',(e)=>{
    if (e.key==='Enter') {
        location.reload();
    }
});

//answer functionality
const answerBtn = document.querySelector('.answer-btn');
answerBtn.addEventListener('click',()=>{
    const fd1 = document.querySelectorAll('.ginput.left .calc-input')[0].value;
    const fd2 = document.querySelectorAll('.ginput.left .calc-input')[1].value;
    const operator = document.querySelectorAll('.ginput')[1].querySelector('.calc-input').value;
    const sd1 = document.querySelectorAll('.ginput.right .calc-input')[0].value;
    const sd2 = document.querySelectorAll('.ginput.right .calc-input')[1].value;
    const num1 = parseInt(fd1+fd2);
    const num2 = parseInt(sd1+sd2);
    let res;
    if (operator === '+') res = num1+num2;
    else if (operator === '-') res = num1-num2;
    else if (operator === '/') res = num1/num2;
    else if (operator === '*') res = num1*num2;
    //special handling
    let displayRes = res;
    if (res===67) {
        displayRes='no.'// ANTI six seven.
    } else if (num1 === 9 && num2 === 10 && operator === '+') {
        displayRes='21';
    }
    document.body.innerHTML = '';
    document.body.style.background ='#fff';
    document.body.style.overflow='auto';
    document.body.style.display='flex';
    document.body.style.flexDirection='column';
    document.body.style.justifyContent='center';
    document.body.style.alignItems='center';
    document.body.style.minHeight='100vh';
    const resultCont = document.createElement('div');
    resultCont.style.fontFamily='comic-sans';
    resultCont.style.color = '#000';
    resultCont.style.fontSize = '72px';
    resultCont.style.textAlign='center';
    resultCont.textContent=displayRes;
    const backTxt = document.createElement('div');
    backTxt.style.fontFamily='comic-sans';
    backTxt.style.color = '#666';
    backTxt.style.fontSize='14px';
    backTxt.style.textAlign='center';
    backTxt.textContent = '(press ENTER to go back to the calculator)';
    document.body.appendChild(resultCont);
    document.body.appendChild(backTxt);
});
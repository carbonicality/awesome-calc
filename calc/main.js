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
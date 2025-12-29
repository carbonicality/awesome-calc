//achievement code
const achs={
    first: {unlocked:false,title:'wow! first click!',desc:'perform your very cool VERY FIRST click!'}
}

let calcCount = 0;
function showAch(key) {
    if (achs[key].unlocked) return;
    achs[key].unlocked = true;
    const ach = achs[key];
    const targetDoc = window.parent !== window?window.parent.document :document;
    const achDiv = targetDoc.createElement('div');
    achDiv.className = 'notification';
    achDiv.innerHTML = `
    <div class="noti-icon"></div>
    <div class="noti-txt">
        <div class="noti-tl">${ach.title}</div>
        <div class="noti-desc">${ach.desc}</div>
    </div>`;
    targetDoc.body.appendChild(achDiv);
    setTimeout(()=>achDiv.classList.add('show'),100);
    setTimeout(() => {
        achDiv.classList.remove('show');
        setTimeout(()=>achDiv.remove(),400);
    },4000);
}
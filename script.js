const msgbox=document.querySelector('.msgbox');
const msgboxWin=document.querySelector('.msgbox-win');
const msgboxClose=document.querySelector('.msgbox .title-btn.close');
const msgboxOk=document.querySelector('.msgbox-btn');
const mainWin=document.querySelector('.window:not(.msgbox-win)');
mainWin.classList.add('hidden');

function closeMsg() {
    msgbox.style.animation='winOut1 0.2s ease-out';
    msgboxWin.style.animation='winOut2 0.2s ease-out';
    setTimeout(()=>{
        msgbox.style.display='none';
        mainWin.style.animation='winIn2 0.3s ease-out';
        mainWin.classList.remove('hidden');
    },200);
}

msgboxClose.addEventListener('click',closeMsg);
msgboxOk.addEventListener('click',closeMsg);
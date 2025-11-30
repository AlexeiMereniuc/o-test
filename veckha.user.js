// ==UserScript==
// @name Вечка
// @version 1.0
// @description
// @author Винни Пух
// @match *://*.vk.com/app2207620*
// @match *://ok.ru/game/mafia-rules*
// @grant none
// @license MIT

// ==/UserScript==
setTimeout(() => {
  for(var i=0; i<document.getElementsByTagName('iframe').length; i++)
  if(document.getElementsByTagName('iframe')[i].src.search('www.mafia-rules')!=-1) {
    
    const url = document.getElementsByTagName('iframe')[i].src.replace(/https/, 'https');

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.55)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 999999;
    overlay.style.padding = '20px';
    
    const linkBox = document.createElement('div');
    linkBox.innerText = url;
    linkBox.style.background = 'white';
    linkBox.style.padding = '20px';
    linkBox.style.borderRadius = '12px';
    linkBox.style.fontSize = '18px';
    linkBox.style.maxWidth = '90vw';
    linkBox.style.wordBreak = 'break-all';
    linkBox.style.cursor = 'pointer';
    linkBox.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
    linkBox.style.textAlign = 'center';

    linkBox.onclick = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                linkBox.innerText = "Скопировано!";
                setTimeout(() => document.body.removeChild(overlay), 700);
            })
            .catch(() => {
                linkBox.innerText = "Ошибка копирования!";
                setTimeout(() => document.body.removeChild(overlay), 700);
            });
    };

    overlay.appendChild(linkBox);
    document.body.appendChild(overlay);
}
}, 2000);

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
  for (var i = 0; i < document.getElementsByTagName('iframe').length; i++) {
    const iframe = document.getElementsByTagName('iframe')[i];
    if (iframe.src.includes('www.mafia-rules')) {
      prompt("vechka", iframe.src.replace(/https/, 'https'));
    }
  }
}, 2000);

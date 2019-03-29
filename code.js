const chars = {ᴀ: 'A', ʙ: 'B', ᴄ: 'C', ᴅ: 'D', ᴇ: 'E', ꜰ: 'F', ɢ: 'G', ʜ: 'H', ɪ: 'I', ᴊ: 'J', ᴋ: 'K', ʟ: 'L', ᴍ: 'M', ɴ: 'N', ᴏ: 'O', ᴩ: 'P', Q: 'Q', ʀ: 'R', ꜱ: 'S', ᴛ: 'T', ᴜ: 'U', ᴠ: 'V', ᴡ: 'W', x: 'X', Y: 'Y', ᴢ: 'Z'};

let regexSmallCaps = /[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩQʀꜱᴛᴜᴠᴡxYᴢ]/g;
// let str = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩQʀꜱᴛᴜᴠᴡxYᴢ';
// console.log(str.replace(regexSmallCaps, m => chars[m]));

let tweets = document.getElementsByClassName('tweet-text');
for (let i = 0; i < tweets.length; i++){
  // if (tweets[i].innerHTML.match(/\u1D00/)){
    tweets[i].innerHTML = tweets[i].innerHTML.replace(regexSmallCaps, m => chars[m]);
  // }

}


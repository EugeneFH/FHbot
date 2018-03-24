console.log("Its okay");
const Discord = require('discord.js');
const FHbot = new Discord.Client();

FHbot.login("NDI1OTQ1NDE0ODMxOTY0MTgz.DZO0Gw.DHmdr2ypUfJUkksMamVaRfSeISQ");

FHbot.on('message', (message)=>{
    if(message.content == "!FHhelp") {
        message.delete();
        message.reply("Полезная информация о сервере: \n Наша группа ВК: <https://vk.com/flaminghalo> \n Наш Discord: <https://discord.gg/E4X6nhF> \n Сайт проекта: <http://flaminghalo.ru> \n Форум: <http://forum.flaminghalo.ru> \n Скоро открытие, следите за новостями :D");
    }
});

function func() {
    FHbot.on('message', (message)=>{
        if(message.content == "!FHavatar") {
            message.delete();
            message.author.avatarURL();
        }
    })
};

setTimeout(func, 1000);
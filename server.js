const Discord = require('discord.js');
const fetch = require('node-fetch');
var schedule = require('node-schedule');

const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)

client.on('ready', () => {

  var rule = new schedule.RecurrenceRule();
  rule.minute = 0;
  rule.hour = [14,19,20,1,3,4,5,9,12,2,6,7,8];
  
  var j = schedule.scheduleJob(rule, function() {
    client.channels.get('552178125836910601').send("Automated message");
  })
})
client.on('message', msg => {
	if (msg.author.bot) return;
  const user = msg.author;
	const message = msg.content.toLowerCase();  
  
  if (message.includes('venta')){
    fetch("https://api.dashblock.io/data?api_key=c0398c90-ba39-11e9-baa7-a573576772fc", {
      body: "{\"url\": \"https://codecanyon.net/item/social-match-pro-premium-dating-script/reviews/11281271\", \"modelId\": \"s5wRFuI_s\"}",
      headers: {
          "Content-Type": "application/json"
      },
      method: "POST"
    }).then(res => res.json())
    .then(json => 
      msg.reply(json['entities'][0]['ventas'] +' vendidos en CodeCanyon 💰💰💪')
    );
  }
     
  if (message.includes('kd')){
      if(user.username == 'Xohan'){
        msg.reply('Xohan ya no estas pa esa, no te quemes 💪')
        msg.react('💰');
      } else {
         msg.reply('Arranca, arranca')
      }    
     
  }
  
  if (message.includes('charlar')){
      msg.channel.send('Yo estoy pa charlar')
      msg.react('💰');
  } 
  if (message.includes('clips.twitch')){
      msg.react('💰');
  }   

  if (message.includes('tejo')){
      if(user.username == 'Xohan'){
        msg.reply('Respeto los rangos')
      } else {
        msg.reply('En el culo te la dejo')
      }
  }
  
  if (message.includes('meche')){
      if(user.username == 'Xohan'){
        msg.reply('Respeto los rangos')
      } else {
        msg.reply('El que te llenó el culo de leche')
      }
  }
  
  if (message.includes('hola')){
      if(user.username != 'Xohan'){
        msg.reply('Tu nariz contra mis bolas')
      }
  }  
  
  if (message.includes('asfsafasdawqfasfsafasdawdagwgad')){
      msg.channel.send(`${user.username}`)
  }  
  
  
})
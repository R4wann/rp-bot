const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDk1OTI2NDY2OTU4MTk2NzM2.DpJLXQ.Pw4fivkHu8ye2b3PTe1PWqwo2O0')

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send("Bienvenue sur mon serveur " + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

  bot.on('message', message => {
    if (message.content === "!ping") {
      message.reply("pong !")
    }
  })

  bot.on('message', message => {
    if (message.content === "!Dis moi qui est nul ?") {
      message.reply(":wtf:")
    }
  })

    bot.on('message', message => {
        if (message.content.startsWith("!play")) {
          // On récupère le premier channel audio du serveur
          let voiceChannel = message.guild.channels
            .filter(function (channel) { return channel.type === "voice" })
            .first()
          // On récupère les arguments de la commande 
          // il faudrait utiliser une expression régulière pour valider le lien youtube
          let args = message.content.split(' ')
          // On rejoint le channel audio
          voiceChannel
            .join()
            .then(function (connection) {
              // On démarre un stream à partir de la vidéo youtube
              let stream = YoutubeStream(args[1])
              stream.on('error', function () {
                message.reply("Je n'ai pas réussi à lire cette vidéo :(")
                connection.disconnect()
              })
              // On envoie le stream au channel audio
              // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
              connection
                .playStream(stream)
                .on('end', function () {
                  connection.disconnect()
                })
            })
        }
      
      })

      bot.on('message', message => {
        if (message.content === "!suis-je rp ?") {
          message.reply("Je ne sais point demande au membre du staff.")
        }
      })

      bot.on('message', message => {
        if (message.content === "!comment creer son bot") {
          message.reply("cherche sur internet,ou demande a Rawann.")
        }
      })

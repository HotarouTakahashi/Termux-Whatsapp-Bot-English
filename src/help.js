const help = (prefix) => {
	return `👋️ Konnichiwa! I'm Houtarou
	I'm bot. The usable commands are listed below
	
	🌟️ *𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 🌟️

	🔰️> *Sticker Commands* <🔰️
🔰️ *Command:* *${prefix}sticker*
💠️ *Description:* convert image/gif/video to sticker
♦️ *Usage:* reply image/gif/video, or send image/gif/video with caption\n
🔰️ *Command:* *${prefix}toimg*
💠️ *Description:* convert sticker to image
♦️ *Usage:* reply sticker\n
🔰️> *Meme Commands* <🔰️
🔰️ *Command:* *${prefix}meme*
💠️ *Description:* random meme images [english]
♦️ *Usage:* just send the command\n
> *Others Commands* <
🔰️ *Command:* *${prefix}tts*
💠️ *Description:* convert text to speech/audio
♦️ *Usage:* *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
🔰️ *Command:* *${prefix}ocr*
💠️ *Description:* take the text in the picture
♦️ *Usage:* reply image, or send image with caption\n
🔰️ *Command:* *${prefix}trace*
💠️ *Description:* search anime with image [ What Anime Is This/That ]
♦️ *Usage:* reply image, or send image with caption\n
🔰️ *Command:* *${prefix}setprefix*
💠️ *Description:* replace prefix
♦️ *Usage:* *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
🔰️ *Command:* *${prefix}add*
💠️ *Description:* add member into group
♦️ *Usage:* *${prefix}add 91813xxxxx*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
🔰️ *Command:* *${prefix}kick*
💠️ *Description:* kick members from group
♦️ *Usage:* *${prefix}kick @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
🔰️ *Command:* *${prefix}promote*
💠️ *Description:* make the group member as group admin
♦️ *Usage:* *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
🔰️ *Command:* *${prefix}demote*
💠️ *Description:* make the group admin as group member
♦️ *Usage:* *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
🔰️ *Command:* *${prefix}linkgroup*
💠️ *Description:* take the group link
♦️ *Usage:* just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
Warning: Use this command only when necessary... or get your ass handled!
🔰️ *Command:* *${prefix}leave*
💠️ *Description:* Make bot leave the group
♦️ *Usage:* just send the command
note : Can only be used by Group admins and Bot owner\n
🔰️ *Command:* *${prefix}tagall*
💠️ *Description:* tags all group members including admins too
♦️ *Usage:* just send the command
note : This command can be used if you are a group admin\n

____________________________________

We hope you have a great day!`
}

exports.help = help

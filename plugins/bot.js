
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/voice/${pickRandom(["anna", "hi", "menu", "test"])}.mp3`

m.reply( `Hello ${taguser} Am 𝚀𝚄𝙴𝙴𝙽 𝚂𝙾𝙵𝙸𝙰 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝙰𝙳𝙳𝚈 𝙸𝙶𝚆𝙴 Need help?  type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(SOFIA|PAPA IGWE)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

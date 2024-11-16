

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/PAPAIGWE241"
    let murl = "https://youtube.com/ITSIGWE?si=_v7ZRTjkqmLKt0HK"
    let img = "https://i.ibb.co/Btk5dcq/SOFIA.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '24160338758@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝐐𝐔𝐄𝐄𝐍 𝐒𝐎𝐅𝐈𝐀 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 🌟",
          body: "𝐐𝐮𝐞𝐞𝐧-𝐬𝐨𝐟𝐢𝐚",
          thumbnailUrl: img,
          sourceUrl: 'https://whatsapp.com/channel/0029VaoRh0h2UPBAyRobHB2t',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;

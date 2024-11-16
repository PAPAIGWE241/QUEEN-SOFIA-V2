
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
𝐬𝐡𝐚𝐫𝐞 𝐐𝐔𝐄𝐄𝐍 𝐒𝐎𝐅𝐈𝐀 𝐛𝐨𝐭 𝐥𝐢𝐧𝐤 𝐬𝐮𝐩𝐩𝐨𝐫𝐭. Git Link https://github.com/PAPAIGWE241/QUEEN-SOFIA-V2`
let img = 'https://raw.githubusercontent.com/PAPAIGWE241/QUEEN-SOFIA-V2/main/SOFIA.jpg?token=GHSAT0AAAAAACWTLQTA3HTSTXW2SAI4LQGCZXG4LCA'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

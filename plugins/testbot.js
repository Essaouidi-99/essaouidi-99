import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `السـويدي ياسيـن مـتصل الان بالانتـࢪنيت \nيمڪـنك ڪـتابة \n.menu\n لتنبـتق لڪ جمـــــيع الاوامــࢪ \n@${m.sender.split('@')[0]} \n`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 65,
      isForwarded: true, externalAdReply: { title: author, body: fs.readFileSync('./thumbnail.jpg') }}})
      await conn.sendMessage(m.chat, {
        audio: {
            url: "Essaouidi.mp3"
        },
        seconds: 65,
        ptt: true,
        mimetype: "audio/mpeg",
        fileName: "vn.mp3",
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
}
handler.customPrefix = /^(tes|سلام|essaouidi|menu|Menu|apk|bobizaty|♥|salam|hy|Hello|.|شكرا|مرحبا)$/i
handler.command = new RegExp

export default handler

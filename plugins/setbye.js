let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[👋🏻] رسالة وداع تم تكوينها بشكل صحيح لهذه المجموعة*')
} else throw `*[⏳] أدخل رسالة الوداع التي تريد إضافتها، استخدمها:*\n*- @user (يذكر)*`
}
handler.help = ['setbye']
handler.tags = ['owner']
handler.command = ['setbye'] 
handler.admin = true
export default handler

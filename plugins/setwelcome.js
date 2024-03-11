let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[🌹] رسالة ترحيب تم تكوينها بشكل صحيح لهذه المجموعة*')
} else throw `*[❤] أدخل رسالة الترحيب التي تريد إضافتها، استخدمها:*\n*- @user (يذكر)*\n*- @group (أسم المجموعة)*\n*- @desc (وصف المجموعة)*`
}
handler.help = ['setwelcome']
handler.tags = ['owner']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler

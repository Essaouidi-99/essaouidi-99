import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/Essaouidi25';
  'instagram.com/essaouidi_yassine'; 
  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
📂 Repository Name: ${repoData.name}
📝 Description: ${repoData.description}
👤 Owner: ${repoData.owner.login}
⭐ Stars: ${repoData.stargazers_count}
🍴 Forks: ${repoData.forks_count}
🌐 URL: ${repoData.html_url}
      `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'PKR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'خطأ ❌ هدا أمر يشتغل مع صاحب بوت فقط 😂 توصل مع هنا \ninstagram.com/essaouidi_yassine', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'خطأ ❌ هدا أمر يشتغل مع صاحب بوت فقط 😂 توصل مع هنا \ninstagram.com/essaouidi_yassine', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;

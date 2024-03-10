import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `*Example:* ${usedPrefix + command} Hello Gemini`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/gemini?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data + "/n_©️Gemini: By Essaouidi Yassine🦹‍♂️_";
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '*.الخادم مشغول الآن. حاول مرة أخرى في وقت لاحق*';
    }
  } catch (error) {
    throw `*خطأ*`;
  }
};

handler.command = /^gemini$/i;

export default handler;

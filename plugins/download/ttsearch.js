exports.run = {
  usage: ["tiktoksearch"],
  hidden: ["ttsearch", "searchtt"],
  use: "query",
  category: "downloader",
  async: async (m, { client, text, isPrefix, command }) => {
    try {
      if (!text)
        return client.reply(
          m.chat,
          Func.example(isPrefix, command, "AI Danger"),
          m
        );
      await client.sendReact(m.chat, "🕒", m.key);
      const json = await Api.ttsearch(encodeURIComponent(text));

      let caption = `乂  *T T - S E A R C H*\n\n`;
      caption += `	◦  *Title* : ${json.title}\n`;
      caption += `	◦  *Author* : ${json.author.unique_id}\n`;
      caption += `	◦  *Duration* : ${json.duration}\n`;
      caption += `	◦  *View* : ${json.play_count}\n`;
      caption += `	◦  *Region* : ${json.region}\n\n`;
      caption += global.footer;
      client.sendFile(m.chat, json.play, json.title + ".mp4", caption, m);
    } catch {
      client.reply(m.chat, "error", m);
    }
  },
  limit: true,
};

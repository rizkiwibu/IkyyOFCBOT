exports.run = {
  usage: ["menfess"],
  hidden: ["mnfs", "menfes", "mfs"],
  use: "number|yourname|message",
  category: "special",
  async: async (m, { client, args, text, isPrefix, command }) => {
    try {
      if (!text)
        return client.reply(
          m.chat,
          Func.example(
            isPrefix,
            command,
            "6285609188523|ikyy|hello this is a secret message"
          ),
          m
        );
      let greeting = Func.greeting();
      let [number, name, msg] = text.split`|`;
      let tag = "@" + number;
      if (!number || !name || !msg)
        return client.reply(
          m.chat,
          Func.example(
            isPrefix,
            command,
            "6285609188523|ikyy|hello this is a secret message"
          ),
          m
        );
      let data = (await client.onWhatsApp(number))[0] || {};
      if (!data.exists)
        return client.reply(m.chat, "Number not registered on whatsapp.", m);
      let caption = "乂 *M E N F E S S*\n\n";
      caption += `Hello ${tag} ${greeting}😄, I want to inform you that someone has sent a menfess message for you\n`;
      caption += `	◦  *From* : ${name}\n`;
      caption += `	◦  *Message* : ${msg}\n\n`;
      caption += global.footer;
      await client.sendMessageModify(
        number + "@s.whatsapp.net",
        caption,
        null,
        {
          ads: false,
          largeThumb: true,
          thumbnail: await Func.fetchBuffer(
            "https://telegra.ph/file/8bc6ce761eab64c403734.jpg"
          ),
        }
      );
      client.reply(m.chat, "*Successfully sent menfess message*", m);
    } catch (e) {
      client.reply(m.chat, "error\n\n" + e, m);
    }
  },
  private: true,
};

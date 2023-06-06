exports.run = {
  usage: ["restart"],
  category: "owner",
  async: async (m, { client }) => {
    await client
      .reply(m.chat, Func.texted("bold", "Restarting . . ."), m)
      .then(async () => {
        await client.updateProfileStatus("Bot Restart");
        await props.save();
        await process.send("reset");
        await Func.delay(15000);
        client.updateProfileStatus("Bot Online");
      });
  },
  owner: true,
};

exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      let nmb = await client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Bot Whatsapp By IkyyOFC',
         website: 'https://bit.ly/AboutKyyFC',
         email: 'gendonmenjeng@gmail.com'
      })
      await Func.delay(2000)
      await client.reply(m.chat, '*If you find a bug or error, you can contact the owner to solve the problem.*', nmb)
   },
   error: false,
   cache: true,
   location: __filename
}
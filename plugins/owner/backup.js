const { writeFileSync: create, readFileSync: read }= require('fs')
exports.run = {
   usage: ['backup', 'store'],
   category: 'owner',
   async: async (m, {
      client,
      command
   }) => {
      try {
        if (command == 'backup') {
         await props.save()
         create('./database.json', JSON.stringify(global.db, null, 3), 'utf-8')
         client.reply(m.chat, global.status.wait, m)
         await client.sendFile(m.chat, read('./database.json'), 'database.json', '', m)
        } else if (command == 'store') {
          await props.save()
          client.sendFile(m.chat, read('./session/neoxr_store.json'), 'store.json', '', m)
        }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}
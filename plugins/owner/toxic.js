exports.run = {
   usage: ['+toxic', '-toxic'],
   use: 'word',
   category: 'owner',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (command == '+toxic') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'fuck'), m)
            if (global.db.setting.toxic.includes(text)) return client.reply(m.chat, Func.texted('bold', `🚩 '${text}' already in the database.`), m)
            global.db.setting.toxic.push(text)
            global.db.setting.toxic.sort(function(a, b) {
               if (a < b) {
                  return -1;
               }
               if (a > b) {
                  return 1;
               }
               return 0
            })
            client.reply(m.chat, Func.texted('bold', `🚩 '${text}' added successfully!`), m)
         } else if (command == '-toxic') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'fuck'), m)
            if (global.db.setting.toxic.length < 2) return client.reply(m.chat, Func.texted('bold', `🚩 Sorry, you can't remove more.`), m)
            if (!global.db.setting.toxic.includes(text)) return client.reply(m.chat, Func.texted('bold', `🚩 '${text}' not in database.`), m)
            global.db.setting.toxic.forEach((data, index) => {
               if (data === text) global.db.setting.toxic.splice(index, 1)
            })
            client.reply(m.chat, Func.texted('bold', `🚩 '${text}' has been removed.`), m)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   owner: true,
   cache: true,
   location: __filename
}
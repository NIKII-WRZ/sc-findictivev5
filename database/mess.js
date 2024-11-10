require("./global")

const mess = {
   wait: "*`[ # ] - Sedang Proses...`*",
   success: "*`[ # ] - Successfully`*",
   on: "*`[ # ] - Telah Aktif`*", 
   off: "*`[ # ] - Telah Dimatikan`*",
   query: {
       text: "*`[ # ] - Teksnya Mana? `*",
       link: "*`[ # ] - Linknya Mana? `*",
   },
   error: {
       fitur: "⚠️ *Ada Yang Error Nih, Hubungi Ruzx Ya..",
   },
   only: {
       group: "⚠️ *Fitur Khusus Admin Group!*",
       private: "⚠️ *Fitur Ini Cuma Bisa Di Akses Di Privat Chat*",
       owner: "⚠️ *Fiturnya Buat Ownerku*",
       admin: "⚠️ *Fitur Khusus Admin Group!*",
       badmin: "⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*",
       reseller: "⚠️ *Fiturnya, Buat Reseller  Beb..*",
       premium: "⚠️ *Fiturnya, Buat Member Premium Beb..*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
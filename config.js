/* SEKRIP VINDICTIVE V5.0 BY RUZXLOWLY
BUY NO ENC? PM wa.me/6289518928221 */
require("./database/module")

// Setting Payment
global.storename = "Ruzxlowly"
// Setting Nama Store
global.dana = ""
// Setting Payment Dana
global.qris = ""
// Setting Payment Qris

global.owner = "628812454879"
// Setting Nomor Owner
global.namabot = "Vindictive"
// Setting Nama Bot
global.nomorbot = "628812454879" 
// Setting Nomor Bot
global.namaCreator = "Ruzxlowly"
// Jangan Di Ganti Ya Dek
global.linkyt = "https://whatsapp.com/channel/0029VagsKCm2Jl8MLtsO733W"
 // Setting Link Youtube, berhubung gw gada yt jadi gua kasih link saluran

global.autoJoin = false
global.antilink = false
global.versisc = '5.0'
// Jangan Di Ganti Ya Dek

global.delayjpm = 5500
// Delay Jpm Nya

//  Setting Buat Cpanel
global.apikey = '-'
global.capikey = '-'
global.domain = '-'
global.eggsnya = '15'
global.location = '1'

// Global Thumbnail
global.codeInvite = ""
global.imageurl = 'https://i.ibb.co.com/Gtvh1M0/ef4417c9-4c81-4249-9b5b-7d1baed38ab0.jpg' 
// Pastikan Image Sudah Menjadi Url
global.isLink = 'https://whatsapp.com/channel/0029VagsKCm2Jl8MLtsO733W' 
// Setting Link Saluranmu
global.packname = "© Ruzxlowly"
// Setting Packame Stiker
global.author = "628812454879"
// Jangan Diganti Ya Dek
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
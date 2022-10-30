//abc

require("./settings.js");
const {
  WAProto,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const malScraper = require("mal-scraper");
const fs = require("fs");
const translate = require("@vitalets/google-translate-api");
const util = require("util");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const instagram = require("@phaticusthiccy/open-apis");
const path = require("path");
const uber = require("uberduck-api");
const fetch = require("node-fetch");
const os = require("os");
var Jimp = require("jimp");
const { getGames } = require("epic-free-games");
const moment = require("moment-timezone");
const time = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
const { color, bgcolor } = require("./src/lib/color");
const { JSDOM } = require("jsdom");
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const crypto = require("crypto");

const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const {
  UploadFileUgu,
} = require("./src/lib/uploader");
const ms = require("parse-ms");
const toMs = require("ms");
const hxz = require("./src/lib/apis");
const xfar = require("./src/lib/apis2");
const premium = require("./src/lib/premium");
const { pinterest } = require("./src/lib/scraper");
const cron = require("node-cron");
const {
  addTTTId,
  addTTTwin,
  addTTTdefeat,
  addTTTtie,
  addTTTpoints,
  getTTTId,
  getTTTwins,
  getTTTdefeats,
  getTTTties,
  getTTTpoints,
} = require("./src/lib/tictactoe.js");
const {
  WinnerO,
  WinnerX,
  Tie,
  IA,
  IAmove1,
  IAalter,
  priorityC,
} = require("./src/ttt/config/system");
const tictactoe = JSON.parse(fs.readFileSync("./src/ttt/tictactoe.json"));
const blockcmd = JSON.parse(fs.readFileSync("./src/db/blockcmd.json"));
const animequiz = JSON.parse(fs.readFileSync("./src/lib/animeqz.json"));
let vote = [];
const {
  stickerImgTag,
  stickerVidTag,
  addExif,
  stickerForVideo,
  stickerCircleImg,
  stickerCircleUrl,
} = require("./src/lib/sticker");
const deepai = require("deepai");
const dia_day = JSON.parse(fs.readFileSync("./dia_dia.json"));
const { ytDonlodMp3 } = require("./src/lib/api");
const {
  addCommands,
  checkCommands,
  deleteCommands,
} = require("./src/lib/autoresp");
const level = require("./src/lib/level");

//const dados = JSON.parse(fs.readFileSync('./pessoas.json'))
const {
  smsg,
  formatp,
  tanggal,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  fetchText,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  fetchBase64,
} = require("./src/lib/myfunc");
const { ttthelp } = require("./src/ttt/config/ttthelp");
const { tttme } = require("./src/ttt/config/tttme");
var tttset = require("./src/ttt/config/tttset.json");
var esp = require("./src/ttt/config/tttframe.json");
const { error } = require("console");

ky_ttt = [];
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
const setdayrequest = dia_day.dia_set;
limitawal = 30;

const antilink = JSON.parse(fs.readFileSync("./src/db/antilink.json"));
const _premium = JSON.parse(fs.readFileSync("./src/db/premium.json"));
const commandsDB = JSON.parse(fs.readFileSync("./src/db/commands.json"));
const antidoc = JSON.parse(fs.readFileSync("./src/db/antidoc.json"));
const anticon = JSON.parse(fs.readFileSync("./src/db/anticon.json"));
const antiloc = JSON.parse(fs.readFileSync("./src/db/antiloc.json"));
const anticat = JSON.parse(fs.readFileSync("./src/db/anticat.json"));

antipv = false;
var oneImage = 0;

module.exports = satoru = async (satoru, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = prefa
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#*$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#*$%^&.©^]/gi)[0]
        : ""
      : prefa ?? global.prefix;
    const m2 = smsg;
    const isCmd = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const type =
      Object.keys(m.message)[0] == "senderKeyDistributionMessage"
        ? Object.keys(m.message)[2]
        : Object.keys(m.message)[0] == "messageContextInfo"
        ? Object.keys(m.message)[1]
        : Object.keys(m.message)[0];
    const arg = budy.slice(command.length + 2, budy.length);
    const args = body.trim().split(/ +/).slice(1);
    selectedButton =
      type == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : "";
    const argsButton = selectedButton.trim().split(/ +/);
    const pushname = m.pushName || "No Name";
    const botNumber = await satoru.decodeJid(satoru.user.id);
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const groupMetadata = m.isGroup
      ? await satoru.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupMembers = m.isGroup ? groupMetadata.participants : "";
    const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false;
    const nsfw = JSON.parse(fs.readFileSync("./src/db/nsfw.json"));
    const isNsfw = m.isGroup ? nsfw.includes(m.chat) : false;
    const isPremium = premium.checkPremiumUser(m.sender, _premium);
    const isDoc = m.isGroup ? antidoc.includes(m.chat) : false;
    const isCon = m.isGroup ? anticon.includes(m.chat) : false;
    const isLoc = m.isGroup ? antiloc.includes(m.chat) : false;
    const isCat = m.isGroup ? anticat.includes(m.chat) : false;
    const isDocumento = type === "documentMessage";
    const isContato = type === "contactMessage";
    const isLocalização = type === "locationMessage";
    const isCatalogo = type === "productMessage";
    const isFigu = type === "stickerMessage";
    const ImgMessa = type === "imageMessage";

    //renderizar fotos
    const reSize = async (buffer, ukur1, ukur2) => {
      return new Promise(async (resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper
          .resize(ukur1, ukur2)
          .getBufferAsync(Jimp.MIME_JPEG);
        resolve(ab);
      });
    };
    const pathLogo = "./src/img/logo.jpg";
    const imglogo = "https://opedyboy.sirv.com/Menu/logo.jpg";
    const logo = await reSize(imglogo, 280, 200);
    const imgw =
      "https://s2.glbimg.com/guATdR-5e0ugcTvMR1ZNlULx9Xg=/0x0:3509x1979/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/o/r/5GDiQQRoKr7oZJFfRO4w/cod.jpg";
    const logow = await reSize(imgw, 200, 200);

    async function responder(teks) {
      satoru.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            forwardingScore: 508,
            isForwarded: true,
            externalAdReply: {
              title: `𝕾𝖆𝖙𝖔𝖗𝖚 𝕸𝖚𝖑𝖙𝖎 𝕯𝖊𝖛𝖎𝖈𝖊`,
              body: `Obrigado por usar o meu bot!!\n\nMeu dono agradece!!`,
              previewType: "PHOTO",
              thumbnailUrl: ``,
              thumbnail: logo,
              sourceUrl: "",
            },
          },
        },
        { quoted: m }
      );
    }
    figurinhakkk = await getBuffer(
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBmSN-SkLYbwbJiBF5jpdP6c_USG77YRH1g&usqp=CAU`
    );
    const fig = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `Aqui está o seu sticker!`,
          title: `TM`,
          jpegThumbnail: figurinhakkk,
        },
      },
    };
    const verificado = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `𝕾𝖆𝖙𝖔𝖗𝖚 𝕸𝖚𝖑𝖙𝖎 𝕯𝖊𝖛𝖎𝖈𝖊`,
          title: `TM`,
          jpegThumbnail: "./src/img/verificado.jpg",
        },
      },
    };

    const fcatalogo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: logo, //Gambarnye
            },
            title: "𝕾𝖆𝖙𝖔𝖗𝖚 𝕸𝖚𝖑𝖙𝖎 𝕯𝖊𝖛𝖎𝖈𝖊", //Kasih namalu
            description: "BOT DE WHATSAPP",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Ghost",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    //----------[ FAKE LOKASI ]--------//
    const floc2 = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        locationMessage: {
          name: "Russia",
          jpegThumbnail: logo,
        },
      },
    };
    const fcarrinho = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 1,
          status: 1,
          surface: 1,
          message: "𝕾𝖆𝖙𝖔𝖗𝖚 𝕸𝖚𝖑𝖙𝖎 𝕯𝖊𝖛𝖎𝖈𝖊 👑",
          orderTitle: "Bang",
          thumbnail: logo,
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };
    const floc = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        locationMessage: { title: "jakarta", h: `aloo`, jpegThumbnail: logo },
      },
    };

    const fliveLoc = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        liveLocationMessage: {
          caption: "ANTIBOT",
          h: `aloo`,
          jpegThumbnail: logo,
        },
      },
    };
    const fliveLoc2 = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        liveLocationMessage: {
          title: "ANTIBOT",
          h: `aloo`,
          jpegThumbnail: logo,
        },
      },
    };
    //FAKEREPLY KONTAK
    const fcon = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        contactMessage: { title: "sri", h: `haloo`, jpegThumbnail: logo },
      },
    };

    const fcona = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        contactsArrayMessage: {
          title: "antibot",
          h: `aloo`,
          jpegThumbnail: logo,
        },
      },
    };
    const bugcon = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: { contactMessage: { vcard: "" } },
    };

    //----------[ FAKE DOC ]--------//
    const fdocs = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        documentMessage: {
          title: "Halo bang",
          jpegThumbnail: logo,
        },
      },
    };
    //----------[ FAKE VIDEO ]--------//
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0-1625305606@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: "hallo bang",
          h: `Hmm`,
          seconds: "99999",
          caption: "Halo bang",
          jpegThumbnail: logo,
        },
      },
    };
    //----------[ FAKE GC ]--------//
    const fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "0-1625305606@g.us",
          inviteCode: "mememteeeekkeke",
          groupName: "Mengter",
          caption: "Halo bang jagoo",
          jpegThumbnail: logo,
        },
      },
    };
    //----------[ FAKE GIF  ]--------//
    const fgif = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0-1625305606@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: "hallo bang",
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: "Halo bang",
          jpegThumbnail: logo,
        },
      },
    };
    //----------[ FAKE TEXT  ]--------//
    const ftextt = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0-1625305606@g.us" } : {}),
      },
      message: {
        extendedTextMessage: {
          text: "hallo",
          title: `Hmm`,
          jpegThumbnail: logo,
        },
      },
    };
    //----------[ FAKE AUDIO  ]--------//
    const fkaudio = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0-1625305606@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: "0",
          ptt: "true",
        },
      },
    };

    const tdono = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `Contate o meu dono!!`,
          title: `TM`,
          jpegThumbnail: figurinhakkk,
        },
      },
    };

    const sendListMsg = async (title, description, textButton, sections) => {
      var list = WAProto.Message.fromObject({
        listMessage: WAProto.ListMessage.fromObject({
          title: title,
          buttonText: textButton,
          description: description,
          listType: 1,
          sections: sections,
        }),
      });
      await satoru.relayMessage(m.chat, list, { messageId: m.key.id });
    };

    for (var i = 0; i < commandsDB.length; i++) {
      if (budy.startsWith(commandsDB[i].pesan)) {
        responder(commandsDB[i].balasan);
      }
    }

    const bayarLimit = (sender, amount) => {
      let position = false;
      Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
          position = i;
        }
      });
      if (position !== false) {
        _limit[position].limit -= amount;
        fs.writeFileSync("./src/db/limit.json", JSON.stringify(_limit));
      }
    };

    const limitAdd = (sender) => {
      let position = false;
      Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
          position = i;
        }
      });
      if (position !== false) {
        _limit[position].limit += 1;
        fs.writeFileSync("./src/db/limit.json", JSON.stringify(_limit));
      }
    };

    const createSerial = (size) => {
      return crypto.randomBytes(size).toString("hex").slice(0, size);
    };

    const reactionMessage = {
      react: {
        text: "💖",
        key: m,
      },
    };

    idttt = [];
    players1 = [];
    players2 = [];
    gilir = [];
    for (let t of ky_ttt) {
      idttt.push(t.id);
      players1.push(t.player1);
      players2.push(t.player2);
      gilir.push(t.gilir);
    }
    const isTTT = m.isGroup ? idttt.includes(m.from) : false;
    isPlayer1 = m.isGroup ? players1.includes(m.sender) : false;
    isPlayer2 = m.isGroup ? players2.includes(m.sender) : false;

    cron.schedule(
      "00 07 * * *",
      () => {
        satoru.groupSettingUpdate(
          "556181496039-1627920141@g.us",
          "not_announcement"
        );
      },
      {
        scheduled: true,
        timezone: "America/Sao_Paulo",
      }
    );

    cron.schedule(
      "00 00 * * *",
      () => {
        satoru.groupSettingUpdate(
          "556181496039-1627920141@g.us",
          "announcement"
        );
      },
      {
        scheduled: true,
        timezone: "America/Sao_Paulo",
      }
    );

    // satoru.sendReadReceipt(m.chat, m.sender, [m.key.id])
    // satoru.sendPresenceUpdate('available', m.chat)
    //satoru.sendPresenceUpdate(m.chat, 'typing')

    var status = "🙂COMUM🙂";
    if (isPremium) {
      status = "😎PREMIUM😎";
    }
    if (isCreator) {
      status = "👻 criador 👾";
    }

    const reagir = (id, emogi) => {
      satoru.relayMessage(
        m.chat,
        {
          reactionMessage: {
            key: {
              id: id,
              remoteJid: m.chat,
              fromMe: false,
            },
            text: `${emogi}`,
          },
        },
        { messageId: id }
      );
    };
    const sotoy = [
      "🍊 : 🍒 : 🍐",
      "🍒 : 🔔 : 🍊",
      "🍇 : 🍇 : 🍐",
      "🍐 : 🍐 : 🍐 Win👑",
      "🍊 : 🍋 : 🔔",
      "🔔 : 🍒 : 🍐",
      "🔔 : 🍒 : 🍊",
      "🍊 : 🍋 : 🔔",
      "🍐 : 🍒 : 🍋",
      "🍒 : 🍒 : 🍒 Win👑",
      "🍐 : 🍒 : 🍐",
      "🍊 : 🍒 : 🍒",
      "🔔 : 🔔 : 🍇",
      "🍌 : 🍌 : 🔔",
      "🍐 : 🔔 : 🔔",
      "🍊 : 🍋 : 🍒",
      "🍋 : 🍋 : 🍋 Win👑",
      "🔔 : 🔔 : 🍇",
      "🔔 : 🍇 : 🍇",
      "🔔 : 🍐 : 🔔",
      "🍌 : 🍌 : 🍌 Win👑",
    ];
    /*if (m.chat) {

  }*/

    const isCmdBlocked = (teks) => {
      return blockcmd.includes(teks);
    };

    if (isTTT && isPlayer2) {
      if (budy.startsWith("Y")) {
        tto = ky_ttt.filter((ghg) => ghg.id.includes(m.chat));
        tty = tto[0];
        angka = tto[0].angka;
        ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split("@")[0]}=❌
Jogador2 @${tty.player2.split("@")[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Sua vez = @${tty.player1.split("@")[0]}`;
        satoru.sendMessage(
          m.chat,
          {
            text: ucapan,
            contextInfo: { mentionedJid: [tty.player1, tty.player2] },
          },
          { quoted: m }
        );
      }
      if (budy.startsWith("N")) {
        tto = ky_ttt.filter((ghg) => ghg.id.includes(m.chat));
        tty = tto[0];
        naa = ky_ttt.filter((toek) => !toek.id.includes(m.chat));
        ky_ttt = naa;
        satoru.sendMessage(
          m.chat,
          {
            text: `@${tty.player2.split("@")[0]} Recusou o desafio 😔`,
            contextInfo: { mentionedJid: [tty.player2] },
          },
          { quoted: m }
        );
      }
    }

    if (isTTT && isPlayer1) {
      nuber = parseInt(budy);
      if (isNaN(nuber)) return;
      if (nuber < 1 || nuber > 9)
        return responder("Digite os números corretamente");
      main = ky_ttt.filter((hjh) => hjh.id.includes(m.chat));
      if (!tttawal.includes(main[0].angka[nuber]))
        return responder("Tente outra cordenada");
      if (main[0].gilir.includes(m.sender))
        return responder("Espere sua vez ._.");
      s = "❌";
      main[0].angka[nuber] = s;
      main[0].gilir = main[0].player1;
      naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
      ky_ttt = naa;
      pop = main[0];
      ky_ttt.push(pop);
      tto = ky_ttt.filter((hgh) => hgh.id.includes(m.chat));
      tty = tto[0];
      angka = tto[0].angka;
      ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`;
      const dinherowin = Math.ceil(Math.random() * 1000);
      ucapmenang = () => {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${
          tty.player1.split("@")[0]
        }* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`;
        add_dinheiro(
          `${tty.player1.split("@")[0]}` + "@s.whatsapp.net",
          dinherowin
        );
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        satoru.sendMessage(
          m.chat,
          { text: ucapan1, contextInfo: { mentionedJid: [tty.player1] } },
          { quoted: m }
        );
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      };

      if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang();

      if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang();

      if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang();

      if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang();

      if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang();

      if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang();

      if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang();

      if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang();

      if (
        !ttt.includes("1️⃣") &&
        !ttt.includes("2️⃣") &&
        !ttt.includes("3️⃣") &&
        !ttt.includes("4️⃣") &&
        !ttt.includes("5️⃣") &&
        !ttt.includes("6️⃣") &&
        !ttt.includes("7️⃣") &&
        !ttt.includes("8️⃣") &&
        !ttt.includes("9️⃣")
      ) {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate 👌_*`;
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        responder(ucapan1);
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      }
      ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador2 @${tty.player2.split("@")[0]}=⭕
Jogador1 @${tty.player1.split("@")[0]}=❌

${ttt}

Sua vez = @${tty.player2.split("@")[0]}`;
      satoru.sendMessage(
        m.chat,
        {
          text: ucapan,
          contextInfo: { mentionedJid: [tty.player1, tty.player2] },
        },
        { quoted: m }
      );
    }
    if (isTTT && isPlayer2) {
      nuber = parseInt(budy);
      if (isNaN(nuber)) return;
      if (nuber < 1 || nuber > 9)
        return responder("Digite os números corretamente");
      main = ky_ttt.filter((hjh) => hjh.id.includes(m.chat));
      if (!tttawal.includes(main[0].angka[nuber]))
        return responder("Tente outra cordenada");
      if (main[0].gilir.includes(m.sender))
        return responder("Espere sua vez ._.");
      s = "⭕";
      main[0].angka[nuber] = s;
      main[0].gilir = main[0].player2;
      naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
      ky_ttt = naa;
      pop = main[0];
      ky_ttt.push(pop);
      tto = ky_ttt.filter((hgh) => hgh.id.includes(m.chat));
      tty = tto[0];
      angka = tto[0].angka;
      ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`;

      ucapmenang = () => {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${
          tty.player2.split("@")[0]
        }* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`;
        add_dinheiro(
          `${tty.player2.split("@")[0]}` + "@s.whatsapp.net",
          dinherowin
        );
        ucapan2 = `*🎳 Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        satoru.sendMessage(
          m.chat,
          { text: ucapan1, contextInfo: { mentionedJid: [tty.player2] } },
          { quoted: m }
        );
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      };

      if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang();
      if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang();
      if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang();
      if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang();
      if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang();
      if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang();
      if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang();
      if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang();
      if (
        !ttt.includes("1️⃣") &&
        !ttt.includes("2️⃣") &&
        !ttt.includes("3️⃣") &&
        !ttt.includes("4️⃣") &&
        !ttt.includes("5️⃣") &&
        !ttt.includes("6️⃣") &&
        !ttt.includes("7️⃣") &&
        !ttt.includes("8️⃣") &&
        !ttt.includes("9️⃣")
      ) {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate👌*`;
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        responder(ucapan1);
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      }
      ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split("@")[0]}=⭕
Jogador2 @${tty.player2.split("@")[0]}=❌

${ttt}
 
Sua vez = @${tty.player1.split("@")[0]}`;
      satoru.sendMessage(
        m.chat,
        {
          text: ucapan1,
          contextInfo: { mentionedJid: [tty.player1, tty.player2] },
        },
        { quoted: m }
      );
    }

    let d = new Date();
    let locale = "pt";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    const week = d.toLocaleDateString(locale, { weekday: "long" });
    const calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    if (isDocumento) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return;
        if (!isDoc) return;
        if (groupAdmins)
          return responder("Admins pode enviar Documento né? :v");
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
        responder("Documento detectado, você será banido!");
        await satoru
          .groupParticipantsUpdate(m.chat, [kic], "remove")
          .then((res) => responder(jsonformat(res)))
          .catch((err) => responder(jsonformat(err)));
      }
    }
    if (isContato) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return;
        if (!isCon) return;
        if (groupAdmins)
          return responder("Admins pode responder contato né? :v");
        var kic = `${m.sender.split("@")[0]}@s.whatsapp.net`;
        responder("contato detectado, você será banido!");
        await satoru
          .groupParticipantsUpdate(m.chat, [kic], "remove")
          .then((res) => responder(jsonformat(res)))
          .catch((err) => responder(jsonformat(err)));
      }
    }
    if (isLocalização) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return;
        if (!isLoc) return;
        if (groupAdmins)
          return responder("Admins pode enviar localização né? :v");
        var kic = `${m.sender.split("@")[0]}@s.whatsapp.net`;
        responder("localização detectada, você será banido!");
        await satoru
          .groupParticipantsUpdate(m.chat, [kic], "remove")
          .then((res) => responder(jsonformat(res)))
          .catch((err) => responder(jsonformat(err)));
      }
    }
    if (isCatalogo) {
      if (!m.key.fromMe) {
        if (!m.isGroup) return;
        if (!isCat) return;
        if (groupAdmins) return responder("Admins pode enviar catalogo né? :v");
        var kic = `${m.sender.split("@")[0]}@s.whatsapp.net`;
        responder("catalogo detectado, você será banido!");
        await satoru
          .groupParticipantsUpdate(m.chat, [kic], "remove")
          .then((res) => responder(jsonformat(res)))
          .catch((err) => responder(jsonformat(err)));
      }
    }
    if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
      tttset.autoEndTime = "off";
    } else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
      if (isCmd) {
        const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75);
        level.addLevelingXp(tttset.player, randomEndTTTXP, _level);
        const checkTTTIdEnd = getTTTId(tttset.player);
        if (checkTTTIdEnd === undefined) addTTTId(tttset.player);
        addTTTpoints(tttset.player, randomEndTTTXP);
        satoru.sendMessage(
          tttset.local,
          {
            text: `❌ O TEMPO DE JOGO EXPIROU ❌\n\n Perdeu: ${randomEndTTTXP} XP 🔮`,
          },
          { quoted: tttset.mentionPlayer }
        );
      } else {
        satoru.sendMessage(
          tttset.local,
          { text: `❌ O TEMPO DE JOGO EXPIROU ❌` },
          { quoted: tttset.mentionPlayer }
        );
      }
      esp.a1 = "🔲";
      esp.a2 = "🔲";
      esp.a3 = "🔲";
      esp.b1 = "🔲";
      esp.b2 = "🔲";
      esp.b3 = "🔲";
      esp.c1 = "🔲";
      esp.c2 = "🔲";
      esp.c3 = "🔲";
      tttset.tttstatus = "off";
      tttset.autoEndTime = "off";
    }

    try {
      ppuser = await satoru.profilePictureUrl(m.sender, "image");
    } catch {
      ppuser =
        "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
    }
    const pperfil = await getBuffer(ppuser);

    /*      		try {
		pporang = await akame.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://telegra.ph/file/5ec45a3342684235fb209.jpg'
		      }*/

    const responderbuton = (from, text, footer, buttons) => {
      return satoru.sendMessage(m.chat, {
        text: text,
        footer: footer,
        templateButtons: buttons,
        quoted: m,
      });
    };

    const responderArquivoDoLink = async (from, url, caption, msg, men) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headers["content-type"];
      if (mime.split("/")[1] === "gif") {
        return satoru.sendMessage(
          m.chat,
          {
            video: await convertGif(url),
            caption: caption,
            gifPlayback: true,
            mentions: men ? men : [],
          },
          { quoted: m }
        );
      }
      let type = mime.split("/")[0] + "Message";
      if (mime.split("/")[0] === "image") {
        return satoru.sendMessage(
          m.chat,
          {
            image: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
          },
          { quoted: m }
        );
      } else if (mime.split("/")[0] === "video") {
        return satoru.sendMessage(
          m.chat,
          {
            video: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
          },
          { quoted: m }
        );
      } else if (mime.split("/")[0] === "audio") {
        return satoru.sendMessage(
          m.chat,
          {
            audio: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
            mimetype: "audio/mpeg",
          },
          { quoted: m }
        );
      } else {
        return satoru.sendMessage(
          m.chat,
          {
            document: await getBuffer(url),
            mimetype: mime,
            caption: caption,
            mentions: men ? men : [],
          },
          { quoted: m }
        );
      }
    };

    if (!m.isGroup && isCmd && m.sender)
      console.log(
        `${color("╭━━━━━━━━━━━━━━━━━━━━━━━━━╮", "gold")}\n${color(
          "┃",
          "gold"
        )} ${color("Número:", "yellow")} ${color(
          m.sender.split("@")[0],
          "purple"
        )}\n${color("┃", "gold")} ${color("Nome:", "yellow")} ${color(
          pushname,
          "purple"
        )}\n${color("┃", "gold")} ${color("Data:", "yellow")} ${color(
          time,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Comando:", "yellow")} ${color(
          command
        )}\n${color("┃", "gold")} ${color("Palavras:", "yellow")} ${color(
          budy.length,
          "magenta"
        )}\n${color("╰━━━━━━━━━━━━━━━━━━━━━━━━━╯", "gold")}`
      );
    if (!m.isGroup && !isCmd && m.sender)
      console.log(
        `${color("╭━━━━━━━━━━━━━━━━━━━━━━━━━╮", "gold")}\n${color(
          "┃",
          "gold"
        )} ${color("Número:", "yellow")} ${color(
          m.sender.split("@")[0],
          "magenta"
        )}\n${color("┃", "gold")} ${color("Nome:", "yellow")} ${color(
          pushname,
          "purple"
        )}\n${color("┃", "gold")} ${color("Data:", "yellow")} ${color(
          time,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Comando:", "yellow")} ${color(
          "Não",
          "red"
        )}\n${color("┃", "gold")} ${color("Palavras:", "yellow")} ${color(
          budy.length,
          "magenta"
        )}\n${color("╰━━━━━━━━━━━━━━━━━━━━━━━━━╯", "gold")}`
      );
    if (m.isGroup && m.isGroup && m.sender)
      console.log(
        `${color("╭━━━━━━━━━━━━━━━━━━━━━━━━━╮", "gold")}\n${color(
          "┃",
          "gold"
        )} ${color("Número:", "yellow")} ${color(
          m.sender.split("@")[0],
          "magenta"
        )}\n${color("┃", "gold")} ${color("Nome:", "yellow")} ${color(
          pushname,
          "purple"
        )}\n${color("┃", "gold")} ${color("Data:", "yellow")} ${color(
          time,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Comando:", "yellow")} ${color(
          command
        )}\n${color("┃", "gold")} ${color("Palavras:", "yellow")} ${color(
          budy.length,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Grupo:", "yellow")} ${color(
          groupName,
          "magenta"
        )}\n${color("╰━━━━━━━━━━━━━━━━━━━━━━━━━╯", "gold")}`
      );
    if (!m.isGroup && m.isGroup && m.sender)
      console.log(
        `${color("╭━━━━━━━━━━━━━━━━━━━━━━━━━╮", "gold")}\n${color(
          "┃",
          "gold"
        )} ${color("Número:", "yellow")} ${color(
          m.sender.split("@")[0],
          "magenta"
        )}\n${color("┃", "gold")} ${color("Nome:", "yellow")} ${color(
          pushname,
          "purple"
        )}\n${color("┃", "gold")} ${color("Data:", "yellow")} ${color(
          time,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Comando:", "yellow")} ${color(
          "Não",
          "red"
        )}\n${color("┃", "gold")} ${color("Palavras:", "yellow")} ${color(
          budy.length,
          "magenta"
        )}\n${color("┃", "gold")} ${color("Grupo:", "yellow")} ${color(
          groupName,
          "magenta"
        )}\n${color("╰━━━━━━━━━━━━━━━━━━━━━━━━━╯", "gold")}`
      );

    function monospace(string) {
      return "```" + string + "```";
    }
    function jsonformat(string) {
      return JSON.stringify(string, null, 2);
    }
    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    //JOGO DO ANAGRAM

    if (m.isGroup && fs.existsSync(`./quiz-${m.chat}.json`)) {
      let dataquiz = JSON.parse(fs.readFileSync(`./quiz-${m.chat}.json`));
      if (
        budy.slice(0, 4).toUpperCase() ==
          dataquiz.original.slice(0, 4).toUpperCase() &&
        budy.toUpperCase() != dataquiz.original
      )
        return responder("está perto");
      dinhero = Math.floor(Math.random() * 10) + 500;
      if (budy.toUpperCase() == dataquiz.original) {
        responder(
          `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataquiz.original}\nIniciando o proximo jogo em 5 segundos...`
        ),
          fs.unlinkSync(`./quiz-${m.chat}.json`);
        console.log(
          color(time, "magenta"),
          color(moment.tz("America/Sao_Paulo").format("HH:mm:ss"), "gold"),
          color("Adicionando recompença no id:"),
          color(m.sender, "pink")
        );
        add_dinheiro(m.sender, dinhero);
        recompensa = `_parabéns amigo🥳_\n*${dinhero}$* de recompensa`;
        responder(recompensa);
        setTimeout(async () => {
          fs.writeFileSync(
            `./quiz-${m.chat}.json`,
            `${JSON.stringify(
              animequiz.qz[Math.floor(Math.random() * animequiz.qz.length)]
            )}`
          );
          let dataquiz2 = JSON.parse(fs.readFileSync(`./quiz-${m.chat}.json`));
          satoru.sendMessage(
            m.chat,
            {
              image: { url: `${dataquiz2.img}` },
              caption: `*_Descubra o personagem 😀_*`,
            },
            { quoted: m }
          );
        }, 5000);
      }
    }
    //Suit PvP
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;

      if (
        m.sender == roof.p2 &&
        body == "aceitar" &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(tolak|negar|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
          satoru.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejtou o convite`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        satoru.sendText(
          m.chat,
          `
┌〔 *MSG ENVIADA NO PV* 〕
│
├  *Jogador 1:* @${roof.p.split`@`[0]} 
│
├  *jogador 2:* @${roof.p2.split`@`[0]}
│
└ clique em  https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          satoru.sendText(
            roof.p,
            `Por favor digite: \n\nPedra 🗿\nPapel 📄\nTesoura ✂️`
          );
        if (!roof.pilih2)
          satoru.sendText(
            roof.p2,
            `Por favor digite: \n\nPedra 🗿\nPapel 📄\nTesoura ✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            satoru.sendText(
              m.chat,
              `Ambos os jogadores não têm intenção de jogar,\nPPT cancelado`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            satoru.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } não escoleu, game over`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /tesoura/i;
      let b = /pedra/i;
      let k = /papel/i;
      let reg = /^(tesoura|pedra|papel)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        responder(
          `Você escolheu ${m.text} ${
            !roof.pilih2 ? `\n\nEsperando o oponente escolher...` : ""
          }`
        );
        if (!roof.pilih2)
          satoru.sendText(
            roof.p2,
            "_O oponente escolheu_\nAgora é a sua vez",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        responder(
          `Você escolheu ${m.text} ${
            !roof.pilih ? `\n\nEsperando o oponente escolher` : ""
          }`
        );
        if (!roof.pilih)
          satoru.sendText(
            roof.p,
            "_Seu oponente escolheu_\nAgora é sua vez",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        satoru.sendText(
          roof.asal,
          `_*Resultado:*_${tie ? "\n" : ""}

@${roof.p.split`@`[0]} jogou ${roof.text}! ${
            tie ? "" : roof.p == win ? ` Vitória!!\n` : `\n`
          }
@${roof.p2.split`@`[0]} jogou ${roof.text2}! ${
            tie ? "" : roof.p2 == win ? ` Vitória!! \n` : `\n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    }

    // bj.stand();
    switch (command) {
      ////////////////////////////////////////////
      //////////////////CANVAS/////////////////////
      ////////////////////////////////////////////

      // }
      // break

      case "igdl":
        {
          var url = args[0];
          if (!url)
            return responder("Você precisa enviar o link para baixar o video");
          instagram
            .insta_post(url)
            .then(async (data) => {
              satoru.sendMessage(
                m.chat,
                { video: { url: data.post1.url }, caption: data.title },
                { quoted: m }
              );
            })
            .catch(() => responder("ocorreu um erro"));
        }
        break;
      // ========== STORY DOWNLOADER ==========
      case "storydl":
        {
          var url = args[0];
          instagram.insta_story("euteto").then(async (data) => {
            console.log(data);
          });
        }
        break;
      // ========== PROFILE ANALYZER ==========
      case "igstalk":
        var url = args[0];
        instagram.insta_profile("username").then(async (data) => {
          console.log(data);
        });
        break;

      case "wasted":
      case "rip":
      case "beautiful":
      case "jail":
      case "borro":
      case "dripp":
      case "gun":
      case "triggered":
      case "comunismo":
      case "lgbt":
      case "procurado":
      case "circle":
        {
          let { TelegraPh } = require("./src/lib/uploader");
          if (!/image/.test(mime))
            return responder(
              `Envie/Responda uma imagem com: ${prefix + command}`
            );
          responder(mess.wait);
          mee = await satoru.downloadAndSaveMediaMessage(quoted);
          mem = await TelegraPh(mee);
          meme = `https://api-exteam.herokuapp.com/api/${command}?img=${mem}`;
          console.log(meme);
          memek = await satoru.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author,
          });
          await fs.unlinkSync(memek);
        }
        break;

      //////////////////////////////////////////////
      ////TEXPRO LOGOS by brunoww///////////////////
      /////////////////////////////////////////////

      case "wolf":
      case "wolf2":
      case "urso":
      case "ninjalogo":
      case "leao":
      case "vingadores":
      case "marvel":
      case "thor":
      case "capitaoamerica":
      case "pornhub":
      case "space":
        {
          var texto = args[0];
          var texto2 = args[1];
          if (!texto || !texto2)
            return responder(
              ` Você precisa enviar dois textos para esse utilizar esse comando!! \n\n *Exemplo: *${
                prefix + command
              } Satoru Gojo`
            );
          satoru.sendMessage(
            m.chat,
            {
              image: {
                url: `https://satoru-api.herokuapp.com/api/textpro/${command}?text=${texto}&text2=${texto2}&apikey=APIKEY`,
              },
              caption: `\*Text Pro:\* ${command}`,
            },
            { quoted: m }
          );
        }
        break;

      case "joker":
      case "urso":
      case "holograpic":
      case "blackpink":
      case "harrypotter":
      case "verao":
      case "1917":
      case "devil":
      case "thunder2":
        texto = args[0];
        if (!texto)
          return responder(`Modo de uso: ${prefix + command} ${pushname}`);
        satoru.sendMessage(
          m.chat,
          {
            image: {
              url: `https://satoru-api.herokuapp.com/api/textpro/${command}?text=${texto}&apikey=APIKEY`,
            },
          },
          { quoted: m }
        );
        break;
      //////////////////////////////////////
      //////////////by brunowww////////////
      ////////////////////////////////////

      case "anime":
        {
          const name = body.slice(6);
          if (!name) return reply("qual anime vc quer buscar?");
          malScraper
            .getInfoFromName(name)
            .then((response) => {
              foto = response.picture;
              infos =
                "\n✍️ Synopsis: " +
                response.synopsis +
                "\n⭐ Score: " +
                response.score +
                "\n🎬Episodes: " +
                response.episodes +
                "\n⏳ Duration: " +
                response.duration +
                "\n📅 Data: " +
                response.aired;
              translate(`${infos}`, { from: "en", to: "pt" }).then((res) => {
                satoru.sendMessage(
                  m.chat,
                  {
                    image: { url: foto },
                    caption: `🧾 Título: ${response.title + res.text}`,
                  },
                  { quoted: m }
                );
              });
            })
            .catch((err) => console.log("Ocorreu um erro :/"));
        }

        break;

      case "simi":
        {
          var pergunta = body.slice(5);
          if (!pergunta) return responder("o que você quer perguntar ao bot?");
          const options = {
            method: "GET",
            url: "https://simsimi-message.p.rapidapi.com/",
            params: { text: pergunta, lc: "pt" },
            headers: {
              "X-RapidAPI-Key":
                "01636c10f7msh4b05f5ff4263b66p1528acjsn23a7f91b83fa",
              "X-RapidAPI-Host": "simsimi-message.p.rapidapi.com",
            },
          };

          axios
            .request(options)
            .then(function (response) {
              responder(response.data.message);
            })
            .catch(function (error) {
              console.error(error);
            });
        }
        break;
      case "traduzir":
        {
          traduzir = body.slice(9);
          if (!args) return "qual texto vc quer traduzir?";
          translate(`${traduzir}`, { to: "pt" })
            .then((res) => {
              responder(res.text);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        break;
      case "cotacao":
        {
          const listMessage = {
            text: ` Óla ${pushname}!! como posso te ajudar?`,
            footer: "entre em meu grupo para novidades!",
            buttonText: "Clique Aqui!!",
            sections: [
              {
                title: `Selecione a moeda que voce deseja saber o valor.`,
                rows: [
                  {
                    title: "EURO 💶",
                    description: "\n\n_Valor do Euro_",
                    rowId: "euro",
                  },
                  {
                    title: "DÓLAR 💵",
                    description: "\n\n_Valor do Dólar_",
                    rowId: "dolar",
                  },
                  {
                    title: "LIBRA 💷",
                    description: "\n\n_Valor da Libra_",
                    rowId: "libra",
                  },
                  {
                    title: "BITCOIN 🪙",
                    description: "\n\n_Valor do Bitcoin_",
                    rowId: "bitcoin",
                  },
                  {
                    title: "ETHEREUM ⬨",
                    description: "\n\n_Valor do Ethereum_",
                    rowId: "ethereum",
                  },
                ],
              },
            ],
            listType: 1,
          };

          satoru.sendMessage(m.chat, listMessage, {
            quoted: m,
          });
        }
        break;
      case "warzone":
        {
          let id = args[0];
          let plataforma = args[1];
          if (!id || !plataforma)
            return responder(
              `Use da maneira correta: ${
                prefix + command
              } nickname plataforma\nExemplo: ${prefix + command} Amartin74 psn`
            );

          const options = {
            method: "GET",
            url:
              "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" +
              id +
              "/" +
              plataforma,
            headers: {
              "X-RapidAPI-Key":
                "01636c10f7msh4b05f5ff4263b66p1528acjsn23a7f91b83fa",
              "X-RapidAPI-Host": "call-of-duty-modern-warfare.p.rapidapi.com",
            },
          };

          axios
            .request(options)
            .then((response) => {
              let resposta = response.data.br;
              console.log(response.data);
              tmps = resposta.timePlayed;
              tmpm = tmps / 60;
              tmph = (tmpm / 60).toFixed(3);

              stats = `
    *COD Warzone Stats:* 🎮


🥇 *Wins:* ${resposta.wins}
☠️ *Kills:* ${resposta.kills}
💀 *Mortes:* ${resposta.deaths}
⚰️ *K/D:* ${resposta.kdRatio.toFixed(3)}
⏳ *Tempo Jogado:* ${tmph} horas
💯 *Top 25:* ${resposta.topTwentyFive}
🕹️ *Top 10:* ${resposta.topFive}
🏹 *Top 5* ${resposta.topFive}
🎯 *Pontuação* ${resposta.score}
⚔️ *Partidas Jogadas:* ${resposta.gamesPlayed}
🤝 *Colegas Revividos:* ${resposta.revives}
☠️ *Contratos* ${resposta.contracts}
  `;

              satoru.sendMessage(
                m.chat,
                { text: stats },
                {
                  quoted: {
                    key: {
                      participant: "0@s.whatsapp.net",
                    },
                    message: {
                      orderMessage: {
                        itemCount: 1,
                        status: 1,
                        surface: 1,
                        message: "𝖂𝖆𝖗𝖟𝖔𝖓𝖊 𝕾𝖙𝖆𝖙𝖘 👑", //Kasih namalu
                        orderTitle: "Bang",
                        thumbnail: logow, //Gambarnye
                        sellerJid: "0@s.whatsapp.net",
                      },
                    },
                  },
                }
              );
            })
            .catch(function (error) {
              console.error(error);
            });
        }

        break;
      case "correios":
        {
          let id = args[0];
          if (!id)
            return responder(
              `Use da maneira correta: ${
                prefix + command
              } nickname \nExemplo: ${prefix + command} XX87999BR `
            );

          axios
            .get(`https://proxyapp.correios.com.br/v1/sro-rastro/${id}`)

            .then((response) => {
              let resposta = response.data.objetos[0];
              cod = resposta.codObjeto;
              let array = resposta.eventos;
              data = resposta.dtPrevista.substr(0, 10);
              var baseUrl =
                "https://proxyapp.correios.com.br/public-resources/img/caminhao-cor.png";
              let result = array.map(function (item) {
                return (
                  "⌛ Status: " +
                  item.descricao +
                  "\n📅 Data: " +
                  item.dtHrCriado +
                  "\n🧭 Unidade: " +
                  item.unidade.endereco.cidade +
                  "/" +
                  item.unidade.endereco.uf +
                  "\n\n"
                );

                // item.unidadeDestino.endereco.uf +
                // "\n\n"
              });
              satoru.sendMessage(
                m.chat,
                { image: { url: baseUrl }, caption: result },
                { quoted: m }
              );
              //  console.log(testee);
            })
            .catch((response) => {
              responder(
                "Erro, talvez você tenha digitado o código de rastreio errado"
              );
            });
        }
        break;
      case "jogosgratis":
        {
          const downUrl = "https://store.epicgames.com/pt-BR/p/";
          getGames("BR", true)
            .then((res) => {
              const currentGame = res.currentGames;
              const upcomingGame = res.nextGames;
              if (!args[0]) {
                currentGame.forEach((element) => {
                  let imgUrl;
                  let proUrl = downUrl + element.urlSlug;
                  let startdate =
                    element.promotions.promotionalOffers[0].promotionalOffers[0].startDate.split(
                      "T"
                    )[0];
                  let enddate =
                    element.promotions.promotionalOffers[0].promotionalOffers[0].endDate.split(
                      "T"
                    )[0];
                  element.keyImages.forEach((value) => {
                    if (value.type == "Thumbnail") return (imgUrl = value.url);
                  });
                  let mess = `🏷️ *Titulo :* ${element.title}\n🗒️ *Descrição :* ${element.description}\n\n📅 *Data :* ${startdate} até ${enddate}`;
                  2;
                  satoru.sendMessage(
                    m.chat,
                    {
                      image: { url: imgUrl },
                      caption: mess,
                    },
                    { quoted: m }
                  );
                });
              }
            })
            .catch((err) => {
              responder("Ocorreu um erro, desculpe...");
            });
        }

        break;
      case "fortnite":
        {
          let id = args[0];
          if (!id)
            return responder(
              `Use da maneira correta: ${
                prefix + command
              } nickname \nExemplo: ${prefix + command} W7M__BRUNO `
            );

          const options = {
            method: "GET",
            url: "https://fortnite-api.p.rapidapi.com/stats/" + id,
            headers: {
              "X-RapidAPI-Key":
                "01636c10f7msh4b05f5ff4263b66p1528acjsn23a7f91b83fa",
              "X-RapidAPI-Host": "fortnite-api.p.rapidapi.com",
            },
          };
          let imgf =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1iQiVVx6v9D4Ba4H3lLiJHEsiy0P3HPBCA&usqp=CAU";
          let logof = await reSize(imgf, 200, 200);

          axios
            .request(options)
            .then(function (response) {
              let resposta = response.data.lifetime.all.defaultsolo;
              let tmpm = resposta.minutesplayed;
              let tmph = (tmpm / 60).toFixed(3);

              let squad = response.data.lifetime.all.defaultsquad;
              let tmpms = squad.minutesplayed;
              let tmphs = (tmpms / 60).toFixed(3);

              let duo = response.data.lifetime.all.defaultduo;
              let tmpmd = duo.minutesplayed;
              let tmpd = (tmpmd / 60).toFixed(3);

              let stats = `
    Fortnite Stats 🤯
🎮 _Modo:_ Solo
🕹️ _Partidas Jogadas:_ ${resposta.matchesplayed}
🎯 _Kills:_ ${resposta.kills}
🥇 _Wins:_ ${resposta.placetop1}
🥈 _Top 10:_ ${resposta.placetop10}
🥉 _Top 25:_ ${resposta.placetop25}   
🪙 _Pontuação:_ ${resposta.score}
⏳ _Horas Jogadas:_ ${tmph}
💪 _Taxa de Vitórias:_ ${resposta.winrate}
😈 _K/D_: ${resposta.kdr}

🎮 _Modo:_ Duo
🕹️ _Partidas Jogadas:_ ${duo.matchesplayed}
🎯 _Kills:_ ${duo.kills}
🥇 _Wins:_ ${duo.placetop1}
🥈 _Top 5:_ ${duo.placetop5}
🥉 _Top 12:_ ${duo.placetop12}   
🪙 _Pontuação:_ ${duo.score}
⏳ _Horas Jogadas:_ ${tmpd}
💪 _Taxa de Vitórias:_ ${duo.winrate}
😈 _K/D_: ${duo.kdr}

🎮 _Modo:_ Squad
🕹️ _Partidas Jogadas:_ ${squad.matchesplayed}
🎯 _Kills:_ ${squad.kills}
🥇 _Wins:_ ${squad.placetop1}
🥈 _Top 3:_ ${squad.placetop3}
🥉 _Top 6:_ ${squad.placetop6}   
🪙 _Pontuação:_ ${squad.score}
⏳ _Horas Jogadas:_ ${tmphs}
💪 _Taxa de Vitórias:_ ${squad.winrate}
😈 _K/D_: ${squad.kdr}
`;
              satoru.sendMessage(
                m.chat,
                { text: stats },
                {
                  quoted: {
                    key: {
                      participant: "0@s.whatsapp.net",
                    },
                    message: {
                      orderMessage: {
                        itemCount: 1,
                        status: 1,
                        surface: 1,
                        message: "𝔉𝔬𝔢𝔱𝔫𝔦𝔱𝔢  𝕾𝖙𝖆𝖙𝖘 👑", //Kasih namalu
                        orderTitle: "Bang",
                        thumbnail: logof, //Gambarnye
                        sellerJid: "0@s.whatsapp.net",
                      },
                    },
                  },
                }
              );
            })
            .catch(function (error) {
              console.error(error);
            });
        }
        break;
      case "shipnome":
        {
          nome1 = args[0];
          nome2 = args[1];
          if (!nome1 || !nome2) return responder("use da maneira correta...");
          const options = {
            method: "GET",
            url: "https://love-calculator.p.rapidapi.com/getPercentage",
            params: { sname: nome1, fname: nome2 },
            headers: {
              "X-RapidAPI-Key":
                "01636c10f7msh4b05f5ff4263b66p1528acjsn23a7f91b83fa",
              "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
            },
          };

          axios
            .request(options)
            .then(function (response) {
              var tr = response.data.result;
              var pr = response.data.percentage;
              translate(`${tr}`, { from: "en", to: "pt" }).then((res) => {
                responder(
                  `calculando ...⏳\nSegundo meus calculos, esses nomes combinam ${pr}%\n${res.text} `
                );
              });
            })
            .catch(function (error) {
              console.error(error);
            });
        }

        break;
      case "cep":
        {
          let cep = body.slice(4);
          axios
            .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then((response) => {
              let cep = response.data;
              responder(
                " *Buscador de Cep* 🔍\n Cidade: " +
                  cep.city +
                  "\n Bairro: " +
                  cep.neighborhood +
                  "\n Rua: " +
                  cep.street +
                  "\n Serviço: " +
                  cep.service
              );
            });
        }
        break;
      case "ddd":
        {
          let ddd = body.slice(4);
          if (!ddd) return reply(mess.noText);
          axios
            .get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            .then((response) => {
              let resposta = response.data;
              let cidades = resposta.cities.join("\n");

              responder(`
       *Busca de DDD* 🔍
DDD: ${args[0]}
Estado: ${resposta.state}
Cidades:
${cidades}\n`);
            });
        }
        break;

      case "dolar":
      case "euro":
      case "libra":
        {
          if (command == "dolar") {
            var money = "USD-BRL";
          } else if (command == "euro") {
            var money = "EUR-BRL";
          } else if (command == "bitcoin") {
            var money = "BTC-BRL";
          } else if (command == "libra") {
            var money = "GBP-BRL";
          } else if (command == "ethereum") {
            var money = "ETH-BRL";
          }
          axios
            .get(`https://economia.awesomeapi.com.br/last/${money}`)
            .then((response) => {
              if (command == "dolar") {
                var resposta = response.data.USDBRL;
              } else if (command == "euro") {
                var resposta = response.data.EURBRL;
              } else if (command == "libra") {
                var resposta = response.data.GBPBRL;
              }
              responder(
                `*Cotação nas ultimas 24H* 💱 \nMoeda: ` +
                  resposta.name +
                  "\nValor mais alto: " +
                  Number(resposta.high).toFixed(2) +
                  "\nValor mais baixo: " +
                  Number(resposta.low).toFixed(2) +
                  "\nValor atual: " +
                  Number(resposta.bid).toFixed(2)
              );
            })
            .catch((response) => {
              console.log("erro");
            });
        }
        break;

      case "bitcoin":
      case "ethereum":
        {
          if (command == "bitcoin") {
            var money = "BTC-BRL";
          } else {
            var money = "ETH-BRL";
          }
          axios
            .get(`https://economia.awesomeapi.com.br/last/${money}`)
            .then((response) => {
              if (command == "bitcoin") {
                var resposta = response.data.BTCBRL;
              } else {
                var resposta = response.data.ETHBRL;
              }
              responder(
                ` *Cotação nas ultimas 24H* 💱\nMoeda: ` +
                  resposta.name +
                  "\nValor mais alto: " +
                  resposta.high +
                  "\nValor mais baixo: " +
                  resposta.low +
                  "\nValor atual: " +
                  resposta.bid
              );
            })
            .catch((response) => {
              console.log("erro");
            });
        }
        break;
      case "meme":
        {
          satoru.sendMessage(
            m.chat,
            {
              image: {
                url: "https://satoru-api.herokuapp.com/api/random/meme?apikey=APIKEY",
              },
            },
            { quoted: m }
          );
        }
        break;

      ////////////////////////////////////////////
      ////////NSFW COMMANDS by brunoww///////////
      //////////////////////////////////////////
      case "wallpaper18":
        if (!m.isGroup) {
          let buttonis = [
            {
              buttonId: `${command} ${text}`,
              buttonText: { displayText: "Próxima 🤠" },
              type: 1,
            },
          ];
          let buttonMessagek = {
            image: { url: `http://hadi-api.herokuapp.com/api/anime` },
            caption: `aqui está! Por favor, não abuse do comando.`,
            footer: satoru.user.name,
            buttons: buttonis,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessagek, { quoted: m });
        } else {
          if (!isNsfw)
            return responder(
              "Ative o modo nsfw para continuar, utilize o comando nsfw"
            );
          let buttonis = [
            {
              buttonId: `${command} ${text}`,
              buttonText: { displayText: "Próxima 🤠" },
              type: 1,
            },
          ];
          let buttonMessagek = {
            image: { url: `http://hadi-api.herokuapp.com/api/anime` },
            caption: `aqui está! Por favor, não abuse do comando.`,
            footer: satoru.user.name,
            buttons: buttonis,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessagek, { quoted: m });
        }
        break;
      case "nsfwloli":
      case "ahegao":
      case "ass":
      case "bdsm":
      case "blowjob":
      case "cuckold":
      case "ero":
      case "femdom":
      case "foot":
      case "gangbang":
      case "glasses":
      case "hentai":
      case "jahy":
      case "manga":
      case "masturbation":
      case "neko":
      case "orgy":
      case "panties":
      case "pussy":
      case "neko2":
        if (!m.isGroup) {
          let buttonkis = [
            {
              buttonId: `${command} ${text}`,
              buttonText: { displayText: "Próxima 😈" },
              type: 1,
            },
          ];
          let buttonMessagekk = {
            image: {
              url: `https://satoru-api.herokuapp.com/api/nsfw/${command}?apikey=${satorukey}`,
            },
            caption: `aqui está! Por favor, não abuse do comando.`,
            footer: satoru.user.name,
            buttons: buttonkis,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessagekk, { quoted: m });
        } else {
          if (!isNsfw) return responder("o adm nao liberou o hentai 😡");
          let buttonkis = [
            {
              buttonId: `${command} ${text}`,
              buttonText: { displayText: "Próxima 😈" },
              type: 1,
            },
          ];
          let buttonMessagekk = {
            image: {
              url: `https://satoru-api.herokuapp.com/api/nsfw/${command}?apikey=${satorukey}`,
            },
            caption: `aqui está! Por favor, não abuse do comando.`,
            footer: satoru.user.name,
            buttons: buttonkis,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessagekk, { quoted: m });
        }
        break;
      ////////////EFEITOS PARA VOZ///////////////
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "tupai":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/tupai/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            responder(mess.wait);
            let media = await satoru.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return responder(err);
              let buff = fs.readFileSync(ran);
              satoru.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else responder(`Marque um áudio usando: *${prefix + command}*`);
        } catch (e) {
          responder(e);
        }
        break;

      case "reagir":
        if (!isPremium) return responder(mess.semprem);
        if (!text) return responder(`[❗] Use assim : ${prefix + command} 🏮`);
        satoru.relayMessage(
          m.chat,
          {
            reactionMessage: {
              key: {
                id: m.quoted.id,
                remoteJid: m.chat,
                fromMe: true,
              },
              text: q,
            },
          },
          { messageId: m.id }
        );
        break;

      case "sticker":
      case "figurinha":
      case "fig":
      case "stickergif":
      case "figu":
        {
          if (!quoted)
            return responder(`Marque Vídeo/Image usando ${prefix + command}`);
          responder(mess.wait);
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await satoru.sendImageAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return responder("Maximo 10 segundos!");
            let media = await quoted.download();
            let encmedia = await satoru.sendVideoAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
          } else {
            responder(
              `Marque vídeo/imagen com ${
                prefix + command
              }\nDuração do Video 1-9 Segundos`
            );
          }
        }
        break;

      case "nsfw":
        {
          if (!m.isGroup) return responder(`${mess.group}`);
          if (!isAdmins) return responder(`${mess.admin}`);
          //if (!isOwner) return responder(ptbr.ownerB())
          if (Number(args[0]) === 1) {
            //if (isNsfw) return responder('❎o NSFW já está ativo no grupo❎')
            nsfw.push(m.chat);
            fs.writeFileSync("./src/db/nsfw.json", JSON.stringify(nsfw));
            responder("O adm liberou o porno 😳");
          } else if (Number(args[0]) === 0) {
            nsfw.splice(m.chat, 1);
            fs.writeFileSync("./src/db/nsfw.json", JSON.stringify(nsfw));
            responder("O corno do adm proibiu o porno 😡");
          } else {
            let buttons = [
              {
                buttonId: "nsfw 1",
                buttonText: { displayText: "ATIVAR 🙊" },
                type: 1,
              },
              {
                buttonId: "nsfw 0",
                buttonText: { displayText: "DESATIVAR 🐵" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `MODO NSFW`,
              satoru.user.name,
              m
            );
          }
        }
        break;
      case "antilink":
      case "semlink":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (q === "on") {
            if (isAntiLink)
              return responder(`O ${command} já estava ativo! 🤦`);
            antilink.push(m.chat);
            fs.writeFileSync("./src/db/antilink.json", JSON.stringify(antilink));
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!isAntiLink) return responder("Já esta desativado");
            var ini = antilink.indexOf(m.chat);
            antilink.splice(ini, 1);
            fs.writeFileSync("./src/db/antilink.json", JSON.stringify(antilink));
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }

        break;

      case "antipv":
      case "antiprivado":
        {
          if (!isCreator) return responder(mess.owner);
          if (q === "on") {
            if (antipv) return responder(`O ${command} já estava ativo! 🤦`);
            antipv = true;
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!antipv) return responder("Já esta desativado");
            antipv = false;
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }
        break;

      case "antidoc":
      case "semdocumento":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (q === "on") {
            if (isDoc) return responder(`O ${command} já estava ativo! 🤦`);
            antidoc.push(m.chat);
            fs.writeFileSync("./src/db/antidoc.json", JSON.stringify(antidoc));
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!isDoc) return responder("Já esta desativado");
            var ini = antidoc.indexOf(m.chat);
            antidoc.splice(ini, 1);
            fs.writeFileSync("./src/db/antidoc.json", JSON.stringify(antidoc));
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }
        break;

      case "antiloc":
      case "semlocalização":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (q === "on") {
            if (isLoc) return responder(`O ${command} já estava ativo! 🤦`);
            antiloc.push(m.chat);
            fs.writeFileSync("./src/db/antiloc.json", JSON.stringify(antiloc));
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!isLoc) return responder("Já esta desativado");
            var ini = antiloc.indexOf(m.chat);
            antiloc.splice(ini, 1);
            fs.writeFileSync("./src/db/antiloc.json", JSON.stringify(antiloc));
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }
        break;

      case "anticon":
      case "semcontato":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (q === "on") {
            if (isCon) return responder(`O ${command} já estava ativo! 🤦`);
            anticon.push(m.chat);
            fs.writeFileSync("./src/db/anticon.json", JSON.stringify(anticon));
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!isCon) return responder("Já esta desativado");
            var ini = anticon.indexOf(m.chat);
            anticon.splice(ini, 1);
            fs.writeFileSync("./src/db/anticon.json", JSON.stringify(anticon));
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }
        break;

      case "anticat":
      case "semcatalogo":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (q === "on") {
            if (isCat) return responder(`O ${command} já estava ativo! 🤦`);
            anticat.push(m.chat);
            fs.writeFileSync("./src/db/anticat.json", JSON.stringify(anticat));
            responder(`O ${command} foi ativado com sucesso 😎`);
          } else if (q === "off") {
            if (!isCat) return responder("Já esta desativado");
            var ini = anticat.indexOf(m.chat);
            anticat.splice(ini, 1);
            fs.writeFileSync("./src/db/anticat.json", JSON.stringify(anticat));
            responder(`o ${command} foi desativado 🤝`);
          } else if (!q) {
            let buttons = [
              {
                buttonId: `${command} on`,
                buttonText: { displayText: "ATIVAR 🤠" },
                type: 1,
              },

              {
                buttonId: `${command} off`,
                buttonText: { displayText: "DESATIVAR 😐" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `Modo ${command}, o que deseja fazer? 🕵️`,
              satoru.user.name,
              m
            );
          }
        }
        break;
      case "imagenobg":
      case "removebg":
      case "remove-bg":
        {
          if (!quoted)
            return responder(
              `Envie ou responda uma imagem com:  ${prefix + command}`
            );
          if (!/image/.test(mime))
            return responder(
              `Envie ou responda uma imagem com:  ${prefix + command}`
            );
          if (/webp/.test(mime))
            return responder(
              `Envie ou responda uma imagem com: ${prefix + command}`
            );
          let remobg = require("remove.bg");
          let apirnobg = [
            "q61faXzzR5zNU6cvcrwtUkRU",
            "S258diZhcuFJooAtHTaPEn4T",
            "5LjfCVAp4vVNYiTjq9mXJWHF",
            "aT7ibfUsGSwFyjaPZ9eoJc61",
            "BY63t7Vx2tS68YZFY6AJ4HHF",
            "5Gdq1sSWSeyZzPMHqz7ENfi8",
            "86h6d6u4AXrst4BVMD9dzdGZ",
            "xp8pSDavAgfE5XScqXo9UKHF",
            "dWbCoCb3TacCP93imNEcPxcL",
          ];
          let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
          hmm = (await "./src/tmp/remobg-") + getRandom("");
          localFile = await satoru.downloadAndSaveMediaMessage(quoted, hmm);
          outputFile = (await "./src/tmp/hremo-") + getRandom(".png");
          responder(mess.wait);
          remobg
            .removeBackgroundFromImageFile({
              path: localFile,
              apiKey: apinobg,
              size: "regular",
              type: "auto",
              scale: "100%",
              outputFile,
            })
            .then(async (result) => {
              satoru.sendMessage(
                m.chat,
                { image: fs.readFileSync(outputFile), caption: mess.success },
                { quoted: m }
              );
              await fs.unlinkSync(localFile);
              await fs.unlinkSync(outputFile);
            });
        }
        break;
      ///novos////)
      case "map":
        if (!q)
          return responder(
            `Onde está o texto??\nExemplo ${prefix}map São Paulo`
          );
        responder(mess.wait);
        data = await fetchJson(
          `https://mnazria.herokuapp.com/api/maps?search=${text}`
        );
        satoru.sendMessage(
          m.chat,
          { image: { url: data.gambar }, caption: `resultado de: ${text}` },
          { quoted: m }
        );
        break;
      /////// musicas
      case "google":
        {
          if (!text) return responder(`ex: : ${prefix + command} kamaitachi`);
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search: ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *📜 Título* : ${g.title}\n`;
              teks += `⭔ *✍️ Desc* : ${g.snippet}\n`;
              teks += `⭔ *🔗 Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            responder(teks);
          });
        }
        break;
      case "motta":
      case "nanasai":
      case "dri":
      case "thefox":
      case "mikezin":
      case "magyn":
      case "lilchainz":
      case "vmz":
      case "kamaitachi":
        data = fs.readFileSync(`./src/mp3/${command}.js`);
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];
        buffer = await getBuffer(randKey.result);
        satoru.sendMessage(
          m.chat,
          { audio: { url: randKey.result }, mimetype: "audio/mpeg", ptt: true },
          { quoted: m }
        );
        break;

      //////interação
      case "abraço":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        satoru.sendText(
          m.chat,
          `Que fofo...💘 você deu um abraço em @${mentioned[0].split("@")[0]}`,
          m,
          { mentions: [mentioned] }
        );
        data = fs.readFileSync("./src/interação/abraço.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];
        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;

      case "ship":
        if (!m.isGroup) return responder(mess.group);
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        porq = `${Math.floor(Math.random() * 100)}`;
        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/ship.jpg` },
            caption: `segundo meus cálculos, a chance de ambos namorarem é de ${porq}%`,
          },
          { quoted: m }
        );
        break;
      case "tapanar":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        sus = `😳 você deu um tapa na raba de @${mentioned[0].split("@")[0]}`;
        satoru.sendText(m.chat, sus, m, { mentions: [mentioned] });
        data = fs.readFileSync("./src/interação/tapab.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];

        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;
      case "beijo":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        sus = `Que fofo... 💘 você deu um beijo  em @${
          mentioned[0].split("@")[0]
        }`;
        satoru.sendText(m.chat, sus, m, { mentions: [mentioned] });
        data = fs.readFileSync("./src/interação/beijo.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];

        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;
      case "tapa":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pro = ".\n";
        for (let _ of mentioned) {
          pro += `@${_.split("@")[0]}\n`;
        }
        sus = `você deu um tapa em @${mentioned[0].split("@")[0]}`;
        satoru.sendText(m.chat, sus, m, { mentions: [mentioned] });
        data = fs.readFileSync("./src/interação/tapa.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];

        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;
      case "carinho":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pro = ".\n";
        for (let _ of mentioned) {
          pro += `@${_.split("@")[0]}\n`;
        }
        sus = `Que fofo...💘 você fez carinho  em @${
          mentioned[0].split("@")[0]
        }`;
        satoru.sendText(m.chat, sus, m, { mentions: [mentioned] });
        data = fs.readFileSync("./src/interação/carinho.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];

        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;
      case "chute":
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder("Você precisa mencionar alguém");
        mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
        sus = `Eita... você chutou a cara de @${mentioned[0].split("@")[0]}`;
        satoru.sendText(m.chat, sus, m, { mentions: [mentioned] });
        data = fs.readFileSync("./src/interação/chute.js");
        jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];

        satoru.sendMessage(
          m.chat,
          { video: { url: randKey.result }, gifPlayback: true },
          { quoted: m }
        );
        break;

      ///////// porcentagem e outros ///////////
      case "pau":
        random = `${Math.floor(Math.random() * 35)}`;
        const tamanho = random;
        //var (isNaN(tamanho))
        if (tamanho < 13) {
          pp = "só a fimose";
        } else if (tamanho == 13) {
          pp = "passou da média😳";
        } else if (tamanho == 14) {
          pp = "passou da média😳";
        } else if (tamanho == 15) {
          pp = "eita, vai pegar manga?";
        } else if (tamanho == 16) {
          pp = "eita, vai pegar manga?";
        } else if (tamanho == 17) {
          pp = "calma man, a mina não é um poço😳";
        } else if (tamanho == 18) {
          pp = "calma man, a mina não é um poço😳";
        } else if (tamanho == 19) {
          pp = "calma man, a mina não é um poço😳";
        } else if (tamanho == 20) {
          pp = "você tem um poste no meio das pernas";
        } else if (tamanho == 21) {
          pp = "você tem um poste no meio das pernas";
        } else if (tamanho == 22) {
          pp = "você tem um poste no meio das pernas";
        } else if (tamanho == 23) {
          pp = "você tem um poste no meio das pernas";
        } else if (tamanho == 24) {
          pp = "você tem um poste no meio das pernas";
        } else if (tamanho > 25) {
          pp = "vai procurar petróleo com isso?";
        }

        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/pau.jpg` },
            caption: `Seu pau tem ${random}cm\n\n${pp}`,
          },
          { quoted: mek }
        );
        break;
      case "morte":
      case "death":
        idde = [
          "30",
          "76",
          "90",
          "72",
          "83",
          "73",
          "83",
          "74",
          "92",
          "100",
          "94",
          "48",
          "37",
          "53",
          "63",
        ];
        idade = idde[Math.floor(Math.random() * idde.length)];
        morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`;
        responder(morte);
        break;
      case "gadometro":
      case "gado":
        var chifre = [
          "ultra extreme gado",
          "Gado-Master",
          "Gado-Rei",
          "Gado",
          "Escravo-ceta",
          "Escravo-ceta Maximo",
          "Gacorno?",
          "Jogador De Forno Livre<3",
          "Mestre Do Frifai<3<3",
          "Gado-Manso",
          "Gado-Conformado",
          "Gado-Incubado",
          "Gado Deus",
          "Mestre dos Gados",
          "Topa tudo por buceta",
          "Gado Comum",
          "Mini Gadinho",
          "Gado Iniciante",
          "Gado Basico",
          "Gado Intermediario",
          "Gado Avançado",
          "Gado Profisional",
          "Gado Mestre",
          "Gado Chifrudo",
          "Corno Conformado",
          "Corno HiperChifrudo",
          "Chifrudo Deus",
          "Mestre dos Chifrudos",
          "Rei do Gado",
        ];
        var gado = chifre[Math.floor(Math.random() * chifre.length)];

        gadop = `${Math.floor(Math.random() * 100)}`;
        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/gado.jpg` },
            caption: `Você é:\n\n${gado}`,
          },
          { quoted: m }
        );
        break;
      case "chance":
        var avb = body.slice(7);
        if (args.length < 1)
          return responder(
            `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Bruno ser um trouxa`
          );
        random = `${Math.floor(Math.random() * 100)}`;
        responder(`A chance ${body.slice(7)}\n\né de... ${random}%`);
        break;
      case "caracoroa":
        if (args.length < 1)
          return responder("exemplo:\n*caracoroa cara\n*caracoroa coroa");
        cararo = ["cara", "coroa"];
        fej = cararo[Math.floor(Math.random() * cararo.length)];
        gg = fej;

        xp = Math.floor(Math.random() * 13) + 3;
        xp1 = `Você ganhou ${xp} em xp`;
        if (
          (fej == "cara" && args == "cara") ||
          (fej == "coroa" && args == "coroa")
        ) {
          var vit = "vitoria";
        } else if (
          (fej == "coroa" && args == "cara") ||
          (fej == "cara" && args == "coroa")
        ) {
          var vit = "derrota";
        }
        if (vit == "vitoria") {
          var tes = "Vitória do jogador";
        }
        if (vit == "derrota") {
          var tes = "A vitória é do ed   😎";
        }
        responder(
          `Escolha do jogador:   ${args}\nResultado:  ${fej}\n\n${tes}`
        );
        if (tes == "Vitória do jogador") {
          responder(xp1);
        }
        satoru.sendMessage(
          m.chat,
          { sticker: { url: `./src/stickers/caracoroa.webp` } },
          { quoted: m }
        );
        break;

      case "gay":
        random = `${Math.floor(Math.random() * 100)}`;
        boiola = random;
        if (boiola < 20) {
          bo = "hmm... você é hetero 😔";
        } else if (boiola == 21) {
          bo = "+/- boiola";
        } else if (boiola == 23) {
          bo = "+/- boiola";
        } else if (boiola == 24) {
          bo = "+/- boiola";
        } else if (boiola == 25) {
          bo = "+/- boiola";
        } else if (boiola == 26) {
          bo = "+/- boiola";
        } else if (boiola == 27) {
          bo = "+/- boiola";
        } else if (boiola == 28) {
          bo = "+/- boiola";
        } else if (boiola == 29) {
          bo = "+/- boiola";
        } else if (boiola == 30) {
          bo = "+/- boiola";
        } else if (boiola == 31) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 32) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 33) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 34) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 35) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 36) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 37) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 38) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 39) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 40) {
          bo = "tenho minha desconfiança...😑";
        } else if (boiola == 41) {
          bo = "você é né?😏";
        } else if (boiola == 42) {
          bo = "você é né?😏";
        } else if (boiola == 43) {
          bo = "você é né?😏";
        } else if (boiola == 44) {
          bo = "você é né?😏";
        } else if (boiola == 45) {
          bo = "você é né?😏";
        } else if (boiola == 46) {
          bo = "você é né?😏";
        } else if (boiola == 47) {
          bo = "você é né???";
        } else if (boiola == 48) {
          bo = "você é né?😏";
        } else if (boiola == 49) {
          bo = "você é né?😏";
        } else if (boiola == 50) {
          bo = "você é ou não?🧐";
        } else if (boiola > 51) {
          bo = "você é gay🙈";
        }
        teks = `Você é ${random}% Gay\n\n${bo}`;
        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/gay.jpg` },
            caption: `Você é ${random}% Gay\n\n${bo}`,
          },
          { quoted: m }
        );
        break;

      case "gostosa":
        random = `${Math.floor(Math.random() * 100)}`;
        boiola = random;
        if (boiola < 20) {
          bo = "Você é uma tabuaKKKKKKKKKKKKK";
        } else if (boiola == 21) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 23) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 24) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 25) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 26) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 27) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 28) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 29) {
          bo = "mt feikkkkkkkkkkk";
        } else if (boiola == 30) {
          bo = "Palito de picolékkkkkkkkk";
        } else if (boiola == 31) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 32) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 33) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 34) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 35) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 36) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 37) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 38) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 39) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 40) {
          bo = "você é aceitável 🧐";
        } else if (boiola == 41) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 42) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 43) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 44) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 45) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 46) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 47) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 48) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 49) {
          bo = "eu pegava 😳😳😳";
        } else if (boiola == 50) {
          bo = "GOSTOSAKKKKKKKKKKKK";
        } else if (boiola == 51) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 52) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 53) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 54) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 55) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 56) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 57) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 58) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 59) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 60) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 61) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 62) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 63) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 64) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 65) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 66) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 67) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola == 68) {
          bo = "Eita q  gostosakkkkkkkkk 😳";
        } else if (boiola > 69) {
          bo = "quanta gostosura😳";
        }
        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/gostosa.jpeg` },
            caption: `Você é ${random}% Gostosa\n\n${bo}`,
          },
          { quoted: m }
        );
        break;
      case "linda":
        random = `${Math.floor(Math.random() * 100)}`;
        boiola = random;
        if (boiola < 20) {
          bo = "ESPELHO QUEBROUKKKKKKKKKKKKK";
        } else if (boiola == 21) {
          bo = "fionakkk";
        } else if (boiola == 23) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 24) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 25) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 26) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 27) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 28) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 29) {
          bo = "mt feikkkkkkkkkkk";
        } else if (boiola == 30) {
          bo = "Dragãokkkkkkkkk";
        } else if (boiola == 31) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 32) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 33) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 34) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 35) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 36) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 37) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 38) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 39) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 40) {
          bo = "Melhor que nada 🧐";
        } else if (boiola == 41) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 42) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 43) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 44) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 45) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 46) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 47) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 48) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 49) {
          bo = "Bonitinha você 😳😳😳";
        } else if (boiola == 50) {
          bo = "GOSTOSAKKKKKKKKKKKK";
        } else if (boiola == 51) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 52) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 53) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 54) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 55) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 56) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 57) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 58) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 59) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 60) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 61) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 62) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 63) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 64) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 65) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 66) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 67) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola == 68) {
          bo = "quer me manipular ss ou nn ? 😡";
        } else if (boiola > 69) {
          bo = "bó casa?😳";
        }
        //satoru.sendMessage(m.chat, {image : { url: `./src/linda.jpeg`}, caption `Você é ${random}% linda\n\n${bo}`}, {quotequoted
        satoru.sendMessage(
          m.chat,
          {
            image: { url: `./src/meme/linda.jpeg` },
            caption: `Você é ${random}% linda\n\n${bo}`,
          },
          { quoted: m }
        );
        break;
      case "roleta":
        const tiro = ["vazio", "vazio", "vazio", "vazio", "pow", "pow"];
        const figr = ["roleta1", "roleta2", "roleta3"];
        tpa = tiro[Math.floor(Math.random() * tiro.length)];
        tpb = figr[Math.floor(Math.random() * figr.length)];
        if (tpa == "vazio") {
          var morte = "Você teve sorte dessa vez, o tambor estava vazio.";
        } else if (tpa == "pow") {
          var morte = "Tinha uma bala no tambor, POW!";
        }
        if (morte == "Tinha uma bala no tambor, POW!") {
          setTimeout(() => {
            satoru.sendMessage(
              m.chat,
              { sticker: { url: "./src/stickers/" + tpb + ".webp" } },
              { quoted: m }
            );
          }, 2100);
        }
        setTimeout(() => {
          responder(morte);
        }, 2300);
        break;

      case "ppt2":
        if (args.length < 1) return responder("Escolha: tesoura/pedra/papel");
        if (args[0] === "tesoura") {
          gunting = [
            `${pushname}: *${args[0]}*\nsatoru: *papel*\nVocê ganhou 😔`,
            `${pushname}: *${args[0]}*\nsatoru: *pedra*\nVocê perdeu 🙂`,
            `${pushname}: *${args[0]}*\nsatoru *tesoura*\n😏😏`,
          ];
          gun = gunting[Math.floor(Math.random() * gunting.length)];
          responder(gun);
        } else if (args[0] === "papel") {
          ker = [
            `${pushname}: *${args[0]}*\nsatoru *pedra*\nVocê ganhou 😔`,
            `${pushname}: *${args[0]}*\nsatoru *tesoura*\nVocê perdeu 🙂`,
            `${pushname}: *${args[0]}*\nsatoru: *papel*\nEmpate 🤨`,
          ];
          kertas = ker[Math.floor(Math.random() * ker.length)];
          responder(kertas);
        } else if (args[0] === "pedra") {
          bat = [
            `${pushname}: *${args[0]}*\nSatoru *tesoura*\nVocê ganhou 😔`,
            `${pushname}: *${args[0]}*\nSatoru: *papel*\nVocê perdeu 🙂`,
            `${pushname}: *${args[0]}*\nSatoru: *pedra*\nEmpate 🤕`,
          ];
          batu = bat[Math.floor(Math.random() * bat.length)];
          responder(batu);
        } else {
          responder("Escolha: tesoura/pedra/papel");
        }
        break;
      case "ppt":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("ppt") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            return responder(`Complete seu jogo anterior`);
          if (m.mentionedJid[0] === m.sender)
            return responder(`Não consigo jogar comigo mesmo !`);
          if (!m.mentionedJid[0])
            return responder(
              `_Com quem você quer jogar?_\nMarque a pessoa...\nExemplo : ${prefix}ppt @${owner[1]}`,
              m.chat,
              { mentions: [owner[1] + "@s.whatsapp.net"] }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return responder(
              `A pessoa que você está desafiando está jogando com outra pessoa :(`
            );
          let id = "ppt_" + new Date() * 1;
          let caption = `
    ┌〔 *Jogo PPT* 🪨📄✂️ 〕
    │ 
    ├  *Jogador 1:* @${m.sender.split`@`[0]}
    │ 
    └  *Jogador 2:* @${m.mentionedJid[0].split`@`[0]} `;

          let buttonsppt = [
            {
              buttonId: `aceitar`,
              buttonText: { displayText: "ACEITAR 🔥" },
              type: 1,
            },
            {
              buttonId: `negar`,
              buttonText: { displayText: "NEGAR 😞" },
              type: 1,
            },
          ];

          let buttonMessageppt = {
            text: caption,
            footer: `  @${
              m.mentionedJid[0].split`@`[0]
            } selecione a opção abaixo!!`,
            buttons: buttonsppt,
            headerType: 1,
            mentions: parseMention(caption),
          };

          this.suit[id] = {
            chat: await satoru.sendMessage(m.chat, buttonMessageppt),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                satoru.sendText(m.chat, `_Tempo limite atingido_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;

      case "par":
        {
          if (!m.isGroup) return responder(`${mess.group}`);
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          let jawab = `Segundo meus calculos, o par perfeifo para @${
            me.split("@")[0]
          } é: @${jodoh.split("@")[0]} 🙈`;
          let ments = [me, jodoh];
          let buttons = [
            { buttonId: "❤️", buttonText: { displayText: "❤️" }, type: 1 },
          ];
          await satoru.sendButtonText(
            m.chat,
            buttons,
            jawab,
            satoru.user.name,
            m,
            {
              mentions: ments,
            }
          );
        }
        break;
      case "casal":
        {
          if (!m.isGroup) return responder(`${mess.group}`);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          let jawab = `FORMADOR DE CASAIS❤️
  segundo meus cálculos, @${orang.split("@")[0]} e @${
            jodoh.split("@")[0]
          } formam um belo casal❤️💖👀`;
          let menst = [orang, jodoh];
          let buttons = [
            { buttonId: "❤️", buttonText: { displayText: "❤️" }, type: 1 },
          ];
          await satoru.sendButtonText(
            m.chat,
            buttons,
            jawab,
            satoru.user.name,
            m,
            {
              mentions: menst,
            }
          );
        }
        break;
      case "sn":
        const sn = ["sim", "não"];

        gosto = body.slice(3);
        if (args.length < 1)
          return responder(
            `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O bruno é um preguiçoso?`
          );
        const jawab = sn[Math.floor(Math.random() * sn.length)];
        hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`;
        responder(hasil);
        break;
      case "votar":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isAdmins) return responder(mess.admin);
          if (m.chat in vote)
            return responder(
              `_Ainda há votação neste bate-papo!_\n\n*${prefix}deletevote* - para excluir votos`
            );
          if (!text)
            return responder(
              `Insira o motivo do voto, exemplo: *${
                prefix + command
              } ${pushname} é gay?*`
            );
          responder(
            `A votação começou!\n\n*${prefix}upvote* - a favor\n*${prefix}devote* - contra\n*${prefix}delvoto* - para deletar a votação`
          );
          vote[m.chat] = [q, [], []];
          await sleep(1000);
          upvote = vote[m.chat][1];
          devote = vote[m.chat][2];
          teks_vote = `*「 VOTAÇÃO 」*
    
    *Motivo:* ${vote[m.chat][0]}
    
    ┌〔 A FAVOR 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    │
    │ 
    └────
    
    ┌〔 CONTRA 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    │
    │ 
    └────
    
    *${prefix}delvoto* - Para deletar a votação`;
          let buttonsVote = [
            {
              buttonId: `${prefix}upvote`,
              buttonText: { displayText: "𝚄𝙿𝚅𝙾𝚃𝙴" },
              type: 1,
            },
            {
              buttonId: `${prefix}devote`,
              buttonText: { displayText: "𝙳𝙴𝚅𝙾𝚃𝙴" },
              type: 1,
            },
          ];

          let buttonMessageVote = {
            text: teks_vote,
            footer: satoru.user.name,
            buttons: buttonsVote,
            headerType: 1,
          };
          satoru.sendMessage(m.chat, buttonMessageVote);
        }
        break;
      case "upvote":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!(m.chat in vote))
            return responder(
              `_*sem votação neste grupo!*_\n\nUse *${prefix} votação* - para começar a votar`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return responder("Você já votou!!");
          vote[m.chat][1].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `*「 VOTE 」*
    
    *Motivo:* ${vote[m.chat][0]}
    
    ┌〔 A FAVOR 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    ┌〔 CONTRA 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    *${prefix}delvoto* - Para deletar a votação`;
          let buttonsUpvote = [
            {
              buttonId: `${prefix}upvote`,
              buttonText: { displayText: "𝚄𝙿𝚅𝙾𝚃𝙴" },
              type: 1,
            },
            {
              buttonId: `${prefix}devote`,
              buttonText: { displayText: "𝙳𝙴𝚅𝙾𝚃𝙴" },
              type: 1,
            },
          ];

          let buttonMessageUpvote = {
            text: teks_vote,
            footer: satoru.user.name,
            buttons: buttonsUpvote,
            headerType: 1,
            mentions: menvote,
          };
          satoru.sendMessage(m.chat, buttonMessageUpvote);
        }
        break;
      case "devote":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!(m.chat in vote))
            return responder(
              `_*sem votações neste grupo!*_\n\nuse:*${prefix}votação* - para começar a votar`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return responder("Você já votou!!");
          vote[m.chat][2].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `*「 VOTE 」*
    
    *Motivo:* ${vote[m.chat][0]}
    
    ┌〔 A FAVOR 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    *${prefix}delvoto* - Para deletar a votação`;
          let buttonsDevote = [
            {
              buttonId: `${prefix}upvote`,
              buttonText: { displayText: "𝚄𝙿𝚅𝙾𝚃𝙴" },
              type: 1,
            },
            {
              buttonId: `${prefix}devote`,
              buttonText: { displayText: "𝙳𝙴𝚅𝙾𝚃𝙴" },
              type: 1,
            },
          ];

          let buttonMessageDevote = {
            text: teks_vote,
            footer: satoru.user.name,
            buttons: buttonsDevote,
            headerType: 1,
            mentions: menvote,
          };
          satoru.sendMessage(m.chat, buttonMessageDevote);
        }
        break;

      case "cekvote":
        if (!m.isGroup) return responder(mess.group);
        if (!(m.chat in vote))
          return responder(
            `_*sem votações neste grupo!*_\n\nuse:*${prefix}votação* - para começar a votar`
          );
        teks_vote = `*「 VOTE 」*
    
    *Motivo:* ${vote[m.chat][0]}
    
    ┌〔 A FAVOR 〕
    │ 
    ├ Total: ${upvote.length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${devote.length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
    │ 
    └────
    
    *${prefix}delvoto* - Para deletar a votação
    
    
    ©${satoru.user.id}
    `;
        satoru.sendTextWithMentions(m.chat, teks_vote, m);
        break;
      case "delvoto":
      case "delvote":
      case "hapusvote":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isAdmins) return responder(mess.admin);
          if (!(m.chat in vote))
            return responder(
              `_*sem votações neste grupo!*_\n\nuse:*${prefix}votação* - para começar a votar`
            );
          delete vote[m.chat];
          responder("Excluido com sucesso!");
        }
        break;

      case "attp":
        if (!q)
          return responder(
            `Coloque o texto\n Exemplo:${prefix}attp ${pushname} gay`
          );
        satoru.sendMessage(
          m.chat,
          {
            sticker: {
              url:
                "https://hardianto.xyz/api/maker/attp?text=" +
                encodeURIComponent(text) +
                "&apikey=hardianto",
            },
          },
          { quoted: fig }
        );
        break;
      case "attp2":
      case "attp3":
      case "attp4":
      case "attp5":
      case "attp6":
        if (!q)
          return responder(
            `Coloque o texto\nExemplo :\n${prefix + command}${pushname} gay`
          );
        satoru.sendMessage(
          m.chat,
          {
            sticker: {
              url: `http://brizas-api.herokuapp.com/ttp/${command}?apikey=${brizaskey}&text=${encodeURIComponent(
                text
              )}`,
            },
          },
          { quoted: fig }
        );
        break;
      case "ttp":
        if (!q)
          return responder(
            `Coloque o texto\nExemplo :\n${prefix + command}${pushname}ttp gay`
          );
        satoru.sendMessage(
          m.chat,
          {
            sticker: {
              url: `https://akame-apii.herokuapp.com/api/maker/ttp?texto=${encodeURIComponent(
                text
              )}&apikey=edwardbot22`,
            },
          },
          { quoted: fig }
        );
        break;
      case "ttp2":
      case "ttp3":
      case "ttp4":
      case "ttp5":
      case "ttp6":
        if (!q)
          return responder(
            `Coloque o texto\nExemplo :\n${prefix + command}${pushname} gay`
          );
        satoru.sendMessage(
          m.chat,
          {
            sticker: {
              url: `http://brizas-api.herokuapp.com/ttp/${command}?apikey=${brizaskey}&text=${encodeURIComponent(
                text
              )}&color=00ffff`,
            },
          },
          { quoted: fig }
        ); ///////////////////////
        break;
      ///////////////////////////////////////////////
      ///////////////// ANIME
      /////////////////////////////////////////////
      case "waifu":
        responder(mess.wait);
        axios.get(`https://api.waifu.pics/sfw/waifu`).then(({ data }) => {
          satoru.sendImage(m.chat, data.url, mess.success, m);
        });
        break;
      case "owner":
      case "creator":
        {
          satoru.sendContact(m.chat, global.owner, tdono);
        }
        break;

      case "cosplay":
      case "waifu":
      case "waifu2":
      case "shota":
      case "loli":
      case "yotsuba":
      case "shinomiya":
      case "yumeko":
      case "tejina":
      case "chiho":
      case "shizuka":
      case "boruto":
      case "kagori":
      case "kaga":
      case "kotori":
      case "mikasa":
      case "akiyama":
      case "hinata":
      case "minato":
      case "naruto":
      case "nezuko":
      case "yuki":
      case "hestia":
      case "emilia":
      case "itachi":
      case "madara":
      case "sasuke":
      case "deidara":
      case "sakura":
      case "tsunade":
        {
          let botao25 = [
            {
              buttonId: `${command}`,
              buttonText: { displayText: "Proxima " },
              type: 1,
            },
          ];
          let buttonMessage25 = {
            image: {
              url: `https://satoru-api.herokuapp.com/api/anime/${command}?apikey=APIKEY`,
            },
            caption: `Aqui esta!! 😁`,
            footer: satoru.user.name,
            buttons: botao25,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessage25, { quoted: m });
        }
        break;
      case "emojimix":
        if (!q)
          return responder(
            `Coloque o texto\nExemplo :\n${prefix + command} 😂 👌`
          );
        emj = await fetchJson(
          `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
            args[0]
          )}_${encodeURIComponent(args[1])}`
        );
        for (let res of emj.results) {
          satoru.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;

      case "tiktok":
        if (!q) return responder(`Use assim ${command} link`);
        if (!isUrl(q)) return responder("preciso de um link");
        if (!q.includes("tiktok"))
          return responder("o link precisa ser do tiktok");
        responder(mess.wait);
        xfar
          .Tiktok(q)
          .then((data) => {
            satoru.sendMessage(
              m.chat,
              {
                video: { url: data.medias[0].url },
                caption: `${data.title}\n\nVocê pode convertê-lo em vídeo sem marca d,'água ou áudio, pressione o botão abaixo para alterá-lo!`,
                buttons: [
                  {
                    buttonId: `${prefix}tiktoknowm ${q}`,
                    buttonText: { displayText: "Sem marca d'água" },
                    type: 1,
                  },
                  {
                    buttonId: `${prefix}tiktokaudio ${q}`,
                    buttonText: { displayText: "Aúdio.mp3" },
                    type: 1,
                  },
                ],
                footer: "",
              },
              { quoted: m }
            );
          })
          .catch(() => responder("ocorreu um erro :/"));
        break;
      case "tiktoknowm":
        if (!q) return responder(`Use assim ${command} link`);
        //			    if (!isUrl(q)) return responder('preciso de um link')
        if (!q.includes("tiktok"))
          return responder("o link precisa ser do tiktok");
        responder(mess.wait);
        hxz
          .ttdownloader(q)
          .then((data) => {
            satoru.sendMessage(
              m.chat,
              { video: { url: data.nowm } },
              { quoted: m }
            );
          })
          .catch(() => responder("ocorreu um erro :/"));
        break;
      case "tiktokaudio":
        if (!q) return responder(`Use assim ${command} link`);
        //			    if (!isUrl(q)) return responder('preciso de um link')
        if (!q.includes("tiktok"))
          return responder("o link precisa ser do tiktok");
        responder(mess.wait);
        hxz
          .ttdownloader(q)
          .then((data) => {
            satoru.sendMessage(
              m.chat,
              { audio: { url: data.nowm }, mimetype: "audio/mp4" },
              { quoted: m }
            );
          })
          .catch(() => responder("ocorreu um erro :/"));
        break;



      case "play":
      case "song":
      case "ytplay":
        {
          if (!text) return responder(`Ex: ${prefix + command} Stay`);
          let yts = require("yt-search");
          let search = await yts(text);
          texto = body.slice(5);
          let anu = search.videos.shift();
          let buttons = [
            {
              buttonId: `playmp3 ${texto}`,
              buttonText: { displayText: "ÁUDIO 🎶" },
              type: 1,
            },
            {
              buttonId: `playvideo ${texto}`,
              buttonText: { displayText: "VÍDEO 📽️" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: anu.thumbnail },
            caption: `
📜 *Título:* ${anu.title}
🎼 *Ext:* Search
🆔 *ID:* ${anu.videoId}
⌛ *Duração:* ${anu.timestamp}
👀 *Views:* ${anu.views}
📅 *Publicado:* ${anu.ago}
💻 *Autor:* ${anu.author.name}
👽 *Canal:* ${anu.author.url}
✍️ *Descrição:* ${anu.description}
⚙️ *Url:* ${anu.url}`,
            footer: satoru.user.name,
            buttons: buttons,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;
      case "ytmp3":
        if (!q) return responder(mess.erro_c);
        if (!isUrl(args[0]) && !args[0].includes("youtu.be"))
          return responder("Preciso de um link que seja do youtube!");
        ytDonlodMp3(q).then(async (anu) => {
          responder(mess.wait);
          let txt = `*----「 YOUTUBE MP 」----*\n\n`;
          txt += `*📄 Título :* ${anu.título}\n`;
          txt += `*🎞️ Canal :* ${anu.canal}\n`;
          txt += `*👁️ visualizações :* ${anu.visualizações}\n`;
          txt += `*⏱️ Publicado :* ${anu.publicado}\n`;
          txt += `*Aguarde estou processando o download...*`;
          buffer = await getBuffer(anu.thumb);

          satoru.sendMessage(m.chat, {
            audio: await getBuffer(anu.link),
            mimetype: "audio/mp4",
            filename: `${anu.title}.mp3`,
            quoted: m,
          });
        });
        break;

      case "playvideo":
        if (!q) return responder(mess.erro_c);
        ytPlayMp4(q).then(async (i) => {
          responder(mess.wait);
          buffer = await getBuffer(i.url);

          satoru.sendMessage(
            m.chat,
            { video: { url: i.url }, mimetype: "video/mp4" },
            { quoted: m }
          );
        });

        break;

      case "playgif":
        if (!q) return responder(mess.erro_c);
        ytPlayMp4(q).then(async (i) => {
          responder(mess.wait);
          buffer = await getBuffer(i.url);
          message2 = await prepareWAMessageMedia(
            { video: buffer, gifPlayback: true },
            { upload: satoru.waUploadToServer }
          );
          template3 = generateWAMessageFromContent(
            m.chat,
            proto.Message.fromObject({
              templateMessage: {
                hydratedTemplate: {
                  videoMessage: message2.videoMessage,
                  hydratedContentText: "",
                  hydratedFooterText: "",
                  hydratedButtons: [
                    {
                      urlButton: {
                        displayText: "BASE DE API",
                        url: "https://base-akame.herokuapp.com/",
                      },
                    },
                    {
                      urlButton: {
                        displayText: "API",
                        url: "https://akame-apii.herokuapp.com/",
                      },
                    },
                    {
                      callButton: {
                        displayText: "CALL",
                        phoneNumber: [satoru.user.id, ...global.owner].map(
                          (v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
                        ),
                      },
                    },
                    {
                      quickreplyButton: {
                        displayText: null,
                        id: null,
                      },
                    },
                  ],
                },
              },
            }),
            { userJid: m.sender, quoted: m }
          );
          satoru.relayMessage(m.chat, template3.message, {
            messageId: template3.key.id,
          });
        });
        break;

      case "figumeme":
        if (!quoted) return responder("Marque uma Imagem");
        if (!args[0])
          return responder(`Use assim: ${prefix + command} texto1 texto2`);
        if (!args[1])
          return responder(`Use assim: ${prefix + command} texto1 texto2`);
        imgk = await satoru.downloadAndSaveMediaMessage(quoted);
        tl = await TelegraPh(imgk);
        mmk = `https://api.memegen.link/images/custom/${args[0]}/${
          args[1]
        }.png?background=${util.format(tl)}`;
        satoru.sendImageAsSticker(m.chat, mmk, m, {
          packname: global.packname,
          author: global.author,
        });
        break;

      case "toonify":
        {
          if (/image/.test(mime)) {
            responder("fazendo montagen...");
            let media = await satoru.downloadAndSaveMediaMessage(quoted);
            let anu = await TelegraPh(media);
            deepai.setApiKey("6a6462b1-2f1f-4ca6-b071-8095d697c041");
            var mtg = await deepai.callStandardApi("toonify", {
              image: `${util.format(anu)}`,
            });
            satoru.sendMessage(
              m.chat,
              {
                image: { url: mtg.output_url },
                caption: `*montagem concluída*`,
              },
              { quoted: m }
            );
          } else {
            responder("não consegui detectar nenhum rosto");
          }
        }
        break;

      case "tourl":
        {
          responder(mess.wait);
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            responder(util.format(anu));
          } else if (/video/.test(mime)) {
            let media = await satoru.downloadAndSaveMediaMessage(quoted);
            let anu = await TelegraPh(media);
            responder(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;

      case "tougu":
        {
          responder(mess.wait);
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            responder(util.format(anu.url));
          } else if (/video/.test(mime)) {
            let media = await satoru.downloadAndSaveMediaMessage(quoted);
            let anu = await UploadFileUgu(media);
            responder(util.format(anu.url));
          } else if (/webp/.test(mime)) {
            let media = await satoru.downloadAndSaveMediaMessage(quoted);
            let anu = await UploadFileUgu(media);
            responder(util.format(anu.result.url));
          }
          await fs.unlinkSync(media);
        }
        break;

      case "tinyurl":
        if (!text)
          return responder(
            `Texto?\n\nEx : ${
              prefix + command
            } https://akame-apii.herokuapp.com/`
          );
        try {
          link = args[0];
          anu = await axios.get(
            `https://tinyurl.com/api-create.php?url=${link}`
          );
          responder(`${anu.data}`);
        } catch (e) {
          emror = String(e);
          responder(`${e}`);
        }
        break;

      case "get":
      case "verhtml":
        if (q) {
          fetch(q)
            .then((res) => res.text())
            .then((bu) => {
              responder(bu);
            });
        } else if (quoted) {
          fetch(quoted.text)
            .then((res) => res.text())
            .then((bu) => {
              responder(bu);
            });
        }
        break;

      case "toimage":
      case "toimg":
        {
          if (!quoted) return responder("Marque Image");
          if (!/webp/.test(mime))
            return responder(`Marque um sticker com:  *${prefix + command}*`);
          responder(mess.wait);
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return responder(err);
            let buffer = fs.readFileSync(ran);
            satoru.sendMessage(m.chat, { image: buffer }, { quoted: m });
            fs.unlinkSync(ran);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!quoted) return responder("responder Image");
          if (!/webp/.test(mime))
            return responder(`Marque um sticker com:  *${prefix + command}*`);
          responder(mess.wait);
          let { webp2mp4File } = require("./src/lib/uploader");
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await satoru.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "figurinha convertida para mp4",
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return responder(
              `Envie ou marque um vídeo com:  ${prefix + command}`
            );
          if (!quoted)
            return responder(
              `Envie ou marque um vídeo com:  ${prefix + command}`
            );
          responder(mess.wait);
          let media = await quoted.download();
          let { toAudio } = require("./src/lib/converter");
          let audio = await toAudio(media, "mp4");
          satoru.sendMessage(
            m.chat,
            { audio: audio, mimetype: "audio/mpeg" },
            { quoted: m }
          );
        }
        break;
      case "tomp3":
        {
          if (/document/.test(mime))
            return responder(
              `marque ou envie um  vídeo/áudio com:  ${prefix + command}`
            );
          if (!/video/.test(mime) && !/audio/.test(mime))
            return responder(
              `marque ou envie um  vídeo/áudio com:  ${prefix + command}`
            );
          if (!quoted)
            return responder(
              `marque ou envie um  vídeo/áudio com:  ${prefix + command}`
            );
          responder(mess.wait);
          let media = await quoted.download();
          let { toAudio } = require("./src/lib/converter");
          let audio = await toAudio(media, "mp4");
          satoru.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              fileName: `convertido para ${satoru.user.name}.mp3`,
            },
            { quoted: m }
          );
        }
        break;
      case "playmp3":
        {
          if (!q) return responder(mess.erro_c);
          ytPlayMp4(q).then(async (i) => {
            responder(mess.wait);
            buffer = await getBuffer(i.url);

            // let media = await quoted.download()
            let { toAudio } = require("./src/lib/converter");
            let audio = await toAudio(buffer, "mp4");
            satoru.sendMessage(
              m.chat,
              { audio: audio, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          });
        }
        break;

      case "gimage":
        {
          if (!text) return responder(`ex: : ${prefix + command} vmz`);
          let gis = require("g-i-s");
          gis(text, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttons = [
              {
                buttonId: `gimage ${text}`,
                buttonText: { displayText: "Proxima " },
                type: 1,
              },
            ];
            let buttonMessage = {
              image: { url: images },
              caption: `*-------「 GIMAGE SEARCH 」-------*\n
🤠 *Pesquisa* : ${text}
🔗 *Url de Mídia* : ${images}`,
              footer: satoru.user.name,
              buttons: buttons,
              headerType: 4,
            };
            satoru.sendMessage(m.chat, buttonMessage, { quoted: m });
          });
        }
        break;
      case "togif":
        {
          if (!quoted) return responder("responder Image");
          if (!/webp/.test(mime))
            return responder(`Marque um sticker com:  *${prefix + command}*`);
          responder(mess.wait);
          let { webp2mp4File } = require("./src/lib/uploader");
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await satoru.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;

      case "entrar":
        {
          if (!isCreator) return responder(mess.owner);
          if (!text) return responder("Digite o link do grupo!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return responder("Link Inválido!");
          responder(mess.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await satoru
            .groupAcceptInvite(result)
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "exit":
        {
          if (!isCreator) return responder(mess.owner);
          await satoru
            .groupLeave(m.chat)
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "kick":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await satoru
            .groupParticipantsUpdate(m.chat, [users], "remove")
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;

      case "add":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          infokk = await satoru.groupParticipantsUpdate(m.chat, [users], "add");
          fds = await satoru.groupInviteCode(m.chat);
          let convite = {
            groupInviteMessage: {
              groupJid: m.chat,
              groupName: metadata.subject,
              inviteCode: infokk[0].attrs.code,
              inviteExpiration: infokk[0].attrs.expiration,
              jpegThumbnail: null,
              caption: null,
            },
          };
          if (infokk[0].attrs.error.match("409"))
            return responder("O alvo já está no grupo!");
          if (infokk[0].attrs.error.match("403"))
            return satoru.sendText(
              users,
              `https://chat.whatsapp.com/${fds}`,
              m,
              {
                detectLink: true,
              }
            );
          if (infokk[0].attrs.error.match("408"))
            return satoru.sendText(
              users,
              `https://chat.whatsapp.com/${fds}`,
              m,
              {
                detectLink: true,
              }
            );
          if (infokk[0].attrs.error.match("401"))
            return satoru.sendText(
              users,
              `https://chat.whatsapp.com/${fds}`,
              m,
              {
                detectLink: true,
              }
            );
        }
        break;
      case "promover":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await satoru
            .groupParticipantsUpdate(m.chat, [users], "promote")
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "rebaixar":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await satoru
            .groupParticipantsUpdate(m.chat, [users], "demote")
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "block":
        {
          if (!isCreator) return responder(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await satoru
            .updateBlockStatus(users, "block")
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "crash":
        {
          if (!isCreator) return responder(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        }
        break;
      case "unblock":
        {
          if (!isCreator) return responder(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await satoru
            .updateBlockStatus(users, "unblock")
            .then((res) => responder(jsonformat(res)))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "listblockcmd":
        try {
          teks = "*🚫 A lista de comandos bloqueado são: 🚫*\n";
          for (i = 0; i < blockcmd.length; i++) {
            teks += `❧ ${blockcmd[i]}\n`;
          }
          responder(teks);
        } catch {
          responder("algo deu errado");
        }
        break;

      case "blockcmd":
        try {
          if (!isCreator && !m.key.fromMe) return responder(mess.owner);
          if (args.length < 1) return responder("*Bloquear com que comando?*");
          if (isCmdBlocked(args[0]))
            return responder("*Já esta incluso essa palavra*");
          cmdblockk = args[0];
          blockcmd.push(cmdblockk);
          fs.writeFileSync("./src/db/blockcmd.json", JSON.stringify(blockcmd));
          responder("*✅ Comando bloqueado com sucesso ✅*");
        } catch {
          responder("algo deu errado");
        }
        break;

      case "unblockcmd":
        try {
          if (!isCreator && !m.key.fromMe) return responder(mess.owner);
          if (args.length < 1) return responder("*Cade a palavra animal*");
          if (!isCmdBlocked(args[0]))
            return responder("*Não esta incluso essa palavra*");
          ind = blockcmd.indexOf(args[0]);
          blockcmd.splice(ind, 1);
          fs.writeFileSync("./src/db/blockcmd.json", JSON.stringify(blockcmd));
          responder(`*✔️ Comando ${args[0]} desbloqueado com sucesso*`);
        } catch {
          responder("algo deu errado");
        }
        break;

      case "addpremium":
      case "addprem":
        {
          if (!isCreator) return responder(mess.owner);

          usuario = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          i_nfo = premium.checkPremiumUser(usuario, _premium);
          if (i_nfo) return responder(`Este usuário ja e premium`);
          premium.addPremiumUser(usuario, q, _premium);
          responder(`*「 PREMIUM ADICIONADO 」*\n\n*ID*: ${usuario}\n`);
        }
        break;
      case "delpremium":
      case "delprem":
        {
          if (!isCreator) return responder(mess.owner);
          usuario = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          i_nfo = premium.checkPremiumUser(usuario, _premium);
          if (!i_nfo) return responder(`Este usuário não e um usuário premium`);
          _premium.splice(premium.getPremiumPosition(usuario, _premium), 1);
          fs.writeFileSync("./src/db/premium.json", JSON.stringify(_premium));
          responder("premium deletado");
        }
        break;

      case "listaprem":
      case "listapremium":
        atakk = `🏅USURÁRIOS PREMIUM🏅\nTotal : ${_premium.length}\n\n`;
        let men = [];
        for (let i of _premium) {
          men.push(i.id);
          let veriprems = ms(i.expired - Date.now());
          atakk += `*ID :* @${i.id.split("@")[0]}\n*Expira em :* ${
            veriprems.days
          } dia(s) ${veriprems.hours} hora(s) ${veriprems.minutes} minuto(s) ${
            veriprems.seconds
          } segundo(s)\n\n`;
        }
        satoru.sendTextWithMentions(m.chat, atakk, m, men);
        break;

      case "mudarnome":
      case "setnome":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (!text) return responder("cd o texto?");
          await satoru
            .groupUpdateSubject(m.chat, text)
            .then((res) => responder(mess.success))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "mudardesc":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (!text) return responder("qual descrição cê quer ?");
          await satoru
            .groupUpdateDescription(m.chat, text)
            .then((res) => responder(mess.success))
            .catch((err) => responder(jsonformat(err)));
        }
        break;
      case "setppgroup":
      case "setppgrup":
      case "mudarfotogp":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isAdmins) return responder(mess.admin);
          if (!quoted)
            return responder(
              `Envie ou responda uma imagem com: ${prefix + command}`
            );
          if (!/image/.test(mime))
            return responder(
              `Envie ou responda uma imagem com: ${prefix + command}`
            );
          if (/webp/.test(mime))
            return responder(
              `Envie ou responda uma imagem com: ${prefix + command}`
            );
          let media = await satoru.downloadAndSaveMediaMessage(quoted);
          await satoru
            .updateProfilePicture(m.chat, { url: media })
            .catch((err) => fs.unlinkSync(media));
          responder(mess.success);
        }
        break;
      case "marcartodos":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          let teks = `══✪〘 *MARCANDO* 〙✪══
     
     ➲ *Motivo : ${q ? q : "em branco"}*\n\n`;
          for (let mem of participants) {
            teks += `⭔ @${mem.id.split("@")[0]}\n`;
          }
          satoru.sendMessage(
            m.chat,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
        break;
      case "hidetag":
        {
          if (!m.isGroup) return responder(mess.group);
          if (isAdmins) {
            satoru.sendMessage(
              m.chat,
              { text: q ? q : "", mentions: participants.map((a) => a.id) },
              { quoted: null }
            );
          } else {
            if (isCreator) {
              satoru.sendMessage(
                m.chat,
                { text: q ? q : "", mentions: participants.map((a) => a.id) },
                { quoted: m }
              );
            }
          }
        }
        break;

      case "pinterest":
        {
          responder(mess.wait);
          anu = await pinterest(text);
          result = anu[Math.floor(Math.random() * anu.length)];
          let buttons = [
            {
              buttonId: `pinterest ${text}`,
              buttonText: { displayText: "Proxima " },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: result },
            caption: `*-------「 PINTEREST 」-------*
🤠 *Pesquisa* : ${text}
🔗 *Url de Mídia* : ${result}`,
            footer: satoru.user.name,
            buttons: buttons,
            headerType: 4,
          };
          satoru.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "gp":
      case "grupo":
        {
          if (!m.isGroup) return responder(mess.group);
          if (!isBotAdmins) return responder(mess.botAdmin);
          if (!isAdmins) return responder(mess.admin);
          if (args[0] === "abrir") {
            await satoru
              .groupSettingUpdate(m.chat, "not_announcement")
              .then((res) => responder(`Grupo aberto com sucesso!`))
              .catch((err) => responder(jsonformat(err)));
          } else if (args[0] === "fechar") {
            await satoru
              .groupSettingUpdate(m.chat, "announcement")
              .then((res) => responder(`Grupo fechado com sucesso!`))
              .catch((err) => responder(jsonformat(err)));
          } else {
            let buttons = [
              {
                buttonId: "gp abrir",
                buttonText: { displayText: "abrir" },
                type: 1,
              },
              {
                buttonId: "gp fechar",
                buttonText: { displayText: "fechar" },
                type: 1,
              },
            ];
            await satoru.sendButtonText(
              m.chat,
              buttons,
              `O Que voce deseja fazer? 🔐`,
              satoru.user.name,
              m
            );
          }
        }
        break;

      case "liston":
      case "onlinelist":
        {
          let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;

          let online = [...Object.keys(store.presences[id]), botNumber];
          satoru.sendText(
            m.chat,
            "Lista online:\n\n" +
              online.map((v) => "🐶 @" + v.replace(/@.+/, "")).join`\n`,
            m,
            { mentions: online }
          );
        }
        break;
      case "quiz":
        if (!m.isGroup) return responder("comando apenas para grupos");
        const anaaleatorio = Math.floor(Math.random() * animequiz.qz.length);
        if (!isAdmins) return responder("comando apenas para admins");
        if (args.join(" ") === "ativar") {
          if (fs.existsSync(`./quiz-${m.chat}.json`)) {
            let dataquiz2 = JSON.parse(
              fs.readFileSync(`./quiz-${m.chat}.json`)
            );
            satoru.sendMessage(
              m.chat,
              {
                image: { url: `${dataquiz2.img}` },
                caption: `*_Descubra o personagem 😀_*`,
              },
              { quoted: m }
            );
          } else {
            fs.writeFileSync(
              `./quiz-${m.chat}.json`,
              `${JSON.stringify(animequiz.qz[anaaleatorio])}`
            );
            satoru.sendMessage(
              m.chat,
              {
                image: { url: `${animequiz.qz[anaaleatorio].img}` },
                caption: `*_Descubra o personagem 😀_*`,
              },
              { quoted: m }
            );
          }
        } else if (args.join(" ") === "desativar") {
          if (!fs.existsSync(`./quiz-${m.chat}.json`))
            return responder(
              "não tem como desativar o quiz pôs ele não foi ativado"
            );
          fs.unlinkSync(`./quiz-${m.chat}.json`);
          responder("desativado com sucesso");
        } else if (!q) {
          let buttons = [
            {
              buttonId: `${command} ativar`,
              buttonText: { displayText: "ATIVAR 🤠" },
              type: 1,
            },

            {
              buttonId: `${command} desativar`,
              buttonText: { displayText: "DESATIVAR 😐" },
              type: 1,
            },
          ];
          await satoru.sendButtonText(
            m.chat,
            buttons,
            `💮 _QUIZ 💮️`,
            `Descubra os personagens`,
            m
          );
        }
        break;
      ////////////////
      case "menu":
        {
          const listMessage = {
            text: ` Óla ${pushname}!! como posso te ajudar?`,
            footer: "entre em meu grupo para novidades!",
            buttonText: "Clique Aqui!!",
            sections: [
              {
                title: `Selecione uma opção para acessar o menu!!`,
                rows: [
                  {
                    title: "Meu Criador 🙈",
                    description: "\n\n_Contato do meu dono_",
                    rowId: "owner",
                  },

                  {
                    title: "Menu Anime 🈲",
                    description:
                      "\n\n_Selecione essa opção para comandos de animes 🈲_",
                    rowId: "animemenu",
                  },
                  // {
                  //   title: "Menu Dono 😎",
                  //   description: "\n\n_comandos exclusivos para o bruno_",
                  //   rowId: "menudono",
                  // },
                  {
                    title: "Menu Games 🎮",
                    description:
                      "\n\n_Selecione essa opção para utilizar os jogos 🎮_",
                    rowId: "games",
                  },
                  {
                    title: "TextPro✍🏻",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos textpro!_",
                    rowId: "textpro",
                  },
                  {
                    title: "Menu de Stickers 🌆",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos de stickers!_",
                    rowId: "stickers",
                  },
                  {
                    title: "Ferramentas ⚒️",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos de ferramentas!_",
                    rowId: "ferramentas",
                  },
                  {
                    title: "Menu do Grupo 👤",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos exclusivos de grupos!_",
                    rowId: "grupomenu",
                  },
                  {
                    title: "Menu Download / Pesquisa 🕵️‍♀️",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos de download!_",
                    rowId: "dlmenu",
                  },

                  {
                    title: "Menu nsfw 😏",
                    description: "\n\n_Menu dos poeterokkkkkkk_",
                    rowId: "nsfwmenu",
                  },
                  {
                    title: "Fun Menu 🕹️",
                    description:
                      "\n\n_Selecione essa opção para utilizar o menu FUN !_",
                    rowId: "funmenu",
                  },
                  {
                    title: "Game Menu 🎮",
                    description:
                      "\n\n_Selecione essa opção para utilizar o menu FUN !_",
                    rowId: "funmenu",
                  },
                  {
                    title: "Menu Musical 🎵",
                    description:
                      "\n\n_Selecione essa opção para utilizar os comandos relacionados a músicas!_",
                    rowId: "musicamenu",
                  },
                ],
              },
            ],
            listType: 1,
          };

          satoru.sendMessage(m.chat, listMessage, {
            quoted: fcarrinho,
          });
        }

        break;
      case "igdono":
        responder("segue esse carente ai\n\ninstagram.com/b_r_u_n_o76");
        break;
      case "gpbot":
        responder("https://chat.whatsapp.com/HeMepOb2ltNIJPC8vXpgyI");
        break;    
      case "musicamenu":
        {
          texto = `🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄
      
✞︎ \`\`\`lyric\`\`\`
♡︎ \`\`\`magyn\`\`\`
❦︎ \`\`\`kamaitachi\`\`\`
✞︎ \`\`\`vmz\`\`\`
♡︎ \`\`\`lilchainz\`\`\`
❦︎ \`\`\`mikezin\`\`\`
✞︎ \`\`\`thefox\`\`\`
♡︎ \`\`\`nanasai\`\`\`
❦︎ \`\`\`dri\`\`\`
✞︎ \`\`\`motta\`\`\`
`;
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;
 
            case "nsfwmenu":
              {
                texto = `🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄
            
      ✞︎ \`\`\`nsfwloli\`\`\`
      ♡︎ \`\`\`ahegao\`\`\`
      ❦︎ \`\`\`ass\`\`\`
      ✞︎ \`\`\`bdsm\`\`\`
      ♡︎ \`\`\`blowjob\`\`\`
      ❦︎ \`\`\`cuckold\`\`\`
      ✞︎ \`\`\`ero\`\`\`
      ♡︎ \`\`\`femdom\`\`\`
      ❦︎ \`\`\`foot\`\`\`
      ✞︎ \`\`\`gangbang\`\`\`
      ♡︎ \`\`\`glasses\`\`\`
      ❦︎ \`\`\`hentai\`\`\`
      ✞︎ \`\`\`jahy\`\`\`
      ♡︎ \`\`\`manga\`\`\`
      ❦︎ \`\`\`masturbation\`\`\`
      ✞︎ \`\`\`neko\`\`\`
      ♡︎ \`\`\`orgy\`\`\`
      ❦︎ \`\`\`panties\`\`\`
      ✞︎ \`\`\`pussy\`\`\`
      ♡︎ \`\`\`neko2\`\`\`
      `;
      let buttons = [
        {
          buttonId: "gpbot",
          buttonText: { displayText: "GRUPO 📞" },
          type: 1,
        },
        {
          buttonId: "owner",
          buttonText: { displayText: "DONO 😎" },
          type: 1,
        },
        {
          buttonId: "igdono",
          buttonText: { displayText: "INSTA  🌆" },
          type: 1,
        },
      ];
      await satoru.sendButtonText(
        m.chat,
        buttons,
        texto,
        'by Brunoww',
        fcarrinho
      );
              }
              break;

      case "dlmenu":
        {
          texto = `

♫ ︎\`\`\`google\`\`\`
☾ ︎\`\`\`gimage\`\`\`
✞ \`\`\`ytmp3\`\`\`
♫ \`\`\`ytsearch\`\`\`
☾ \`\`\`ytmp4\`\`\` (off)
✞ \`\`\`play \`\`\`
♫ \`\`\`pinterest\`\`\`
☾ \`\`\`wallpaper\`\`\`
✞ \`\`\`map\`\`\`
♫  ︎︎︎\`\`\`yts\`\`\`
☾ ︎︎︎︎\`\`\`igdl\`\`\``;

   
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
}
        break;

      case "funmenu":
        {
          texto = `
❦ ︎\`\`\`meme\`\`\`
☽ ︎\`\`\`simi\`\`\`
♫ ︎\`\`\`gay\`\`\`
❦ ︎\`\`\`pau\`\`\`
☽ ︎\`\`\`gostosa\`\`\`
♫ ︎\`\`\`linda\`\`\`
☽︎ \`\`\`abraço\`\`\`
♫︎ \`\`\`beijo\`\`\`
❦︎ \`\`\`chute\`\`\`
☽︎ \`\`\`carinho\`\`\`
♫︎ \`\`\`tapa\`\`\`
❦︎ \`\`\`ship\`\`\`
☾︎ \`\`\`tapanar\`\`\`
♔ ︎\`\`\`caracoroa\`\`\`
♧ ︎︎︎︎\`\`\`morte\`\`\`
♕ ︎\`\`\`rip\`\`\`
♔ \`\`\`chance\`\`\`
♧ ︎︎︎︎\`\`\`sn\`\`\`
♕ ︎\`\`\`gadometro\`\`\`
♔ \`\`\`shipnome\`\`\`
♧ ︎︎︎︎\`\`\`reagir\`\`\`
♕ ︎\`\`\`casal\`\`\`
♔ \`\`\`par\`\`\`
`;


let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;
      case "games":
        {
          texto = `🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 

\`\`\`Dono: Bruno\`\`\`
\`\`\`Prefixo: *\`\`\`
\`\`\`Que me por em grupos?\`\`\`
\`\`\`Contate meu dono!\`\`\`

♧ \`\`\`ttt\`\`\`
♕ \`\`\`ttthelp\`\`\`
♫ ︎\`\`\`cassino\`\`\`
♕ \`\`\`quiz\`\`\`
♧ \`\`\`jogodavelha\`\`\`
♕ \`\`\`anagrama\`\`\`
♫  ︎\`\`\`ppt2\`\`\`
♧ \`\`\`roleta\`\`\`
♕ \`\`\`ppt\`\`\`
♫  ︎\`\`\`ppt2\`\`\`
♧ \`\`\`fortnite\`\`\`
♕ \`\`\`warzone\`\`\`
♫ ︎\`\`\`jogosgratis\`\`\`
 `;
         
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;
      case "ferramentas":
        {
          texto = `
  ✞ \`\`\`traduzir\`\`\`
  ♧ \`\`\`cotacao\`\`\`
  ♧ \`\`\`ddd\`\`\`
  ♔ \`\`\`correios\`\`\`
  ✞ \`\`\`cep\`\`\`
  ♧ \`\`\`tovideo\`\`\`
  ♔ \`\`\`togif\`\`\`
  ✞ \`\`\`tourl\`\`\`
  ♧ \`\`\`tomp3\`\`\`
  ♔ \`\`\`toaudio\`\`\`
  ✞ \`\`\`bass\`\`\`
  ♧ \`\`\`blown\`\`\`
  ♔ \`\`\`deep\`\`\`
  ✞ \`\`\`earrape\`\`\`
  ♧ \`\`\`fast\`\`\`
  ♔ \`\`\`fat\`\`\`
  ✞ \`\`\`nightcore\`\`\`
  ♧ \`\`\`reverse\`\`\`
  ♔ \`\`\`robot\`\`\`
  ✞ \`\`\`slow\`\`\`
  ♧ \`\`\`tupai\`\`\`
  ♔ \`\`\`tougu\`\`\`
  ✞ \`\`\`tinyurl\`\`\`
  `;


  let buttons = [
    {
      buttonId: "gpbot",
      buttonText: { displayText: "GRUPO 📞" },
      type: 1,
    },
    {
      buttonId: "owner",
      buttonText: { displayText: "DONO 😎" },
      type: 1,
    },
    {
      buttonId: "igdono",
      buttonText: { displayText: "INSTA  🌆" },
      type: 1,
    },
  ];
  await satoru.sendButtonText(
    m.chat,
    buttons,
    texto,
    'by Brunoww',
    fcarrinho
  );
        }
        break;
      case "stickers":
        {
          texto = `
✞ \`\`\`toimage\`\`\`
♔ \`\`\`sticker\`\`\` 
❦︎ \`\`\`figumeme\`\`\`
♡ \`\`\`emojimix\`\`\`
♕︎ ︎\`\`\`attp\`\`\`
❦︎ \`\`\`borro\`\`\`
♡ \`\`\`dripp\`\`\`
♕︎ ︎\`\`\`comunismo\`\`\`
❦︎ \`\`\`lgbt\`\`\`
♡ \`\`\`procurado\`\`\`
♕︎ ︎\`\`\`circle\`\`\`
❦︎ \`\`\`gun\`\`\`
♡ \`\`\`jail\`\`\`
♕︎ ︎\`\`\`beautiful\`\`\`
❦︎ \`\`\`rip\`\`\`
♡ \`\`\`wasted\`\`\`
♕︎ ︎\`\`\`attp2\`\`\`
❦︎ \`\`\`attp3\`\`\`
♡ \`\`\`attp4\`\`\`
♕︎ ︎\`\`\`attp5\`\`\`
❦︎ \`\`\`attp6\`\`\`
♡ \`\`\`ttp\`\`\`
♕︎ ︎\`\`\`ttp2\`\`\`
❦︎ \`\`\`ttp3\`\`\`
♡ \`\`\`ttp4\`\`\`
♕︎ ︎\`\`\`ttp5\`\`\`
❦︎ \`\`\`ttp6\`\`\`
♡ \`\`\`triggered\`\`\`
♕︎ ︎\`\`\`ttp5\`\`\`
❦︎ \`\`\`ttp6\`\`\`
`;

        
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;
      case "grupomenu":
      case "groupmenu":
        {
          texto = `

♕︎ ︎\`\`\`setnome\`\`\`
♪ \`\`\`mudardesc\`\`\`
✞ ︎\`\`\`mudarfotogp\`\`\`
♕︎ ︎\`\`\`kick\`\`\`
♪ \`\`\`promover\`\`\`
✞ ︎\`\`\`rebaixar\`\`\`
♕︎ ︎\`\`\`marcartodos\`\`\`
♪ \`\`\`hidetag\`\`\`
♕︎ ︎\`\`\`nsfw\`\`\`
♪ \`\`\`antilink\`\`\`
✞ ︎\`\`\`antidoc\`\`\`
♕︎ ︎\`\`\`antiloc\`\`\`
♪ \`\`\`anticat\`\`\`
✞ ︎\`\`\`anticon\`\`\`
♕︎ ︎\`\`\`gp\`\`\`
♪ \`\`\`votar\`\`\`
✞ ︎\`\`\`devote\`\`\`
♕︎ ︎\`\`\`upvote\`\`\`
♪ \`\`\`delvoto\`\`\`
`;


let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;

      case "menudono":
        {
          if (!isCreator) return responder("sai curioso");
          texto = `
✞ ︎\`\`\`block︎ ︎\`\`\`
♕︎ ︎\`\`\`unblock︎ ︎\`\`\`
♪ \`\`\`entrar︎ ︎\`\`\`
✞ ︎\`\`\`exit︎ ︎\`\`\`
♕︎ ︎\`\`\`addprem \`\`\]
♪ \`\`\`delprem︎ ︎\`\`\`
♕︎ ︎\`\`\`tm [_msg︎ ︎\`\`\`
♪ \`\`\`tmgp [_msg]︎ ︎\`\`\`
✞ ︎\`\`\`delmsg [_pergunta_]︎ ︎\`\`\`
♕︎ ︎\`\`\`blockcmd [_cmd_]︎ ︎\`\`\`
♪ \`\`\`unblockcmd [_cmd_]︎ ︎\`\`\`
✞ ︎\`\`\`listblockcmd︎ ︎\`\`\`
♕︎ ︎\`\`\`antipv︎ ︎\`\`\`
`;
       
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;

      case "animemenu":
        {
          texto = ` 
❦ ︎\`\`\`tsunade\`\`\`
♡ ︎\`\`\`sakura\`\`\`
✞︎ \`\`\`sasuke\`\`\`
❦ ︎\`\`\`deidara\`\`\`
♡ ︎\`\`\`madara\`\`\`
✞︎ \`\`\`itachi\`\`\`
❦ ︎\`\`\`emilia\`\`\`
♡ ︎\`\`\`hestia\`\`\`
✞︎ \`\`\`yuki\`\`\`
❦ ︎\`\`\`nezuko\`\`\`
♡ ︎\`\`\`naruto\`\`\`
✞ ︎\`\`\`minato\`\`\`
❦ ︎\`\`\`hinata\`\`\`
♡ ︎\`\`\`mikasa\`\`\`
✞ ︎\`\`\`kotori\`\`\`
❦ ︎\`\`\`kaga\`\`\`
♡ ︎\`\`\`kagori\`\`\`
✞ ︎\`\`\`akiyama ︎\`\`\`
❦ ︎\`\`\`boruto\`\`\`
♡ \`\`\`chiho\`\`\`
✞ \`\`\`tejina ︎\`\`\`
❦ \`\`\`yumeko\`\`\`
♡ \`\`\`shinomiya\`\`\`
✞ \`\`\`yotsuba\`\`\`
❦ \`\`\`loli\`\`\`
♡ \`\`\`shota\`\`\`
✞ \`\`\`waifu2\`\`\` 
♡ \`\`\`waifu\`\`\` 
✞ \`\`\`cosplay\`\`\``;

        
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }
        break;
      case "textpro":
        {
          texto = `
✞︎ \`\`\`space\`\`\`
❦ ︎\`\`\`ninjalogo\`\`\`
✞ ︎\`\`\`joker\`\`\`
❦ ︎\`\`\`pornhub\`\`\`
✞ ︎\`\`\`marvel\`\`\`
❦ ︎\`\`\`1917 \`\`\`
♡ ︎\`\`\`harrypotter\`\`\` 
✞ \`\`\`wolf\`\`\`
❦ \`\`\`wolf2 \`\`\`
♡ \`\`\`urso\`\`\`
✞ \`\`\`leao\`\`\`
❦ \`\`\`vingadores\`\`\`
♡ \`\`\`marvel\`\`\`
✞ \`\`\`thor\`\`\`
❦ \`\`\`capiitaoamerica\`\`\`
♡ \`\`\`holograpic\`\`\`
✞ \`\`\`blackpink\`\`\`
❦ \`\`\`verao\`\`\`
♡ \`\`\`devil\`\`\``;
      
let buttons = [
  {
    buttonId: "gpbot",
    buttonText: { displayText: "GRUPO 📞" },
    type: 1,
  },
  {
    buttonId: "owner",
    buttonText: { displayText: "DONO 😎" },
    type: 1,
  },
  {
    buttonId: "igdono",
    buttonText: { displayText: "INSTA  🌆" },
    type: 1,
  },
];
await satoru.sendButtonText(
  m.chat,
  buttons,
  texto,
  'by Brunoww',
  fcarrinho
);
        }

        break;
      case "conselho":
        conselhos = [
          "*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*",
          "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*",
          "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*",
          "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*",
          "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*",
          "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*",
          "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*",
          "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor",
          "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*",
          "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*",
          "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*",
          "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*",
          "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*",
          "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*",
          "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*",
          "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*",
          "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*",
          "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA",
          "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*",
          "*Se você está atravessando um inferno, continue atravessando – Churchill*",
          "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*",
          "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista",
          "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*",
          "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*",
          "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*",
          "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*",
          "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*",
          "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*",
          "*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*",
          "*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*",
          "*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*",
        ];
        var conselho = conselhos[Math.floor(Math.random() * conselhos.length)];
        responder(`*Ok! Seu conselho:*☘️\n0${conselho}`);
        break;

      case "tictactoe":
      case "jogodavelha":
        if (!m.isGroup) return responder(mess.group);
        if (args.length < 1) return responder('Marque *"@"* o seu oponente ⚔️');
        if (isTTT)
          return responder(
            "Há um jogo neste grupo, por favor aguarde até o jogo acabar ⏰"
          );
        if (
          m.message.extendedTextMessage === undefined ||
          m.message.extendedTextMessage === null
        )
          return responder('Marque *"@"* o seu oponente ⚔️!');
        ment = m.message.extendedTextMessage.contextInfo.mentionedJid;
        player1 = m.sender;
        player2 = ment[0];
        angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
        id = m.chat;
        gilir = player2;
        ky_ttt.push({ player1, player2, id, angka, gilir });
        esperandoo = `*🎳 Iniciando O Jogo Da Velha 🎲*

[@${player2.split("@")[0]}] Você está sendo desafiado🔥
Use Y/N Para aceitar, ou correr do desafio...

Nota: use ${prefix}delttt , Para resetar o jogo da velha no grupo, caso o player não responder...!`;
        satoru.sendMessage(
          m.chat,
          { text: esperandoo, contextInfo: { mentionedJid: [player2] } },
          { quoted: m }
        );
        break;
      case "delttt":
      case "delttc":
        if (!m.isGroup) return responder(mess.only.group);
        if (!isTTT) return responder("Não há jogos neste grupo");
        naa = ky_ttt.filter((toek) => !toek.id.includes(m.chat));
        ky_ttt = naa;
        responder("Game da velha foi resetado neste grupo ☕");
        break;

      case "ttthelp":
        satoru.sendMessage(
          m.chat,
          { text: ttthelp(prefix) },
          {
            quoted: m,
            quoted: {
              key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? { remoteJid: "status@broadcast" } : {}),
              },
              message: {
                imageMessage: {
                  url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                  mimetype: "image/jpeg",
                  caption: cr,
                  jpegThumbnail: fs.readFileSync("./img/logobot.png"),
                },
              },
            },
          }
        );
        break;

      case "tttme":
        if (!m.isGroup) return responder(mess.group);
        const checkTTTIdMe = getTTTId(m.sender);
        if (checkTTTIdMe === undefined) addTTTId(m.sender);
        satoru.sendMessage(
          m.chat,
          {
            text: tttme(
              m.sender.split("@")[0],
              getTTTwins(m.sender),
              getTTTdefeats(m.sender),
              getTTTties(m.sender),
              getTTTpoints(m.sender)
            ),
          },
          { quoted: m }
        );
        break;

      case "tttrank":
        if (!m.isGroup) return responder(mess.group);
        tictactoe.sort((a, b) => (a.points < b.points ? 1 : -1));
        mentioned_jid = [];
        let board = "*🔥Ranking dos melhores players🔥*\n\n";
        try {
          for (let i = 0; i < 3; i++) {
            if (i == 0) {
              board += `${i + 1}º 🥇 : @${
                tictactoe[i].jid.split("@")[0]
              }\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${
                tictactoe[i].defeats
              }*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${
                tictactoe[i].points
              }*\n\n`;
            } else if (i == 1) {
              board += `${i + 1}º 🥈 : @${
                tictactoe[i].jid.split("@")[0]
              }\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${
                tictactoe[i].defeats
              }*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${
                tictactoe[i].points
              }*\n\n`;
            } else if (i == 2) {
              board += `${i + 1}º 🥉 : @${
                tictactoe[i].jid.split("@")[0]
              }\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${
                tictactoe[i].defeats
              }*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${
                tictactoe[i].points
              }*\n\n`;
            }
            mentioned_jid.push(tictactoe[i].jid);
          }
          mentions(board, mentioned_jid, true);
        } catch (err) {
          console.log(err);
          await satoru.sendMessage(
            m.chat,
            { text: `*É necessário 3 jogadores para se construir um ranking*` },
            { quoted: m }
          );
        }
        break;

      case "coord":
        tttset.playertest = m.sender;
        if (!m.isGroup) {
          responder(mess.group);
        } else if (tttset.tttstatus == "off") {
          responder(
            `*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`
          );
        } else if (tttset.player != tttset.playertest) {
          responder(
            `*O jogo já foi iniciado por outro player, aguarde ele terminar...*`
          );
        } else if (tttset.tttantibug == "on") {
          responder(`Aguarde a ação anterior ser concluída...`);
        } else {
          tttset.tttantibug = "on";
          const coordX = args;
          if (
            coordX != "a1" &&
            coordX != "a2" &&
            coordX != "a3" &&
            coordX != "b1" &&
            coordX != "b2" &&
            coordX != "b3" &&
            coordX != "c1" &&
            coordX != "c2" &&
            coordX != "c3"
          ) {
            responder(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`);
            tttset.tttantibug = "off";
          } else {
            switch (args[0]) {
              case "a1":
                if (esp.a1 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.a1 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "a2":
                if (esp.a2 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.a2 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "a3":
                if (esp.a3 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.a3 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "b1":
                if (esp.b1 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.b1 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "b2":
                if (esp.b2 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.b2 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "b3":
                if (esp.b3 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.b3 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "c1":
                if (esp.c1 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.c1 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "c2":
                if (esp.c2 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.c2 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;

              case "c3":
                if (esp.c3 != "🔲") {
                  responder("*Esse espaço ja foi marcado, tente outro");
                } else {
                  esp.c3 = "❌";
                  while (tttset.reActivate1 == "on") {
                    IA();
                  }
                }
                break;
            }
            tttset.reActivate1 = "on";
            responder(
              `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
            );
            var randomTTTXP = 0;

            if (WinnerX()) {
              if (isCmd) {
                switch (tttset.tttdifficulty) {
                  case "EASY":
                    randomTTTXP = Math.floor(Math.random() * 25) + 25;
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "NORMAL":
                    randomTTTXP = Math.floor(Math.random() * 75) + 75;
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "HARD":
                    randomTTTXP = Math.floor(Math.random() * 200) + 200;
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "IMPOSSIBLE":
                    randomTTTXP = Math.floor(Math.random() * 1000) + 1000;
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;
                }
                satoru.sendMessage(m.chat, {
                  text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`,
                });
              } else {
                satoru.sendMessage(m.chat, { text: `*VOCÊ VENCEU, PARABENS*` });
              }

              const currentTTTwins = getTTTwins(tttset.player);
              const checkTTTIdWin = getTTTId(tttset.player);
              if (currentTTTwins === undefined && checkTTTIdWin === undefined)
                addTTTId(tttset.player);
              addTTTwin(tttset.player, 1);
              addTTTpoints(tttset.player, randomTTTXP);
              esp.a1 = "🔲";
              esp.a2 = "🔲";
              esp.a3 = "🔲";
              esp.b1 = "🔲";
              esp.b2 = "🔲";
              esp.b3 = "🔲";
              esp.c1 = "🔲";
              esp.c2 = "🔲";
              esp.c3 = "🔲";
              tttset.tttstatus = "off";
              tttset.waitingTime = "on";
            } else if (WinnerO()) {
              if (isCmd) {
                switch (tttset.tttdifficulty) {
                  case "EASY":
                    randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200);
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "NORMAL":
                    randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75);
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "HARD":
                    randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25);
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;

                  case "IMPOSSIBLE":
                    randomTTTXP = 0;
                    level.addLevelingXp(tttset.player, randomTTTXP, _level);
                    break;
                }
                satoru.sendMessage(m.chat, {
                  text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`,
                });
              } else {
                satoru.sendMessage(m.chat, { text: `*Você perdeu*` });
              }
              const currentTTTdefeats = getTTTdefeats(tttset.player);
              const checkTTTIdDefeat = getTTTId(tttset.player);
              if (
                currentTTTdefeats === undefined &&
                checkTTTIdDefeat === undefined
              )
                addTTTId(tttset.player);
              addTTTdefeat(tttset.player, 1);
              addTTTpoints(tttset.player, randomTTTXP);
              esp.a1 = "🔲";
              esp.a2 = "🔲";
              esp.a3 = "🔲";
              esp.b1 = "🔲";
              esp.b2 = "🔲";
              esp.b3 = "🔲";
              esp.c1 = "🔲";
              esp.c2 = "🔲";
              esp.c3 = "🔲";
              tttset.tttstatus = "off";
              tttset.waitingTime = "on";
            } else if (Tie()) {
              if (isCmd) {
                satoru.sendMessage(m.chat, {
                  text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`,
                });
              } else {
                satoru.sendMessage(m.chat, {
                  text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`,
                });
              }

              const currentTTTties = getTTTties(tttset.player);
              const checkTTTIdTie = getTTTId(tttset.player);
              if (currentTTTties === undefined && checkTTTIdTie === undefined)
                addTTTId(tttset.player);
              addTTTtie(tttset.player, 1);
              esp.a1 = "🔲";
              esp.a2 = "🔲";
              esp.a3 = "🔲";
              esp.b1 = "🔲";
              esp.b2 = "🔲";
              esp.b3 = "🔲";
              esp.c1 = "🔲";
              esp.c2 = "🔲";
              esp.c3 = "🔲";
              tttset.tttstatus = "off";
              tttset.waitingTime = "on";
            }
            tttset.tttantibug = "off";
          }
        }
        break;

      case "ttt":
        if (!m.isGroup) {
          responder(mess.group);
        } else if (tttset.tttstatus == "on") {
          responder(
            `*O jogo já foi iniciado por outro player, aguarde ele terminar...*`
          );
        } else if (tttset.waitingTime == "on") {
          responder(`*Aguarde a ação anterior ser concluída...*`);
        } else if (
          args == 0 ||
          (args != "easy" &&
            args != "Easy" &&
            args != "EASY" &&
            args != "normal" &&
            args != "Normal" &&
            args != "NORMAL" &&
            args != "hard" &&
            args != "Hard" &&
            args != "HARD" &&
            args != "impossible" &&
            args != "Impossible" &&
            args != "IMPOSSIBLE")
        ) {
          responder(
            `*Dificuldade não encontrada, escolha uma válida*\n*Dificuldades: easy, normal, hard e impossible*`
          );
        } else {
          tttset.tttstatus = "on";
          tttset.player = m.sender;
          tttset.playerName = m.sender.split("@")[0];
          tttset.mentionPlayer = m;
          tttset.local = m.chat;
          if (args == "easy" || args == "Easy" || args == "EASY") {
            tttset.tttdifficulty = "EASY";
          } else if (args == "normal" || args == "Normal" || args == "NORMAL") {
            tttset.tttdifficulty = "NORMAL";
          } else if (args == "hard" || args == "Hard" || args == "HARD") {
            tttset.tttdifficulty = "HARD";
          } else if (
            args == "impossible" ||
            args == "Impossible" ||
            args == "IMPOSSIBLE"
          ) {
            tttset.tttdifficulty = "IMPOSSIBLE";
          }
          const randomStartIA = Math.floor(Math.random() * 3);
          if (randomStartIA == 0) {
            IA();
            tttset.reActivate1 = "on";
          }
          responder(
            `*PARTIDA INICIADA*\n*Dificuldade: ${tttset.tttdifficulty}*`
          );
          satoru.sendMessage(m.chat, {
            text: `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,
          });
          satoru.sendMessage(m.chat, { text: `Bom jogo` });
          setTimeout(() => {
            tttset.waitingTime = "off";
            tttset.autoEndTime = "on";
          }, 240000); //4 minuto
        }
        break;

      default:
        if (
          budy.includes("https") ||
          budy.includes("wa.me/") ||
          budy.includes("Wa.me/") ||
          budy.includes("WA.me/") ||
          budy.includes("instagram.com") ||
          budy.includes("youtu.be") ||
          budy.includes(".com/")
        ) {
          if (!m.key.fromMe) {
            if (!m.isGroup) return;
            if (!isAntiLink) return;
            if (groupAdmins) return responder("Adm pode enviar links né? :v");
            var kic = `${m.sender.split("@")[0]}@s.whatsapp.net`;
            responder("Link detectado, você será banido!");
            await satoru
              .groupParticipantsUpdate(m.chat, [kic], "remove")
              .then((res) => responder(jsonformat(res)))
              .catch((err) => responder(jsonformat(err)));
          }
        }
        if (budy == "Bom dia" || budy == "bom dia") {
          let buttons = [
            {
              buttonId: "conselho",
              buttonText: { displayText: "Claro 😁" },
              type: 1,
            },

            {
              buttonId: "semcon",
              buttonText: { displayText: "Não enche bot 😡" },
              type: 1,
            },
          ];
          satoru.sendButtonText(
            m.chat,
            buttons,
            `Bom dia ☕\nGostaria de um conselho?`,
            satoru.user.name,
            m
          );
        }
        if (body == "semcon") {
          responder("😔");
        }
        if (budy == "boa noite" || budy == "Boa noite") {
          responder(`Boa noite ${pushname}! Como foi seu dia?`);
        }
        if (budy == "bot" || budy == "Bot") {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/me.webp" } },
            { quoted: m }
          );
        }
        if (budy.includes("sexo")) {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/sex.webp" } },
            { quoted: m }
          );
        }
        if (budy.includes("pix")) {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/pix.webp" } },
            { quoted: m }
          );
        }
        if (budy.includes("ta potente")) {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/potente.webp" } },
            { quoted: m }
          );
        }
        if (budy.includes("burro")) {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/burro.webp" } },
            { quoted: m }
          );
        }

        if (budy.includes("complicado")) {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/complicado.webp" } },
            { quoted: m }
          );
        }

        if (budy == "ue" || budy == "ué" || budy == "UE" || budy == "UÉ") {
          satoru.sendMessage(
            m.chat,
            { sticker: { url: "./src/stickers/ue.webp" } },
            { quoted: m }
          );
        }
        if (budy.includes("fdp")) {
          responder("fdp é você mano");
        }
    }

    if (budy == "boa noite" || budy == "Boa Noite") {
      satoru.sendButtonText(
        m.chat,
        buttons,
        `"Boa noite ${pushname}!!\nComo foi seu dia?"`,
        satoru.user.name,
        m
      );
      if (budy.startsWith("=>")) {
        if (!isCreator) return responder(mess.owner);
        function Return(sul) {
          sat = JSON.stringify(sul, null, 2);
          bang = util.format(sat);
          if (sat == undefined) {
            bang = util.format(sul);
          }
          return responder(bang);
        }
        try {
          responder(
            util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
          );
        } catch (e) {
          responder(String(e));
        }
      }

      if (budy.startsWith(">")) {
        if (!isCreator) return responder(mess.owner);
        try {
          let evaled = await eval(budy.slice(2));
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
          await m.reply(evaled);
        } catch (err) {
          await m.reply(String(err));
        }
      }

      if (budy.startsWith("$")) {
        if (!isCreator) return responder(mess.owner);
        exec(budy.slice(2), (err, stdout) => {
          if (err) return responder(err);
          if (stdout) return responder(stdout);
        });
      }

      if (isCmd && budy.toLowerCase() != undefined) {
        //		    if (m.chat.endsWith('broadcast')) return
        //		    if (m.isBaileys) returnt, msgs[budy.toLowerCase()], true)
      }
    }
  } catch (err) {
    console.log(util.format(err));
  }
};

let file = require.resolve(__filename);
//		    let msgs = global.db.database
//		    if (!(budy.toLowerCase() in msgs)) return
//		    sakatsumi.copyNForward(m.cha
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Atualizado: ${__filename}`));
  delete require.cache[file];
  require(file);
});

/*
EM CASO DE DUVIDAS, ENTRE EM CONTATO COMIGO
WA.ME/5555933005901

QUER ADQUIRIR O ARQUIVO DESCRIPTOGRAFADO?
PREÇO 35 REAIS


 Creditos: 
 XEON : https://github.com/DGXeon/CheemsBot-MD2
 DikaArdnt: https://github.com/DikaArdnt
 https://github.com/MhankBarBar
 Agradecimentos ao Breno/Sayo! Sem ele eu provavelmente já teria desistido dos bots...
 
 acesse https://ayumi-apis.herokuapp.com
 */
 
const fs = require('fs')
const chalk = require('chalk')

global.ownername = 'brunoww'
global.satorukey = 'satoru'
global.botname = 'Satoru GojoMD'
global.akamekey = 'edbot'
global.brizaskey = 'brizaloka'
global.owner = ['5555933005901']
global.packname = 'Satoru GojoMD'
global.grupolink = 'https://chat.whatsapp.com/HeMepOb2ltNIJPC8vXpgyI'
global.author = 'bot'
global.sessionName = 'Satoru Gojo'
global.prefa = ['°','!','.','/',',','_', '*']
global.sp = '⭔'
global.mess = {
    success: 'Pronto 😎',
    admin: 'Tá se achando o adm?kkk',
    botAdmin: 'Preciso de adm!! 🤦',
    owner: 'Somente meu criador pode usar este comando',
    group: 'Este recurso só funciona em grupos!',
    private: 'Este recurso só funciona no pv!',
    limitesgotado: `*Desculpe, Seu limit acabou*\n*Para conseguir mais limit compre*`,
    bot: 'Este recurso só pode ser usado pelo whatsapp do bot',
    wait: 'Aguarde, estou fazendo... 🤠 ',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
    LinkDetected: '「 ANTI LINK 」\n\nVocê foi detectado enviando um link de grupo, desculpe, você será expulso!',    
    Adm_enviou_link: '「 ANTI LINK 」\n\nVocê foi detectado enviando um link de grupo, pena que você e admin :/, ao contrário você seria expulso!',        
    Criador_enviou_link: '「 ANTI LINK 」\n\nVocê foi detectado enviando um link de grupo, pena que você e meu criador :/, ao contrário você seria expulso!',        
    Link_Do_Grupo_Com_Anti_Link_On: 'O link do grupo pode :)',                    
    limitesgotado: '*Desculpe, Seu limit acabou*\n*Para conseguir mais limit compre*',
    erro_c: 'insira a pesquisa',
    semprem: 'Você não é um usuário premium, contate wa.me/5555933005901 para adquirir!',
    aventureiro: 'Use #start _seunome_ para se tornar um aventureiro!',    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`atualizado: '${__filename}'`))
	delete require.cache[file]
	require(file)
})

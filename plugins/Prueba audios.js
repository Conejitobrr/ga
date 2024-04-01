//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    
if (/^hola$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (!chat.isBanned && m.text.match(/(Jejeje)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Jejeje.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(brr|Brr)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Brr.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(añañin|Añañin)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Añañin.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Compartan|compartan)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Compartan.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(epico|épico|Epico|Épico)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Épico.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Te amo|te amo|teamo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Te-amo.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/gemi2.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(tu no mete|Tu no mete|Tú no mete|tú no mete)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Tu no mete.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Yamete-kudasai.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
  
if (!chat.isBanned && m.text.match(/(martes|Martes)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Martes.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(miercoles|Miércoles|miércoles|Miercoles)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Miercoles.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(coger|Coger)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Coger.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Telepatía|telepatía|telepatia|Telepatia)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Telepatía.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
   
if (!chat.isBanned && m.text.match(/(linda|Linda)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Linda.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(araara|ara ara)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Ara.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/vengo.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Onichan.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(n Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/pato.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Me doxean|me doxean)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Me doxean.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(no es jueves|No es jueves)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/No es jueves.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(no digas|No digas)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/No digas.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(me voy|Me voy)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Me voy.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(yair|Yair)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Anco.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Cáncer|cáncer)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Cáncer.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Sexo|sexo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/S3x0.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Tetas|tetas)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Tetas.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/cancion.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/siu.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/UwU.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Goku|goku)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Goku.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Autoestima|autoestima)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Autoestima.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(mff|Mff)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Mff.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(asco|Asco)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Asco.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Ya basta|ya basta)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Ya basta.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Dolor|dolor)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Dolor.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Pipipi|pipipi|PIPIPI)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Pipipi.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
  
if (!chat.isBanned && m.text.match(/(Chao|chao)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Chao.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 

if (!chat.isBanned && m.text.match(/(Saoo|saoo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Saoo.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
  
if (!chat.isBanned && m.text.match(/(arrepientete|Arrepientete|Hijo|hijo)/gi)) {
if (!db.data.chats[m.chat].audios) return;
const vn = './media/Arrepientete.mp3';
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
   
    
return !0 }
export default handler

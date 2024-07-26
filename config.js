const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpkVmY4aTNHcEdzUjBNVlNVSVhRdXNMaG5sdkkyVzFhd0EvRitzbU8rKzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImwtSnRONXlGUWxhOW9La3RBYnBXQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmZkMzJlODYtY2JjMC00MGFmLThmZDctMTYyODAwZGE5NTQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE2OSxcbiAgICAgIDM2LFxuICAgICAgMTc5LFxuICAgICAgNzYsXG4gICAgICA4NSxcbiAgICAgIDE1MCxcbiAgICAgIDE3OSxcbiAgICAgIDEwMCxcbiAgICAgIDM4LFxuICAgICAgNzAsXG4gICAgICAxMDcsXG4gICAgICAyNDMsXG4gICAgICAxMDIsXG4gICAgICAyMzUsXG4gICAgICA2NSxcbiAgICAgIDE3MixcbiAgICAgIDExNixcbiAgICAgIDEyNSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICA1OSxcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICA3MyxcbiAgICAgIDgxLFxuICAgICAgMTMwLFxuICAgICAgNTAsXG4gICAgICAxNjYsXG4gICAgICAyNDYsXG4gICAgICAyMDAsXG4gICAgICA1MCxcbiAgICAgIDE2OCxcbiAgICAgIDg3LFxuICAgICAgMTIzLFxuICAgICAgODQsXG4gICAgICAzNSxcbiAgICAgIDQ1LFxuICAgICAgMjE1LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1RZNks0TjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwNjYwODEzMToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzE2OTY5OTI4NzQ3NTE6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1B3aStvREVQTFlqYlVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvaHdyT0piWjZxL0RTNUJZemlHallvMjBLNUoxYzl5S3Qvc3d2WVNSQ0FNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ6STYwWW04OXNVVm16d1MwZUlxaFcvbGQrRW15eUlESThJdVNEWmlJcWFaZkU1YyswczRPa0xIODh5OTVmelZOaXhRWjZmMjlLL3VkUVFVYmxwaER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJBcFdkQ3liOWxMZmRFZnlteUt0Y1Vhc1JkdlBCUU1yaFJuYTBLMGErSUt3RlJrbWRaTmcxdGp0cjdlSERuV3hiNHJmOW5Bcy9oREJ1NklMNUxNSkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwNjYwODEzMToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTg2MTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWdzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZ3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1OFpESDJyUWt0VENvakk5RFJENllBT3g4VEJFMllwMjNCaVdOaThNM0VvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc3OTkwNzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Roy_the_boyyy",
  packname: process.env.PACK_NAME || "roys_pack",
  botname : process.env.BOT_NAME  || "roy_bot",
  ownername:process.env.OWNER_NAME|| "Roy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

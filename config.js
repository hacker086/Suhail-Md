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
global.caption = process.env.CAPTION || global.caption || "KING-REHM∆N" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923406902086";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_48_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlA1NUw0Ui9zUUY1Rk53TnorWkZwMFRwYWptMC9lUHNVUzNGNTNEZzlHaVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm41WTBRRE8wU1pLc1YwM0xpeUtMUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzliODM1NmYtM2M1ZC00NDUyLWJjY2ItMDBkNTQzODkxNTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDg0LFxuICAgICAgMTU0LFxuICAgICAgNzksXG4gICAgICAyMDQsXG4gICAgICAxMyxcbiAgICAgIDExNyxcbiAgICAgIDE5NCxcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgMTMyLFxuICAgICAgNzcsXG4gICAgICA1MSxcbiAgICAgIDYwLFxuICAgICAgNTUsXG4gICAgICA2MCxcbiAgICAgIDQ0LFxuICAgICAgNTYsXG4gICAgICAxODAsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxNzAsXG4gICAgICAxNDcsXG4gICAgICAzNixcbiAgICAgIDUyLFxuICAgICAgOTEsXG4gICAgICAxMCxcbiAgICAgIDI1MyxcbiAgICAgIDI0NCxcbiAgICAgIDY2LFxuICAgICAgOTEsXG4gICAgICAyMjUsXG4gICAgICAxMDUsXG4gICAgICAyMDUsXG4gICAgICAyMDgsXG4gICAgICAyMTEsXG4gICAgICAyNSxcbiAgICAgIDIyNCxcbiAgICAgIDgxLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxUOE1OUTRIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDY5MDIwODY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1NTcyNTgyNjM3NzgzOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEg5K0ljQ0VNdTUrYk1HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJseWxDd3Q5TzNNU0VFY0dWd2N3ZXFWNDAzcm9KNUZLQlRwMGx0aWxySVFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlptdWNSRHVkMFJRYVk5YnoyVUVrbXYvbXRIMGU2cGcxVExxSDJmdHFtOGdJeU95b21sQ1lYZ3N0bUszOEh3eFRnRFhtS0FFNlBCUE9MWXhmaFRITUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi85dHowYk9XOW91bTB6Tm1oUTdHSmRoelN2MTI3Q2h1UXRDY25UaTJEcnBJZUlwdmdQd1F1Ti9TRVJVdXp0U3ZmdURaWTVPK3dGcjJlcGlJbGRmdEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNjkwMjA4Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1NTczMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKelFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp6US5qc29uIjogIntcImtleURhdGFcIjpcIi9WbG9UYXkzRUloeUMxL3ZIRytMQmtLaGxYUTJzMW9pNUZjQ3htb1dlcUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTUzNTMzMTY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

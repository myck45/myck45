{
  "name": "myck45",
  "description": "the only thing am hacker powdered by myck",
  "logo": "https://i.imgur.com/UfzyhWN.jpeg",
  "keywords": ["bot"],
  "success_url": "/",

    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true,
      "value": ""
    },  

    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": true,
      "value": "."
    },

    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": true,
      "value": "public"
    }, 

    "AUTO_TYPING": {
      "description": "Make it true if you want auto typing.",
      "required": false,
      "value": "true"
    },

    "AUTO_READ_STATUS": {
      "description": "Make it true if you want bot auto auto_read_status.",
      "required": true,
      "value": "true"
    }, 

    "ANTI_LINK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": true,
      "value": "true"
    },

    "ANTI_BAD": {
      "description": "Make it true if you want bot auto delete bad words from group example xxx porn etc.",
      "required": true,
      "value": "true"
    }, 

   "CURRENT_STATUS": {
      "description": "Make it true if want automatic voice reply .",
      "required": false,
      "value": "false"
    }, 

    "FAKE_RECORDING": {
      "description": "Make it true if you want bot fake record.",
      "required": true,
      "value": "false"
    },

    "AUTO_REACT": {
      "description": "Make it true if you want bot AutoReact.",
      "required": true,
      "value": "true"
    },

    "OWNER_REACT": {
      "description": "Make it true if you want bot OwnerReact.",
      "required": true,
      "value": "true"

    }, 

   "ALWAYS_ONLINE": {
      "description": "Make it true if want automatic voice reply .",
      "required": false,
      "value": "true"
    }, 

    "BOT_NAME": {
      "description": "write hear your name.",
      "required": true,
      "value": "myck45"
    }, 

    "READ_MESSAGE": {
      "description": "Make it true if you want bot read your all sms just now.",
      "required": true,
      "value": "false"
    }, 

    "CAPTION": {
      "description": "enter your caption if you want to show on menu.",
      "required": true,
      "value": "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ mylz kid*"
    }


},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "github"
}
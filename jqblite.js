let odd = true
var he = require('he');
const moment = require("moment");
const axios = require('axios');
const _ = require("lodash");
const io = require("socket.io-client");
const { exec } = require('child_process')
const fs = require('fs');
// nodejs already has a native fetch()
// const fetch = require('node-fetch')
const os = require('os')
const socket = io("https://www.windows93.net:8088", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});
    let pref = '_'
    let botname = 'jqb-LITE'
    let botcolor = '#89b'
    let botver = "LITE (OpenSource)"
    var freeze = 0
    function tbsend(msg) {
  	if (odd) {
    socket.send(msg)
    odd = false
  	} else {
    socket.send(msg + ' ')
    odd = true
  }
}
let fmTrack = "Unknown Song"
let fmArtist = "Unknown Artist"
async function getFMinfo() {
    try {
        const response = await axios.get('http://windows93.net:8085/status-json.xsl');
        const data = response.data;
        if (data && data.icestats && data.icestats && data.icestats.source) {
            const source = data.icestats.source[0];
            fmTrack = data.icestats.source.title || "Unknown Song";
        	   fmArtist = data.icestats.source.artist || "Unknown Artist";
        }
    } catch (error) {
        fmTrack = "Unknown Song";
    	   fmArtist = "Unknown Artist";
                console.log('Error fetching radio data');
    }
}
socket.emit("user joined", pref + he.decode(botname), botcolor, "", "");
socket.send("jqb-LITE Booted!")
console.log("jqb-LITE Booted!")
socket.on("message", function(data) {
let banlist = require("./banlist.json")
banlist = require("./banlist.json")
let tldlist = require("./tldlist.json")
tldlist = require("./tldlist.json")
let tcclist = require("./tcclist.json")
tcclist = require("./tcclist.json")
function updbanlist() {
fs.writeFileSync('./banlist.json', JSON.stringify(banlist))
}
function updadmins() {
fs.writeFileSync('./admins.json', JSON.stringify(admin))
}
function setJSON(path, content) {
	fs.writeFileSync(path, JSON.stringify(content))
}
function addData(object, layone, laytwo) {
  if (_.has(object, layone)) {
	object[layone].push(laytwo)
  } else {
	_.set(object, layone, [laytwo])
  }
}
function addDataFromStart(object, layone, laytwo) {
  if (_.has(object, layone)) {
	object[layone].unshift(laytwo)
  } else {
	_.set(object, layone, [laytwo])
  }
}
let admin = require("./admins.json")
admin = require("./admins.json")
const joblist = require("./joblist.json")
let jobdata = require("./jobdata.json")
let prondata = require("./prondata.json")
    if (banlist.includes(data.home)) {
        return;
    }
	let ownerHomes = data.home == "35fe378ef8db392afc1c5b61f833f70397a014462dd60331f8d2b136f8471c31" || data.home == "39fc07ce66c8897f9d6461dcaa3de6ecd92cad01b2035e000d5e472ad9af8778" || data.home == "53921f4f070925fa3ddc800773f72ef9c36a72305038aebe49402e123c66629b"
	// ^^^ owner homes must be: data.home == "dynamicHome" || data.home == "staticHome" || data.home == "hotspotHome" . Change it with your home!
	try {
    if (data.msg == pref+"help") {
    	tbsend(`jqBot Ver. ${botver} \nHello, check out this link to see all my commands: \nhttps://pastebin.com/raw/TWFLTewh ;\nALERT: If pastebin doesn't work in your ISP, Try this instead: https://rentry.co/f9v888ei`)
    }
    if (data.msg.match("dQw4w9WgXcQ")) {
        tbsend("Nobody's falling for that rickroll link, dummy.")
    }
	if (data.msg == pref+"time") {
		tbsend(he.decode("System Date: "+ moment().format("DD.MM.YYYY") + "\nSystem Time: " + moment().format("HH:mm:ss")+""))
	}  	
	if (data.msg == pref+"unixtime") {
	    tbsend(""+Date.now())
	}
	if (data.msg == pref+"about") {
	    tbsend(he.decode(`jqBot Version ${botver}\nMade by: J. Quiroz (hain)\nMulti-functional and Open-Source bot made with love and effort. <3\nAny feedback? Email jquiroz1780@outlook.com or DM @jquiroz01 on disc.\nSpecial thanks to:\n# BenSav: Helping with the bot commands.\n# Magest1ckkz: Helping on the save/load command.\nTYSM for the help. <3\nDISCLAIMER: This bot version is Open-Source, It may not contain some commands from the normal version of JQB or the command response may be modified.\n\nMade in Peru / Hecho en Perú | (C) 2024-2025`))
	}
    //iploggers    	
    if (data.msg.match("yip.su") || data.msg.match("2no.co") || data.msg.match("ezstat.ru") || data.msg.match("iplogger.com") || data.msg.match("maper.info") || data.msg.match("iplis.ru") || data.msg.match("grabify.link") || data.msg.match("location.cyou") || data.msg.match("mymap.icu") || data.msg.match("mymap.quest") || data.msg.match("mapss.icu") || data.msg.match("map-s.online") || data.msg.match("crypto-o.click") || data.msg.match("cryp-o.online") || data.msg.match("customer.autos") || data.msg.match("account.beauty") || data.msg.match("bank.charity") || data.msg.match("photospace.life") || data.msg.match("mymassive.pics") || data.msg.match("photovault.store")) {
    	tbsend("Ain't nobody falling for that IPlogger link, dummy.")
    }
// Bot Changing Commands !!
        	//^name
    if (data.msg.startsWith(pref+"name")) {
     	if (freeze == 1) {return tbsend("Trying to crash me... Fuck it, try it with other bots.")}  
     	if (data.msg.slice(6)) {
     		if (data.msg.slice(6).toLowerCase().includes('exe') || data.msg.slice(6).toLowerCase().includes('fortnite') || data.msg.slice(6).toLowerCase().includes('sonic') || data.msg.slice(6).toLowerCase().includes('roblox')) {
                tbsend("nope.")
                return
            }     				     		
    		botname = data.msg.slice(6);
     		} else {
	    		botname = 'jqb-LITE'
	     	}
		socket.emit("user joined", he.decode(pref) + he.decode(botname), botcolor, "", "");
      	freeze = 1
        setTimeout(() => {
	    	freeze = 0;
        }, 2000);
    } 
       //_color 	
    if (data.msg.startsWith(pref+"color")) {
 		if (freeze == 1) {return tbsend("Nice try! Go crash another bot instead.")}
 		if (data.msg.split(' ')[1]) {
     			botcolor = data.msg.split(' ')[1];
     		} else {
	     		botcolor = "#89b"
     		}
     		socket.emit("user joined", he.decode(pref) + he.decode(botname), botcolor, "", "");
     		freeze = 1
        	setTimeout(() => {
	       		freeze = 0;
        	}, 2000); // 2000ms = 2s
     	}
	if (data.msg.startsWith(pref+"8ball")){
	    tbsend(he.decode(_.sample(ate.ball)))
	}
	if (data.msg == pref+"changelog") {
		tbsend("https://pastebin.com/raw/DGWTR3m0")
    }
	if (data.msg == pref+"sns") {
		tbsend("https://www.nicovideo.jp/user/136452238 - QuirozP (Nicovideo) \nhttps://soundcloud.com/quirozproducer - QuirozP (SoundCloud) \nhttps://jquiroz.nekoweb.org - J. Quiroz's website (Neocities) \nhttps://bsky.app/profile/quirozp.bsky.social - QuirozP (Bluesky) \nhttps://quirozp.fandom.com/ - QuirozP's wiki (Fandom) \nhttps://reddit.com/u/quirozP - quirozP (Reddit)")
	}
	if (data.msg == pref+"disc") {
		tbsend("Owner's Server: https://tiny.cc/quirozp-server")
	}
	if (data.msg == pref+"radio") {
		tbsend("https://stream.zeno.fm/wdaofmgzgetvv")
    }
	if (data.msg.startsWith(pref+"room")){
	    let rname = data.msg.slice(6)
	    if (rname) {
	        if (rname.startsWith("nigga")) {
	            socket.send("/r atrium")
	            return
	        }
	        socket.send(he.decode("/r " + rname))
	    } else {
	        socket.send("/a")
	        return
	    }
	}
    if (data.msg == pref+"hostip") {
        exec('curl 2ip.io', function(error, stdout, stderr){
            if(error)
            return;
            tbsend('Host IP is: '+ stdout);
        })
    }
    if (data.msg == pref+"hostweather") {
        exec('curl wttr.in/~Lima?0?T', function(error, stdout, stderr){
            if(error)
            return;
            tbsend(stdout);
        })
    } //Replace Lima with your city :)
    if (data.msg.startsWith(pref+"weather")) {
        const place = data.msg.slice(9)
        if (place) {
        exec('curl wttr.in/'+place+'?0?T', function(error, stdout, stderr){
            if(error)
            return;
            tbsend(stdout);
        })
    } else {
        tbsend("Args required!")
        return
    }
    }
	if (data.msg.startsWith(pref+"say")){
		const args = data.msg.slice(5)
		if (args) {
        	if (args.match("nigga")) {
        	tbsend(`Every message with N-Word won't be sent via ${pref}say.`)
            return
            }
			if (args.match("faggot")) {
        	tbsend(`Nope.`)
            return
            }
			if (args.match("nigger")) {
        	tbsend(`Nope.`)
            return
            }
            if(args.length >= 200) {
    	    return tbsend("Limit reached! 200 max.")
    	    }
        tbsend(he.decode(String.fromCharCode(8205) + args))
    	} else {
        tbsend('Arg required.')
    	}
	}
	if (data.msg.startsWith(pref+"topic")) {
	    const topic = data.msg.slice(7)
	if (topic) {
    fs.writeFile(he.decode(`jqb_topic.txt`), he.decode(topic), (err) => {
      if (err && err.code === 'EPERM') {
        return tbsend(he.decode(`ERR: topic couldn't be written.`));
      } else if (err && err.code === 'ENOENT') {
        return tbsend(he.decode(`ERR: topic couldn't be written.`));
      } else if (err) {
        return tbsend(he.decode(`ERR: topic couldn't be written: `+err.toString()));
      }
      tbsend(he.decode(`Topic saved!`));
	})
	} else {
	   fs.readFile(he.decode("jqb_topic.txt", 'utf8'), (err, filecontent) => {
            if (err && err.code === 'ENOENT') {
              tbsend(he.decode("ERR: Topic corrupted or missing."));
    } else {
                let topic = filecontent.toString();
                let index = topic.lastIndexOf(' --readonly');
                if (index !== -1) {
                    contents = contents.substring(0, index);
                }

              tbsend(he.decode("Current topic: "+topic));
            }
          });
	}
	}
    if (data.msg.startsWith(pref+"save")) {
    const filename = data.msg.split(' ')[1];

    if(!filename) {
        tbsend("ERR: Missing filename!")
    return }

    const contents = data.msg.substring(filename.length + 7); // Excluding "+save" and the space before the filename

    if(!contents) {
        tbsend("ERR: Missing arguments!")
    return }

    if(contents.length >= 2000) {
        return tbsend(`ERR: "${filename}" couldn't be saved.\nReason: Limit of letters: 2000`)
    }

	if(filename.includes("../")) {
		tbsend("nope.")
		return
	}
    if(contents.includes("*hugs")) {
        tbsend("no.")
        return
    }

    if(contents.endsWith(" --readonly")) {

        fs.writeFile(he.decode(`./jqbtxt/${filename}.txt`), he.decode(contents), (err) => {
            if (err) {
              return tbsend(`ERR: "${filename}" couldn't be written.\nReason: Read-only files can be saved but it cannot be edited.`);
            }
            tbsend(he.decode(`Read-only file saved!`))
            fs.chmodSync(he.decode(`./jqbtxt/${filename}.txt`), 0o444);
        })}

    fs.writeFile(he.decode(`./jqbtxt/${filename}.txt`), he.decode(contents), (err) => {
      if (err && err.code === 'EPERM') {
        return tbsend(he.decode(`ERR: file "${filename}" couldn't be written.\nReason: Read-only files can be saved but it cannot be edited.`));
      } else if (err && err.code === 'ENOENT') {
        return tbsend(he.decode(`ERR: File contents in "${filename}" couldn't be written.\nReason: Special characters found and cannot be written.`));
      } else if (err) {
        return tbsend(he.decode(`ERR: The file contents in "${filename}" couldn't be written: `+err.toString()));
      }
      tbsend(he.decode(`File saved!`));

    })}
    if (data.msg.startsWith(pref+"nlsave")) {
    const filename = data.msg.split(' ')[1];

    if(!filename) {
        tbsend("ERR: Missing filename!")
    return }

    const contents = data.msg.substring(filename.length + 9); // Excluding "+save" and the space before the filename

    if(!contents) {
        tbsend("ERR: Missing arguments!")
    return }

    if(contents.length >= 500) {
        return tbsend(`ERR: A newline for "${filename}" couldn't be saved.\nReason: Limit of letters: 500`)
    }

	if(filename.includes("../")) {
		tbsend("nope.")
		return
	}
    if(contents.includes("*hugs")) {
        tbsend("no.")
        return
    }

    if(contents.endsWith(" --readonly")) {

        fs.appendFile(he.decode(`./jqbtxt/${filename}.txt`), he.decode("\n"+contents), (err) => {
            if (err) {
              return tbsend(`ERR: "${filename}" couldn't be written.\nReason: Read-only files can be saved but it cannot be edited.`);
            }
            tbsend(he.decode(`File "${filename}" converted to read-only!`))
            fs.chmodSync(he.decode(`./jqbtxt/${filename}.txt`), 0o444);
        })}

    fs.appendFile(he.decode(`./jqbtxt/${filename}.txt`), he.decode("\n"+contents), (err) => {
      if (err && err.code === 'EPERM') {
        return tbsend(he.decode(`ERR: Newline for file "${filename}" couldn't be written.\nReason: Read-only files can be saved but it cannot be edited.`));
      } else if (err && err.code === 'ENOENT') {
        return tbsend(he.decode(`ERR: Newline for file "${filename}" couldn't be written.\nReason: Special characters found and cannot be written.`));
      } else if (err) {
        return tbsend(he.decode(`ERR: Newline for file "${filename}" couldn't be written: `+err.toString()));
      }
      tbsend(he.decode(`Newline for file saved!`));

    })}
    if (data.msg.startsWith(pref+"load")){
        const filename = data.msg.split(' ')[1]
        if(!filename) {
            tbsend("ERR: Missing filename.")
			return
        }
		if(filename.includes("../")) {
			tbsend(`ERR 403: Forbidden.`)
			return 
		}
        fs.readFile(he.decode("./jqbtxt/"+filename+".txt", 'utf8'), (err, filecontent) => {
            if (err && err.code === 'ENOENT') {
              tbsend(he.decode("ERR 404:\nThe file \""+filename+"\" can't be found."));
            } else {

                let contents = filecontent.toString();
                let index = contents.lastIndexOf(' --readonly');
                if (index !== -1) {
                    contents = contents.substring(0, index);
                }
              tbsend(he.decode("​"+contents));
            }
          });
    }
	if (data.msg.startsWith(pref+"remfile")){
		if (admin.includes(data.home)){
	    const filename = data.msg.split(' ')[1];
        if(!filename) {
            tbsend("ERR: Missing filename.")
			return
        }
        if (filename.includes("../")){
            tbsend("ERR 403: Forbidden.")
			return
        }
        fs.unlink(he.decode("./jqbtxt/"+filename+".txt", 'utf8'), (err, filecontent) => {
            if (err && err.code === 'ENOENT') {
              tbsend(he.decode("ERR 404:\nThe file \""+filename+"\" can't be removed.\nREASON: Not found."));
            } else {
              tbsend("File removed!");
            }
        });
	} else {
		tbsend("Uh... You are not admin. Use another command.")
	}
	}
	if (data.msg == pref+"myinfo"){
	let infohome = data.home
	if (ownerHomes){
		tbsend(he.decode("Your Info:\nNickname: "+data.nick+"\nPronouns: "+_.get(prondata, [infohome])+"\nHome ID: "+data.home+"\nColor: "+data.color+"\nJob: "+ _.join(_.get(jobdata, [infohome]), ", ") + "." +"\njqBot Level: Level 3 (OWNER)"))
		return
	} 
	if (admin.includes(data.home)){
		tbsend(he.decode("Your Info:\nNickname: "+data.nick+"\nPronouns: "+_.get(prondata, [infohome])+"\nHome ID: "+data.home+"\nColor: "+data.color+"\nJob: "+ _.join(_.get(jobdata, [infohome]), ", ") + "." +"\njqBot Level: Level 2 (ADMIN)"))
	} else {
		tbsend(he.decode("Your Info:\nNickname: "+data.nick+"\nPronouns: "+_.get(prondata, [infohome])+"\nHome ID: "+data.home+"\nColor: "+data.color+"\nJob: "+ _.join(_.get(jobdata, [infohome]), ", ") + "." +"\njqBot Level: Level 1 (USER)"))
	}
	}
	if (data.msg == pref) {
		tbsend(`Enter a command or do ${pref}help to see the commands`)
	}
    if (data.msg.startsWith(pref+"birate")) {
        let arg = data.msg.slice(pref.length + 7)
    	if (arg) {
        	if (arg.startsWith("nigger")) {
            	tbsend(he.decode("[CENSORED] is " + Math.floor(Math.random() * 101) + " bi"))
            	return
            }
        	tbsend(he.decode(String.fromCharCode(8205) + arg + " is " + Math.floor(Math.random() * 101) + "% bi."))
    	} else {
        	tbsend(he.decode(String.fromCharCode(8205) + data.nick + " is " + Math.floor(Math.random() * 101) + "% bi."))
    	}
	}
     // IGV Commands!! :3   
    if (data.msg.toLowerCase().startsWith(pref+"igv")) {
    	const num = data.msg.slice(pref.length + 4)
    	if (!isNaN(num)) {
    		tbsend(((parseFloat(num)/100) * 18).toFixed(2).toString())
    	} else {
        	tbsend("Invalid number.")
    	}
    }    
    if (data.msg.toLowerCase().startsWith(pref+"bigv")) {
    	const igvb = data.msg.slice(pref.length + 6)
    	if (!isNaN(igvb)) {
    		tbsend(((parseFloat(igvb)/1.18)).toFixed(2).toString())
    	} else {
    	    tbsend("Invalid number!")
    	}
    }    
    
 //Not IGV but math commands.       	
    if (data.msg.toLowerCase().startsWith(pref+"celf")) {
    	const celsius = data.msg.toLowerCase().slice(pref.length + 5)
    	if (!isNaN(celsius)) {
    		tbsend(((parseFloat(celsius) * 9/5) + 32).toFixed(2).toString() + " °F")
    	} else {
        	tbsend("Please enter a valid number.")
    	}
    }
    if (data.msg.toLowerCase().startsWith(pref+"fahc")) {
    	const fahr = data.msg.toLowerCase().slice(pref.length + 5)
    	if (!isNaN(fahr)) {
    		tbsend(((parseFloat(fahr) - 32) / 1.8).toFixed(2).toString() + " °C")
    	} else {
        	tbsend("Please enter a valid number.")
    	}
    }      
    if (data.msg.toLowerCase().startsWith(pref+"kmmi")) {
    	const km = data.msg.toLowerCase().slice(pref.length + 5)
    	if (!isNaN(km)) {
    		tbsend(((parseFloat(km) / 1.60934)).toString() + " mile(s)")
    	} else {
        	tbsend("Please enter a valid number.")
    	}
    }    
    if (data.msg.toLowerCase().startsWith(pref+"mikm")) {
    const mile = data.msg.toLowerCase().slice(pref.length + 5)
    if (!isNaN(mile)) {
    tbsend(((parseFloat(mile) * 1.60934)).toString() + " kilometer(s)")
    } else {
        tbsend("Please enter a valid number.")
    }
    }            	
    if (data.msg.toLowerCase().startsWith(pref+"celk")) {
    const cels = data.msg.toLowerCase().slice(pref.length + 5)
    	if (!isNaN(cels)) {
    		tbsend((parseFloat(cels) + 273.15 ).toFixed(2).toString() + " °K")
    	} else {
        	tbsend("Please enter a valid number.")
    	}
    }      
    if (data.msg.toLowerCase().startsWith(pref+"fahk")) {
    const fahr = data.msg.toLowerCase().slice(pref.length + 5)
    	if (!isNaN(fahr)) {
    		tbsend((((parseFloat(fahr) - 32) / 1.8) + 273.15).toFixed(2).toString() + " °K")
    	} else {
        	tbsend("Please enter a valid number.")
    	}
    }      
    if (data.msg == pref+"ownercheck") {
    	if (ownerHomes) { // replace with your home if it changes
			tbsend("You're the owner!")
    	} else {
        tbsend("You're NOT the owner.");
    	}
	}
	if (data.msg == pref+"admincheck") {
    	if (admin.includes(data.home)) { // replace with your home if it changes
			tbsend("You're an admin.")
    	} else {
        tbsend("Yeah, of course you're an admin, of your room though.");
    	}
	}
// Here's the lodash commands/autoreplies. :3	
	if (data.msg.toLowerCase().match("shutup")){
		tbsend(_.sample(stuff.autoreply1))
    }
    if (data.msg.toLowerCase().match("shutul")){  
    	tbsend(_.sample(stuff.autoreply1))
    }
    if (data.msg == pref+"othername") {
        socket.emit("user joined", pref + _.sample(name.random), _.sample(color.random), "", "")
    }
//Axios Command WIP        	
    if (data.msg == pref+"dfm-rn") {
    	async function fmcommand() {
    		await getFMinfo();
    		tbsend("Now Playing on Derp.FM: " + fmTrack + " - " + fmArtist + " \n If you wanna hear the radio station, Check: http://windows93.net:8085")
    	}
    	fmcommand()
    }   	
    
        	// Unban/Ban Commands.   
        	
    if (data.msg.toLowerCase().startsWith(pref+"ban")) {
    	if (admin.includes(data.home)) { // replace with your home if it changes
        	let chosenhome = "empty";
        	if (data.msg.trimEnd().toLowerCase().slice(pref.length + 4)) {
            	chosenhome = data.msg.trimEnd().toLowerCase().slice(pref.length + 4);
        	}
        	if (chosenhome === "empty") {
            	tbsend('Ban who??'); // you can change the messagesc
        	} else {
        	  banlist.push(chosenhome)
        	  updbanlist()
           // banlist.push(chosenhome);
            tbsend(`User with the ID ${chosenhome} has been banned from the bot!`);
        	}
    	} else {
        tbsend('Uh... You are not admin. Use another command.');
    	}
    }
	if (data.msg.toLowerCase().startsWith(pref+"unban")) {
    	if (admin.includes(data.home)) { // replace with your home if it changes
        	let chosenhome = "empty";
        	if (data.msg.trimEnd().toLowerCase().slice(pref.length + 6)) {
            	chosenhome = data.msg.trimEnd().toLowerCase().slice(pref.length + 6)
        	}
        	if (chosenhome === "empty") {
            	tbsend('Unban who?');
        	} else {
            	if (banlist.indexOf(chosenhome) !== -1) {
                banlist.splice(banlist.indexOf(chosenhome), 1);
                updbanlist()
                tbsend(`User with the ID ${chosenhome} has been unbanned from the bot!`);
            	} else {
                tbsend('ERR: User is not banned and cannot be unbanned.');
            	}
        	}
    	} else {
        tbsend('Uh... You are not admin. Use another command.');
    	}
	}
	// Admin Options!
    if (data.msg.startsWith(pref+"giveadmin")) {
    	if (admin.includes(data.home)) { // replace with your home if it changes
        	let chosenhome = "empty";
        	if (data.msg.trimEnd().toLowerCase().slice(pref.length + 10)) {
            	chosenhome = data.msg.trimEnd().toLowerCase().slice(pref.length + 10);
        	}
        	if (chosenhome === "empty") {
            	tbsend('Admin to who?'); // you can change the messagesc
        	} else {
        	  admin.push(chosenhome)
        	  updadmins()
            tbsend("Admin for the home "+chosenhome+" added!");
        	}
    	} else {
        tbsend('Uh... You are not admin. Use another command.');
    	}
    }
	if (data.msg.startsWith(pref+"remadmin")) {
    	if (admin.includes(data.home)) { // replace with your home if it changes
        	let chosenhome = "empty";
        	if (data.msg.trimEnd().toLowerCase().slice(pref.length + 9)) {
            	chosenhome = data.msg.trimEnd().toLowerCase().slice(pref.length + 9)
        	}
        	if (chosenhome === "empty") {
            	tbsend('Remove admin to who?');
        	} else {
            	if (admin.indexOf(chosenhome) !== -1) {
                admin.splice(admin.indexOf(chosenhome), 1);
                updadmins()
                tbsend('Admin for the home '+chosenhome+' has been removed!');
            	} else {
                tbsend('User is not admin.');
            	}
        	}
    	} else {
        tbsend('Uh... You are not admin. Use another command.');
    	}
	}
    if (data.msg.startsWith(pref+"eval")){
		const args = data.msg.slice(6)
		if (admin.includes(data.home)) {
		if (args) {
		try{
        tbsend((eval(he.decode(args))).toString())
		}catch(e){
		    tbsend(e)
		}
    	} else {
        tbsend('Arg required.')
    	}
		} else {
		    tbsend("Uh... You are not admin. Use another command")
		}
    }
// GayLeb Inspired Command!
if (data.msg.startsWith(pref+"feedback")){
	const contents = he.decode(data.msg.slice(pref.length + 9))
	if (contents){
    fs.writeFile(he.decode('./jqb_feedbacks/'+"FEEDBACK_"+moment().format("YYYYMMDD") + "_" + moment().format("HHmmss")+'.txt'), he.decode(contents), (err) => {
      if (err && err.code === 'EPERM') {
        return tbsend(he.decode(`ERR: Feedback couldn't be sent.\nReason: Read-only files can be saved but it cannot be edited.`));
      } else if (err && err.code === 'ENOENT') {
        return tbsend(he.decode(`ERR: Feedback couldn't be sent.\nReason: Special characters found and cannot be written.`));
      } else if (err) {
        return tbsend(he.decode(`ERR: Feedback couldn't be sent: `+err.toString()));
      }
      tbsend(he.decode(`Feedback sent!`));
    })
	} else {
		tbsend("ERR: Args required!")
	}
}
if (data.msg == pref+"botinfo"){
    const uptime = process.uptime();

const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);
    exec('curl 2ip.io', function(error, stdout, stderr){
            if(error)
            return;
    tbsend(he.decode(`JQBot Info:\nDefault Nick: ${botname}\nDefault Color: ${botcolor}\nDefault Prefix: ${pref}\nVersion: ${botver}\nProcess Uptime: ${hours} hours, ${minutes} minutes, ${seconds} seconds\nBot IP: `+stdout+``))
})
}
if (data.msg == pref+"sysinfo"){
    const type = os.type()
    const platform = os.platform()
    const arch = os.arch()
const freeMem = os.freemem();
const totalMem = os.totalmem();
let ut_sec = os.uptime();
let ut_min = ut_sec / 60;
let ut_hour = ut_min / 60;

ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);

ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;
const hostname = os.hostname()
    tbsend(`System Info:\nOS Type: ${type}\nPlatform: ${platform}\nArch: ${arch}\nFree Memory: ${(freeMem / (1024 ** 3)).toFixed(2)} GB\nTotal Memory: ${(totalMem / (1024 ** 3)).toFixed(2)} GB\nSystem Uptime: `+ ut_hour + " Hour(s) "
    + ut_min + " minute(s) and "
    + ut_sec + ` second(s)\nHostname: ${hostname}`)
}
if (data.msg.startsWith(pref+"urlt")){
    const urlarg = data.msg.slice(pref.length + 5)
async function getTitle(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    return title || 'No title found!';
  } catch (error) {
    tbsend("ERR while fetching title.")
    console.error('Error fetching or parsing the title:', error);
    return 'Error fetching title';
  }
}
// Example usage:
async function urlfetchres() {
  const url = urlarg;
  const title = await getTitle(url);
  tbsend(`URL Title: ${title}`);
}
urlfetchres();
}
if (data.msg.startsWith(pref+"tlds")){
	const domain = data.msg.split(' ')[1]
		if (_.has(tldlist, [domain])) {
			tbsend('' + _.get(tldlist, [domain]) +'')
		} else {
			tbsend("Not a valid TLD.")
	}
}
if (data.msg.startsWith(pref+"tccs")){
	const tcc = data.msg.split(' ')[1]
		if (_.has(tcclist, [tcc])) {
			tbsend('' + _.get(tcclist, [tcc]) +'')
		} else {
			tbsend("Not a valid telephone country code.")
	}
}
if (data.msg == pref+"jobs"){
	tbsend("Jobs: " + _.join(_.get(joblist, ["jobs"]), ", ") + `. Do ${pref}addjob to claim your job or ${pref}remjob to quit your job.`)
}
if (data.msg.startsWith(pref+"addjob")){
	let chosenjob = data.msg.split(" ")[1]
	if (_.includes(joblist.jobs, chosenjob)){
		if (!jobdata.hasOwnProperty(data.home) || !jobdata[data.home].includes(chosenjob)) {
			addData(jobdata, data.home, chosenjob)
			setJSON('./jobdata.json', jobdata)
			tbsend(`You got the job "${chosenjob}"! Check ${pref}myinfo to see your jobs.`)
		} else {
			tbsend(`You already got the job "${chosenjob}".`)
		}
	} else {
		tbsend("ERR 404: Job not found.")
	}
}
if (data.msg.startsWith(pref+"remjob")){
	let chosenJob = data.msg.split(" ")[1]
	let homedata = data.home
	if (_.includes(joblist.jobs, chosenJob)){
		if (jobdata[homedata].indexOf(chosenJob) !== -1) {
			jobdata[homedata].splice(jobdata[homedata].indexOf(chosenJob), 1);
			setJSON('./jobdata.json', jobdata)
			tbsend(`You quit the job "${chosenJob}"!`)
		} else {
			tbsend(`ERR: You're not on that job, so, you cannot quit.`)
		}
	} else {
		tbsend("ERR 404: Job not found.")
	}
}
if (data.msg.startsWith(pref+"setpron")){
	let pronStr = data.msg.slice(pref.length + 8)
	let homedata = data.home
	if (pronStr){
	if (!prondata.hasOwnProperty(data.home) || !prondata[data.home].includes(pronStr)) {
		addDataFromStart(prondata, data.home, pronStr)
		prondata[homedata].splice(1, 1)
		setJSON('./prondata.json', prondata)
      tbsend(he.decode(`Pronouns set to ${pronStr}! Check ${pref}myinfo to see your pronouns.`));
	} else {
		tbsend(`You've already set your pronouns to ${pronStr}`)
	}
} else {
	tbsend("ERR: Args required!")
}
}
}catch(e){
	tbsend(e)
	console.log(e)
}
})

// It's just another Lodash thing for the bot.
const stuff = {"autoreply1": ["shutul", "you shutul", "you shutup"]}
// random name/color
const name = {"random": ["Hubei", "Nanjing", "Zhuyin", "parseFloat", "Flapple", "AppleCD", "Almaty", "Borsch", "Monoxide"]}
const color = {"random": ["#c0b", "#b07", "#dab", "#b0b", "#beef", "#c0ffee", "#b10", "#8008", "#abe", "#f007", "#fee7", "#abc"]}
const ate = {"ball": ["[✓] Yeah, of course.", "[?] Idk man, ask me later", "[X] nope.", "[✓] Yeppers peppers.", "[?] Maybe.", "[X] Error 403"]}
// Whatever, Readline.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rlsend(input) { 
    try {
        const result = socket.send(input);  
    } catch (error) {
        console.error('Error:', error.message);
    }
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (input) => {
    rlsend(input.trim()); 
    rl.prompt();
});

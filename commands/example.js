/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");
const Discord = require('discord.js');
const client = new Discord.Client();


class ExampleCommandPlugin extends tesseract.Command {
    constructor() {
        super("betSet", {
            description: "This is the first plugin that I have attemped. It's a simple bet system where you can make an open bet that anyone on your server may use to initiate a wager",
            triggers: [ "betSet", "bs" ],
            arguments: {},
            scope: "guild",
            owner: false,
            typing: true,
            schedulable: true,
            unsafe: false,
            nsfw: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [],
            condition: () => true,
        });
    }



client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	// ...
});

    exec = async (message, argv) => {
        console.log("COMMAND: ", this);
        console.log("MESSAGE: ", message);
        console.log("ARGUMENTS: ", argv);
    }
}

module.exports = ExampleCommandPlugin;

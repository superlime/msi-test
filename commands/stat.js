const Discord = require('discord.js')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bdd/test.db3');
exports.run = (client, message, args, config) => {
    db.serialize(function() {
        const bool = db.prepare("SELECT bool FROM test");
        if (bool == 0) {
            const bool = db.prepare("UPDATE test SET bool = 1");
            bool.finalize();
            const stmt = db.prepare("UPDATE test SET info = 'salut' WHERE bool = 1");
            stmt.finalize();

            const all = db.prepare("SELECT * FROM test");
            message.channel.send(all)

        } else if (bool == 1) {
            const stmt = db.prepare("UPDATE test SET info = 'coucou' WHERE bool = 1");
            stmt.finalize();

            const all = db.prepare("SELECT * FROM test");
            message.channel.send(all)
        }
    });
}
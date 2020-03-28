const demofile = require('demofile');
const fs = require('fs');

const roundIntervalStartTicks = 4 * 128
const roundIntervalStopTicks = 16 * 128

const filename = process.argv[2];

var time = 0;
var lastroundtime = 0;
var gamestart = 0;
var round = -3;


fs.readFile(filename, function (err, buffer) {
    let demoFile = new demofile.DemoFile();
    let roundstart = false;
    let freeze_end = false;

    demoFile.gameEvents.on('round_start', e => {
        roundstart = true;
    round++;
    if (round === 1) {

        console.log("Map," + demoFile.header.mapName);


        teams = demoFile.entities.teams;
        tPlayers = teams[2].members;
        ctPlayers = teams[3].members;


        console.log("Team," + teams[2].clanName + "," + tPlayers[0].name + "," + tPlayers[1].name + "," + tPlayers[2].name + "," + tPlayers[3].name + "," + tPlayers[4].name + ",T");
        console.log("Team," + teams[3].clanName + "," + ctPlayers[0].name + "," + ctPlayers[1].name + "," + ctPlayers[2].name + "," + ctPlayers[3].name + "," + ctPlayers[4].name + ",CT");

        //console.log('Round,Killer,Victim,Assist,KillerTeam,VictimTeam,Weapon,Headshot,RoundTime,Killerposition,Killeryaw,Victimposition,Victimyaw,KillerStartEQ,KillerFreezeEQ,VictimStartEQ,VictimFreezeEQ')

    }

})
    ;

    demoFile.gameEvents.on('round_freeze_end', e => {
        if(roundstart) {
            freeze_end = true;
        }

        roundStartTick = demoFile.currentTick;
    lastroundtime = demoFile.currentTime;

})
    ;

    demoFile.gameEvents.on('player_death', e => {
        let victim = demoFile.entities.getByUserId(e.userid);
    let victimName = victim ? victim.name : '-';


    let attacker = demoFile.entities.getByUserId(e.attacker);
    let attackerName = attacker ? attacker.name : '-';


    let headshotText = e.headshot ? 'Yes' : 'No';
    let time = demoFile.currentTime - lastroundtime;

    //console.log(victim.armor);

    let victimTeam = victim.teamNumber;
    if (victimTeam === 2) {
        victimTeam = 'T'
    } else {
        victimTeam = 'CT'
    }

    let attackerTeam = attacker.teamNumber;
    if (attackerTeam === 2) {
        attackerTeam = 'T'
    } else {
        attackerTeam = 'CT'
    }

    let assister = demoFile.entities.getByUserId(e.assister);
    let assisterName = assister ? assister.name : '-';

    if (round >= 1) {
        //console.log(`${round} ${attackerName} [${e.weapon}${headshotText}] ${victimName}`);
        console.log("%s,%d,%s,%s,%s,%s,%s,%s,%s,%f,%f,%f,%f,%f,%f,%f,%f,%f",
            "Kill",round, attackerName, victimName, assisterName, attackerTeam,
            victimTeam, e.weapon, headshotText, time.toFixed(2), attacker.position.x.toFixed(2),
            attacker.eyeAngles.yaw.toFixed(2), victim.position.x.toFixed(2), victim.eyeAngles.yaw.toFixed(2), attacker.roundStartEquipmentValue.toFixed(2), attacker.freezeTimeEndEquipmentValue.toFixed(2),
            victim.roundStartEquipmentValue.toFixed(2), attacker.freezeTimeEndEquipmentValue.toFixed(2));
    }
})
    ;

    demoFile.gameEvents.on('round_end', e => {
        roundstart = true;
    let roundWinner = e.winner;
    if (roundWinner === 2) {
        roundWinner = 'T';
    } else {
        roundWinner = 'CT';
    }

    if (round >= 1) {
        console.log("RoundEnded," + roundWinner)
    }
    //let lastroundtime = demoFile.currentTime-lastroundtime;
})
    ;

    demoFile.parse(buffer);
});
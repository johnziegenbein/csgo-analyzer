const demofile = require('demofile');
const fs = require('fs');

const filename = process.argv[2];
const ROUND_START_EVENT = 'round_start';
const ROUND_END_EVENT = 'round_end';
const ROUND_FREEZE_END_EVENT = 'round_freeze_end';
const PLAYER_DEATH_EVENT = 'player_death';
const DELIMITER = ",";

const T = 2;
const CT = 3;

let lastRoundTime = 0;
let round = -3;

fs.readFile(filename, function (err, buffer) {
  let demoFile = new demofile.DemoFile();

  onRoundStart(demoFile);
  onRoundFreezeEnd(demoFile);
  onPlayerDeath(demoFile);
  onRoundEnd(demoFile);

  demoFile.parse(buffer);
});

function onRoundStart(demoFile) {
  demoFile.gameEvents.on(ROUND_START_EVENT, () => {
    round++;
    writeGameInformationBeforeFirstRound(demoFile);
  });
}

function writeGameInformationBeforeFirstRound(demoFile) {
  if (round === 1) {
    console.log("Map" + DELIMITER + demoFile.header.mapName);

    let teams = demoFile.entities.teams;
    let tPlayers = teams[T].members;
    let ctPlayers = teams[CT].members;

    console.log("Team," + teams[T].clanName + DELIMITER + tPlayers[0].name + DELIMITER + tPlayers[1].name + DELIMITER + tPlayers[2].name + DELIMITER + tPlayers[3].name + DELIMITER + tPlayers[4].name + ",T");
    console.log("Team," + teams[CT].clanName + DELIMITER + ctPlayers[0].name + DELIMITER + ctPlayers[1].name + DELIMITER + ctPlayers[2].name + DELIMITER + ctPlayers[3].name + DELIMITER + ctPlayers[4].name + ",CT");
  }
}

function onRoundFreezeEnd(demoFile) {
  demoFile.gameEvents.on(ROUND_FREEZE_END_EVENT, () => {
    lastRoundTime = demoFile.currentTime;
  });
}

function onPlayerDeath(demoFile) {
  demoFile.gameEvents.on(PLAYER_DEATH_EVENT, deathEvent => {

    if (round >= 1) {
      let victim = demoFile.entities.getByUserId(deathEvent.userid);
      let attacker = demoFile.entities.getByUserId(deathEvent.attacker);
      let assister = demoFile.entities.getByUserId(deathEvent.assister);

      let time = (demoFile.currentTime - lastRoundTime).toFixed(2);

      // Kill, Round, Killer, Victim, Assist, KillerTeam, VictimTeam, Weapon, Headshot, RoundTime, Killerposition,
      // Killeryaw, Victimposition, Victimyaw, KillerStartEQ, KillerFreezeEQ, VictimStartEQ, VictimFreezeEQ
      console.log(buildKillinformationString(deathEvent, victim, attacker, assister, time));
    }
  });
}

function buildKillinformationString(deathEvent, victim, attacker, assister, time) {
  let stringBuiler = "Kill,";
  stringBuiler += round + DELIMITER;
  stringBuiler += getName(attacker) + DELIMITER;
  stringBuiler += getName(victim) + DELIMITER;
  stringBuiler += getName(assister) + DELIMITER;
  stringBuiler += getTeamFromEntity(attacker) + DELIMITER;
  stringBuiler += getTeamFromEntity(victim) + DELIMITER;
  stringBuiler += deathEvent.weapon + DELIMITER;
  stringBuiler += getHeadShotText(deathEvent) + DELIMITER;
  stringBuiler += time + DELIMITER;
  stringBuiler += getPosition(attacker) + DELIMITER;
  stringBuiler += getYaw(attacker) + DELIMITER;
  stringBuiler += getPosition(victim) + DELIMITER;
  stringBuiler += getYaw(victim) + DELIMITER;
  stringBuiler += getRoundStartEquipmentValue(attacker) + DELIMITER;
  stringBuiler += getFreezeTimeEndEquipmentValue(attacker) + DELIMITER;
  stringBuiler += getRoundStartEquipmentValue(victim) + DELIMITER;
  stringBuiler += getFreezeTimeEndEquipmentValue(victim);
  return stringBuiler;
}

function getTeamFromEntity(playerEntity) {
  if (playerEntity != null) {
    return playerEntity.teamNumber === T ? 'T' : 'CT';
  }
  return "-";
}

function getTeamFromString(side) {
  return side === T ? 'T' : 'CT';
}

function getName(playerEntity) {
  return playerEntity ? playerEntity.name : '-';
}

function getHeadShotText(deathEvent) {
  return deathEvent.headshot ? 'Yes' : 'No';
}

function getPosition(playerEntity) {
  return playerEntity != null ? playerEntity.position.x.toFixed(2) : "-";
}

function getYaw(playerEntity) {
  if (playerEntity != null) {
    return playerEntity.eyeAngles.yaw.toFixed(2);
  } else {
    return "-";
  }
}

function getRoundStartEquipmentValue(playerEntity) {
  return playerEntity != null ? playerEntity.roundStartEquipmentValue.toFixed(2) : "-";
}

function getFreezeTimeEndEquipmentValue(playerEntity) {
  return playerEntity != null ? playerEntity.freezeTimeEndEquipmentValue.toFixed(2) : "-";
}

function onRoundEnd(demoFile) {
  demoFile.gameEvents.on(ROUND_END_EVENT, e => {
    if (round >= 0) {
      console.log("round_end," + getTeamFromString(e.winner) + DELIMITER + e.reason + DELIMITER + e.message)
    }
  });
}


import { BESMCharacter } from "./module/BESMActor.js";
import { BESMCharacterSheet } from "./module/BESMCharacterSheet.js";

CONFIG.Actor.documentClass = BESMCharacter;

Actors.registerSheet("besm", BESMCharacterSheet, {
  types: ["character"],
  makeDefault: true
});

import { CharacterDataModel, NPCDataModel } from "ActorDataModel.js";

class RunarcanaActorSheet extends ActorSheet {
  get template() {
    return `systems/runarcana/templates/sheets/character-sheet.html`;
  }

  getData() {
    const data = super.getData();

    return data;
  }
}

Hooks.once("init", () => {
  console.log("Runarcana | Inicializando o sistema Runarcana...");

  CONFIG.Actor.documentClass = Actor;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    character: CharacterDataModel,
    //monster: MonsterDataModel,
    npc: NPCDataModel
  };

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("runarcana", RunarcanaActorSheet, { types: ["character"], makeDefault: true });
});

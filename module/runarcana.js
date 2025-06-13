class RunarcanaActorSheet extends ActorSheet {
  get template() {
    return "templates/sheets/actor-sheet.html";
  }

  getData() {
    const data = super.getData();
    return data;
  }
}

Hooks.once("init", () => {
  console.log("Runarcana | Inicializando o sistema Runarcana...");

  CONFIG.Actor.documentClass = Actor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("runarcana", RunarcanaActorSheet, { types: ["character"], makeDefault: true });
});

class RunarcanaActorSheet extends ActorSheet {
  get template() {
    return `templates/sheets/character-sheet.html`;
  }

  getData() {
    const data = super.getData();

    return mergeObject(context, {
      actor: this.actor,
      system: this.actor.system
    });
  }
}

Hooks.once("init", () => {
  console.log("Runarcana | Inicializando o sistema Runarcana...");

  CONFIG.Actor.documentClass = Actor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("runarcana", RunarcanaActorSheet, { types: ["character"], makeDefault: true });
});

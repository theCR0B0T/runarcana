Hooks.once("init", () => {
  console.log("Runarcana | Inicializando o sistema Runarcana...");

  CONFIG.Actor.documentClass = RunarcanaActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("runarcana", RunarcanaActorSheet, { makeDefault: true });
});

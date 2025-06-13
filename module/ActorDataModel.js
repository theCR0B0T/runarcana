const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        })
      })
    };
  }
}

class ImportantActorDataModel extends ActorDataModel {
  static defineSchema() {
    // Only important Actors have a background
    return {
      ...super.defineSchema(),
      background: new SchemaField({
        biography: new HTMLField({ required: true, blank: true })
      })
    };
  }
}

export class CharacterDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      mana: new SchemaField({
        min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      level: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 20 })
    };
  }
}

export class NPCDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      wickedness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
      })
    };
  }
}
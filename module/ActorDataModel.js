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
          value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        }),
        tempHp: new SchemaField({
          value: new NumberField({ integer: true, min: 0, initial: 0 }),
          max: new NumberField({ integer: true, min: 0, initial: 0 })
        }),
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
    const base = super.defineSchema();

    base.resources.schema.mp = new SchemaField({
      value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
      max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
    });

    return {
      ...base,
      abilities: new SchemaField({
        str: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) }),
        dex: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) }),
        con: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) }),
        int: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) }),
        wis: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) }),
        cha: new SchemaField({ value: new NumberField({ integer: true, min: 0, max: 30, initial: 10 }) })
      }),
      attributes: new SchemaField({
        ac: new SchemaField({
          armor: new NumberField({ integer: true }),
          base: new NumberField({ integer: true }),
          bonus: new NumberField({ integer: true }),
          calc: new StringField({ initial: "default" }),
          cover: new NumberField({ integer: true, initial: 0 }),
          shield: new NumberField({ integer: true, initial: 0 }),
          value: new NumberField({ integer: true })
        }),
        death: new SchemaField({
          failure: new NumberField({ integer: true, min: 0, max: 3 }),
          success: new NumberField({ integer: true, min: 0, max: 3 })
        }),
        movement: new SchemaField({
          burrow: new NumberField({ integer: true, min: 0 }),
          climb: new NumberField({ integer: true, min: 0 }),
          fly: new NumberField({ integer: true, min: 0 }),
          hover: new BooleanField(),
          swim: new NumberField({ integer: true, min: 0 }),
          units: new StringField({ initial: "ft" }),
          walk: new NumberField({ integer: true, min: 0 })
        }),
        senses: new SchemaField({
          blindsight: new NumberField({ integer: true, min: 0 }),
          darkvision: new NumberField({ integer: true, min: 0 }),
          tremorsense: new NumberField({ integer: true, min: 0 }),
          truesight: new NumberField({ integer: true, min: 0 }),
          units: new StringField({ initial: "ft" })
        }),
        prof: new NumberField({ integer: true, initial: 2 }),
        spell: new SchemaField({
          spellcasting: new StringField(),
          attack: new StringField(),
          dc: new StringField(),
          mod: new StringField()
        })
      }),
      details: new SchemaField({
        age: new StringField(),
        alignment: new StringField(),
        appearance: new StringField(),
        biography: new HTMLField(),
        bond: new StringField(),
        eyes: new StringField(),
        faith: new StringField(),
        flaw: new StringField(),
        gender: new StringField(),
        hair: new StringField(),
        height: new StringField(),
        ideal: new StringField(),
        level: new NumberField({ integer: true, min: 0, max: 20, initial: 1 }),
        originalClass: new StringField(),
        skin: new StringField(),
        trait: new StringField(),
        type: new SchemaField({
          value: new StringField({ initial: "humanoid" }),
          subtype: new StringField({ initial: "human" }),
          custom: new StringField()
        }),
        weight: new StringField()
      }),
      currency: new SchemaField({
        pp: new NumberField({ integer: true, initial: 0 }),
        gp: new NumberField({ integer: true, initial: 0 }),
        ep: new NumberField({ integer: true, initial: 0 }),
        sp: new NumberField({ integer: true, initial: 0 }),
        cp: new NumberField({ integer: true, initial: 0 })
      }),
      traits: new SchemaField({
        size: new StringField({ initial: "med" }),
        languages: new StringField(),
        armorProf: new StringField(),
        weaponProf: new StringField()
      }),
      spells: new SchemaField({
        spell1: new SchemaField({ label: new StringField({ initial: "1st level" }), level: new StringField({ initial: "1" }), max: new NumberField({ integer: true, min: 0 }), value: new NumberField({ integer: true, min: 0 }) }),
        spell2: new SchemaField({ label: new StringField({ initial: "2nd level" }), level: new StringField({ initial: "2" }), max: new NumberField({ integer: true, min: 0 }), value: new NumberField({ integer: true, min: 0 }) }),
        spell3: new SchemaField({ label: new StringField({ initial: "3rd level" }), level: new StringField({ initial: "3" }), max: new NumberField({ integer: true, min: 0 }), value: new NumberField({ integer: true, min: 0 }) }),
        spell4: new SchemaField({ label: new StringField({ initial: "4th level" }), level: new StringField({ initial: "4" }), max: new NumberField({ integer: true, min: 0 }), value: new NumberField({ integer: true, min: 0 }) }),
        spell5: new SchemaField({ label: new StringField({ initial: "5th level" }), level: new StringField({ initial: "5" }), max: new NumberField({ integer: true, min: 0 }), value: new NumberField({ integer: true, min: 0 }) })
      }),
      skills: new SchemaField({
        acrobatics: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        animalHandling: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        arcana: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        athletics: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        deception: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        history: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        insight: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        intimidation: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        investigation: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        medicine: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        nature: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        perception: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        performance: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        persuasion: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        religion: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        sleightOfHand: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        stealth: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) }),
        survival: new SchemaField({ value: new NumberField({ integer: true }), prof: new BooleanField(), passive: new NumberField({ integer: true }) })
      })
    };
  }

  prepareData() {
    const abilities = this.abilities;
    for (const [abl, data] of Object.entries(abilities)) {
      data.mod = Math.floor((data.value - 10) / 2);
    }

    const level = this.details.level ?? 1;
    this.attributes ??= {};
    this.attributes.prof = Math.ceil(level / 4) + 1;
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
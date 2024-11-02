export class BESMCharacterSheet extends ActorSheet {

  /** @override */
  get template() {
    return "systems/besm/templates/sheets/character-sheet.hbs";
  }

  /** @override */
  getData() {
    const data = super.getData();
    data.system = this.actor.system;
    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // Add event listeners here as needed
  }
}

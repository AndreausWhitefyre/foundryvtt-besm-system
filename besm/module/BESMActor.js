export class BESMCharacter extends Actor {
  
    /** @override */
    prepareData() {
      super.prepareData();

      // Additional preparation specific to BESM characters
      this.prepareBaseData();
      this.prepareDerivedData();
    }
  
    /** Base data preparation */
    prepareBaseData() {
      const actorData = this.data;
      const systemData = actorData.system;

      // Initialize base stats if not defined
      systemData.stats = systemData.stats || {
        body: 0,
        mind: 0,
        soul: 0
      };
      
      // Set default values if not already set
      systemData.powerLevel = systemData.powerLevel || "Human";
      systemData.health = systemData.health || 10;
      systemData.energyPoints = systemData.energyPoints || 10;
      systemData.attributes = systemData.attributes || [];
    }
  
    /** Derived data preparation */
    prepareDerivedData() {
      const actorData = this.data;
      const systemData = actorData.system;

      // Calculate derived stats (e.g., total health based on power level)
      const powerLevelModifier = this.calculatePowerLevelModifier(systemData.powerLevel);
      systemData.totalHealth = systemData.health + powerLevelModifier;
    }
  
    calculatePowerLevelModifier(powerLevel) {
      // Example power level adjustment based on BESM rules
      const modifiers = {
        "Subhuman": -5,
        "Human": 0,
        "Adventurer": 5,
        "Heroic": 10,
        "Mythical": 15,
        "Superhuman": 20,
        "Superpowered": 25,
        "Godlike": 30
      };
      return modifiers[powerLevel] || 0;
    }
}

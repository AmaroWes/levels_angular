export class Player {
    id?: number;
    name?: string;
    title?: string;
    exp?: number;
    level?: number;
    strength?: number;
    intelligence?: number;
    agility?: number;
    stamina?: number;
    willpower?: number;
    constructor(id?:number, name?:string, title?:string, exp?: number, level?: number, strength?: number, intelligence?: number, agility?: number, stamina?: number, willpower?: number) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.exp = exp;
        this.level = level;
        this.strength = strength;
        this.intelligence = intelligence;
        this.agility = agility;
        this.stamina = stamina;
        this.willpower = willpower;
    }
}

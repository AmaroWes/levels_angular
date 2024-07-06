export class Player {
    id?: number;
    name?: string;
    job?: string;
    title?: string;
    exp?: number;
    level?: number;
    str?: number;
    int?: number;
    agi?: number;
    sta?: number;
    wil?: number;
    constructor(id?:number, name?:string, job?:string, title?:string, exp?: number, level?: number, str?: number, int?: number, agi?: number, sta?: number, wil?: number) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.title = title;
        this.exp = exp;
        this.level = level;
        this.str = str;
        this.int = int;
        this.agi = agi;
        this.sta = sta;
        this.wil = wil;
    }
}

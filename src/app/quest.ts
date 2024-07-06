export class Quest {
    id?: number;
    name?: string;
    exp?: number;
    status?: string;
    amout?: number;
    type?: string;
    description?: string;
    done?: boolean;
    clock?: string;
    player_id?: number;
    constructor(id?: number, name?: string, exp?: number, status?: string, amout?: number, type?: string, description?: string, done?: boolean, clock?: string, player_id?: number){
        this.id = id;
        this.name = name;
        this.exp = exp;
        this.status = status;
        this.amout = amout;
        this.type = type;
        this.description = description;
        this.done = done;
        this.clock = clock;
        this.player_id = player_id;
    }
}

export class Punish {
    id?: number;
    name?: string;
    description?: string;
    player_id?: number;
    constructor(id?: number, name?: string, description?: string, player_id?: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.player_id = player_id;
    }
}

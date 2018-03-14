export class MenuItem {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public type: string;
    public imagepath: string;

    constructor(id: number, name: string, description: string, price: number, type: string, imagepath: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
        this.imagepath = imagepath;
    }
}

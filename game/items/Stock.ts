import { Resource } from "./Resource";

export class Stock{
    public resource: Resource;
    public quantity: number;

    constructor(resource: Resource,  quantity: number) {
        this.resource = resource;
        this.quantity = quantity;     
    }
}
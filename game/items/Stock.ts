import { Resource } from "./Resource";

class Stock{
    public resource: Resource;
    public quantity: number;

    constructor(resource: Resource,  quantity: number) {
        this.resource = resource;
        this.quantity = quantity;     
    }
}
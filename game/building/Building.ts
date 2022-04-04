import { IBuilding } from "./IBuilding";
import { Resource } from "../items/Resource";

class Building implements IBuilding {
    public name: string;
    public resource: Resource;
    public nbWorkers: number;

    constructor(name: string,  resource: Resource,  nbWorkers: number) {
        this.name = name;
        this.resource = resource;
        this.nbWorkers = nbWorkers;
    }
}
import { IResource } from "./IResource";
export class Resource implements IResource {
    public value: number;
    public name: string;
    
    constructor(value: number,  name: string) {
        this.value = value;
        this.name = name;
        
    }
}
import { IResource } from "../items/IResource";

export interface IBuilding {
    name: string;
    resource: IResource;
    nbWorkers: number;
}
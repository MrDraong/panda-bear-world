import { IAction } from './IAction';
export class Build implements IAction{
    execute(params: any): void {
        console.log("Building");
    }
}
import { Tag } from "./tag.model";

export interface Project{
    id:number;
    name:string;
    description:string;
    summary:string;
    projectLink:string;
    pictures:string[];
    tags:Tag[];
}


export type TechLearn = 'vi-file-type-js-official' | 'vi-file-type-typescript-official' | 'vi-file-type-html' | 'vi-file-type-css' | 'vi-file-type-css2' | 'vi-file-type-node' | 'vi-file-type-node' | 'vi-file-type-vue'
export enum Icons {
    js = 'vi-file-type-js-official';
    ts = 'vi-file-type-typescript-official';
    html = 'vi-file-type-html';
    css = 'vi-file-type-css';
    sass = 'vi-file-type-css2';
    node = 'vi-file-type-node';
    vue = 'vi-file-type-vue'
}
export interface Proyect {
    proyectName: string,
    proyectDescription: string,
    proyectImage: string,
    proyectDeploy: string,
    //esto se tiene que cambiar por las tecnolias
    proyectTecnologies: Icons[], 
}   
export interface proyectDeployed extends Proyect{
    proyectDeploy: string,
    proyectGithub: string
}

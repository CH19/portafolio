export type TechLearn =
  | 'vi-file-type-js-official'
  | 'vi-file-type-firebase'
  | 'vi-file-type-typescript-official'
  | 'vi-file-type-html'
  | 'vi-file-type-css'
  | 'vi-file-type-css2'
  | 'vi-file-type-node'
  | 'vi-file-type-node'
  | 'vi-file-type-vue'
  | 'vi-file-type-tailwind'
  | 'vi-file-type-reactjs'
  | 'vi-file-type-angular'
export enum Icons {
  js = 'vi-file-type-js-official',
  ts = 'vi-file-type-typescript-official',
  html = 'vi-file-type-html',
  css = 'vi-file-type-css',
  sass = 'vi-file-type-css2',
  node = 'vi-file-type-node',
  vue = 'vi-file-type-vue',
  fb = 'vi-file-type-firebase'
}
export interface Proyect {
  proyectName: string
  proyectDescription: string
  proyectImage: string
  proyectDeploy: string
  proyectTecnologies: string[]
}
export interface proyectDeployed extends Proyect {
  proyectDeploy: string
  proyectGithub: string
}
export interface MouseOpacity {
  icons: number
  fondo: number
}

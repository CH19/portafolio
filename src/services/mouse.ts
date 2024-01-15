import type { Ref } from 'vue'
import type { MouseOpacity } from '../types'

export const clieckd = (mouse: MouseOpacity, vals: { valFondo: number; valIcons: number }) => {
  const { valFondo, valIcons } = vals
  mouse.fondo = valFondo
  mouse.icons = valIcons
}

export const leave = (mouse: Ref<MouseOpacity>) => {
  mouse.value.fondo = 0
  mouse.value.icons = 0
}

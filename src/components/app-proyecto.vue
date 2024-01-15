<script lang="ts" setup>
import { ref, } from 'vue';
import type { Proyect, MouseOpacity } from '../types'
import { clieckd } from '../services/mouse'
import appGDButtons from './appGDButtons.vue';
const { proyect } = defineProps<{
    proyect: Proyect
}>();

const mouseOpacity = ref<MouseOpacity>({
    icons: 0,
    fondo: 0,
});
const endWord = (str: string) => {const shortstr =str.split('-'); return shortstr[shortstr.length -1]}
const { proyectDescription, proyectName, proyectImage, proyectTecnologies, proyectDeploy } = proyect;
const techAll = proyectTecnologies.sort((a, b) => a.localeCompare(b));
</script>
<template>
    
    <div v-cloak="true" class="v-proyects">
        <h3>{{ proyectName }}</h3>
        <figure @mouseleave="clieckd(mouseOpacity, { valFondo: 0, valIcons: 0 })"
            @mouseover="clieckd(mouseOpacity, { valFondo: .8, valIcons: 1 })">
            <img :src="proyectImage" alt="">
            <div class="icons-container"></div>
            <div class="icons-containe">
                <div class="icons-items">
                    <v-icon :title="endWord(tec)"  scale="1.5" v-for="tec of techAll" :key="tec" :name="tec"></v-icon>
                </div>
            </div>
        </figure>
        <div>
            <p>{{ proyectDescription }}</p>
        </div>
        <appGDButtons data-deploid="holi" :data-git-hub="proyectDeploy" />
    </div>
</template>
<style scoped>
[v-cloack] {
    display: none;
}

:root {
    --size-proyect: 250px;
}

.v-proyects {
    max-width: 250px;
    max-height: 250px;
    width: 100vw;
    height: 100vh;
    border: 1px solid var(--vt-black);
    border-radius: 20px;
    display: grid;
    place-items: center;

    &>h3 {

        place-self: start;
        padding-left: 1rem;
    }

    & figure {
        cursor: pointer;
        max-width: 250px;
        max-height: 250px;
        position: relative;
        & img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border: 1px solid var(--vt-black);
            border-radius: 20px;
        }
    }

    & div>p {
        font-size: .8rem;
        margin: 0 1rem;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}

.icons-container {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 98%;
    background-color: var(--vt-black);
    z-index: 1;
    border-radius: 20px;
    opacity: v-bind(mouseOpacity.fondo);
}

.icons-items {
    position: absolute;
    z-index: 1;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
    &:hover{
        opacity: 1;
    }
}
.ModalThing{
    position: absolute;
    inset: 0 0 0 0;
}
</style>
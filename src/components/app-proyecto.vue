<script lang="ts" setup>
import  {type Proyect } from '../types'
import { ref } from 'vue';
const { proyect } = defineProps<{
    proyect: Proyect
}>();
const mouseOpacity = ref({
    icons: 0,
    fondo: 0,
});
const clieckd = () => {
    mouseOpacity.value.fondo = .5
    mouseOpacity.value.icons = 1
}
const leave = () => {
    mouseOpacity.value.fondo = 0
    mouseOpacity.value.icons = 0
}
const { proyectDescription, proyectName, proyectImage, proyectTecnologies } = proyect;
const techAll = proyectTecnologies.sort((a, b) => a.localeCompare(b));
</script>
<template>
    <div  v-cloak="true" class="v-proyects">
        <h3>{{ proyectName }}</h3>
        <figure @mouseleave="leave" @mouseover="clieckd">
            <img :src="proyectImage" alt="">
            <div class="icons-container"></div>
            <div class="icons-containe">
                <div class="icons-items">
                    <v-icon v-for="tec of techAll" :key="tec" :name="tec"></v-icon>
                </div>
            </div>
        </figure>
        <div>
            <p>{{ proyectDescription }}</p>
        </div>
    </div>
</template>
<style scoped>
[v-cloack] {
    display: none;
}
:root{
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
    & > h3{

        place-self: start;
        padding-left: 1rem;
    }
    & figure {
        cursor: pointer;
        max-width: calc(var(--size-proyect) / 2);
        max-width: calc(var(--size-proyect) / 2);
        position: relative;

        & img {
            max-width: calc(var(--size-proyect) / 2);
        max-height: calc(var(--size-proyect) / 2);
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    & div>p {
        font-size: .8rem;
    }
}

.icons-container {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1;
    opacity: v-bind(mouseOpacity.fondo > 1 || mouseOpacity.fondo < 0 ? 0 : mouseOpacity.fondo);
}

.icons-items {
    position: absolute;
    z-index: 400;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: v-bind(mouseOpacity.icons);
}</style>
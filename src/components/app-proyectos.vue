<script lang="ts" setup>
import appProyecto from './app-proyecto.vue';
import {type Proyect} from '../types'
import data from '../services/proyects.json'
const opt = [...data]
const options = [...opt];

</script>
<template>
    <main>
        <div>
            <h2>Proyectos</h2>
        </div>
        <ul>
            <li v-for="opts of options" :key="opts.proyectName">
                <appProyecto :proyect="opts" />
            </li>
        </ul>
    </main>

</template>
<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        max-width: 800px;
        width: 100vw;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
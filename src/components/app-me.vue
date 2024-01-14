<script lang="ts" setup>
import appGDButtons from './appGDButtons.vue'
</script>
<template>
    <div id="Sobre mi" v-cloak="true" class="me">
        <figure class="me-porfile">
            <img v-cloak="true" src="../assets/Chris.avif" alt="Christian">
        </figure>
        <div class="me-presentation">
            <p>Mi nombre es Christian La Cruz, soy un programador <strong>frontend</strong>, estudiante de economia e ingenieria en inteligencia artificial apasionado en generar propuestas para construir un futuro mejor</p>
            <appGDButtons data-git-hub="https://github.com/CH19" />
        </div>
    </div>
</template>
<style scoped>
    [v-cloack]{
        opacity: 0;
    }
    .me{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        place-content: center;
        place-items: center;
        margin: 3rem 0;
    }
    .me-porfile{
        max-width: 250px;
        max-height: 250px;
        & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .me-presentation{
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        text-align:start;
        font-size: 1rem;
    }
    [v-cloak]{

        opacity: 100%;
    }
</style>
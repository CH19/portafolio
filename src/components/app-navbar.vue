<script lang="ts" setup>
const optionsNav = ['Sobre mi', 'Proyectos', 'Habilidades', 'Contacto']
</script>
<template>
  <header>
    <nav>
      <ul>
        <li v-for="op of optionsNav"><a href="">{{ op }}</a></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        place-content: center;
        gap: .2rem;
        cursor: pointer;
        & li{
            text-align: center;
            & a{
                text-decoration: none;
            }
        }
    }
</style>

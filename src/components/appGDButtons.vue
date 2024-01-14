<script lang="ts" setup>
const {dataDeploid, dataGitHub} = defineProps<{
    dataGitHub: string,
    dataDeploid?: string
}>()

</script>
<template>
    <div class="deploid-data">
        <div>
            <a :href="dataGitHub">
            <v-icon name="si-github"></v-icon>
        </a>
        </div>
        <div>
            <a :href="dataDeploid" v-if="!!dataDeploid">
            <v-icon  name="bi-arrow-bar-up"></v-icon>
        </a>
        </div>
</div>
</template>
<style scoped>
    .deploid-data{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }
</style>
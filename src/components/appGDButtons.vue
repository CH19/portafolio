<script lang="ts" setup>
const {dataDeploid, dataGitHub} = defineProps<{
    dataGitHub: string,
    dataDeploid?: string,
    dataLinkedin?: string
}>()
</script>
<template>
    <div class="deploid-data">
        <div class="data-git">
            <a :href="dataGitHub">
            <v-icon scale="1.4" hover="true" name="si-github"></v-icon>
        </a>
        </div>
        <div>
            <a :href="dataDeploid" v-if="!!dataDeploid">
            <v-icon  name="bi-arrow-bar-up"></v-icon>
        </a>
        <a v-if="!!dataLinkedin" :href="dataLinkedin">
            <v-icon scale="1.4" name="bi-linkedin"></v-icon>
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
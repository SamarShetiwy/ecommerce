<template lang="pug">
div.overflow-auto
    div
        b-pagination(
            v-model="currentPage" 
            pills :total-rows="rows" 
            size="sm"
            per-page:20
            limit:4
            class="mt-4"
            
            )



</template>

<script setup >
import { ref } from 'vue';

const rows = ref(100);
const currentPage = ref(1);

</script>

<style scoped>
.li{
    background-color: #f0f0f0;
    border-radius: 20px;
}
</style>
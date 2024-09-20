<template lang="pug">
  div.overflow-auto
      div
          b-pagination(
            :total-rows="totalProducts"
            :per-page="itemsPerPage"
            :current-page="currentPage"
            @click="onPageChange"
            size="sm"
            per-page:20
            :limit="4"
            class="mt-4"
          )
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalProducts: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    }
  });
  
  const emit = defineEmits(["update:currentPage"]);
  const itemsPerPage = 4;
  
  function onPageChange(newPage) {
    // console.log(newPage.target.innerText)
    emit("update:currentPage", newPage.target.innerText);
  }
  </script>
  
  <style scoped>
  .li {
    background-color: #f0f0f0;
    border-radius: 20px;
  }
  
  .active {
    font-weight: bold;
    color: blue; 
  }
  </style>
  
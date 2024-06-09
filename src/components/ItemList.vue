<template>
    <div class="mt-3">
        <Item
            v-for="(todo, index) of todos"
            :key="'index-todo-' + index"
            :todo="todo"
            @reloadData="$emit('reloadData')"
       />
    </div>
 </template>
 
 
 <script>
 import Item from "./Item/Item.vue";
 
 
 export default {
    props: {
        todos: {
            type: Array,
        },
    },
 
 
    components: {
        Item,
    },
 };
 </script>
 
 
 <style lang="scss" scoped></style>
 
 
 
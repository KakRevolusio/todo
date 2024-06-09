<template>
    <div class="card rounded-3 shadow-sm">
        <Header title="Finished Task" @reloadData="getData()"/>
 
 
        <div class="card-body px-4 border-top">
            <Navigation />
            <ItemList :todos="todos" @reloadData="getData()" />
        </div>
 
 
        <Footer :total="todos.length" />
    </div>
 </template>
 
 
 <script>
 import Header from "../components/Header.vue";
 import Navigation from "../components/Navigation.vue";
 import ItemList from "../components/ItemList.vue";
 import Footer from "../components/Footer.vue";
 
 
 export default {
    components: {
        Header,
        Navigation,
        ItemList,
        Footer,
    },
 
 
    data() {
        return {
            todos: [],
        };
    },
 
 
    methods: {
        async getData() {
            try {
                const res = await this.axios.get(
                    "http://localhost:8000/todos?status=1"
                );
                this.todos = res.data;
            } catch (error) {}
        },
    },
 
 
    mounted() {
        this.getData();
    },
 };
 </script>
 
 
 <style lang="scss" scoped></style>
 
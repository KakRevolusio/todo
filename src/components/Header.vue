<template>
    <div class="card-body px-4">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <p class="fw-medium mb-0 fs-6">{{ title }}</p>
                <span class="text-secondary fs-12px">HMIF</span>
            </div>
 
 
            <button
                @click="
                    () => {
                        show = !show;
                    }
                "
                class="btn btn-outline-primary rounded-3 fs-14px"
            >
                <i class="fa-solid fa-plus me-2"></i>New Task
            </button>
        </div>
 
 
        <form @submit.prevent="addData" v-if="show">
            <div class="mb-3 mt-3">
                <label for="todo" class="form-label fs-14px">New Task</label>
                <input
                    v-model="text"
                    type="text"
                    placeholder="Tambahkan Task Baru"
                    class="form-control fs-14px"
                    id="todo"
                />
            </div>
        </form>
    </div>
 </template>
 
 
 <script>
 export default {
    props: {
        title: {
            type: String,
        },
    },
 
 
    data() {
        return {
            show: false,
            text: "",
            status: 0,
        };
    },
 
 
    methods: {
        async addData() {
            try {
                const res = await this.axios.post(
                    "http://localhost:8000/todos",
                    {
                        text: this.text,
                        created_at: Date.now(),
                        status: 0,
                    }
                );
 
 
                this.text = "";
                this.$emit("reloadData");
            } catch (error) {}
        },
    },
 };
 </script>
 
 
 <style lang="scss" scoped></style>
 
<template>
    <div class="card-body px-4 border-top">
        <p class="fw-medium mb-0 fs-6">Total Task : {{ total }}</p>
    </div>
 </template>
 
 
 <script>
 export default {
    props: {
        total: {
            type: Number,
        },
    },
 };
 </script>
 
 
 <style lang="scss" scoped></style>
 
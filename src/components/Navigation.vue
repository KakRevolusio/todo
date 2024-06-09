<template>
    <div class="d-flex align-items-center">
        <RouterLink to="/" class="me-3 d-flex align-items-center">
            <p class="mb-0">All</p>
            <span class="badge text-bg-primary rounded-circle ms-1">4</span>
        </RouterLink>

        <RouterLink to="/finish" class="me-3 d-flex align-items-center">
            <p class="mb-0">Finished</p>
        </RouterLink>

        <RouterLink to="/available" class="me-3 d-flex align-items-center">
            <p class="mb-0">Available</p>
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {};
</script>

<style lang="scss" scoped></style>

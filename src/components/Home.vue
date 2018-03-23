<template>
    <div>
        <!-- Loop through 1 - 4 Servers -->
        <app-server-status v-for="server in 4" :key="server"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>

<style scoped>

</style>


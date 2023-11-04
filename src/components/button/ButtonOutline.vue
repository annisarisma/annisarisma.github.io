<template>
    <!-- <a class="button button-outline font-bold" :href="link">
        {{ title }}
    </a> -->
    <button class="button button-outline font-bold">
        <router-link :to="{hash: hash, name: routername, params: {id: id}}">
            {{ title }}
        </router-link>
    </button>
</template>

<script>
export default {
    props: {
        title: String,
        link: String,
        routername: String,
        hash: String,
        id: String
    }
}
</script>

<style>

</style>
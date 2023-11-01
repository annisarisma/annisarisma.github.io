<template>
    <button class="button button-primary font-bold">
        <router-link :to="{hash: hash, name: routername, params: {id: id}}">
            {{ title }}
        </router-link>
    </button>
</template>

<script>
export default {
    props: {
        title: String,
        routername: String,
        id: String,
        hash: String
    }
}
</script>

<style>

</style>
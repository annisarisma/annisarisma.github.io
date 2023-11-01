<template>
    <div class="card-organization">
        <div class="header-container">
            <h3>{{ title }}</h3>
            <p>{{ place }}</p>
            <p>{{ date }}</p>
        </div>
        <div class="lists-container">
            <div class="list" v-for="item in lists">
                <div class="image-container">
                </div>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        place: String,
        lists: Array,
        date: String,
    },
};
</script>
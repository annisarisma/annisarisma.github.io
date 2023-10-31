<template>
    <div class="card-competition">
        <div class="icon-container">
            <font-awesome-icon icon="fa-solid fa-trophy" size="xl" />
        </div>
        <div class="description-container">
            <h3>{{ title }}</h3>
            <p>{{ date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        date: String,
    }
};
</script>
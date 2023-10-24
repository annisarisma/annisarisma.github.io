<template>
    <div class="card-experience card-competition">
        <div class="icon-container">
            <font-awesome-icon icon="fa-solid fa-trophy" size="xl" />
        </div>
        <div class="text-container">
            <slot name="title"></slot>
            <slot name="date"></slot>
            <slot name="description"></slot>
        </div>
    </div>
</template>
<template>
    <div class="card-experience card-organization">
        <div class="icon-container">
            <font-awesome-icon icon="fa-solid fa-trophy" size="xl" />
        </div>
        <div class="text-container">
            <slot name="title"></slot>
            <slot name="date"></slot>
            <div class="list">
                <slot name="list"></slot>
            </div>
        </div>
    </div>
</template>
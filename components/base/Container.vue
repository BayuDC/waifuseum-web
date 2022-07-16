<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    @include tablet {
        padding: 0 30px;
    }
    @include mobile {
        padding: 0 20px;
    }
}
</style>

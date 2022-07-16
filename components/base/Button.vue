<template>
    <a href="#" class="btn"><slot /></a>
</template>

<style lang="scss">
.btn {
    color: $black;
    background: $green;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 14px;
    display: inline-flex;
    border-radius: 5px;
    gap: 5px;
}
</style>

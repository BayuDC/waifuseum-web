<template>
    <header>
        <BaseContainer>
            <h1>Waifuseum</h1>
        </BaseContainer>
    </header>
</template>

<style lang="scss">
header {
    background: $black;
    color: $green;

    .container {
        height: 80px;
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
    }
}
</style>

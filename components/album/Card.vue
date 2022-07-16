<template>
    <div class="album-card">
        <img src="https://img.waifuseum.my.id/?id=62bd16df4650eb132c77c35d&size=thumbnail" />
        <h3>Lorem Ipsum</h3>
        <div class="meta">
            <p class="count"><b>69</b> Pictures</p>
            <BaseBadge>Community</BaseBadge>
        </div>
    </div>
</template>

<style lang="scss">
.album-card {
    padding: 15px;
    background: white;
    border-radius: 15px;
    border: 4px solid $black;
    box-shadow: 4px 4px 0px $black;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;

    img {
        max-width: 240px;
        border-radius: 10px;
    }

    h3 {
        font-size: 24px;
        line-height: 26px;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .count {
            font-size: 14px;
            color: $gray;
        }
    }

    &,
    a {
        color: $black;
    }
}
</style>

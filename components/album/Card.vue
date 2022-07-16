<template>
    <NuxtLink to="/albums" class="album-card">
        <figure>
            <img src="https://img.waifuseum.my.id/?id=62bd16df4650eb132c77c35d&size=thumbnail" />
        </figure>
        <h3>Lorem Ipsum</h3>
        <div class="meta">
            <p class="count"><b>69</b> Pictures</p>
            <BaseBadge>Community</BaseBadge>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
.album-card {
    padding: 15px;
    background: white;
    border-radius: 15px;
    border: 4px solid $black;
    box-shadow: 4px 4px 0px $black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: background 0.3s;

    figure {
        overflow: hidden;
        border-radius: 10px;
        img {
            width: 100%;
            transition: transform 0.3s;
        }
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

    color: $black;

    &:hover {
        background: rgba($color: $green, $alpha: 0.16);
        img {
            transform: scale(1.08);
        }
    }
}
</style>

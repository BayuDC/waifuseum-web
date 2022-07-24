<script setup>
const props = defineProps(['length', 'progress']);

const border = reactive({ left: 0, right: 0 });
const count = 20;

onMounted(() => {
    let count = 0;
    if (window.innerWidth < '576') {
        count = 10;
    } else if (window.innerWidth < '768') {
        count = 20;
    } else {
        count = 30;
    }

    border.left = props.progress - count;
    border.right = props.progress + count;

    if (border.left <= 0) {
        border.left = 0;
        border.right = count * 2;
    }
    if (border.right >= props.length - 1) {
        border.right = props.length - 1;
        border.left = props.length - count * 2;
    }
});

onUpdated(() => {
    if (props.progress >= border.right && !(props.progress >= props.length - 1)) {
        border.left += 5;
        border.right += 5;
    }
    if (props.progress < border.left && !(props.progress < 0)) {
        border.left -= 5;
        border.right -= 5;
    }
});
</script>

<template>
    <div class="picture-story-bar">
        <span
            v-for="i in length"
            :class="{
                active: i - 1 <= progress,
                hidden: i < border.left + 1 || i > border.right + 1,
                outer:
                    (border.left > 0 && i == border.left + 1) || (border.right < length - 1 && i == border.right + 1),
            }"
            :key="i"
        />
    </div>
</template>

<style lang="scss">
.picture-story-bar {
    top: 2px;
    left: 0;
    right: 0;
    display: flex;
    position: absolute;

    span {
        margin: 0 2px;
        height: 3px;
        display: block;
        background: $white;
        transition: opacity 0.3s;
        border-radius: 1px;
        opacity: 0.2;
        z-index: 2;

        &.active {
            opacity: 1;
        }
        &.hidden {
            animation: 0.9s bar-vanish forwards;
            margin: 0;
        }
        &.outer {
            max-width: 6px;
        }
        & {
            animation: 0.9s bar-appear forwards;
        }

        @keyframes bar-appear {
            0% {
                width: 0%;
            }

            100% {
                width: 100%;
            }
        }
        @keyframes bar-vanish {
            0% {
                width: 100%;
            }

            100% {
                width: 0%;
            }
        }
    }

    &::after {
        content: '';
        height: 120px;
        top: -2px;
        left: 0;
        right: 0;
        position: absolute;
        background: linear-gradient(rgba($black, 0.4), rgba($black, 0));
    }
}
</style>

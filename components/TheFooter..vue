<template>
    <footer>
        <Container>
            <p>Made with ❤️ by <b>Waifuseum Team</b></p>
            <span>|</span>
            <ul>
                <li>
                    <a href="https://github.com/waifuseum" target="_blank">
                        <Icon name="bxl:github" width="24" height="24" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/8sSfCNCXHW" target="_blank">
                        <Icon name="bxl:discord" width="24" height="24" />
                    </a>
                </li>
            </ul>
        </Container>
    </footer>
</template>

<style lang="scss">
footer {
    color: $white;
    background: $black;
    padding: 20px 0;
    margin-top: auto;

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    p {
        text-align: center;
    }
    span {
        font-weight: 700;
    }
    ul {
        display: flex;
        align-items: center;
        gap: 5px;

        a {
            color: white;
            display: block;
            height: 24px;
        }
    }

    @include mobile {
        .container {
            flex-direction: column;
        }
        span {
            display: none;
        }
        p {
            margin-bottom: 5px;
        }
    }
}
</style>

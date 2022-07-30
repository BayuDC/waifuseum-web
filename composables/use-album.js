export default () =>
    useState('album', () => ({
        page: 1,
        done: false,
        data: [],
    }));

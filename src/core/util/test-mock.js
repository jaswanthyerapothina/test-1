jest.mock('react-redux', () => {
    return {
        connect: () => Component => Component
    };
});

jest.mock('@material-ui/core/styles', () => ({
    withStyles: styles => Component => {
        const dp = {
            ...Component.defaultProps,
            classes: {}
        };
        const cmp = Component;
        cmp.defaultProps = dp;

        return cmp;
    }
}));

jest.mock('react-router', () => ({
    withRouter: Component => Component
}));

jest.mock('redux-polyglot/translate', () => {
    return Component => Component;
});

jest.mock('recompose/compose', () => {
    return Component => Component;
});

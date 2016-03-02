
class Router extends React.Component<{ screens: any[] }, { hash?: string, route?: string, params?: string }> {

    constructor() {
        super();
        this.state = this.getCurrentRoute();
    }

    componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.setState(this.getCurrentRoute());
        });
    }

    render() {
        const Screen = this.getCurrentScreen();
        return <Screen/>;
    }

    getCurrentScreen() {
        const current = this.props.screens.filter(screen => screen.route === this.state.route)[0];
        return current || this.props.screens[0];
    }

    getCurrentRoute() {
        const route = window.location.hash.match(/#\/([^\/]*)[\/]?(.*)/);

        return {
            hash: window.location.hash,
            route: route ? route[1] : null,
            params: route ? route[2] ? route[2] : null : null
        };
    }

}
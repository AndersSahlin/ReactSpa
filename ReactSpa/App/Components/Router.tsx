
class Router extends React.Component<{ screens: any[] }, {}> {

    private static routePattern: RegExp = /#\/([^\/]*)[\/]?(.*)/;

    state = this.getCurrentRoute();

    componentDidMount() {
        window.addEventListener("hashchange", this.hashChangeEventListener);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.hashChangeEventListener);
    }

    render() {
        const Screen = this.getCurrentScreen();
        return <Screen params={this.state.params} />;
    }

    ///

    private hashChangeEventListener = () => {
        this.setState(this.getCurrentRoute());
    };

    private getCurrentRoute() {
        const route = Router.routePattern.exec(window.location.hash);

        return {
            hash: window.location.hash,
            route: route ? route[1] : null,
            params: this.extractParametersFromRoute(route)
        };
    }

    private extractParametersFromRoute(route: RegExpMatchArray) {
        return route && route[2] ? route[2].split("/") : [];
    }

    private getCurrentScreen() {
        const current = this.props.screens.filter(screen => this.doesRouteMatchScreen(this.state.route, screen))[0];
        return current || this.props.screens[0];
    }

    private doesRouteMatchScreen(route: string, screen: any): boolean {
        return route === (screen.route || screen.name.toLowerCase());
    }
}
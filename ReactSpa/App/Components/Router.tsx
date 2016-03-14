
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
        return ScreenResolver.getScreen(this.props.screens, this.state.route, this.state.params);
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
}

class ScreenResolver {

    static getScreen(screens: any[], route: string, params: string[]) {
        const routeMatchedScreenType = screens.filter(screen => this.doesRouteMatchScreen(route, screen))[0];
        const screenType = routeMatchedScreenType || screens[0];

        const screenProxy = this.createProxyInstance(screenType);
        screenProxy.params = params;

        return <ScreenComponent instance={screenProxy} />;
    }

    private static doesRouteMatchScreen(route: string, screen: any): boolean {
        return route === (screen.route || screen.name.toLowerCase());
    }

    private static createProxyInstance(componentType) {
        var ctor = eval(`(function() { return new ${componentType.name}(); });`);
        var instance = ctor.apply(this);


        return instance;
    }
}

class ScreenComponent extends React.Component<{ instance: any }, {}> {

    componentDidMount() {
        const instance = this.props.instance;

        Object.getOwnPropertyNames(instance).map(property => {
            let backing = instance[property];
            Object.defineProperty(instance, property, {
                get: () => backing,
                set: (value) => {
                    backing = value;
                    this.forceUpdate();
                }
            });
        });
        
        if (instance.load)
            instance.load.call(instance);
    }

    render() {
        return this.props.instance.render();
    }

}
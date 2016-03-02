

class Application extends React.Component<{}, { screens: any[] }> {

    static mount(mountElement: HTMLElement) {
        return ReactDOM.render(<Application />, mountElement) as Application;
    }

    constructor() {
        super();

        this.state = {
            screens: [
                Start,
                About,
                Search
            ]
        };
    }

    render() {
        return (
            <div>
                <Menu screens={this.state.screens} />
                <Router screens={this.state.screens} />
            </div>
        );
    }

}
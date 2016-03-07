
class Application extends React.Component<{}, {}> {

    static mount(mountElement: HTMLElement) {
        return ReactDOM.render(<Application />, mountElement) as Application;
    }

    private screens = [
        Start,
        About,
        Search
    ];

    render() {
        return (
            <div>
                <Menu screens={this.screens} />
                <Router screens={this.screens} />
            </div>
        );
    }

}
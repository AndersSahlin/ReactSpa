
declare var fetch: any;

class Start extends React.Component<{}, {}> {

    //static route = "start";

    state = {
        timestamp: new Date(),
        message: "default value",
        loading: false
    };

    componentDidMount() {

        this.setState({ loading: true });

        fetch("api/Start/Load").then(response => {
            response.json().then(data => {
                console.log(data);

                this.setState({ message: data.Message, loading: false });
            });
        });
    }

    componentWillUnmount() {
        // todo: abort fetch
    }

    render() {
        console.log("render");

        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>{this.state.timestamp.toString() }</p>
                <p>{this.state.loading ? "Loading" : "Done"}</p>
            </div>
        );
    }

}
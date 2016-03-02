
declare var fetch: any;

class Start extends React.Component<{ message: string }, { timestamp?: Date, message?: string, loading?: boolean }> {

    static route = "start";

    constructor(props: any) {
        super(props);
        this.state = { timestamp: new Date(), message: "default", loading: false };
    }

    componentDidMount() {

        this.setState({ loading: true });

        fetch("api/Start/Load").then(response => {
            response.json().then(data => {
                console.log(data);
                this.setState({ message: data.Message, loading: false });
            });
        });

    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>{this.state.timestamp.toString() }</p>
                <p>{this.state.loading ? "Loading" : "Done"}</p>
            </div>
        );
    }

}


class Search extends React.Component<{}, { query?: string }> {

    static route = "search";

    constructor() {
        super();

        this.state = {  };
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value });
    };

    render() {
        const items = ["one", "two", "three"].filter(i => !this.state.query || i.indexOf(this.state.query) > -1);

        return (
            <div>
                <p>Search...</p>
                <input type="text" onChange={this.handleChange} />
                <ul>
                    {items.map(i => <li>{i}</li>) }
                </ul>
            </div>
        );
    }

}

class Search extends React.Component<{}, {}> {

    state = {
        query: null as string
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

    private handleChange = (event) => {
        this.setState({ query: event.target.value });
    };

}
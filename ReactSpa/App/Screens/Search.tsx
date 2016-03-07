
class Search {

    query: string = null;

    render() {
        const items = ["one", "two", "three"].filter(i => !this.query || i.indexOf(this.query) > -1);
        
        return (
            <div>
                <p>Search...</p>
                <input type="text" onChange={this.handleChange} />
                <ul>
                    {items.map(i =>
                        <li>{i}</li>
                    ) }
                </ul>
            </div>
        );
    }

    private handleChange = (event) => {
        this.query = event.target.value;
    };

}
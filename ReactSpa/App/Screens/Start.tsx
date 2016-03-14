
declare var fetch: any;

class Start {

    //static route = "start";

    timestamp: Date = new Date();
    message: string = "default value";
    loading: boolean = false;

    load() {

        this.loading = true;

        fetch("api/Start/Load").then(response => {
            response.json().then(data => {
                console.log(data);

                this.message = data.Message;
                this.loading = false;
            });
        });
    }

    //componentWillUnmount() {
    //    // todo: abort fetch
    //}

    render() {
        console.log("render");
        
        return (
            <div>
                <h1>{this.message}</h1>
                <p>{this.timestamp.toString()}</p>
                <p onClick={() => this.loading = !this.loading}>{this.loading ? "Loading" : "Done"}</p>
            </div>
        );
    }

}
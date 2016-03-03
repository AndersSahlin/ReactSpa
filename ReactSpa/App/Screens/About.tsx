

class About extends React.Component<{params?:string[]},{}> {

    static route = "about";

    render() {
        return (
            <div>
                <p>About this application...Params[0]: {this.props.params[0]}  Params[1]: {this.props.params[1]}  Params[2]: {this.props.params[2]}</p>
            </div>
        );
    }

}
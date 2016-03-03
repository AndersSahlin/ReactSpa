
class Menu extends React.Component<{ screens: any[] }, {}> {

    render() {
        return (
            <ul>
                { this.props.screens.map((s: any) => (
                    <li><a href={`#/${s.route || s.name.toLowerCase()}`}>{ s.name }</a></li>
                )) }
            </ul>
        );
    }
}
import React from 'react';
class Userclass extends React.Component {
    constructor(props) {
        super(props);
        //console.log("child contructor");
        this.state = {
            userInfo: {
                name: 'Gadigesh',
                location: 'Default',
                avatat_url: 'http:// dummy photo',
            },
        };
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/gadigesh');
        const json = await data.json();
        console.log(json.avatar_url);
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render() {
        //console.log("child render");
        const { name, company, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Company: {company}</h3>
                <h4>Cantact: gchiremath.23@gmail.com</h4>
            </div>
        );
    }
}

export default Userclass;
import { Component } from 'react';
import User from './User';
import Userclass from './UserClass';
import UserInfo from '../Utils/UserConext';
import { useContext } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        //console.log("parent constructor");
    }
    componentDidMount() {
        //onsole.log("parent did mount");
    }
    render() {
        //console.log("parent render");
        return (
            <div className="about">
                <h1>Welcome to About</h1>
                <div>
                    Looged in User:
                    <UserInfo.Consumer>
                        {({ userName }) => (
                            <h1 className="font-bold">{userName}</h1>
                        )}
                    </UserInfo.Consumer>
                </div>
                <Userclass name={'gadigesh Class'} cantact={'Madlur class'} />
            </div>
        );
    }
}

export default About;

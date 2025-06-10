import { useState } from 'react';
const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>
                {count},{count2}
            </h1>
            <h2>Name : {name}</h2>
            <h3>Location: Bengaluru</h3>
            <h4>Cantact: gchiremath.23@gmail.com</h4>
        </div>
    );
};

export default User;

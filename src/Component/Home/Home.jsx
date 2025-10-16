import React, { use, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Home = () => {
    const authinfo = use(AuthContext);
    console.log(authinfo);
    return (
        <div>
           <h2> This is a home page</h2>
        </div>
    );
};

export default Home;
import React, { useState } from "react";
import axios from "axios";

const FetchUser = () => {
    const [users, setUsers] = useState([]);

    // async function showUsers() => {
    //     try {
    //         const response = await axios.get("https://reqres.in/api/users");
    //         setUsers(response.data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const showUsers = ()=>{
        axios.get("https://reqres.in/api/users")
        .then((response) => setUsers(response.data.data))
        .catch((err)=> console.log(err))
    }

    return (
        <div className="content">
            <div className="top">
                <span><h2>Blue Whales</h2></span>
                <button className="btn" onClick={showUsers}>Get User List</button>
            </div>

            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className="first">{user.first_name}</td>
                                <td className="scnd">{user.last_name}</td>
                                <td className="first">{user.email}</td>
                                <td className="scnd">
                                    <img src={user.avatar} alt="userImg" />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <p className="err"><b>No data found to display.</b></p>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FetchUser;

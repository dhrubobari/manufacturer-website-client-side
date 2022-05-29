import React from 'react';

const User = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            console.log(data)
        })
    }
    
    return (
        <tr>
          <th></th>
          <td></td>
          <td></td>
          <td>{email}</td>
          <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
        </tr>  
    );
};

export default User;
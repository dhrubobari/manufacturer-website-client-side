import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import User from './User';

const queryClient = new QueryClient();

const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/user');
    return res.json();
}

const Users = () => {
    const { data, refetch } = useQuery('users', fetchUsers);

    return (
        <div>
            <h2 class="text-3xl font-semibold text-gray-500">users</h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Email</th>
              <th>Authority</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map(user => <User
                key={user._id}
                user={user}
                refetch={refetch}
                ></User>)
            }
        </tbody>
        </table>
        </div>
        </div>
    );
};

const users = (WrappedComponent) => {
    // Its job is to return a react component warpping the baby component
    return (props) => (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props} />
        </QueryClientProvider>
    );
};

export default users(Users);
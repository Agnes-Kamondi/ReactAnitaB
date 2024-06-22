import React from 'react';
import { useGetUsers } from './hooks/useGetUsers';
import UserCard from '../Atoms/UserCard';
import { Link } from 'react-router-dom';
import './index.css'
const Users = () => {
  const { users, loading, errors } = useGetUsers();
  console.log({ users, loading, errors }); // Add this line

  return (
    <div className="users-container">
      <h2>Users 
      </h2>
      {loading && <h2>Loading users...</h2>}
      {errors.length > 0 && <h2>{errors}</h2>}
      {users.length > 0 ? (
        <div className="users-grid">
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} className='users'>
              <UserCard  image={user.image} fullName={`${user.firstName} ${user.lastName}`} />
            </Link>
          ))}
        </div>
      ) : (
        !loading && <h2>No users found</h2>
      )}
    </div>
  );
};
export default Users;


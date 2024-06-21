import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleUser } from './hooks/useGetSingleUser';

const SingleUser = () => {
  const { userId } = useParams();
  const { user, loading, error } = useGetSingleUser(userId);

  if (loading) {
    return <h2>Loading user...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!user) {
    return <h2>No user found</h2>;
  }

  const {
    address: { address, city, state, stateCode, postalCode, country } = {},
  } = user;

  return (
    <div className="single-user-container">
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <div>
        <h3>Address:</h3>
        <p>{address}</p>
        <p>{city}, {state} {stateCode}</p>
        <p>{postalCode}</p>
        <p>{country}</p>
      </div>
    </div>
  );
};

export default SingleUser;

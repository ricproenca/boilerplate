import React from 'react';
import { User as UserProfileHOC } from 'react-spotify-api';

import { defaultProps, propTypes } from './Profile.shape';

/**
 * User Component
 */
const UserProfileComponent = ({ data, loading, error }) => {
  if (loading) {
    return <h2>LOADING</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return data ? (
    <div>
      <h2>User</h2>
      <ul>
        <li key={data.display_name}>{data.display_name}</li>
        <li key={data.id}>{data.id}</li>
        <li key={data.uri}>{data.uri}</li>
        <li key={data.href}>{data.href}</li>
        <li key={data.external_urls.spotify}>{data.external_urls.spotify}</li>
        <li key={data.email}>{data.email}</li>
        <li key={data.type}>{data.type}</li>
        <li key={data.product}>{data.product}</li>
        <li key={data.images[0].url}>{data.images[0].url}</li>
        <li key={data.followers.total}>{data.followers.total}</li>
        <li key={data.country}>{data.country}</li>
      </ul>
    </div>
  ) : null;
};

UserProfileComponent.defaultProps = { ...defaultProps };
UserProfileComponent.propTypes = { ...propTypes };

const User = () => <UserProfileHOC>{UserProfileComponent}</UserProfileHOC>;

export default User;

import React from 'react';
import { UserPlaylists as UserPlaylistsHOC } from 'react-spotify-api';

import { defaultProps, propTypes } from './Playlists.shape';

/**
 * User Component
 */
const UserPlaylistsComponent = ({ data, loading, error }) => {
  if (loading) {
    return <h2>LOADING</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  console.log(': UserPlaylistsComponent -> data', data);

  return data ? (
    <div>
      <h2>User Playlists</h2>
      <p>{data.display_name}</p>
      <ul>
        {data.items.map(item => (
          <>
            <li key={item.id}>
              {item.id} - {item.name}
            </li>
          </>
        ))}
      </ul>
    </div>
  ) : null;
};

UserPlaylistsComponent.defaultProps = { ...defaultProps };
UserPlaylistsComponent.propTypes = { ...propTypes };

const UserPlaylists = () => <UserPlaylistsHOC>{UserPlaylistsComponent}</UserPlaylistsHOC>;

export default UserPlaylists;

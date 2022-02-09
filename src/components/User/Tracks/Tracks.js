import React from 'react';
import { UserTracks as UserTracksHOC } from 'react-spotify-api';

import { defaultProps, propTypes } from './Tracks.shape';

/**
 * User Component
 */
const UserTracksComponent = ({ data, loading, error }) => {
  if (loading) {
    return <h2>LOADING</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  console.log(': UserTracksComponent -> data', data);

  return data ? (
    <div>
      <h2>User Tracks</h2>
      <p>{data.display_name}</p>
      <ul>
        {data.items.map(item => (
          <>
            <li key={item.track.id}>
              {item.track.artists[0].name} - {item.track.album.name} - {item.track.name}
            </li>
          </>
        ))}
      </ul>
    </div>
  ) : null;
};

UserTracksComponent.defaultProps = { ...defaultProps };
UserTracksComponent.propTypes = { ...propTypes };

const UserPlaylists = () => <UserTracksHOC options={{ limit: 50 }}>{UserTracksComponent}</UserTracksHOC>;

export default UserPlaylists;

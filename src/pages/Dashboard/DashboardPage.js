import React from 'react';
import { useUser } from 'react-spotify-api';

import RenderCount from '@Components/RenderCount';

/**
 * Dashboard page
 *
 */
const DashboardPage = () => {
  const { data, loading, error } = useUser();

  if (loading) {
    return (
      <>
        <h2>LOADING</h2>
        <RenderCount scope='loading <DashboardPage />' />
      </>
    );
  } else if (error) {
    return (
      <>
        <h2>{error.message}</h2>
        <RenderCount scope='error <DashboardPage />' />
      </>
    );
  } else if (data) {
    const { display_name, country, email, external_urls, followers, href, id, images, uri } = data;
    return (
      <>
        <h1>USER: {display_name}</h1>
        <p>{country}</p>
        <p>{email}</p>
        <p>{external_urls.spotify}</p>
        <p>{followers.total}</p>
        <p>{href}</p>
        <p>{id}</p>
        <p>{images[0].url}</p>
        <p>{uri}</p>
        <RenderCount scope='render <DashboardPage />' />
      </>
    );
  }

  return null;
};

export default DashboardPage;

import React from 'react';

import RenderCount from '@Components/RenderCount/RenderCount';

/**
 * Check if the user has a valid session and redirect to the proper route
 * login: in case of a non valid session
 */
const Landing = () => {
  return (
    <>
      <div>Landing Page</div>
      <RenderCount scope='<Landing />' />
    </>
  );
};

export default Landing;

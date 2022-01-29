import React from 'react';

import useRenderCount from '../../hooks/useRenderCount';

import { defaultProps, propTypes } from './RendeCount.shape';

const style = {
  position: 'fixed',
  bottom: 0,
  right: 0,
  fontSize: 10,
  backgroundColor: 'black',
  color: 'white'
};

const RenderCount = ({ scope }) => {
  const { counter } = useRenderCount();

  return (
    <div style={style}>
      <div>
        <code>
          {scope} has rendered {counter} time(s)
        </code>
      </div>
    </div>
  );
};

RenderCount.defaultProps = { ...defaultProps };
RenderCount.propTypes = { ...propTypes };

export default RenderCount;

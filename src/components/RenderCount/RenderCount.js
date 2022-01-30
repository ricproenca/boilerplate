import React from 'react';

import useRenderCount from './hooks/useRenderCount';
import { defaultProps, propTypes } from './RenderCount.shape';
import renderCountStyles from './RenderCount.styles';

const RenderCount = ({ scope }) => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const style = renderCountStyles();
  const { counter } = useRenderCount();

  return (
    <div className={style.Container}>
      <code>
        {scope} has rendered {counter} time(s)
      </code>
    </div>
  );
};

RenderCount.defaultProps = { ...defaultProps };
RenderCount.propTypes = { ...propTypes };

export default RenderCount;

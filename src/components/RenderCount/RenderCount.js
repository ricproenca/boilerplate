import React from 'react';

import useRenderCount from './hooks/useRenderCount';
import { defaultProps, propTypes } from './RenderCount.shape';
import renderCountStyles from './RenderCount.styles';

/**
 * Component that prints the number of times the component renders
 *
 * @param {string} scope - name of the component to log
 */
const RenderCount = ({ scope }) => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const style = renderCountStyles();
  const { counter } = useRenderCount(scope);

  return (
    <div className={style.Container}>
      <code>
        {scope} rendered {counter} time(s).
      </code>
    </div>
  );
};

RenderCount.defaultProps = { ...defaultProps };
RenderCount.propTypes = { ...propTypes };

export default RenderCount;

import { useRef } from 'react';

/**
 * React hook to record the render count}
 * @param {string} scope - name to be logged (usually a component)
 */
const useRenderCount = (scope = '<Component />') => {
  const counter = useRef(0);
  counter.current += 1;

  // eslint-disable-next-line no-console
  console.log(`${scope} rendered ${counter.current} time(s).`);
  return { counter: counter.current };
};

export default useRenderCount;

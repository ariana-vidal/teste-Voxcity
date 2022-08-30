import React, { useMemo } from 'react';
import proptypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const total = useMemo(() => ({ total: 0 }), []);

  // const store = { total };
  return (
    <AppContext.Provider
      value={ total }
    >
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: proptypes.node,
}.isRequired;

export default Provider;

import React, { useState, useEffect, useCallback } from 'react';
import { node } from 'prop-types';
import Context from './Context';
import fetchApi from '../helpers/fetchApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchPlanets = useCallback(async () => {
    const { results } = await fetchApi();
    setData(results);
  }, []);

  useEffect(() => { fetchPlanets(); }, [fetchPlanets]);

  const contextValue = { data, setData };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;

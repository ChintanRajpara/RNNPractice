import {useContext, createContext} from 'react';

export const GlobalContext = createContext();

/**
 * @returns
 * { {
 *      authenticated : boolean,
 *      setAuthenticated : function,
 * } }
 */
export const useGlobalContext = () => useContext(GlobalContext);

import {createContext} from 'react';

const Context = createContext();
const contextProvider = ()=>{
    const value = {};
    return <Contexts.Provider value={value}>{children}</Contexts.Provider>;
}
export {contextProvider};
export default Context;
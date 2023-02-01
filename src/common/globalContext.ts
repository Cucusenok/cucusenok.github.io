import React, {createContext, useContext} from "react";

export type GlobalContextProps = {
    onScroll:(e: React.UIEvent<HTMLDivElement>) => void,
    hideBecauseScroll: boolean,
    screenSize: {
        width: number,
        height: number,
    },
}

export const GlobalContextDefault = {
    onScroll:(e: React.UIEvent<HTMLDivElement>) => {},
    hideBecauseScroll: false,
    screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
}


export const GlobalContext = createContext<GlobalContextProps>(GlobalContextDefault)
export const useGlobalContext = () => useContext(GlobalContext)
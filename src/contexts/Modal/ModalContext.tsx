import { createContext, useState } from "react";
import { IModalContext, IModalProvider } from "./index";

export const ModalContext = createContext({} as IModalContext)

export function ModalProvider({children}: IModalProvider){
    const [showModal, setShowModal] = useState(false)

    return(
        <ModalContext.Provider value={{
            showModal,
            setShowModal,
        }}>
            {children}
        </ModalContext.Provider>
    )
}
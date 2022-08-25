export interface IModalContext{
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalProvider{
    children: JSX.Element;
}
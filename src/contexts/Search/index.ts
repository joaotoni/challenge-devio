export interface ISearchContext{
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
}

export interface ISearchProvider{
    children: JSX.Element;
}
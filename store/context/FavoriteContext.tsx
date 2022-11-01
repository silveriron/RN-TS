import { ComponentElement, createContext, ReactElement, useState } from "react";

const arry: string[] = [];

export const FavoriteContext = createContext({
  list: arry,
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

type Props = {
  children: ReactElement;
};

const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [list, setList] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setList((prev) => [...prev, id]);
  };

  const removeFavorite = (id: string) => {
    setList((prev) => prev.filter((Id) => Id !== id));
  };

  const value = {
    list,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

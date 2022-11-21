import { createContext, useState } from "react";

const dataFix = {
  active: false,
};

type GlobalContext = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Tooggle = createContext<GlobalContext>({
  active: false,
  setActive: () => {},
});

export const ToggleProvider = ({ children }: any) => {
  const [activeState, setActive] = useState(false);
  console.log(children);
  return (
    <Tooggle.Provider value={{ active: activeState, setActive }}>
      {children}
    </Tooggle.Provider>
  );
};

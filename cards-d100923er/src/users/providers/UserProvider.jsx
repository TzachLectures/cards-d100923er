import React, { createContext, useContext, useMemo } from "react";

const UserContext = createContext();
const user = {
  _id: "65424ae9a8d1eae12d31e360",
  isBusiness: true,
  isAdmin: false,
};
export default function UserProvider({ children }) {
  const value = useMemo(() => ({ user }), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a Provider");
  return context;
};

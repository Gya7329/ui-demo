

import React, { createContext, useState } from "react";
import { PageRoute } from "./Routes";
export const UserContext = createContext();

export const App = () => {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PageRoute />
    </UserContext.Provider>

  );
};

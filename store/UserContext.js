import { createContext, useState } from "react";

export const UserContext = createContext({
  users: [],
  addUser: ({ email, password }) => {},
});

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = ({email, password}) => {
    setUsers((prev) => [...prev, {email, password}]);
  };

  return (
    <UserContext.Provider value={{ users: users, addUser: addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();
/*const addFavService = addFav();linea extra*/

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  /*const [favs, setFavs] = useState([]); linea extra*/

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      //console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      //console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      //console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  /*linea extra
  const addfav = ((user) => {
    addFavService({id, user})
      .then(setFavs)
      .catch(err => {
        console.error(err)
      })
  }, [user, setFavs]);*/

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
    }
    checkLogin();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        isAuthenticated,
        errors,
        loading,
        logout,
        /*favs,
        setFavs,
        addfav,*/
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
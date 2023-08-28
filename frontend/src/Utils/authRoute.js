import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AuthRoute({ element }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if(!token) {
      navigate('/')
    }
  }, [location])

  return element;
}

export default AuthRoute;
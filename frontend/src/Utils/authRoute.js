import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function AuthRoute({ element }) {
  // Replace this with your actual authentication check logic

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
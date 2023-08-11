import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    // 로그인 된 사용자 정보 가져오는 API 호출
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.post('http://localhost:8080/login',
        { user_id : userId , user_pw: userPassword }, 
        {
          withCredentials : true
        })
        console.log(response);

        if(response.data) {
          setLoggedInUser(response.data.user); // user ? 
        }


      } catch (error) {
        console.log("컨텍스트에서 로그인 된 사용자 정보 가져오다가 에러남");
        console.log(error);
      }
    }
    fetchLoggedInUser();
  },[])

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
import React, { useEffect } from 'react'
import { Admin } from '../components'
import { useQuery } from 'react-query'
import axios from 'axios'

const AdminPage = () => {
  const backend = process.env.REACT_APP_BACKEND_SERVER;
  
  // 유저 정보 가져옴
  const fetchUsers = async () => {
    const response = await axios.get(`${backend}/login/pendingUsers`, {
      withCredentials : true
    });
    // console.log("가져온 유저 정보 데이터",response);
    return response.data;
  }

  // 승인 버튼 누르면 엑세스 1로 변경
  const approveUser = async (userId) => {
    try {
      await axios.put(`${backend}/login/pendingUsers/${userId}`, {
        access: 1
      }, { withCredentials: true });
      alert("승인 수락이 완료되었습니다.")
    } catch (error) {
      console.log(error);
    }
  }
  
  // 승인 거절되면 삭제
  const rejectUser = async (userId) => {
    try {
      await axios.delete(`${backend}/login/pendingUsers/${userId}`, {
        withCredentials : true
      });
      alert("승인 거절이 완료되었습니다.")
    } catch (error) {
      console.log(error);
    }
  }
  
  // useQuery로 데이터를 가져옴
  const { data : users, isLoading, isError, error } = useQuery('users', fetchUsers);

  // 가져온 데이터를 콘솔에 로깅
  useEffect(()=> {
    if (users) {
      console.log("승인 대기 유저:", users);
    }
    if (isError) {
      console.error("유저 대기 에러:", error);
    }
  }, [users, isError, error]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>로딩중 에러</p>

  return (
    <>
      <Admin>
        <h1>어드민 승인 페이지</h1>
        <div className='usersContainer'>
           {users && users.map(user => (
              <div key={user.id} className='user-item'>
                <span className="nickname">{user.nickname}</span>
                <div>
                    <button onClick={()=>{approveUser(user.id)}}>승인</button>
                    <button onClick={()=>{rejectUser(user.id)}}>거절</button>
                </div>
              </div>
          ))}
        </div>
      </Admin>
    </>
  )
}

export default AdminPage
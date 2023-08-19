import React, { useEffect } from 'react'
import { BorderMain } from '../components'
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addPost, editPost } from '../features/BorderSlice';

export const Border = ({ postContent, setPostContent, edit, deleted }) => {
  const dispatch = useDispatch();

  // 백에서 글 목록 가져옴
  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:8080/post', {
      withCredentials : true
    });
    // console.log("백엔드에서 가져온 글 목록",response);
    return response.data;
  };

   // useQuery로 글 목록, 닉네임을 가져옴
   const { data : Posts, isLoading, isError, error } = useQuery('posts', fetchPosts);

   // 가져온 데이터를 콘솔에 로깅
   useEffect(()=> {
     if (Posts) {
       console.log("글 목록", Posts);
     }
     if (isError) {
       console.error("에러:", error);
     }
   }, [Posts, isError, error]);

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>로딩중 에러</p>

  return (
    <>
      <BorderMain>
        <h1>자유 게시판</h1>
        <label>제목</label>

        <input value={postContent.title} 
        onChange={e => setPostContent(prevState => ({ ...prevState, title : e.target.value}))}></input>
        <label>내용</label>
        <input value={postContent.content} 
        onChange={e => setPostContent(prevState => ({ ...prevState, content : e.target.value}))}></input>
        <button onClick={()=> {
          dispatch(addPost(postContent));
          setPostContent({title : '', content : ''});
        }}>확인</button>

        {Posts.map((post, index)=>(
          <div key={index}>
            <h1>{post.userId ? post.userId : 'Cant find your ID'}</h1>
            <h2>{post.title ? post.usertitle : 'Cant find your title'}</h2>
            <p>{post.content ? post.content : 'Cant find your content'}</p>
            <p>{post.User ? post.User.nickname : 'Cant find your nickname'}</p>
          {/* <button onClick={()=>{
            const newContent = prompt("수정할 내용을 입력하세요", post.content)
            if(newContent){
              dispatch(editPost({index}))
            }
          }}>수정</button> */}

          {/* <button onClick={()=>{
            dispatch(deleted(index))
          }}>삭제</button> */}
          </div>
        ))}
      </BorderMain>
        </>
  )
}
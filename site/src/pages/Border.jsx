import React from 'react'
import { BorderMain } from '../components'

export const Border = ({ postContent, setPostContent, dispatch, posts, add, edit, deleted }) => {
  return (
    <>
      <BorderMain>
        <h1>게시판</h1>
        <label>글 작성</label>
        <input value={postContent} onChange={e=>setPostContent(e.target.value)}></input>
        <button onClick={()=> {
          dispatch(add(postContent));
          setPostContent('');
        }}>확인</button>

        {posts.map((content, index)=>(
          <div key={index}>{content}
          <button onClick={()=>{
            const newContent = prompt("수정할 내용을 입력하세요", content)
            if(newContent){
              dispatch(edit({index, content : newContent}))
            }
          }}>수정</button>

          <button onClick={()=>{
            dispatch(deleted(index))
          }}>삭제</button>
          </div>
        ))}
      </BorderMain>
        </>
  )
}
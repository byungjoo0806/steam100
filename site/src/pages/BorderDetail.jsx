import React, { useEffect, useState, useRef, useCallback } from 'react'
import { BorderDetailBox } from '../components'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReplyPost } from '../features/ReplySlice';
import { setCurrentPostId } from '../features/BorderSlice';

const backend = process.env.REACT_APP_BACKEND_SERVER;
// 읽기
const fetchPostbyId = async (postId) => {
    const response = await axios.get(`${backend}/post/detail/${postId}`, {
        withCredentials: true,
    });
    return response.data;
};
// 수정
const updatePostbyId = async (id, data) => {
    await axios.put(`${backend}/post/update/${id}`, data, {
        withCredentials : true
    });
};
// 삭제
const deletePostbyId = async (id) => {
    await axios.delete(`${backend}/post/delete/${id}`, {
        withCredentials : true
    });
};

const BorderDetail = ({ postContent, setPostContent }) => {
    
    const currentUser = useSelector(state => state.login);
    const navi = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [replyContent, setReplyContent] = useState('');
    const postId = useSelector(state => state.border.currentPostId); 
    
    ///////////////// 댓글 //////////////////
    const fetchReply = async () => {
        
        const response = await axios.get(`${backend}/reply?postId=${postId}`, {
            withCredentials : true
        });
        console.log(response);
        return response.data;
    }
    
const [borderEdit, setBorderEdit] = useState({
    title : postContent.title,
    content : postContent.content
});
const [borderUpdate, setBorderUpdate] = useState(false);
const focusContent = useRef(null);

const { data : postDetail, isLoading, isError, error } = useQuery(['post', id], () => fetchPostbyId(id));

// 수정 버튼
const toggleUpdate = useCallback(()=>{
    setBorderUpdate(prevState => !prevState);
    if(!borderUpdate) {
        focusContent.current.focus();
    }
},[borderUpdate, focusContent]);

// 확인 버튼
const confirmHandler = async () => {
    try {
        await updatePostbyId(id, borderEdit);
        alert('글이 수정 되었습니다.');
        setBorderUpdate(false);
        navi('/border');
    } catch (error) {
        alert('글 수정에 실패하였습니다.');
        console.log(error);
    }
};
// 삭제 버튼
const deleteHandler = async () => {
    try {
        await deletePostbyId(id);
        alert('글이 정상적으로 삭제되었습니다.');
        navi('/border');
    } catch (error) {
        alert('글 삭제를 실패하였습니다.')
        console.log(error);
    }
};

{/* /////////////////////////////////////////// 댓글 ////////////////////////////////////////////////// */}


const { data : replys } = useQuery('replys', fetchReply);

useEffect(() => {
    if (postDetail && postDetail.id) {
      dispatch(setCurrentPostId(postDetail.id));  // Redux에 postId 저장
    }
  }, [postDetail, dispatch]);

useEffect(()=> {
    console.log(replys)
},[replys])


/////////////////////////////////////////

useEffect(()=> {
    if(postDetail) {
        setBorderEdit({
            title : postDetail.title,
            content : postDetail.content
        });
    }
}, [postDetail]);

if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error occurred</p>;

return (
    <>
        <BorderDetailBox>
            <label>제목</label>
            <input type='text' value={borderEdit.title} readOnly={!borderUpdate}
            onChange={e => setBorderEdit(prevState => ({ ...prevState, title : e.target.value}))}></input>
            <label>내용</label>
            <input type='text' value ={borderEdit.content} readOnly={!borderUpdate} 
            onChange={e => setBorderEdit(prevState => ({ ...prevState, content : e.target.value}))}
            className='insert_content'
            ref={focusContent}>
            </input>
            
            {/* 수정 버튼 */}
            {postDetail.userId === currentUser.id && (
            <div className='border_detail_btns'>
                <button onClick={toggleUpdate}>
                    {borderUpdate ? '수정 취소' : '수정'}
                </button>

                {borderUpdate && (
                    <button onClick={confirmHandler}>
                        수정 완료
                    </button>
                )}

                <button onClick={deleteHandler}>글 삭제</button>
            </div>

            )}

{/* /////////////////////////////////////////// 댓글 ////////////////////////////////////////////////// */}

        <label>댓글</label>
        <input value={replyContent}
        onChange={e => setReplyContent(e.target.value)}>
        </input>
            <button onClick={()=> {
                dispatch(addReplyPost(replyContent));
                setReplyContent('');
                alert('댓글이 작성되었습니다.')
            }}>작성</button>

        {replys && replys.map((reply, index)=>(
            <div key={index}>
                <p>{reply.User.nickname}</p> 
                <p>{reply.content}</p>
                <p>{reply.replyLikes}</p>
            </div>
        ))}
        
        </BorderDetailBox>
    </>
  )
}

export default BorderDetail
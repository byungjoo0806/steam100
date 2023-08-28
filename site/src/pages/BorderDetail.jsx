import React, { useEffect, useState, useRef, useCallback } from 'react'
import { BorderDetailBox } from '../components'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReplyPost, deleteReply, editReply } from '../features/ReplySlice';
import { addRereplypost, deleteRereply, editRereply } from '../features/RereplySlice';
import { setCurrentPostId } from '../features/BorderSlice';
import { setCurrentReplyId } from '../features/ReplySlice';

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
    const [rereplyContent, setRereplyContent] = useState('');
    const [likeNum, setLikeNum] = useState(0);
    // const [replyLikeNum, setReplyLikeNum] = useState(0);
    const postId = useSelector(state => state.border.currentPostId); 
    const replyId = useSelector(state => state.reply.currentReplyId);
    const replyInsertResult = useSelector(state => state.reply.Replys);
    const rereplyInsertResult = useSelector(state => state.rereply.Rereplys);
    
    ///////////////// 댓글 view //////////////////
    const fetchReply = async () => {
        const response = await axios.get(`${backend}/reply?postId=${postId}`, {
            withCredentials : true
        });
        return response.data;
    }
    /////////////// 대댓글 view ///////////////////
    const fetchRereply = async () => {
        const rereplyData = await Promise.all(
            replyId.map(async (e) => {
                const response = await axios.get(`${backend}/rereply?replyId=${e}`, {
                    withCredentials: true
                });
                return response.data;
            })
        );
        return rereplyData;
    };

    // 게시글 수정
    const [borderEdit, setBorderEdit] = useState({
        title : postContent.title,
        content : postContent.content
    });
    const [borderUpdate, setBorderUpdate] = useState(false);
    const focusContent = useRef(null); // 게시글 포커스

    const { data : postDetail, isLoading, isError, error } = useQuery(['post', id], () => fetchPostbyId(id));

    useEffect(()=>{
        if(postDetail){
            const postLike = postDetail.postLikes.split(',').length - 1;
            setLikeNum(postLike);
        }
    },[])

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
    // 좋아요
    const likePostUpdatebyId = async(id)=>{
        await axios.get(`${backend}/post/like/${id}`,{
            withCredentials : true
        }).then((e)=>{
            if(e.data[0] !== '세'){
                const result = e.data.postLikes.split(',').length - 1;
                setLikeNum(result);
            }else{
                alert(e.data);
                navi('/login');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    // 좋아요 버튼
    const likeHandler = async()=>{
        try {
            await likePostUpdatebyId(id);
        } catch (error) {
            console.log(error);
        }
    }

    {/* /////////////////////////////////////////// 댓글 ////////////////////////////////////////////////// */}

    // 댓글 수정 버튼 기능
    const [replyEdit, setReplyEdit] = useState(replyContent);
    const [replyUpdate, setReplyUpdate] = useState('');
    const [replyContentUpdate, setReplyContentUpdate] = useState(null);
    const [replyLikeNum, setReplyLikeNum] = useState(0);
    const focusReplyContent = useRef(null);

    const { data : replys } = useQuery(['replys', postId], fetchReply);
    
    useEffect(()=>{
        if(replys){
            let replyLike = [];

            replys.map((el)=>{
                replyLike.push(el.replyLikes?.split(',').length - 1);
            })

            setReplyLikeNum(replyLike);
        }
    },[replys])

// 수정 버튼
const toggleReplyUpdate = useCallback((replyId, content)=>{
    if (replyUpdate === replyId) {
        setReplyUpdate(null); // 수정 취소
        setReplyEdit('');
    }else {
        setReplyUpdate(replyId); // 수정 시작
        setReplyEdit(content);
    }
},[replyUpdate]);

// 확인 버튼
const confirmHandlerReply = async () => {
    try {
        const updateData = { content : replyEdit, id : replyUpdate};
        await dispatch(editReply(updateData));
        setReplyUpdate(null);
        alert('댓글이 수정되었습니다.')
    } catch (error) {
        alert('댓글 수정 실패')
        console.log(error)
    }
}

useEffect(()=>{
    console.log(rereplyInsertResult);
},[])

    // 삭제 버튼
    const deleteHandlerReply = async (replyId) => {
        try {
            await dispatch(deleteReply(replyId))
            alert('댓글이 삭제되었습니다.')
        } catch (error) {
            alert('댓글 삭제 실패')
            console.log(error)
        }
    }

    // const [replyLikeNum,setReplyLikeNum] = useState([]);

    // 댓글 좋아요
    const likeReplyPostUpdateId = async(id,index) => {
        await axios.get(`${backend}/reply/replylike/${id}`, {
            withCredentials : true
        }).then((e)=> {
            if(e.data[0] !== '세') {
                let changeNum = [...replyLikeNum];
                const changeIndexNum = e.data.replyLikes.split(',').length -1;
                changeNum[index] = changeIndexNum;
                setReplyLikeNum(changeNum);
            }else {
                alert(e.data);
                navi('/login');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    // 댓글 좋아요 버튼
    const replyLikeHandler = async (id,index) => {
        try {
            await likeReplyPostUpdateId(id,index);
        } catch (error) {
            console.log(error)
        }
    }
    ////////////////////////대댓글/////////////////////
    const [rereplyEdit, setRereplyEdit] = useState(rereplyContent);
    const [rereplyUpdate, setRereplyUpdate] = useState();
    const focusRereplyContent = useRef(null);
    const [activeReplyId, setActiveReplyId] = useState(null);
    const [rereplyData, setRereplyData] = useState(null);
    const [rereplyLikeNum, setRereplyLikeNum] = useState(0);

    const {data : rereplys } = useQuery(['rereplys', replyId], fetchRereply);

    useEffect(()=>{
        if(rereplys){
            let rereplyLike = [];

            rereplys.map((el)=>{
                let arr = [];
                el.map((i)=>{
                    arr.push(i.replyLikes?.split(',').length - 1);
                })

                rereplyLike.push(arr);
            })

            setRereplyLikeNum(rereplyLike);
        }
    },[rereplys])

    useEffect(()=>{
        setRereplyData(rereplys);
    },[replys,rereplys])

    // 대댓글 클릭 핸들러
    const handleCommentButtonClick = (replyId) => {
        if (activeReplyId === replyId) {
            setActiveReplyId(null); // 이미 활성화된 댓글의 버튼을 다시 클릭하면 숨김
        } else {
            setActiveReplyId(replyId); // 해당 댓글의 대댓글 작성 버튼 활성화
            // dispatch(setCurrentReplyId(replyId));
        }
    };
    // 대댓글 수정 버튼
    const toggleRereplyUpdate = useCallback((rereplyId, content) => {
        if(rereplyUpdate === rereplyId) {
            setRereplyUpdate(null);
            setRereplyEdit('');
        }else {
            setRereplyUpdate(rereplyId);
            setRereplyEdit(content);
        }
    }, [rereplyUpdate]);

    // 대댓글 확인 버튼
    const confirmhandlerRereply = async () => {
        try {
            const updateData = { content : rereplyEdit, id : rereplyUpdate};
            await dispatch(editRereply(updateData));
            setRereplyUpdate(null);
            alert('대댓글이 수정 되었습니다.')
        } catch (error) {
            alert('대댓글 수정 실패')
            console.log(error)
        }
    }

    // 대댓글 삭제 버튼
    const deleteHandlerRereply = async (rereplyId) => {
        try {
            await dispatch(deleteRereply(rereplyId))
            alert('댓글이 삭제되었습니다.')
        } catch (error) {
            alert('댓글 삭제 실패')
            console.log(error)
        }
    }

    // 대댓글 좋아요
    const likeRereplyPostUpdateId = async(id,index,rIndex) => {
        await axios.get(`${backend}/rereply/rereplylike/${id}`, {
            withCredentials : true
        }).then((e)=> {
            if(e.data[0] !== '세') {
                let changeNum = [...rereplyLikeNum];
                const changeIndexNum = e.data.rereplyLikes.split(',').length -1;
                changeNum[index][rIndex] = changeIndexNum;
                setRereplyLikeNum(changeNum);
            }else {
                alert(e.data);
                navi('/login');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    // 대댓글 좋아요 버튼
    const rereplyLikeHandler = async (id,index,rIndex) => {
        try {
            await likeRereplyPostUpdateId(id,index,rIndex);
        } catch (error) {
            console.log(error)
        }
    }

/////////////////////////////////////////

// Redux에 postId 저장 (댓글 뷰)
useEffect(() => {
    if (postDetail && postDetail.id) {
      dispatch(setCurrentPostId(postDetail.id)); 
    }
  }, [postDetail, dispatch]);

    // Redux에 replyId 저장 (대댓글 뷰)
    useEffect(() => {
        if(replys){
            let replysId = [];
            replys.map(e=>replysId.push(e.id));
            dispatch(setCurrentReplyId(replysId));
        }
    },[replys, dispatch]);

    let rereplyListUp = [];
    useEffect(()=>{
        if(replys && rereplys){
            replys.map((el)=>{
                let arr = [];
                rereplys.map((i)=>{
                    if(el.id === i.replyId){
                        arr.push(i);
                    }
                })
                rereplyListUp.push(arr);
            })
        }
    },[rereplys])

    //게시판 수정 저장 
    useEffect(()=> {
        if(postDetail) {
            setBorderEdit({
                title : postDetail.title,
                content : postDetail.content
            });
        }
    }, [postDetail]);

    // 댓글 수정 저장 
    useEffect(()=>{
        if(replys) {
            setReplyEdit({
                content : replys.content
            });
        }
    },[replys]);

    // 대댓글 수정 저장 
    useEffect(()=>{
        if(rereplys) {
            setRereplyEdit({
                content : rereplys.content
            });
        }
    },[rereplys])

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
                <button onClick={likeHandler}>추천 : {likeNum}</button>
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

        <div className='reply_insert_container'>
        <label>댓글</label>
        <input value={replyContent}
        onChange={e => setReplyContent(e.target.value)}>
        </input>
            <button onClick={()=> {
                dispatch(addReplyPost(replyContent));
                setReplyContent('');
                if(replyInsertResult[replyInsertResult.length - 1] !== '세션 만료. 다시 로그인해주세요.'){
                    alert('댓글이 작성되었습니다.')
                }else{
                    alert(replyInsertResult[replyInsertResult.length - 1]);
                    navi('/login');
                }
            }}>작성</button>
        </div>
        <div className='reply_container'>
            <div className='reply_header'>
                <p>글쓴이</p>
                <p>내용</p>
                <p>등록일</p>
                <p>추천</p>
            </div>
            {/* 댓글 렌더링 */}
            {replys && replys.map((reply, index)=>(
                <div key={index} className='reply_li'>
                <div className='replyli_container'>
                    <p>{reply.User.nickname}</p> 
                    {replyUpdate === reply.id ? 
                        <input
                        value={replyEdit}
                        onChange={e=> setReplyEdit(e.target.value)}
                        ref={focusReplyContent}
                        />
                        : <p>{reply.content}</p>
                    }
                    
                    <p>{reply.createdAt.split('T')[0]}</p>
                    <button onClick={()=>replyLikeHandler(reply.id,index)}>추천 : {replyLikeNum[index]}</button>
                
                    {/* 댓글 수정 로그인 식별 */}
                    {reply.User.id === currentUser.id && (
                        <>
                            <button onClick={()=>toggleReplyUpdate(reply.id, reply.content)}>
                                {replyUpdate === reply.id ? '수정 취소' : '수정'}
                            </button>

                            {replyUpdate === reply.id && (
                                <button onClick={confirmHandlerReply}>
                                수정 완료
                                </button>
                            )}

                            <button onClick={()=>deleteHandlerReply(reply.id)}>댓글삭제</button>
                        </>
                    )}
                    </div>
                    <div className='rereply_li_container'></div>
                    {/* 대댓글 버튼 */}
                    
                        <button onClick={()=>handleCommentButtonClick(reply.id)}>댓글 작성</button>
                        {activeReplyId === reply.id && (
                            <div className='rereply_input_container'>
                                <label>대댓글</label>
                                <input 
                                    value={rereplyContent}
                                    onChange={e => setRereplyContent(e.target.value)}
                                    ref={focusRereplyContent}
                                    />
                                <button onClick={()=> {
                                    dispatch(addRereplypost({content : rereplyContent, id : reply.id}));
                                    setRereplyContent('');
                                    if(rereplyInsertResult[rereplyInsertResult.length - 1] !== '세션 만료. 다시 로그인해주세요.'){
                                        alert('대댓글이 작성되었습니다.')
                                    }else{
                                        alert(rereplyInsertResult[rereplyInsertResult.length - 1]);
                                        navi('/login');
                                    }
                                }}>작성</button>
                            </div>
                        )}
                    

                    {/* 대댓글 렌더링 */}
                    <div className='rereply_container'>
                        {rereplyData && rereplyData[index] && rereplyData[index].map((rereply, rIndex) => (
                            <div key={rIndex} className='rereply_li'>
                                    <p>{rereply.User.nickname}</p>             
                                    {rereplyUpdate === rereply.id ? 
                                        <input 
                                            value={rereplyEdit}
                                            onChange={e=>setRereplyEdit(e.target.value)}
                                            ref={focusRereplyContent}
                                        />
                                        : <p>{rereply.content}</p>
                                    }
                                    <p>{rereply.createdAt.split('T')[0]}</p>
                                    <button onClick={()=>rereplyLikeHandler(rereply.id,index,rIndex)}>추천 : {rereplyLikeNum[index][rIndex]}</button>
                                    <div>
                                        {/* 대댓글 수정 로그인 식별 */}
                                            {rereply.userId === currentUser.id && (
                                            <div className='rereply_btns'>
                                                <button onClick={()=>toggleRereplyUpdate(rereply.id, rereply.content)}>
                                                    {rereplyUpdate === rereply.id ? "수정 취소" : '수정'}
                                                </button>

                                                {rereplyUpdate === rereply.id && (
                                                    <button onClick={confirmhandlerRereply}>
                                                        수정 완료
                                                    </button>
                                                )}

                                                <button onClick={()=>deleteHandlerRereply(rereply.id)}>댓글 삭제</button>
                                            </div>
                                            )}         
                                    </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        </BorderDetailBox>
    </>
  )
}

export default BorderDetail
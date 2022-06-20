import { Button } from 'antd';
import blogs from '../Blog/Blog'
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Blog from '../Images/bg1.jpg';
import Blog1 from '../Images/Blog1.jpg';
import Blog2 from '../Images/Blog2.jpg';
import Blog3 from '../Images/Blog3.jpg';
import {useParams, Link} from "react-router-dom";
import { db } from '../../Base';
import {useNavigate} from 'react-router-dom';
import { getDoc, doc} from "firebase/firestore";


function BlogDetails() {
    const {id} = useParams();
    const [getBlog, setGetblog] = useState([])

    let history = useNavigate();

    const usersID = doc(db, 'blog', id)

    const FetchData = async () => {
        getDoc(usersID)
        .then((doc) => {
            setGetblog(doc.data(), doc.id)
        })
    }


    // useEffect(() => {
    //     async function getDatas(){
    //         const querySnapshot = await getDocs(query(collection(db, `blog/${(id)}/blog`)));
    //         let dataArray = []
    //         querySnapshot.forEach((doc) => {
    //             dataArray.push({...doc.data(), id: doc.id});
    //         });
    //         setGetblog(dataArray)
    //         console.log("My id", id)
    //     }
    //     getDatas();
    //   }, [id]);

    useEffect(() => {
        FetchData(id)
    }, []);

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <MainContainer>
        <ContainerWrapper>
                       <>
                           
                            <Title>{getBlog.title}</Title>
                            <Avat src={getBlog.avatar} />
                            <p>
                                {getBlog.story}
                            </p>
                        </>
                    <BtnHold>
                        <Link to='/blog'>
                            <Button>Back</Button>
                        </Link>
                    </BtnHold>
{/* 
            <Suggest>
                Suggested Post
            </Suggest> */}

            {/* <CardWrapper>
                <BlogCard>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>Donating to Charity</HeadHold>
                            <p>
                                Text buttons are typically used for less-pronounced actions, 
                                including those located: in dialogs, in cards.
                            </p>
                            <ButtomHold>
                                <p>Posted January 4 2022</p>
                                <Button variant="contained" color="success">Read More</Button>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard>

                <BlogCard2>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>Donating to Charity</HeadHold>
                            <p>
                                Text buttons are typically used for less-pronounced actions, 
                                including those located: in dialogs, in cards.
                            </p>
                            <ButtomHold>
                                <p>Posted January 3 2022</p>
                                <Button variant="contained" style={{backgroundColor:"#25AAE2"}}>Read More</Button>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard2>

                <BlogCard3>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>Donating to Charity</HeadHold>
                            <p>
                                Text buttons are typically used for less-pronounced actions, 
                                including those located: in dialogs, in cards.
                            </p>
                            <ButtomHold>
                                <p>Posted January 1 2021</p>
                                <Button variant="contained" style={{backgroundColor:"#EE5728"}}>Read More</Button>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard3>
            </CardWrapper> */}
        </ContainerWrapper>
    </MainContainer>
    </>
  )
}

export default BlogDetails;

const MainContainer = styled.div`
    width: 100%;
    height: auto;
    /* min-height: 100vh; */
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
const ContainerWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 20px;
        font-size: 17px;
        line-height: 23px;
    }

    @media screen and (max-width: 768px){
        width: 80%;
    }

    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const Title = styled.div`
    width: 100%;
    /* height: 50px; */
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Avat = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;

    @media screen and (max-width: 768px){
        height: 350px;
    }
`
const BtnHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    Button{
        background-color: #EE5728;
        width: 150px;
        margin-right: 20px;
        border-radius: 8px;
        color: white;
    }
`
const Suggest = styled.div`
    width: 100%;
    height: 50px;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight :500;
    line-height:44.53px;
`

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const BlogCard = styled.div`
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog1});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
const TextHold = styled.div`
    width: 100%;
    height: 55%;
    color: white;
    background: #003399;
    opacity: 0.8;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0;

    @media screen and (max-width: 425px){
        height: auto;
    }
`
const TextWrap = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const HeadHold = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: white;

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 45px;
    }
`
const ButtomHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    Button{
        height: 30px;
        font-size: 12px;

        @media screen and (max-width: 325px){
            font-size: 10px;
            width: 60px;
        }
    }
`

const BlogCard2 = styled.div`
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog2});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
const BlogCard3 = styled.div`
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog3});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
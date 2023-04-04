import { Button } from 'antd';
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
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
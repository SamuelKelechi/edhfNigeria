import React,{useEffect, useState} from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import {db} from "../../../Base";
import {Link} from 'react-router-dom'
import {collection, getDocs, limit, query, orderBy} from "firebase/firestore";


const BlogLink = () => {
    const [getblog, setGetblog] = useState([]);

    const userCollectionRef = collection(db, "blog")

    const querry = query(userCollectionRef, orderBy("time", "desc"), limit(3))

    const getBlog = async () => {
        const data = await getDocs(querry, userCollectionRef);
        setGetblog(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    };

    useEffect(() => {
        getBlog();
    }, []);

  return (
    <Container>
        <TitleContain>
            Check out our Latest <span>Blogs</span>
        </TitleContain>
        <ContainerWrapper>
           
           {
               getblog.map(({id, title, desc, avatar, time}) => (
                <BlogCard2 key={id} style={{backgroundImage:`url(${avatar})`}}>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>{title}</HeadHold>
                            <p>
                                {desc}
                            </p>
                            <ButtomHold>
                                <p>{time.toDate().toDateString()}</p>
                                <Link to={`/blogdetails/${id}`}><Button variant="contained" style={{backgroundColor:"#25AAE2"}}>Read More</Button></Link>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard2>
               ))
           }

        </ContainerWrapper>

        <Link to='/blog'><Button variant='contained'>More Blogs..</Button></Link>
    </Container>
  )
}

export default BlogLink;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`
const TitleContain = styled.h2`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;

    span{
        color: #003399;
    }

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 45px;
    }
`
const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const TextHold = styled.div`
    width: 100%;
    color: white;
    background: #003399;
    opacity: 0.8;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 10px;

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
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 22px;

    @media screen and (max-width: 425px){
        font-size: 17px;
        line-height: 20px;
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
    width: 350px;
    height: 380px;
    border-radius: 8px;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px;
    border: 1px solid lightgrey;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`

import { Button } from '@mui/material';
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import img from "../Images/Card1.jpg";
import { Link } from 'react-router-dom';
import {db} from "../../Base"
import {collection, query, orderBy, limit, onSnapshot} from "firebase/firestore";


const Blog = () => {
    const [getblog, setGetblog] = useState([]);
    const [getblog1, setGetblog1] = useState([]);

    const userCollectionRef = collection(db, "blog")

    const querry = query(userCollectionRef, orderBy("time", "desc"))
    const q = query(userCollectionRef, orderBy("time", "desc"), limit(1))

    

    const getBlog =  () => {
        onSnapshot(querry, (snapshot) => {
            const blog = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setGetblog(blog);
        });
    };

    const getBlog1 = async () => {
        onSnapshot(q, (snapshot) => {
            const blog = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setGetblog1(blog);
        });
    };

    useEffect(() => {
        getBlog();
        getBlog1();
    }, []);

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
        <MainContainer>
          <LandingPage>
              <Image src = {img}/>
              <OverLayer>
                  <Span>BLOG POST</Span>
                  <p>
                    We are excited about the lives we are touching, 
                    catch up on our events
                  </p>
                  <Link to='/donate'>
                    <Btn>
                        Donate
                    </Btn>
                  </Link>
              </OverLayer>
          </LandingPage>
          <br/>
          <Updates>
            <RecentBlog>
              <Head1>Most Recent Update</Head1>
              <RecentWrapper>

                {
                    getblog1.map((props)=>(
                    <>
                    <Left src={props.avatar} />
                    <Right>
                        <h2>{props.title} </h2>
                        <p>
                            {props.story}
                        </p>
                        {/* <Button variant="contained" color="success">Read More</Button> */}
                    </Right>
                    </>
                    ))
                }

              </RecentWrapper>
            </RecentBlog>
          </Updates>
          <br/>
          <h2>Popular Events</h2>
        <ContainerWrapper>
           
           {
               getblog.map(({id, title, desc, time, avatar}) => (
                <BlogCard key={id} style={{backgroundImage:`url(${avatar})`}}>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>{title}</HeadHold>
                            <p>
                               {desc}
                            </p>
                            <ButtomHold>
                                <p>
                                    {time.toDate().toDateString()}
                                    {/* {moment(time.toDate()).fromNow()} */}
                                </p>
                                <Link to={`/blogdetails/${id}`}><Button variant="contained" color="success">Read More</Button></Link>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard>
               ))
           }

        </ContainerWrapper>

        </MainContainer>
    </>
  )
}

export default Blog;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    width: 90%;
    font-size: 30px;
    text-align: center;
  }
`

const LandingPage = styled.div`
    width:100%;
    height:400px;
    background-color:blue;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const Image = styled.img`
    width:100%;
    height:400px;
    object-fit:cover;
    object-position: center;
    position: absolute;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color:rgb(9,82,252, 60%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p{
        color: white;
        text-align: center;
        font-size: 22px;
    }

    @media screen and (max-width: 650px){
        justify-content: flex-end;
        p{
        color: white;
        text-align: center;
        font-size: 19px;
        width: 98%;
      }
    }

   
`
const Btn = styled.button`
    width:120px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#3AB54A;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
    @media screen and (max-width: 650px){
        margin-bottom: 40px;
    }
`
const Span = styled.div`
    font-size:25px;
    color:#ffff;
    font-weight:bold;
`
const Updates = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 20px;
`

const Head1 = styled.div`
    font-size: 25px;
    font-weight: bold;
    padding-left: 40px;
    margin-bottom: 10px;

   @media screen and (max-width: 425px){
    font-size: 22px;
    padding-left: 0;
   }
`

const RecentBlog = styled.div`
  width: 90%;
`

const RecentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Left = styled.img`
  width: 450px;
  height: 350px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;

  @media screen and (max-width: 650px){
    width: 100%;
  }
`

const Right = styled.div`
  width: 600px;
  
  h2{
    font-size: 20px;
    padding: 0;
    text-transform: uppercase;
    text-align: left;
  }

  p{
      line-height: 25px;
      font-size: 16px;
  }

  @media screen and (max-width: 650px){
    width: 100%;

    h2{
    font-size: 19px;
    margin-top: 20px;
  }
  }
`

const ContainerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const BlogCard = styled.div`
    width: 300px;
    height: 420px;
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
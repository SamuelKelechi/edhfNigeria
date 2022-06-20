import { Button } from '@mui/material';
import React,{useState} from 'react';
import styled from 'styled-components';
import { addDoc, collection, Timestamp} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { storage, db } from '../../Base';
import { toast } from 'react-toastify';


const Admin = () => {
const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    fullstory: "",
    createAt: Timestamp.now().toDate(),
})

const [progress, setProgress] = useState(0)

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const handleImageChange = (e) => {
    setFormData({...formData, image:e.target.files[0]})
}

const Post = () => {
    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image)
    uploadImage.on("state_changed",
    (snapshot) => {
        const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 
        );
        setProgress(progressPercent);
    },
    (err) => {
        console.log(err)
    },
    ()=>{
        setFormData({
            title:'',
            description:'',
            image:'',
            fullstory:'',
        });
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url) => {
            const articleRef = collection(db, "blog");
            addDoc(articleRef, {
                title: formData.title,
                desc: formData.description,
                story:formData.fullstory,
                avatar: url,
                time: Timestamp.now().toDate(),
            })
            .then(() => {
                toast("Blog Uploaded Succesfully", {type: "success"});
                setProgress(0);
            })
            .catch(err=>{
                toast("Error While Uploading Blog", {type: "error"});
            })
        });
    }
    );
}

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
        <Top>Welcome Admin... Add a New Blog Story</Top>
        <ContainWrapper>
            <span><label>Select Blog Image</label><input type='file' name='image' accept='image/*' onChange={(e)=>handleImageChange(e)} style={{width:'200px'}}/></span>
            <input name='title' value={formData.title} placeholder='Title of Blog Story' onChange={(e)=>handleChange(e)}/>
            <input  name='description' value={formData.description} placeholder='Short Description of Blog Story' onChange={(e)=>handleChange(e)}/>
            <textarea name='fullstory' value={formData.fullstory} placeholder='Full Blog Story' onChange={(e)=>handleChange(e)}/>

            {progress === 0 ? null : (
                <div style={{ width: `${progress}%`}}>
                    {`Uploading Blog Story ${progress}%`}
                </div>
            )}
            
            <Button variant="contained" color="success" onClick={()=>{
                Post()
            }}>Post Blog</Button>
        </ContainWrapper>
    </Container>
    </>
  )
}

export default Admin;

const Container = styled.div`
    height: auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
`
const Top = styled.div`
    font-size: 25px;
    font-weight: bold;

    @media screen and (max-width: 425px){
        font-size: 18px;
    }
`

const ContainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 20px 0 20px 0;

    span{
        label{
            color: red;
            font-weight: bold;
            font-size: 18px;

            @media screen and (max-width: 425px){
                font-size: 16px;
            }
        }
    }

    input{
        width: 60%;
        margin: 10px;
        height: 40px;
        outline: none;
        border-radius: 5px;
    }

    textarea{
        width: 60%;
        height: 350px;
        outline: none;
    }

    div{
        width: 100%;
        color: green;
        display: flex;
        justify-content: center;
    }

    Button{
        margin-top: 15px;
    }

    @media screen and (max-width: 425px){
        width: 90%;

        input{
        width: 100%;
    }

    textarea{
        width: 100%;
    }
    }

`
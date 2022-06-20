import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
    <>
    <Main>
        <div>EDHF</div>
        <ReactLoading type={"bars"} color={"#003399"} height={100} width={100} /> 
        
    </Main>
    </>
);

export default Loader;

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        font-weight: bold;
        font-size: 19px;
        color: #003399;
    }
`
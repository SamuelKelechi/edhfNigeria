import React from 'react';
import styled from 'styled-components'
import Data1 from './Data1';

const Datas = () => {
  return (
    <Container>
        <ContianerWrapper>
            <Contain>
                <Data1  end={570} suffix="+"/>
                <h2>Families Reached</h2>
            </Contain>

            <Contain>
                <Data1  end={2300} suffix="+"/>
                <h2>People Supported</h2>
            </Contain>
            <Contain>
                <Data1  end={50} suffix="+"/>
                <h2>Volunteers</h2>
            </Contain>
        </ContianerWrapper>
    </Container>
  )
}

export default Datas;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ContianerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    border-top: 10px solid lightgray;
    border-bottom: 10px solid lightgray;
    padding: 30px 0 20px 0;
    flex-wrap: wrap;
    align-items: center;
`
const Contain = styled.div`
    width: 250px;
    text-align: center;
`
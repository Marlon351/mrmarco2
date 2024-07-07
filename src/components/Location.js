import React from "react";
import styled from "styled-components";

const Location = (props) => {
    return (
        <Container>
            <InfoContainer>
                <img src="/images/outside.jpg" />
                <h1><span>517 Chestnut St, Union, NJ 07083</span></h1>
                <h1>Sunday: 12AM-8PM</h1>
                <h1>Monday: 11AM-10PM</h1>
                <h1>Tuesday: 11AM-10PM</h1>
                <h1>Wednesday: 11AM-10PM</h1>
                <h1>Thursday: 11AM-10PM</h1>
                <h1>Friday: 11AM-10PM</h1>
                <h1>Saturday: 11AM-10PM</h1>
                

            </InfoContainer>
        </Container>
    );
};

const Container = styled.section`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    display: flex;
    align-items:center;
    justify-content: center;
    background-image: url("/images/pizzeriabg.jpg");
    flex-direction: column;
    h1 {
        color: black;
    }
    span {
        text-decoration: underline;
        text-underline-offset: 7px;
        font-size: 30px;
    }

    img {
        width: 500px;
        border-radius: 4px;
    }
`;

const InfoContainer = styled.div`
    background-color: #8D2626;
    padding: 5px;
    border: 5px solid black; 
    border-radius: 10px;
    
`

export default Location;

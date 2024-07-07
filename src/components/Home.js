import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = (props) => {
    return (
        <Container>
            <ImgSlider/>
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
`;

export default Home;

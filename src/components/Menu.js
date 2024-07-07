import React from "react";
import styled from "styled-components";

const Menu = (props) => {
    return (
        <Container>
            <InfoContainer>
                <img src="/images/meatlovers.jpg" alt="Meat Lovers Pizza" />
                <Text>
                    <Title>
                        <h1>Meat Lovers Pizza</h1>
                    </Title>
                    <Description>
                        <p>Pepperoni, meatballs, sausage, and bacon.</p>
                    </Description>
                </Text>
            </InfoContainer>
            <InfoContainer>
                <img src="/images/meatlovers.jpg" alt="Meat Lovers Pizza" />
                <Text>
                    <Title>
                        <h1>Meat Lovers Pizza</h1>
                    </Title>
                    <Description>
                        <p>Pepperoni, meatballs, sausage, and bacon.</p>
                    </Description>
                </Text>
            </InfoContainer>
            <InfoContainer>
                <img src="/images/meatlovers.jpg" alt="Meat Lovers Pizza" />
                <Text>
                    <Title>
                        <h1>Meat Lovers Pizza</h1>
                    </Title>
                    <Description>
                        <p>Pepperoni, meatballs, sausage, and bacon.</p>
                    </Description>
                </Text>
            </InfoContainer>
            <InfoContainer>
                <img src="/images/meatlovers.jpg" alt="Meat Lovers Pizza" />
                <Text>
                    <Title>
                        <h1>Meat Lovers Pizza</h1>
                    </Title>
                    <Description>
                        <p>Pepperoni, meatballs, sausage, and bacon.</p>
                    </Description>
                </Text>
            </InfoContainer>
            <InfoContainer>
                <img src="/images/meatlovers.jpg" alt="Meat Lovers Pizza" />
                <Text>
                    <Title>
                        <h1>Meat Lovers Pizza</h1>
                    </Title>
                    <Description>
                        <p>Pepperoni, meatballs, sausage, and bacon.</p>
                    </Description>
                </Text>
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
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-wrap: wrap;
    row-gap: 5px; /* Decreased vertical gap */
    column-gap: 10px; /* You can keep this or adjust for horizontal gap */
    background-color: red;
`;

const InfoContainer = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: row;
    border: 5px solid black;
    border-radius: 10px;
    padding: 10px;

    img {
        object-fit: cover;
        border-radius: 0.4rem;
    }
`;

const Text = styled.div`
    color: black;
    padding: 10px;
`;

const Title = styled.div`
    text-decoration: underline;
    text-underline-offset: 7px;
    text-align: center;
    margin-bottom: auto;
`;

const Description = styled.div`
    margin-bottom: auto;
    font-size: 1.2rem;
`;

export default Menu;

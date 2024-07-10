import styled from "styled-components";

const Footer = (props) => {
    return (
        <Nav>
            <h1>© 2024 Mr. Marco's Pizzeria. All rights reserved.</h1>
        </Nav>
        
    )
}

const Nav = styled.footer`
    position: fixed;
    height: 50px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.90);
    z-index: 3;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    align-items: center;
    justify-content: center;
    bottom: 0;


    h1 {
        font-size: 20px;
    }
`;

export default Footer;
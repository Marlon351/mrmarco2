import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Categories = () => {
    return (
        <Nav>
            <Menu>
                <StyledLink to="hot-cold-subs" smooth={true} duration={200} offset={-143}>
                    <CategoryTitle>HOT OR COLD SUBS</CategoryTitle>
                </StyledLink>
                <StyledLink to="white-wraps" smooth={true} duration={200} offset={-143}>
                    <CategoryTitle>WHITE WRAPS OR WHOLE WHEAT</CategoryTitle>
                </StyledLink>
                <StyledLink to="plain-pizza" smooth={true} duration={200} offset={-143}>
                    <CategoryTitle>PLAIN PIZZA</CategoryTitle>
                </StyledLink>
                <StyledLink to="specialty-pizza" smooth={true} duration={200} offset={-143}>
                    <CategoryTitle>SPECIALTY PIZZA</CategoryTitle>
                </StyledLink>
            </Menu>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 93px;
    height: 50px;
    width: 100vw;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    margin: 0px;
    padding:  0px 15px;
    text-decoration: none;
    cursor: pointer;

    &:hover h1 {
        color: #8D2626;
    }
`;

const CategoryTitle = styled.h1`
    color: black;
    font-size: 20px;
    margin: 0px;
`;

export default Categories;

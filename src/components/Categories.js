import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setMenuTypes, selectMenuTypes } from "../features/items/menuTypeSlice";
import db from "../firebase";

const Categories = () => {
    const dispatch = useDispatch();
    const menuTypes = useSelector(selectMenuTypes);

    useEffect(() => {
        const fetchMenuTypes = async () => {
            const menuTypesArray = [];
            const snapshot = await db.collection("menuTypes").get();
            snapshot.forEach((doc) => {
                menuTypesArray.push({ id: doc.id, ...doc.data() });
            });
            dispatch(setMenuTypes(menuTypesArray));
        };

        fetchMenuTypes();
    }, [dispatch]);

    return (
        <Nav>
            <Menu>
                {menuTypes && menuTypes.length > 0 && menuTypes.map((type) => (
                    <StyledLink
                        key={type.id}
                        to={type.type}
                        smooth={true}
                        duration={200}
                        offset={-143}
                    >
                        <CategoryTitle>{type.type.toUpperCase()}</CategoryTitle>
                    </StyledLink>
                ))}
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
    padding: 0px 15px;
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

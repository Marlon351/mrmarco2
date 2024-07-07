import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Logo src="/images/mrmarcologo.png"/>
            <Menu>
                <a className="first" href="/">
                    <h1>HOME</h1>
                </a>
                <a className="second" href="./location">
                    <h1>LOCATION</h1>
                </a>
                <a className="third" href="./menu">
                    <h1>MENU</h1>
                </a>
                <OrderButton>
                    <a>
                        <h1>ORDER</h1>
                    </a>
                </OrderButton>
            </Menu>
        </Nav>
        
    )
}

const Nav = styled.nav`
    position: fixed;
    height: 93px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.90);
    z-index: 3;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    align-items: center;
`;

const Logo = styled.img`
    width: 80px;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    align-items: center;
    margin-left: auto;
    
    .first, .second, .third {
        margin-left: 50px;

        h1:hover {
            color: #8D2626;
            
        }
    }
`;

const OrderButton = styled.div`
    margin-left: 50px;
    padding: 10px 20px;
    background-color: #8D2626;
    border-radius: 4px;
    border: 2px solid white;

    &:hover {
        background-color: #FFFFFF;
    }

    &:hover a h1 {
        color: black;
    }

    a h1 {
        margin: 0;
    }
`;

export default Header;
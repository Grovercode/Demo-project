import styled from '@emotion/styled';

const HeaderText  = styled.div`

    font-size: 1.6rem;
    font-family: 'Pacifico';
    text-align: center;
    padding: 10px 20px;
    color: #424242;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 10;

`

const Header = () => <HeaderText>Gallery</HeaderText>;

export default Header;

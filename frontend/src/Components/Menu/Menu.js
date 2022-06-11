import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = () => {
    return (
        <Nav>
            <Link className='nav-logo' to='/'>
                <img src='https://www.coronatracker.com/_nuxt/img/262cfac.png' alt='logo' className='logo-img' />
                <div className='text-logo'>
                    <span>Corona</span>
                    <span className='logo-span'>Tracking</span>
                </div>
            </Link>
            <ul className='nav-links'>
                <Link className='nav-li' to='/'><li >Home</li></Link>
                <Link className='nav-li' to='/aboutVN'><li>About VietNam</li></Link>
            </ul>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #b3ccff;
    align-item: center;
    min-height: 60px;
    font-weight: bold;
    font-size: 20px;

    .nav-logo {
        text-decoration: none;
        margin-top: 10px;
        width: 30px !important;
        display: flex;
        align-items: center;
    }

    .logo-img {
        height: 3rem;
    }

    .text-logo {
        font-size: 1.5rem;
        color: white;
        padding-left: 10px;
    } 

    .logo-span {
        color: red;
    }

    .nav-links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
    }

    .nav-li {
        color: #FFFFFF;
        text-decoration: none;
        margin: 10px 40px 0px 0px;
        font-weight: bold;
        font-size: 20px;
    }
`

export default Menu
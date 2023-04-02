import { TitleHome, Logo } from './Home.styled';
import phonebook from 'images/images.jpg';

export default function Home() {
    return (
        <>
            <TitleHome>Welcome to PhoneBook</TitleHome>
            <Logo><img src={phonebook} alt="Logo" height="300" /></Logo>
        </>
    )
}

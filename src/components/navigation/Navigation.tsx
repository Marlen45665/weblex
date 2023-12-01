import styled from 'styled-components';
import telegramm from "../../assets/navigationMessagers/Vector.svg"
import viber from "../../assets/navigationMessagers/viber.svg"
import whatsapp from "../../assets/navigationMessagers/whatsapp.svg"
import logo from "../../assets/logo/logo_welbex.svg"

const NavWrapper = styled.div`
    padding: 0 16px;
    margin-top: 46px;
    font-family: Inter;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px) {
        margin-top: 0px;
        background-color: black;
        justify-content: center;
        padding: 20px 16px;
    }
`
const IttemList = styled.ul`
    padding: 0;
    font-size: 16px;
    display: flex;
    gap: 30px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 700px) {
        text-transform: uppercase;
        font-size: 12px;
        gap: 16px;
    }
    
`
const Item = styled.a`
    color: #E4E5EA;
    text-decoration: none;
    font-weight: 500;
    @media (max-width: 500px) {
        &:last-child {
            display: none;
        }
    }
`
const Contact = styled.div`
    display: flex;
    gap: 47px;
    align-items: center;

    @media (max-width: 980px) {
        display: none;
    }
`
const Icon = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
`
const Logo = styled.a`
    position: relative;
    width: 165px;
    h2{
        font-family: Montserrat;
        position: absolute;
        font-size: 10px;
        color: #E4E5EA;
        font-weight: 300;
        text-decoration: none;
        width: 165px;
        margin-top: 10px;
    }
    @media (max-width: 700px) {
        display: none;
    }
`

export const messagers: string[] = [telegramm, viber, whatsapp]
const navItem: string[] = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"]

export function List({arr}: {arr: string[]}){
    return(
        <IttemList>
            {arr.map(i => {
                return(
                    <Icon src={i}/>
                )
            })}
        </IttemList>
    )
}
export const Navigation = () =>{
    return(
        <NavWrapper>
            <Logo href='#'>
                <Icon src={logo}></Icon>
                <h2>крупный интегратор CRM в Росcии и ещё 8 странах</h2>
            </Logo>
            <IttemList>
                {navItem.map(i => {
                    return(
                        <Item href={`${i}/`}>{i}</Item>
                    )
                })}
            </IttemList>

            <Contact>
                <Item href='#'>+7 555 555-55-55</Item>
                <List arr={messagers}></List>
            </Contact>
        </NavWrapper>
    )
}
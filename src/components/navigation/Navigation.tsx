import telegramm from "../../assets/navigationMessagers/Vector.svg"
import viber from "../../assets/navigationMessagers/viber.svg"
import whatsapp from "../../assets/navigationMessagers/whatsapp.svg"
import logo from "../../assets/logo/logo_welbex.svg"
import {
    NavWrapper,
    IttemList,
    Item,
    Contact,
    Icon,
    Logo
} from "../styled"

export const messagers: string[] = [
    telegramm,
    viber,
    whatsapp
]
const navItem: string[] = [
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Кейсы",
    "Сертификаты"
]

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
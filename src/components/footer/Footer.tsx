import styled from "styled-components"
import { List } from "../navigation/Navigation"
import { messagers } from "../navigation/Navigation"

const FootWrapper = styled.div`
    display: flex;
    gap: 98px;
    @media (max-width: 980px) {
        flex-direction: column;
        gap: 30px;
    }
`
const FooterBlock = styled.div`
    max-width: 195px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
`
const TitleItem = styled.div`
    color:  #656566;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.7px;
    text-transform: uppercase;  
    @media (max-width: 700px) {
       font-size: 12px;
    }
`
const ListItem = styled.div`
    &:hover{cursor: pointer;}
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #E4E5EA;
    @media (max-width: 700px) {
       font-size: 12px;
    }
`
const CustomContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    display: flex;
    gap: 20px;
    @media (max-width: 540px) {
        align-items: flex-start;
    }
`
const ListFooterItem = styled.ul`
    min-width: 195px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media (max-width: 700px) {
        min-width: 148px;
    }
`
const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 540px) {
       flex-direction: column;
       gap: 30px;
    }
`
const Polytics = styled.div`
    color:  #E4E5EA;
    text-align: right;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const PolitycsBox = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    display: flex;
    gap: 6px;
    @media (max-width: 540px) {
        align-items: flex-start;
    }
    #underline{
        text-decoration-line: underline;
    }
`
const SectionBottom = styled.div`
    padding: 45px 16px;
    @media (max-width: 700px) {
        background-color: black;
    }
`


const footerCollection = [
    {title: "О компании", item: ["Партнёрская программа", "Вакансии"]},
    {title: "Меню", item: ["Расчёт стоимости", "Услуги", "Виджеты", "Интеграции", "Наши клиенты", "Кейсы", "Благодарственные письма", "Сертификаты", "Блог на Youtube", "Вопрос / Ответ"]},
]

function splitArray(arr: string[]) {
    const result = [];
  
    for (let i = 0; i < arr.length; i += 5) {
      const chunk = arr.slice(i, i + 5);
      result.push(chunk);
    }
  
    return result;
}

export const Footer = () =>{
    return(
        <SectionBottom>
            <Tag>
                <FootWrapper>
                    {footerCollection.map(i => {
                        const resultArray = splitArray(i.item)
                        return(
                            <FooterBlock>
                                <TitleItem>{i.title}</TitleItem>
                                <div style={{display: "flex"}}>
                                    {resultArray.map(l => {
                                        return(
                                            <ListFooterItem>
                                                {l.map(e => {
                                                    return (
                                                        <ListItem>{e}</ListItem>
                                                    )
                                                })}
                                            </ListFooterItem>
                                        )
                                    })}    
                                </div>
                            </FooterBlock>
                        )
                    })}
                </FootWrapper>
                <CustomContact>
                    <TitleItem>Контакты</TitleItem>
                    <ListItem>+7 555 555-55-55</ListItem>
                    <List arr={messagers}></List>
                    <ListItem>Москва, Путевой проезд 3с1, к 902</ListItem>
                </CustomContact>  
                
            </Tag>
            <PolitycsBox>
                <Polytics>©WELBEX 2022. Все права защищены.</Polytics>
                <Polytics id="underline">Политика конфиденциальности</Polytics>
            </PolitycsBox> 
        </SectionBottom>
    )
}
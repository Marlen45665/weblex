import { List } from "../navigation/Navigation"
import { messagers } from "../navigation/Navigation"
import {
    FootWrapper, 
    FooterBlock,
    TitleItem, 
    ListItem, 
    CustomContact, 
    ListFooterItem, 
    Tag, 
    Polytics, 
    PolitycsBox, 
    SectionBottom
} from "../styled"

interface Iitem {
    title: string,
    item:string[]
}

const footerCollection: Iitem[] = [
    {
        title: "О компании",
        item: ["Партнёрская программа", "Вакансии"]
    },
    {
        title: "Меню",
        item: [
            "Расчёт стоимости",
            "Услуги", "Виджеты",
            "Интеграции",
            "Наши клиенты",
            "Кейсы",
            "Благодарственные письма",
            "Сертификаты",
            "Блог на Youtube",
            "Вопрос / Ответ"
        ]
    },
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
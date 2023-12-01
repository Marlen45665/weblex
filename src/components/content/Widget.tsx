import styled from "styled-components"

const WidgetItem = styled.div`
    gap: 5px;
    display: flex;
    align-items: center;
    max-width: 140px;
    color: #E4E5EA;
    text-align: right;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 750px) {
        text-align: left;
        width: 123px;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        letter-spacing: 0.65px;
        text-transform: uppercase;
    }
    @media (max-width: 750px) {
        &:last-child {
            max-width: 190px;
        }
    }
`
const WidgetWrapper = styled.div`
    gap: 6px;
    max-width: 165px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Panel = styled.div`
    margin-top: 46px;
    margin-bottom: 61px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Два столбца с равной шириной */
    gap: 10px; 
`
const Hidden = styled.div`
    display: none;
     @media (min-width: 750px) {
       display: block;
    }
`
const Open = styled.div`
    display: none;
     @media (max-width: 750px) {
       display: block;
    }
`
const WidgetName = styled.div`
    color: #E4E5EA;
    text-align: right;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.9px;
    text-transform: uppercase;
`
const Range = styled.div`
    display: inline-block;
    width: 10px;
    height: 1px;
    background: linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%);
`

const widgetItem =  [
    {title: "Виджеты", item: "30 готовых решений"},
    {title: "Dashboard", item: "с показателями вашего бизнеса"},
    {title: "Skype Аудит", item: "отдела продаж и CRM системы"},
    {title: "35 дней", item: "использования CRM"}
]
const mobileWidgetItem =  ["Skype аудит", "30 виджетов", "Dashboard", "Месяц аmoCRM"]

export const Widget = () => {
    return(
        <>
            <Hidden>
                <Panel>
                    {widgetItem.map(i => {
                        return(
                            <WidgetWrapper>
                                <WidgetName>{i.title}</WidgetName>
                                <WidgetItem>{i.item}</WidgetItem>
                            </WidgetWrapper>
                        )
                    })}
                </Panel>
            </Hidden>
            <Open>
                <Panel>
                    {mobileWidgetItem.map(i => {
                        return(
                            <WidgetWrapper>
                                <WidgetItem><Range/>{i}</WidgetItem>
                            </WidgetWrapper>
                        )
                    })}
                </Panel>
            </Open>
        </>
    )
}
import {
    WidgetItem,
    WidgetWrapper, 
    Panel, 
    Hidden, 
    Open, 
    WidgetName, 
    Range
} from "../styled"

const widgetItem =  [
    {
        title: "Виджеты", 
        item: "30 готовых решений"
    },
    {
        title: "Dashboard", 
        item: "с показателями вашего бизнеса"
    },
    {
        title: "Skype Аудит", 
        item: "отдела продаж и CRM системы"
    },
    {
        title: "35 дней", 
        item: "использования CRM"
    }
]

const mobileWidgetItem: string[] =  [
    "Skype аудит", 
    "30 виджетов", 
    "Dashboard", 
    "Месяц аmoCRM"
]

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
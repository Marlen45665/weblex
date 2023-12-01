import "./content.css"
import { Widget } from "./Widget"
import {
    Product, 
    ContentWrapper, 
    Button
} from "../styled"

export const Content = () => {
    return(
        <ContentWrapper>
            <h2>
                <div className="banner">Зарабатывайте больше</div>
                <div className="weblex">с WELBEX</div>
                <div className="info">Развиваем и контролируем продажи за вас</div>
            </h2>
            <Product>
                <div className="product-banner">Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
                <Widget/>
                <Button>Получить консультацию</Button>
            </Product>
        </ContentWrapper>
    )
}
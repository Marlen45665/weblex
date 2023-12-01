import styled from "styled-components"
import "./content.css"
import { Widget } from "./Widget"


const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 750px) {
      align-items: flex-start;
    }
`
const ContentWrapper = styled.div`
    margin: 40px 0;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 750px) {
       flex-direction: column;
       justify-content: center;
       gap: 45px;
    }
`
const Button = styled.button`
    width: 262px;
    height: 61px;
    flex-shrink: 0;
    background: #4077F3;
    color:  #E4E5EA;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    padding: 0;
    margin: 0;
        &:hover{
            cursor: pointer;
        
        &:active{
            background: #5080ef;
        }
    }
    @media (max-width: 750px) {
      display: none;
    }
`

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
                <Widget></Widget>
                <Button>Получить консультацию</Button>
            </Product>
        </ContentWrapper>
    )
}
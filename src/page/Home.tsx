import { Footer } from "../components/footer/Footer"
import { Navigation } from "../components/navigation/Navigation"
import styled from "styled-components"
import { Content } from "../components/content/Content"
import purple from "../assets/circle/purple ball.svg"
import red from "../assets/circle/red ball.svg"
import small from "../assets/circle/small.svg"

const Backgroung = styled.div`
    position: relative;
    background-color: #0E1014;
    width: 100%; 
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    position: relative;
    z-index: 1000;
    min-height: 100vh;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Circle1 = styled.div`
    position: absolute;
    top: 40%;
    left: -120px;
    width: 311px;
    height: 311px;
    flex-shrink: 0;
    border-radius: 311px;
    opacity: 0.5;
    background: #961A1A;
    filter: blur(196px);
`
const Circle2 = styled.div`
    position: absolute;
    margin: 0 auto;
    top: -140px;
    width: 259px;
    height: 259px;
    flex-shrink: 0;
    border-radius: 259px;
    opacity: 0.5;
    background: #833AB4;
    filter: blur(196px);
`
const Circle3 = styled.img`
    position: absolute;
    top: -6px;
    right: 512px;
    width: 83px;
    height: 83px;
    flex-shrink: 0;
    fill: radial-gradient(82.3% 82.3% at 27.25% 26.5%, rgba(255, 208, 208, 0.54) 0%, rgba(212, 93, 93, 0.26) 59.67%, rgba(167, 49, 49, 0.25) 78.59%, rgba(130, 25, 25, 0.25) 100%);
    filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25));
    backdrop-filter: blur(2px); 
`
const Circle4 = styled.img`
    position: absolute;
    top: 83px;
    right: 838px;
    width: 83px;
    height: 83px;
    flex-shrink: 0;
    fill: radial-gradient(82.3% 82.3% at 27.25% 26.5%, rgba(255, 208, 208, 0.54) 0%, rgba(212, 93, 93, 0.26) 59.67%, rgba(167, 49, 49, 0.25) 78.59%, rgba(130, 25, 25, 0.25) 100%);
    filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25));
    backdrop-filter: blur(2px);
`
const Circle5 = styled.img`
    position: absolute;
    top: 547px;
    right: 561px;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    fill: radial-gradient(82.3% 82.3% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.25) 59.67%, rgba(167, 49, 49, 0.26) 78.59%, rgba(130, 25, 25, 0.23) 100%);
    filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25)) blur(2.5px);
    backdrop-filter: blur(2px);
`

export const Home = () =>{
    return(
        <Backgroung>
                <Circle1></Circle1>
                <Circle2></Circle2>
            <Wrapper>
                <Circle3 src={purple}></Circle3>
                <Circle4 src={red}></Circle4>
                <Circle5 src={small}></Circle5>
                <Wrapper>
                    <Navigation></Navigation>
                    <Content></Content>
                    <Footer></Footer>
                </Wrapper>
            </Wrapper>   
        </Backgroung>
    )
}
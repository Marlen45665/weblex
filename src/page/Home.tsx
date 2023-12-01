import { Footer } from "../components/footer/Footer"
import { Navigation } from "../components/navigation/Navigation"
import { Content } from "../components/content/Content"
import purple from "../assets/circle/purple ball.svg"
import red from "../assets/circle/red ball.svg"
import small from "../assets/circle/small.svg"
import {
    Backgroung,
    Wrapper,
    Circle1,
    Circle2,
    Circle3,
    Circle4,
    Circle5
} from "../components/styled"

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
import styled from "styled-components"

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 750px) {
      align-items: flex-start;
    }
`
export const ContentWrapper = styled.div`
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
export const Button = styled.button`
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

// --------------------------------------------------------------------

export const WidgetItem = styled.div`
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
export const WidgetWrapper = styled.div`
    gap: 6px;
    max-width: 165px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const Panel = styled.div`
    margin-top: 46px;
    margin-bottom: 61px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Два столбца с равной шириной */
    gap: 10px; 
`
export const Hidden = styled.div`
    display: none;
     @media (min-width: 750px) {
       display: block;
    }
`
export const Open = styled.div`
    display: none;
     @media (max-width: 750px) {
       display: block;
    }
`
export const WidgetName = styled.div`
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
export const Range = styled.div`
    display: inline-block;
    width: 10px;
    height: 1px;
    background: linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%);
`

// --------------------------------------------------------------------

export const FootWrapper = styled.div`
    display: flex;
    gap: 98px;
    @media (max-width: 980px) {
        flex-direction: column;
        gap: 30px;
    }
`
export const FooterBlock = styled.div`
    max-width: 195px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
`
export const TitleItem = styled.div`
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
export const ListItem = styled.div`
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
export const CustomContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    display: flex;
    gap: 20px;
    @media (max-width: 540px) {
        align-items: flex-start;
    }
`
export const ListFooterItem = styled.ul`
    min-width: 195px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media (max-width: 700px) {
        min-width: 148px;
    }
`
export const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 540px) {
       flex-direction: column;
       gap: 30px;
    }
`
export const Polytics = styled.div`
    color:  #E4E5EA;
    text-align: right;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const PolitycsBox = styled.div`
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
export const SectionBottom = styled.div`
    padding: 45px 16px;
    @media (max-width: 700px) {
        background-color: black;
    }
`

// --------------------------------------------------------------------

export const NavWrapper = styled.div`
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
export const IttemList = styled.ul`
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
export const Item = styled.a`
    color: #E4E5EA;
    text-decoration: none;
    font-weight: 500;
    @media (max-width: 500px) {
        &:last-child {
            display: none;
        }
    }
`
export const Contact = styled.div`
    display: flex;
    gap: 47px;
    align-items: center;

    @media (max-width: 980px) {
        display: none;
    }
`
export const Icon = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
`
export const Logo = styled.a`
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

// --------------------------------------------------------------------

export const Backgroung = styled.div`
    position: relative;
    background-color: #0E1014;
    width: 100%; 
    display: flex;
    justify-content: center;
`
export const Wrapper = styled.div`
    position: relative;
    z-index: 1000;
    min-height: 100vh;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Circle1 = styled.div`
z-index: 4000;
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
export const Circle2 = styled.div`
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
export const Circle3 = styled.img`
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
export const Circle4 = styled.img`
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
export const Circle5 = styled.img`
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

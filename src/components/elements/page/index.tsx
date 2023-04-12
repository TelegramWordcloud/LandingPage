import styled from "styled-components";
import PageContent from "@/components/elements/page-content";

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media(max-width: 1024px){
      height: 100vh;
    }
`;

const BackgroundImage = styled.img`
    min-width: 100vw;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const BackgroundColor = styled.div`
    min-width: 100vw;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #D0D3D7;
`;

export interface IPageProps{
    children,
    imageSRC?: string,

}

const Page = (props: IPageProps) => {
    return (
        <Section>
            {
                props.imageSRC !== undefined ?
                    <BackgroundImage src={props.imageSRC} alt={"Background image"}/> :
                    <BackgroundColor/>
            }
            {props.children}
        </Section>
    )
}

export default Page;
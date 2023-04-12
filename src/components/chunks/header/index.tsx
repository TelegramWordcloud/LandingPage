import {BACKGROUNDS, CHEVRON_RIGHT_ICON} from "@/constants";
import NavBar from "../nav-bar";
import Page from "@/components/elements/page";
import PageContent from "@/components/elements/page-content";
import styled from "styled-components";
import Card from "@/components/elements/card";
import H4 from "@/components/elements/headers/h4";
import H1 from "@/components/elements/headers/h1";
import P from "@/components/elements/paragraphs/p";
import AccentColor from "@/components/elements/accent-color";
import Button from "@/components/elements/button";
import LinkWrapper from "@/components/elements/link-wrapper";
import Link from "next/link";

const HeaderContentMargin = styled.div`
    width: fit-content;
    height: fit-content;
    //margin-top: 180px;
    position: absolute;
    bottom: calc(50% - 90px);
    @media(max-width: 1024px) {
      margin-top: 47px;
    }
`;

const Header = () => {
    return (
        <header>
            <Page imageSRC={BACKGROUNDS.HEADER}>
                <NavBar/>
                <PageContent>
                    <HeaderContentMargin>
                        <Card>
                            <AccentColor><H4>FRAME YOUR CHAT WITH</H4></AccentColor>
                            <H1>WordCloud</H1>
                            <AccentColor><P>Generate a creative gift for anyone you keep in touch with</P></AccentColor>
                            <LinkWrapper>
                                <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL || "/"} target={"_blank"}>
                                    <Button text={"Try for free"} imageSRC={CHEVRON_RIGHT_ICON}/>
                                </Link>
                            </LinkWrapper>
                        </Card>
                    </HeaderContentMargin>
                </PageContent>
            </Page>
        </header>
    )
}

export default Header;
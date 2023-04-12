import Page from "@/components/elements/page";
import PageContent from "@/components/elements/page-content";
import NavBar from "@/components/chunks/nav-bar";
import styled from "styled-components";
import Card from "@/components/elements/card";
import H4 from "@/components/elements/headers/h4";
import AccentColor from "@/components/elements/accent-color";
import H2 from "@/components/elements/headers/h2";
import Link from "next/link";
import Button from "@/components/elements/button";
import {CHEVRON_RIGHT_ICON} from "@/constants";
import LinkWrapper from "@/components/elements/link-wrapper";
import H1 from "@/components/elements/headers/h1";

const FooterNavWrapper = styled.div`
    position: absolute;
    bottom: 0;
`;

const FooterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return(
        <Page>
            <PageContent>
                <FooterContent>
                    <Card centered>
                        <H4><AccentColor>FRAME YOUR CHAT WITH</AccentColor></H4>
                        <H1>WordCloud</H1>
                        <LinkWrapper>
                            <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL || "/"} target={"_blank"}>
                                <Button text={"Try for free"} imageSRC={CHEVRON_RIGHT_ICON}/>
                            </Link>
                        </LinkWrapper>
                    </Card>
                </FooterContent>
            </PageContent>
            <FooterNavWrapper>
                <NavBar/>
            </FooterNavWrapper>
        </Page>
    )
}

export default Footer;
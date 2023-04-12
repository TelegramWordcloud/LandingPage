import Page from "@/components/elements/page";
import {BACKGROUNDS, CHEVRON_RIGHT_ICON, EXAMPLE_IMAGE} from "@/constants";
import PageContent from "@/components/elements/page-content";
import React from "react";
import {FeaturesContent} from "@/components/chunks/features";
import Card from "@/components/elements/card";
import BigP from "@/components/elements/paragraphs/big-p";
import AccentColor from "@/components/elements/accent-color";
import H2 from "@/components/elements/headers/h2";
import P from "@/components/elements/paragraphs/p";
import Link from "next/link";
import Button from "@/components/elements/button";
import LinkWrapper from "@/components/elements/link-wrapper";
import styled from "styled-components";

const ExampleImageWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 350px;
    @media(max-width: 1024px) {
        width: 250px;
        height: 250px;
    }
`;

const ExampleImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    transition: all 100ms;
    &:hover {
        margin-top: 10px;
        margin-left: 10px;
    }
`;

const ExampleShadow = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: #F6D080;
    z-index: 0;
`;

const Examples = () => {
    return (
        <Page imageSRC={BACKGROUNDS.EXAMPLES}>
            <PageContent>
                <FeaturesContent>
                    <ExampleImageWrapper>
                        <ExampleImage src={EXAMPLE_IMAGE} alt={"Example"}/>
                        <ExampleShadow/>
                    </ExampleImageWrapper>
                    <Card>
                        <BigP><AccentColor>This example was generated using the</AccentColor></BigP>
                        <H2>New York Times</H2>
                        <P><AccentColor>telegram channel history</AccentColor></P>
                        <LinkWrapper>
                            <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL || "/"} target={"_blank"}>
                                <Button text={"Generate yours"} imageSRC={CHEVRON_RIGHT_ICON}/>
                            </Link>
                        </LinkWrapper>
                    </Card>
                </FeaturesContent>
            </PageContent>
        </Page>
    )
}

export default Examples;
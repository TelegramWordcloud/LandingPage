import SmallSection from "@/components/elements/small-section";
import styled from "styled-components";
import PageContent from "@/components/elements/page-content";
import H4 from "@/components/elements/headers/h4";
import AccentColor from "@/components/elements/accent-color";
import FeatureList from "@/components/elements/feature-list";
import shortid from "shortid";
import {CHECK_ICON} from "@/constants";

export const FeaturesContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1024px) {
        padding-top: 37px;
        padding-bottom: 37px;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: flex-start;
        gap: calc(50vh - 150px);
    }
`;

const Features = () => {
    return (
        <SmallSection>
            <PageContent>
                <FeaturesContent>
                    <FeatureList
                        features={[
                            <H4 key={shortid.generate()}>
                                That’s what you get <AccentColor>for free</AccentColor>
                            </H4>,
                            <H4 key={shortid.generate()}>
                                Using our generation service
                            </H4>
                        ]}
                    />
                    <FeatureList
                        features={[
                            <H4 key={shortid.generate()}>
                                Up to <AccentColor>2000 words</AccentColor> on a picture
                            </H4>,
                            <H4 key={shortid.generate()}>
                                Scale up to <AccentColor>2000 × 2000 px</AccentColor>
                            </H4>,
                            <H4 key={shortid.generate()}>
                                <AccentColor>Custom</AccentColor> background color
                            </H4>
                        ]}
                        iconSRC={CHECK_ICON}
                    />
                </FeaturesContent>
            </PageContent>
        </SmallSection>
    )
}

export default Features;
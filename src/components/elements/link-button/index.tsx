import Link from "next/link";
import styled from "styled-components";
import H4 from "@/components/elements/headers/h4";
import AccentColor from "@/components/elements/accent-color";
import LinkWrapper from "@/components/elements/link-wrapper";

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const LinkImage = styled.img`
    height: 24px;
`;

export interface ILinkButtonProps {
    text: string,
    iconSRC?: string,
    src: string,
}

const LinkButton = (props) => {
    return(
        <LinkWrapper>
            <Link href={props.src}>
                <LinkContainer>
                    {
                        props.iconSRC !== undefined ?
                            <LinkImage src={props.iconSRC} alt={props.text}/> :
                            <></>
                    }
                    <AccentColor><H4>{props.text}</H4></AccentColor>
                </LinkContainer>
            </Link>
        </LinkWrapper>
    )
}

export default LinkButton;
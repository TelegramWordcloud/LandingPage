import Link from "next/link";
import styled from "styled-components";

const LinkStyling = styled.div`
  > a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const LinkImage = styled.img`
    height: 24px;
`;

const LinkText = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #374E64;
`;

export interface ILinkButtonProps {
    text: string,
    iconSRC?: string,
    src: string,
}

const LinkButton = (props) => {
    return(
        <LinkStyling>
            <Link href={props.src}>
                <LinkContainer>
                    {
                        props.iconSRC !== undefined ?
                            <LinkImage src={props.iconSRC} alt={props.text}/> :
                            <></>
                    }
                    <LinkText>{props.text}</LinkText>
                </LinkContainer>
            </Link>
        </LinkStyling>
    )
}

export default LinkButton;
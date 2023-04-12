import styled from "styled-components";
import _ from "lodash";
import {NAVBAR} from "@/constants";
import shortid from "shortid";
import LinkButton, {ILinkButtonProps} from "@/components/elements/link-button";

const Nav = styled.nav`
    width: calc(100vw - 248px);
    margin: 56px 124px 56px 124px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1024px) {
      flex-direction: column;
      margin: 27px;
      align-items: flex-start;
      gap: 20px;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            {
                _.map(NAVBAR, (navItem: ILinkButtonProps) => (
                    <LinkButton {...navItem} key={shortid.generate()}/>
                ))
            }
        </Nav>
    )
}

export default NavBar;
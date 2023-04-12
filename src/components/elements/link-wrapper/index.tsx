import styled from "styled-components";

const LinkWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  > a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default LinkWrapper;
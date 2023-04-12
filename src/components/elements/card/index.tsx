import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: calc(100vw - 54px);
`;

const StyledCardCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 54px);
`;

const Card = ({centered = false, children}) => {
    return(
        <>
            {
            centered ?
                <StyledCardCentered>
                    {children}
                </StyledCardCentered> :
                <StyledCard>
                    {children}
                </StyledCard>
            }
        </>
    )
}

export default Card;
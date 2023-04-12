import styled from "styled-components";

const StyledButton = styled.div`
    height: 38px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    
    background: #FCC44C;
    border-radius: 10px;
    border: 1px solid #061525;
  
    cursor: pointer;
    user-select: none;
  
    &:hover {
      opacity: 0.8;
    }
`;

const ButtonText = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #061525;
`;

const ButtonImage = styled.img`
    height: 12px;
`;

interface IButtonProps {
    text: string;
    imageSRC?: string;
}
const Button = (props: IButtonProps) => {
    return (
        <StyledButton>
            <ButtonText>{props.text}</ButtonText>
            {
                props.imageSRC !== undefined ?
                    <ButtonImage src={props.imageSRC} alt={props.text}/> :
                    <></>
            }
        </StyledButton>
    )
}

export default Button;
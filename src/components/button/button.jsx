import { ButtonContainer } from './styles';

const Button = ({ children, onClick }) => {
    return (
        <ButtonContainer onClick={onClick} data-cy={`button`}>
            {children}
        </ButtonContainer>
    );
};

export default Button;

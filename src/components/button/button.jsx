import { ButtonContainer } from './styles';

const Button = ({ children, onClick, ...props }) => {
    return (
        <ButtonContainer onClick={onClick} {...props}>
            {children}
        </ButtonContainer>
    );
};

export default Button;

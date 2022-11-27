const Button = ({children,className="btn btn-primary",onClick,type="submit",disabled }) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>{children}</button>
    );
}

export default Button;
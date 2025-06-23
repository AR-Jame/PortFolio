import './Button.css'
const Button = ({ children }) => {
    return (
        <div>
            <button class="btn"><i class="animation"></i>{children}<i class="animation"></i>
            </button>
        </div>

    );
};

export default Button;
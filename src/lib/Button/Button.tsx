import { ButtonHTMLAttributes, MouseEventHandler, FC } from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS; // вариант кнопки
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export enum BUTTON_VARIANTS {
    PRIMARY = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

const Button: FC<TButtonProps> = ({
    children,
    disabled,
    onClick,
    variant = BUTTON_VARIANTS.PRIMARY,
    ...restProps
}) => {
    // если кнопка заблокирована, переданный обработчик не вызывается
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
    };

    return (
        <button disabled={disabled} onClick={handleClick} {...restProps}>
            {children}
        </button>
    );
};

export { Button };

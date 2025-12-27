import type { ReactNode } from "react"

type Props = {
    children?: ReactNode
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger'
}

const Button = (props: Props) => {
    const base = 'cursor-pointer px-4 py-2 rounded text-white border-none focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200'
    const disabledClass = 'disabled:bg-gray-400 disabled:cursor-not-allowed'
    const styles = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-blue-300 hover:bg-blue-400',
        danger: 'bg-red-500 hover:bg-red-600',
    }

    return (
        <button
            className={`${base} ${styles[props.variant || 'primary']} ${props.disabled ? disabledClass : ''}`}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
        >
            {props.children}
        </button>
    )
}

export default Button
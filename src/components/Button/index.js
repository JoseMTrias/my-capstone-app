import StyledButton from './styled';

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
export default function Button({deleteButton, children, type = 'button', ...props}) {
	return (
		<StyledButton className={deleteButton} type={type} {...props}>
			{children}
		</StyledButton>
	);
}

Button.propTypes = {};

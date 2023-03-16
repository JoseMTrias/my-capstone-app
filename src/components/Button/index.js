import StyledButton from './styled';

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
export default function Button({test, children, type = 'button', ...props}) {
	console.log(test);
	return (
		<StyledButton className={test} type={type} {...props}>
			{children}
		</StyledButton>
	);
}

Button.propTypes = {};

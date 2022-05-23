import cn from 'classnames';
import styles from './button.module.css'

export const Button = ({type="s", className, children}) => {
	return (
		<button className={cn(styles.button,
			{
				[styles.buttonL]: type==='l',
				[styles.buttonS]: type==='s',
			},
			className
		)}>
			{children}
		</button>
	);
}
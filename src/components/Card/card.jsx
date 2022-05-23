import cn from "classnames";
import style from './card.module.css'

export const Card = ({ className, children }) => {
	return (
		<li className={cn(style.card, className)}>
			{children}
		</li>
	);
}

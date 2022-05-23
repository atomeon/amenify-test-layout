import cn from "classnames";
import styles from './card.module.css'

export const Card = ({ className, children, parent, theme }) => {

	const localClasses = cn(styles.card, {
		[styles.cardGray]: theme === 'gray',
		[styles.cardLi]: parent === 'ul'
	}, className)
	
	switch (parent) {
		case "ul":
			return (
				<li className={localClasses}>
					{children}
				</li>
			)
	
		default:
			return (
				<div className={localClasses}>
					{children}
				</div>
			)
	}
}

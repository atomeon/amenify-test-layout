
import styles from './slideContainer.module.css'

export const SlideContainer = ({children}) => {
	return (
		<ul className={styles.slideContainer}>
			{children}
		</ul>
	);
}

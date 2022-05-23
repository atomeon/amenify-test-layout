import { Feature } from '../feature/feature';
import { features } from './mock';
import styles from './features.module.css';

export const Features = () => {
	
	return (
		<section className={styles.features}>
			{
				features.map((feature) => <Feature {...feature}/>)
			}
		</section>
	);
}


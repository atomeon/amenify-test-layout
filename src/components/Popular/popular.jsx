import { PopularCard } from '../PopularCard';
import { popularList } from './mock';

import styles from './popular.module.css';
import { SlideContainer } from '../SlideContainer/slideContainer';

export const Popular = () => {
	return (
		<section className={styles.section}>
			<h2>Most popular orders</h2>
			<SlideContainer>
				{
					popularList.map(card => <PopularCard key={card.category} {...card}/>)
				}
			</SlideContainer>
		</section>
	);
}



import { Favorite } from '../Favorite';
import { SlideContainer } from '../SlideContainer/slideContainer';
import styles from './favorites.module.css';
import { favorites } from './mock';

export const Favorites = () => {
	return (
		<section className={styles.section}>
			<h2>Kylee’s Favorites</h2>
			<SlideContainer>
				{
					favorites.map(favorite => <Favorite key={favorite.category} {...favorite}/>)
				}
			</SlideContainer>
		</section>
	);
}


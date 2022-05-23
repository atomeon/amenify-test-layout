import { Card } from "../Card";
import { Button } from "../Button";

import styles from './popular.module.css';

export const PopularCard = ({category, plan, price, img}) => {
	return (
		<Card className={styles.popularCard}>
				<div className="mb4">{category}</div>
				<div className="mb4">{plan} </div>
				<div className="secondary-text mb8">{price}</div>
				<div className={styles.favoriteBottom}>
					<Button type="s">
						200 booked today
					</Button>
				</div>
			<img width={45} height={55}	src={img} alt="popular icon" />
		</Card>
	);
}

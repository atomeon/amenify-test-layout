import { Card } from "../Card";
import VectorImg from "../../../public/images/Vector.svg"
import { Button } from "../Button";

import styles from './favorite.module.css';

export const Favorite = ({category, plan, price}) => {
	return (
		<Card>
			<div className="mb4">{category}</div>
			<div className="mb12">{plan} <span className="secondary-text">{price}</span></div>
			<div className={styles.favoriteBottom}>
				<Button type="l">
					Book again
				</Button>
				<img width={15.93} height={14.61} src={VectorImg} alt="favorite" />
			</div>
		</Card>
	);
}

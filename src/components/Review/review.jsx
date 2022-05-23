
import { Card } from '../Card';
import styles from './review.module.css';
import CoverImg from '../../../public/images/review-cover.jpg'
import StarImg from '../../../public/images/star.svg'
import cn from 'classnames';

export const Review = () => {
	return (
		<section className={styles.section}>
			<Card theme="gray" className={styles.review}>
				<img className={styles.image} src={CoverImg} width="100%" height="227" alt="" />
				<div className={styles.info}>
					<div className={cn(styles.title, 'mb8')}>Trusted Pro Spotlight: <span>Sophie B.</span></div>
					<div className={styles.overview}>
						<div>
							Excellent 5.0&nbsp;
							<img src={StarImg} alt="star ico" />
							<img src={StarImg} alt="star ico" />
							<img src={StarImg} alt="star ico" />
							<img src={StarImg} alt="star ico" />
							<img src={StarImg} alt="star ico" />
						</div>
						<div>Top Rated Pro</div>
						<div>100+ appointments completed</div>
					</div>
					<p>
						<em>
							“I live in Denver with my husband and our two daughters. We love riding our bikes and failing at new baking recipes. :D
							<br/>
							<br/>
							I love working for Amenify. They believe in great service and I’m provided everything I need.”
						</em>
					</p>
					<hr/>
					<div className={cn(styles.title, 'mb8')}>
						A glowing review:
					</div>
					<p className='mb0 mt0'>Thomas D. says, <em>“Sophie did a wonderful job. My home is so clean and I saved money. I can’t wait to book again.”</em> </p>
				</div>
			</Card>
		</section>
	);
}


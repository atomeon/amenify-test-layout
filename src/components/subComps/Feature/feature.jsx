import styles from './feature.module.css';

export const Feature = ({src, title, subTitle}) => {
	return (
		<div className={styles.feature}>
			<img src={src} alt="feature icon" width={62} height={62}/>
			<div className={styles.title}>{title}</div>
			<div className={styles.subTitle}>{subTitle}</div>
		</div>
	);
}


import styles from './infoPanel.module.css';

export const InfoPanel = () => {
	const name = 'Kaylie';
	return (
		<section className={styles.infoPanel}>
			<div>Hello, {name}</div>
			<div>Wallet credits: <span>$15</span></div>
		</section>
	);
}


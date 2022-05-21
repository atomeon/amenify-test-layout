import styles from './header.module.css';

import Logo from '../../../public/images/logo.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<span className={styles.address}>400 Winchester @ Vinings Apartment Homes</span> <img src={Logo} alt="logo"/>
		</header>
	);
}


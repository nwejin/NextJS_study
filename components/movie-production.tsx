interface CompanyProps {
    logo: string;
    name: string;
}

import styles from '../styles/movie.production.module.css';

export default function 
MovieProduction({ logo, name}: CompanyProps) {
    // console.log(logo)
    return (
        <div className={styles.container}>
            <img src={logo} alt={name} />
            <p>{name}</p>
        </div>
    )
}
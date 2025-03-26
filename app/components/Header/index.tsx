import Image from 'next/image'
import styles from './styles.module.scss'
import Logo from '../../assets/logo.png'

export default function Header(){
    return(
        <header className={styles.header}>
            <Image src={Logo} height={48} width={48} alt='logo'/>
        </header>
    )
}
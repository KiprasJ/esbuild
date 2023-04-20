import styles from './text.module.scss'

interface Props {
    children: React.ReactNode
}
export const Text = ({children}: Props) => {
    return (<div className={styles.veryGood}>{children}</div>)
}

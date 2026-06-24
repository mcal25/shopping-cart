import { Link } from "react-router";
import styles from './Homepage.module.css'
import khajit from './assets/khajit.png'


const Homepage = () => {

return (
    <>
      <h1 className={styles.shopTitle}>Khajit Has Wares If You Have Coin</h1>
      <img src={khajit} className={styles.khajit} alt="cat with wares if you haz coin" />
      <Link to='Shop'><button className={styles.viewWaresButton}>View Wares</button></Link>
    </>
  )
}

export { Homepage };
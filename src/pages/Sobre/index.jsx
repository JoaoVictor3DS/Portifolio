import styles from './Sobre.module.css'
import avatar from './images/avatar.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.texts}>
                    <h2>Sobre</h2>
                    <p>Sou <span>João Victor</span> <br />
                        <strong>Dev Full Stack</strong> </p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icons}>
                    <img height='40px' className='{styles.icon}' src={html} alt="Ícone do html" />
                    <img height='40px' className='{styles.icon}' src={css} alt="Ícone do css" />
                    <img height='40px' className='{styles.icon}' src={js} alt="Ícone do js" />
                    <img height='40px' className='{styles.icon}' src={react} alt="Ícone do react" />
                    <img height='40px' className='{styles.icon}' src={node} alt="Ícone do node" />
                    <img height='40px' className='{styles.icon}' src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre
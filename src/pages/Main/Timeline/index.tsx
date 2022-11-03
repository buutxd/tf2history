import styles from './Timeline.module.scss';
import first from '../../../assets/img/medal-first-40px.png';
import second from '../../../assets/img/medal-second-40px.png'
import third from '../../../assets/img/medal-third-40px.png'
import data from '../../../data/teams.json'




export default function Timeline() {

    return (
        <div className={styles.container}>

            <div className={styles.timeline}>

                <ul >
                    {data.map(item => (
                        <li >
                            <div className={styles.timeline__content} >
                                <div className={styles.timeline__content}>



                                    <table className={styles.table} >

                                        <>

                                            <h2 className={styles.date}>{item.date}</h2>
                                            <h1>{item.title} <span className={styles.lType}>{item.leagueType}</span></h1>
                                            <tr>
                                                <td><div>INVITE - <img src={first} alt="medal first" className={styles.medal} />{item.InviteTeam}</div></td>
                                                <td><div>CENTRAL - <img src={first} alt="medal first" className={styles.medal} />{item.CentralTeam}</div></td>
                                            </tr>

                                            <tr className={styles.hidden}>
                                                <td><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.InviteSecond}</div></td>
                                                <td className={styles.td}><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.CentralSecond}</div></td>
                                            </tr>

                                            <tr className={styles.hidden}>
                                                <td><div> {'  '} < img src={third} alt="medal first" className={styles.dMedal} />{item.InviteThird}</div></td>
                                                <td className={styles.td}><div>{'  '}<img src={third} alt="medal first" className={styles.dMedal} />{item.CentralThird}</div></td>
                                            </tr>

                                            <tr>
                                                <td><div>ACESSO - <img src={first} alt="medal first" className={styles.medal} />{item.AcessTeam}</div></td>
                                                <td><div>ABERTA - <img src={first} alt="medal first" className={styles.medal} />{item.OpenTeam}</div></td>
                                            </tr>

                                            <tr className={styles.hidden}>
                                                <td><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.AcessSecond}</div></td>
                                                <td className={styles.td}><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.OpenSecond}</div></td>
                                            </tr>

                                            <tr className={styles.hidden}>
                                                <td><div> {'  '} < img src={third} alt="medal first" className={styles.dMedal} />{item.AcessThird}</div></td>
                                                <td className={styles.td}><div>{'  '}<img src={third} alt="medal first" className={styles.dMedal} />{item.OpenThird}</div></td>
                                            </tr>

                                        </>

                                    </table>

                                </div>
                            </div>
                        </li>
                    ))}


                </ul>

            </div>

        </div >
    )
}
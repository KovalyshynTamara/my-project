import NeedHelp from '../components/common/NeedHelp'
import OurTeamItem from '../components/common/OurTeamItem'
import blockTitle from './../data/blockTitle.json'
import ourTeamItem from './../data/ourTeamItem.json'
import teamImg from './../assets/imgs/team-img.png'

function OurTeam() {
    return (
        <div>
            <section id='team' className='blue-bg'>
                <div className="container">
                    <h2 className="section-title">{blockTitle.team.title}</h2>
                    <img src={teamImg} alt="Our Team" className='teamImg'/>
                    <h3 className='text'>{blockTitle.team.text}</h3>
                    <p className="subtitle">{blockTitle.team.subtitle}</p>
                    <div className="team-wrap">
                        {ourTeamItem.map((item, index) => {
                            return (<OurTeamItem name={item.name} position={item.position} image={item.image} key={index} />)
                        })}
                    </div>
                </div>
            </section>
            <NeedHelp/>
        </div>
        

    )
}

export default OurTeam
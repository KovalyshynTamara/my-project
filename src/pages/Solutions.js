import Choose from "../components/Chose"
import Numbers from "../components/Numbers"
import NeedHelp from "../components/common/NeedHelp"
import SolutionsItem from "../components/common/SolutionItem"
import SolutionCard from "../components/SolutionCard"

function Solutions() {
    return (
        <div>
            <SolutionsItem />
            <SolutionCard/>
            <Choose />
            <Numbers />
            <NeedHelp />
            
        </div>
    )
}
export default Solutions
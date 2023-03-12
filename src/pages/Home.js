import Benefits from "../components/Benefits"
import FirstSection from "../components/common/FirstSection"
import SecondSection from "../components/common/SecondSection"
import Numbers from "../components/Numbers"
import Pricing from "../components/Prising"
import Blog from "./Blog"
import Contacts from "./Contacts"


function Home() {
    return (
        <main>
            <FirstSection />
            <SecondSection />
            <Numbers />
            <Benefits />
            <Pricing />
            <Blog />
            <Contacts/>
        </main>
    )
}

export default Home
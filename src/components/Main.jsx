import Card from "./Top-card";
import topCdata from "../data/topCdata";
import BCard from "./Bottom-card";
import bottomCdata from "../data/bottomCdata";

function Main() {
    return (
        <main>
            <div className="main-top">
                {topCdata.map((each, index) => {
                    return <Card
                        key={index}
                        id={index}
                        riseFall={each.riseFall}
                        SimgURL={each.SimgURL}
                        username={each.username}
                        fCount={each.fCount}
                        ArrowimgURL={each.ArrowimgURL}
                        tCount={each.tCount} />
                })}
            </div>
            <div className="main-bottom">
                <h1>Overview today</h1>
                <div className="card-wrapper">
                    {bottomCdata.map((each, index) => {
                        return <BCard
                            key={index}
                            id={index}
                            riseFall = {each.riseFall}
                            event={each.event}
                            Simg={each.Simg}
                            rCount={each.rCount}
                            Iimg={each.Iimg}
                            percentage={each.percentage} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Main;
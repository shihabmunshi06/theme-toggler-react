function BCard(props) {

    let rise = props.riseFall;
    let textColor = {
        color: ""
    }
    if(rise  === "rise"){
        textColor.color = "hsl(163, 72%, 41%)"
    }else{
        textColor.color = "hsl(356, 69%, 56%)"
    }

    return (
        <div className="card flex col sb">
            <div className="top flex sb">
                <p className="event">{props.event}</p>
                <div className="social">
                    <img src={props.Simg} alt="" />
                </div>
            </div>
            <div className="bottom flex sb">
                <p className="rise-count">{props.rCount}</p>
                <div className="arrow-text flex">
                    <div className="arrow flex">
                        <img src={props.Iimg} alt="" />
                    </div>
                    <p className="percentage" style={textColor}>{props.percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default BCard
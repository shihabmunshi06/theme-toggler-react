function Card(props) {
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
        <div className="card flex sb col">
            <div className="social-username flex">
                <div className="social">
                    <img src={props.SimgURL} alt="" />
                </div>
                <p className="username">{props.username}</p>
            </div>
            <div className="numbers">
                <p className="f-count">{props.fCount}</p>
                <p className="f-text">F O L L O W E R S</p>
            </div>
            <div className="arrow-text flex">
                <div className="arrow flex">
                    <img src={props.ArrowimgURL} alt="" />
                </div>
                <p className="today" style={textColor}>{props.tCount} Today</p>
            </div>
        </div>
    )
}

export default Card
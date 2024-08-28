import StatisticLine from "./StatisticLine"

const Statistics = (props) => {

    if (props.all === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
    <>
    <StatisticLine text="Good" value={props.good}/>
    <StatisticLine text="Neutral" value={props.neutral}/>
    <StatisticLine text="Bad" value={props.bad}/>
    <StatisticLine text="All" value={props.all}/>
    <StatisticLine text="Average" value={props.average}/>
    <StatisticLine text="Positive" value={props.positive} percentage=" %"/>
    </>
  ) 
}

export default Statistics
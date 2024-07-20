const Course = (props) => {
    const total_sum = props.course.parts.map(x => x.exercises)
                                        .reduce((a, b) => a + b, 0)

    const Header = () => <h1>{props.course.name}</h1>
      
    const Content = () => <>{props.course.parts.map(x => <p key = {x.id}>{x.name} {x.exercises}</p>)}</>

    const Total = () => <h5>total of {total_sum} exercises</h5>

    return (
        <>
            < Header />
            < Content />
            < Total />
        </>
    )
}

export default Course
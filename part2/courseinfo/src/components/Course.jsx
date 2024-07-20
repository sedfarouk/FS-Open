const Course = (props) => {
    const Header = () => {
        return (
            <>
                <h1>{props.course.name}</h1>
            </>
        )
    }
      
    const Content = () => {
        return (
            <>
                {props.course.parts.map(x => <p key = {x.id}>{x.name} {x.exercises}</p>)}
            </>
        )
    }

    return (
        <>
            < Header />
            < Content />
        </>
    )
}

export default Course
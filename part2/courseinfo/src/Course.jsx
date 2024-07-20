const Course = ({course}) => {
    const totalSum = course.parts.reduce((prev, {exercises}) => prev + exercises, 0)

    const Header = () => <h1>{course.name}</h1>
      
    const Content = () => <>{course.parts.map(x => <p key = {x.id}>{x.name} {x.exercises}</p>)}</>

    const Total = () => <h5>total of {totalSum} exercises</h5>

    return (
        <>
            < Header />
            < Content />
            < Total />
        </>
    )
}

export default Course
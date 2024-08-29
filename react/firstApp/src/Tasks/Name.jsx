
const Name = ({name,color}) => {
    const style={
        color: color
    }
  return (
    <div>
        <h1 style={style}>Name : {name}</h1>
    </div>
  )
}

export default Name

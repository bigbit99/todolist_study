

const Todo = ({todoProps}) => {

    return (
        <div style={{border : '1px solid black'}}>
            <p>{todoProps.title}</p>
            <span>{todoProps.content}</span>
            <button>삭제하기</button>
            <button>완료</button>
        </div>
    )
}

export default Todo;
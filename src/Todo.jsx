

const Todo = ({todoProps}) => {
    //비구조화 할당 
    const {title, content} = todoProps 
    
    return (
        <div style={{border : '1px solid black'}}>
            <p>{title}</p>
            <span>{content}</span>
            <button>삭제하기</button>
            <button>완료</button>
        </div>
    )
}

export default Todo;

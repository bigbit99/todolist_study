import {useState} from "react"; //리액트 훅 임포트
import Todo from "./Todo";

const TodoListPage = () => {
    //함수, state(값) 넣는 곳
    const [title, setTitle] = useState("")  
    const [content, setContent] = useState("")  
    const [contentList, setContentList] = useState([])  


    const onRegister = () => {
        const todo = {title:title, content:content, isComplete:false} //key : 변수 
        setContentList([...contentList, todo])
        //console.log(contentList)
    }

    return (
        <div>
            <div>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value);}} />
                <input type="text" value={content} onChange={(e) => {setContent(e.target.value);}}/>
                <button onClick={onRegister}>등록하기</button>
            </div>
            <div>  
                <h1>완료 안된 것</h1> 
                {contentList.map((todo, index)=>{
                    console.log(todo, index)
                    if(!todo.isComplete) {
                        return (
                            <Todo key={index} todoProps={todo}/>
                        )
                    } else {
                        return null;
                    }
                })}
                {/* 배열로 map 돌려서 통으로 찍어냄 */}
            </div>
            
            <div>   
                <h1>완료된 것</h1>
                {contentList.map((todo, index)=>{
                    if(todo.isComplete) {
                        return (
                            <Todo todoProps={todo}/>
                        )
                    } else {
                        return null;
                    }
                })}
                {/* 배열로 map 돌려서 통으로 찍어냄 */}
            </div>
        </div>

    )
}

export default TodoListPage;
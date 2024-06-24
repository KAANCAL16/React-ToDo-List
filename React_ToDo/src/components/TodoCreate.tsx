import '../css/TodoCreate.css'

function TodoCreate(){
    return(
        <div className='todo-create'>
           <input className='todo-create-input' placeholder='Todo Giriniz...' type="text" />
           <button className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate;
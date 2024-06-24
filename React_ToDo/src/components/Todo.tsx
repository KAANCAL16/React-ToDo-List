import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
/// CSS ///
import "../css/Todo.css"

function Todo(){
    return(
        <div className="todo">
         <div>Ben İlk Todoyum</div>
         <div className="icons">
            <IoMdRemoveCircleOutline style={{marginRight:"8px"}} />
            <FaEdit />
         </div>
        </div>
    )
}

export default Todo;
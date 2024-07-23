import { useState } from "react"
import './Todo.css'
function Todo(){
    const [activity, setActivity] = useState("")
    const [list, setList] = useState([])
    function addActivity(){
        // setList([...list,activity])
        // console.log("list",list);
        setList((list)=>{
            const updatedData=[...list,activity]
            console.log(updatedData);
            setActivity('')
            return updatedData;
           
        })
    }
    function deleteActivity(i){
        const updatedData = list.filter((elem,id)=>{
            return i!=id;
        })
        setList(updatedData)

   }

    return(
        <div>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input type="text" placeholder="add activity" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
                <button onClick={addActivity}>ADD</button>

                <p className="listheading">Lists</p>
                {list!=[] && list.map((data,i)=>{
                    return(
                        <div key={i}>
                            <div className="listdata">{data}
                            <div className="deletebutton">
                                <button className="btn" onClick={()=>deleteActivity(i)}>Delete</button>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Todo
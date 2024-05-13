import { useContext } from "react"
import MyContext from "../context/myContext"

function CreateComment(){ 
    const {comment} = useContext(MyContext)
    if(comment === false) return 
    return <div>
  <div className="comment-box text-sm bg-violet-100 m-4 p-4" >
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias libero, iusto modi similique fugit repellendus.</p>
  </div>
  <div>
  <input type="text" className="w-full" />
  </div>
    </div>
}

export default CreateComment
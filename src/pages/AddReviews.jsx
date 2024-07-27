import { useNavigate } from "react-router-dom"
import FormComponent from "../components/FormComponent"

function AddReviews(){
   const navigate = useNavigate()
   
   function handleCancel (){
    navigate('/')
   }
 return <div>
  <div className="flex justify-between px-3 py-3 bg-violet-900">
   <h2 className="text-violet-100 text-xl">Rate & Share</h2>
   <button onClick={handleCancel} className="text-violet-300">Cancel</button>
  </div>
  <FormComponent/>
 </div>
}

export default AddReviews
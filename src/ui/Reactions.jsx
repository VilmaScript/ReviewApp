import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function Reaction (){
 return <div className="flex justify-around pt-2">
<AiFillDislike className="text-violet-300 size-6"/>
<AiFillLike className="text-violet-300 size-6"/>
<FaCommentDots className="text-violet-300 size-6"/>
<FaShare className="text-violet-300 size-6"/>
 </div>
}

export default Reaction
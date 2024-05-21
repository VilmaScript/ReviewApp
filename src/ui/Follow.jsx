function Follow({follow, number}){
 return <div className="p-3 bg-white dark:bg-slate-900 mx-4 my-3 rounded-lg">
  <div>
<div className="flex justify-between mb-3">
<h4 className="font-medium">{follow}<span className="text-gray-400">({number})</span></h4>
<small>see all</small>
</div>
   <div className="flex justify-around">
    <img src="/img1.jpg" className="rounded-full size-12  bg-cover object-cover bg-center"   />
    <img src="/img4.jpg" className="rounded-full size-12  bg-cover object-cover bg-center"  />
    <img src="/img5.jpg" className="rounded-full size-12  bg-cover object-cover bg-center"  />
    <img src="/img4.jpg" className="rounded-full size-12  bg-cover object-cover bg-center"  />
    <img src="/img1.jpg" className="rounded-full size-12  bg-cover object-cover bg-center"  />
    
   </div>
  </div>
 </div>
}


export default Follow
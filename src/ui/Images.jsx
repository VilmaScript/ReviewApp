import { useState } from "react";
import Modal from "./Modal";

function Images({review}){

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };


 return  <><div className="grid grid-cols-3 gap-4 ">
  <div  className="col-span-2 ">
  <img onClick={() => handleImageClick(review?.img_one)}  className="h-32 w-full object-cover rounded-md" src={review?.img_one} alt="Uploaded Image" />
  </div>
  <div >
  <img onClick={() => handleImageClick(review?.img_two)} className="h-32 w-full object-cover rounded-md"  src={review?.img_two} alt="pizza" />
  </div>
 </div>
 <Modal isOpen={isModalOpen} imageSrc={selectedImage} onClose={handleCloseModal} />
 </>
}

export default Images

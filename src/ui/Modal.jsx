function Modal({ isOpen, imageSrc, onClose }){
      if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative">
          <img src={imageSrc} alt="Full view" className="size-64 md:size-96 object-cover"/>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-4xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;

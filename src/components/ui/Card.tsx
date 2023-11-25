

const Card = (props:any) => {
  return (
    <div>
    <div className="bg-second rounded p-2">
      <div className="flex justify-end gap-2 mb-2"><img src="src/assets/input_img/button_1.gif" alt="button" /><img src="src/assets/input_img/button_1.gif" alt="button" /> <img src="src/assets/input_img/button_1.gif" alt="button" />  </div>
      <div className="bg-white rounded p-2 border  border-app border-solid">
      <div className="flex  justify-center items-center gap-2 mb-3">
        < figure className="bg-neutral-300 rounded p-1"><img src={props.img1} className="border-4 border-solid border-white"  alt="Saju"/></figure>
       <figure><img src={props.img2} alt="" /></figure>
    

        </div>
        <div>
<figure><img src={props.img3} alt="Saju"/></figure>
        </div>
        
      </div>
       
    </div>
    <figure className="flex items-end">
      <img src={props.img4} alt="" />
      <img src={props.img5} className="m-2 mt-4" alt="" /></figure>
    </div>
  )
}

export default Card
import { MutableRefObject, ReactNode , useRef} from "react";
import { useNavigate } from "react-router-dom";
const FormComponent = () => { 
  const navigate = useNavigate();
  const input:MutableRefObject<HTMLInputElement> = useRef()
  const handleClick = () => {
 
  
    const modal:any = document.getElementById('my_modal_1');
    if (input.current.value) {
      
      modal.showModal?.();
    }else{
      navigate("/fortune")
    }
  };
  const numbers:ReactNode[] = [1,2,3,4,5,6,7,8,9,10,11,12]
  // const months = [
  //   'January', 'February', 'March', 'April', 'May', 'June',
  //   'July', 'August', 'September', 'October', 'November', 'December'
  // ];
  const days:any = Array.from({ length: 31 }, (_, index) => index + 1);
  const currentYear = new Date().getFullYear();
  const years:any = Array.from({ length: 50 }, (_, index) => currentYear - index);
  return (
    <div className="bg-second p-2 h-44  mt-2 rounded text-center">
        <div className="bg-white h-40 flex flex-col  p-2 gap-1 rounded">
   <div className="flex gap-2 items-center ">
    <span className="bg-slate-300 p-1 text-sm font-semibold text-black w-32 text-center">이 름</span>
    <input type="text" className="w-32 border p-1 focus:outline-none" id="input_name" ref={input} required />
    <input type="radio" name="radio" id="남자"  />
    <label htmlFor="남자">남자</label>
    <input type="radio" name="radio" id="여자"/>
    <label htmlFor="여자">여자</label>
    
   </div>
   <div className="flex gap-2 items-center ">
    <span className="bg-slate-200 p-1 text-sm font-semibold text-black w-32 text-center">생년월일시</span>
  <div className="h-7 flex gap-1">
  <select name="day"  id="" className="p-1 text-center rounded">{
numbers.map((num:ReactNode,i)=>{
 return <option key={i} value="" >{num}</option>
})
}</select>
<select name="year" id="year" className="p-1 text-center rounded" >
        {days.map((year:any) => (
          <option key={year} value={year} >
            {year}
          </option>
        ))}
      </select>
<select name="year" id="year" className="p-1 text-center rounded">
        {years.map((year:any) => (
          <option key={year} value={year} >
            {year}
          </option>
        ))}
      </select>
  </div>
  
  
    
   </div>
   <div className="flex gap-2 items-center ">
    <span className="bg-slate-200 p-1 text-sm font-semibold text-black w-32 text-center">양력/음력</span>
    <input type="radio" name="radio1" id="1"  />
    <label htmlFor="1">윤달</label>
    <input type="radio" name="radio1" id="2"/>
    <label htmlFor="2">평달</label>
    
   </div>
   <div className="flex gap-2 items-center ">
    <span className="bg-slate-200 p-1 text-sm font-semibold text-black w-32 text-center">평달/윤달</span>
    <input type="radio" name="radio2" id="3"  />
    <label htmlFor="3">양력</label>
    <input type="radio" name="radio2" id="4"/>
    <label htmlFor="4">음력</label>
   </div>
     </div>
     <figure className="mt-4  flex items-center justify-center"><img src="src/assets/input_img/resultbutton.gif" className="mt-2" alt=""  onClick={handleClick}/></figure>
   
     {/* 이름을 입력하세요! invalid
     정확히 기재하셨나요? */}
  <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
    <p className="py-4">이름을 입력하세요</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    <figure className="flex gap-2 items-end mb-2"> <img src="src/assets/dot.gif" alt="" /> <img src="src/assets/input_img/barannae.jpg" alt="" />
    </figure>  
  <img src="src/assets/underbar.jpg" alt="" />
    </div>
  )
}

export default FormComponent
import React, { ReactNode } from 'react'
import Poster from '../components/ui/Poster'
import Months from '@/components/ui/Months'
import {FaArrowAltCircleUp}  from 'react-icons/fa'
type Props = {}

export default function Fortunepage({}: Props) {
  const numbers: any = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className='flex flex-col  md:items-center  h-screen  text-black'>
 <div className='mt-5'> 
 <div className='relative flex items-center max-w-max '>
 <img src="src/assets/background_img_1_1.jpg" className='relative h-12' alt="icon" />
  <p className='absolute  text-white left-2 text-sm'>결과풀이</p>

<p className='absolute left-28 text-white text-sm' >  올해의토정비결</p>
<div> </div>

 <img src="src/assets/icon/B2_icon_1.png" className='absolute top-2 left-16' alt="" />
 <button className='absolute right-2 btn btn-success text-white btn-sm ' onClick={()=>window.print()}>다운로드</button>
 </div>

 <table className='border border-collapse mx-2 table mt-1 '>
 <tbody className='border border-collapse'>
  <tr >
    <td className='border bg-slate-50 '>님</td>
    
    <td >[ 자 ] 양력 -- 모름  /  음력 -- 모름</td></tr>
    <tr>
    <td className='border bg-slate-50 ' >풀이시간</td>
    <td className=''>2023년 11월 25일 (토) / 오후 01:54</td></tr>
    <tr>
    <td className='border bg-slate-50 '>상세년도</td>
    <td>단기 4356 년 / 불기 2567 년</td></tr>
  
 </tbody>
 
</table>
<table className='border border-collapse mt-5 table text-sm '>
  <tbody>
 <tr> 
        <th className='border bg-slate-500 text-white w-28'>사주명식</th>
        <th className=' border w-28'>시주</th>
        <th className=' border w-28'>일주</th>
        <th className=' border w-28'>월주</th>
        <th className=' border w-28'>년주</th>
        
    </tr>
    <tr className='text-center'>
      <td className='border h-10'>천간</td>
      <td className='border h-10'></td>
      <td className='border h-10'>日元</td>
      <td className='border h-10'></td>
      <td className='border h-10'></td>
    </tr>
    <tr className="text-center">
      <td className='border h-10'>지지</td>
      <td className='border'>	-수</td>
      <td className='border'></td>
      <td className='border'></td>
      <td className='border'></td>
      
    </tr>
    <tr className="text-center">
      <td className='border h-10'>지장간</td>
      <td className='border'></td>
      <td className='border'></td>
      <td className='border'></td>
      <td className='border'></td>
     
    </tr>
    <tr className="text-center">
      <td className='border h-10'>십이운성</td>
      <td className='border'></td>
      <td className='border'>日元</td>
      <td className='border'></td>
      <td className='border'></td>
      
    </tr>
    <tr className="text-center">
      <td className='border h-10'>신살</td>
      <td className='border'></td>
      <td className='border'>공망살(空亡殺) </td>
      <td className='border'>
공망살(空亡殺)</td>
      <td className='border'>공망살(空亡殺) </td>
   
    </tr>
    </tbody>
 </table>
 <div className='mt-8 relative '>
 <img src="src/assets/background_img_1_2.jpg" className='h-20' alt="Bg" />
<img src="src/assets/icon/B2_icon_F_2.png" className='absolute -top-3 left-5' alt="" />
 </div>
{/* <div className='border rounded-xl mt-5 h-64'>
<p></p>
</div> */}

<div className='border rounded-xl bg-slate-100 flex flex-col items-center mt-5 w-auto sm:w-[600px]  p-6 ' >
  <div className='bg-white p-4 flex flex-col gap-5'>
 <img src="src/assets/avatar/1.jpg" alt="1" />
 <img src="src/assets/poster/S142.jpg" alt="S142" />
 <div className='font-light leading-8 text-sm p-2  '>
   <p className='m-2 mb-5'>사호단기(四皓團棋) 소유세려(消遺世慮)
네 명의 어른들이 바둑을 두면서 세상 근심을 잊고 있구나.
수조창파(垂釣滄波) 종득거린(終得巨隣)
푸른 강물에 낚시 줄을 드리우니 커다란 고기를 낚게 되리라. </p>
 <p className='m-2 mb-5'>2월부터 4월까지에 해당하는 춘(春)절의 신수를 보면 세상 근심 다보내고 안락한 괘입니다.
일신이 편안하고 안락하니 찾아오는 사람이 많아서 즐거이 지내며 근심과 걱정이 없이 부귀
영화를 누리겠습니다.  </p>
 <p className='m-2 mb-5'>낚시를 푸른 강물에 던지니 마침내 큰 고기를 얻는 형세입니다. 노력하면 노력 이상의 큰 이득
을 얻겠습니다. </p>
 <p className='m-2 mb-5'>의외횡재(意外橫材) 생활태평(生活太平)
어려운 가운데 뜻밖의 횡재를 하여 몸과 마음이 태평 하리라.
어유춘수(魚遊春水) 양양자득(洋洋自得)
얼음 풀린 연못 속에서 유영하는 고기같이 당당하게 되리라. </p>
 <p className='m-2 mb-5'>5월부터 7월까지에 해당하는 하(夏)절의 신수를 보면 뜻밖에 횡재하게되니 생활이 태평하겠습
니다. 고기가 봄물에 놀듯 의기양양하게 활개칠 일이 저절로 생기겠습니다. 사람을 알아보고
인재들이 저절로 찾아오는 모양입니다. 그들이 자기 일처럼 힘써 도와주겠으니 하는 일에 어려
움이 전혀 없겠습니다. 좋은 기회이니 부모에게 효도하고 가족간에 사랑하면서 살아야 합니다. </p>
 </div>
 <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/> </button>
  <hr />
  <Poster poster={"src/assets/poster/S142.jpg"} image={"src/assets/avatar/106.jpg"}/>
  <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <hr />
  <Poster poster={"src/assets/poster/S107.jpg"} image={"src/assets/avatar/107.jpg"}/>
  <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <hr />
  <Poster poster={"src/assets/poster/S108.jpg"} image={"src/assets/avatar/108.jpg"}/>
  <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <hr />
  <Poster poster={"src/assets/poster/S109.jpg"} image={"src/assets/avatar/109.jpg"}/>
  <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <hr />
 
  <img src="src/assets/poster/S110.jpg" alt="" className='w-full' />

  {numbers.map ((num:any)=>{
 return <div key={num}><Months  month={`src/assets/month_img/${num}.jpg`}/> <hr /> </div>
  })}

<button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <hr />
  <img src="src/assets/poster/S082.jpg" alt="" />
  <div className='flex'>
  <img src="src/assets/avatar/82.jpg" alt="" />
  </div>
  <hr />
  <button className='btn btn-square self-end btn-sm mr-4 btn-info text-white' onClick={()=>window.scrollTo(0,0)}><FaArrowAltCircleUp/></button>
  <img src="src/assets/poster/S082.jpg" alt="" />
  <div className=''>
    <p className='inline'>  <img src="src/assets/avatar/82.jpg"className='inline-block ' alt="" /></p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis tempore magni et recusandae doloribus quidem iste possimus porro deleniti quae. Nemo, dignissimos. Ab, fuga voluptate porro incidunt dolorem ad voluptates.

</div>
  </div>
</div>
 </div>

    </div>
  )
}
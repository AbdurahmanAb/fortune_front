import React from 'react'

type Props = {}

const Poster = (props: any) => {
  return (
    <div className='text-sm'>

  
    <img src={props.poster} alt="" />
    <div className='flex gap-2 mt-3' >
  <img src={props.image} alt="" />
  <p className='w-96 text-sm font-extralight'>상대가 비록 이성이라고 해도 공과 사는 분명히 구분
  하도록 해야 합니다. 새로운 사람을 만나는 것은 어려
  우며 특히 짝사랑은 도와줄 사람이 없으면 어렵다고
  보아야 하므로 미련을 가질 필요는 없습니다 </p>
  
    </div>
   
    </div>
  )
}
export default Poster;
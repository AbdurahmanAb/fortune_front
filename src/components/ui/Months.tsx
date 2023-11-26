

type Props = {}

function Months(props: any) {
    
  return (
    <div className='flex bg-white text-xs sm:text-sm p-7 items-center  gap-4'>
    <img src={props.month} alt="" />
<p className='flex flex-col  gap-4 mt-3 pt-2 font-thin p4 '> 
  <span >재성이 와서 문을 비추니 이익을 볼 괘입니다. 목마른 용이 물을 만난 격이니 재물을 원하면
재물이 직장을 원하면 직장이 시험을 치르면 합격이 순탄하겠습니다. </span>
<span>재물을 찾아 출동하면 길하고 예상외로 많은 이익을 보게 될 것입니다. 때가 고르고 풍년이 들
었으니 태평가를 불러보는 격입니다. </span>
</p>

  </div>
  )
}

export default Months
import Card from '@/components/ui/Card'
import FormComponent from '@/components/ui/formComponent'
import formComponent from '@/components/ui/formComponent'
import { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import Warining from '@/components/ui/warining'

const Home = () => {

  const [selectedMenu, setSelectedMenu] = useState('menu1');
var value = "menu1"
  const handleMenuClick:any = (menu:any) => {
   value=menu
   setSelectedMenu(menu)
   console.log(value)
  };

  const renderCard = () => {
    switch (selectedMenu) {
      case 'menu1':
        return (
          <Card
            img1={'src/assets/contentPIC/saju01.gif'}
            img2={'src/assets/contentTEXT/saju01.jpg'}
            img3={'src/assets/contentPIC/saju01.jpg'}
            img4={'src/assets/icon/dot.gif'}
            img5={'src/assets/icon/barbirth.jpg'}
          />
        );
      
      case 'menu2':
        return (
          <Card
            img1={'src/assets/contentPIC/saju02.gif'}
            img2={'src/assets/contentTEXT/saju02.jpg'}
            img3={'src/assets/contentPIC/saju02.jpg'}
            img4={'src/assets/icon/dot.gif'}
            img5={'src/assets/icon/barbirth.jpg'}
          />
        );
        case 'menu3':
          return (
            <Card
            img1={'src/assets/contentPIC/saju04.gif'}
            img2={'src/assets/contentTEXT/saju04.jpg'}
            img3={'src/assets/contentPIC/saju04.jpg'}
            img4={'src/assets/icon/dot.gif'}
            img5={'src/assets/icon/barbirth.jpg'}
          />
          );
        case 'menu4':
            return (
              <Card
                img1={'src/assets/contentPIC/saju03.gif'}
                img2={'src/assets/contentTEXT/saju03.jpg'}
                img3={'src/assets/contentPIC/saju03.jpg'}
                img4={'src/assets/icon/dot.gif'}
                img5={'src/assets/icon/barbirth.jpg'}
              />
            );  
      case 'menu5':
              return (
                <Card
                  img1={'src/assets/contentPIC/saju05.gif'}
                  img2={'src/assets/contentTEXT/saju05.jpg'}
                  img3={'src/assets/contentPIC/saju05.jpg'}
                  img4={'src/assets/icon/dot.gif'}
                  img5={'src/assets/icon/barbirth.jpg'}
                />
              );   
              case 'menu6':
                return (
                  <Card
                    img1={'src/assets/contentPIC/gunghap01.gif'}
                    img2={'src/assets/contentTEXT/gunghap01.jpg'}
                    img3={'src/assets/poster/gunghap01.jpg'}
                    img4={'src/assets/icon/dot.gif'}
                    img5={'src/assets/icon/barbirth.jpg'}
                  />
                );   
                case 'menu7':
                  return (
                    <Card
                      img1={'src/assets/contentPIC/theme02.gif'}
                      img2={'src/assets/contentTEXT/theme02.jpg'}
                      img3={'src/assets/poster/theme02.jpg'}
                      img4={'src/assets/icon/dot.gif'}
                      img5={'src/assets/icon/barbirth.jpg'}
                    />
                  );   
                  case 'menu8':
                    return (
                      <Card
                        img1={'src/assets/contentPIC/theme10.gif'}
                        img2={'src/assets/contentTEXT/theme10.jpg'}
                        img3={'src/assets/poster/theme10.jpg'}
                        img4={'src/assets/icon/dot.gif'}
                        img5={'src/assets/icon/barbirth.jpg'}
                      />
                    );   
                    case 'menu9':
                      return (
                        <Card
                          img1={'src/assets/contentPIC/free08.gif'}
                          img2={'src/assets/contentTEXT/free08.jpg'}
                          img3={'src/assets/poster/free08.jpg'}
                          img4={'src/assets/icon/dot.gif'}
                          img5={'src/assets/icon/barbirth.jpg'}
                        />
                      );              
      // Add more cases for other menu items if needed
      default:
        return null;
    }
  };

  return (
    <div className='flex '  >
        <div className=' md:w-56 sm:w-36 p-3 md:p-1 bg-side h-screen fixed' >
   
        <Accordion allowToggle className='mt-4 text-sm'>
  <AccordionItem className='text-black p-2 my-2 rounded bg-neutral-700'>
    <h2 className='text-white p-1'>
      <AccordionButton >
        <Box as="span" flex='1' textAlign='left'>
        인생풀이
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='p-2 bg-white '>
      <div className="flex flex-col">
      <a href="#" onClick={()=>handleMenuClick("menu1") }>- 올해의 토정비결</a>
 <a href="#" onClick={()=>handleMenuClick("menu2") }>- 새해신수</a>
 <a href="#" onClick={()=>handleMenuClick("menu3") }>- 인생풀이</a>
 <a href="#" onClick={()=>handleMenuClick("menu4") }>- 	 	사주운세</a>
 <a href="#" onClick={()=>handleMenuClick("menu5") }>- 	자평명리학 오늘의 운세</a>
      </div>
 
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className=' text-black bg-neutral-700 p-2 my-2 rounded'>
    <h2 className='text-white p-1'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        인생풀이
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='p-2 bg-white '>
      <div className="flex flex-col">
      <a href="#" onClick={()=>handleMenuClick("menu6") }> -	 	정통궁합(속궁합,겉궁합)</a>
 
      </div>
 
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className='text-black p-2 my-2 rounded bg-neutral-700'>
    <h2 className='text-white p-1'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        인생풀이
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='p-2 bg-white '>
      <div className="flex flex-col">
      <a href="#" onClick={()=>handleMenuClick("menu7") }> 
	- 타로점성술</a>
 <a href="#" onClick={()=>handleMenuClick("menu8") }>- 현재 운세풀이</a>
 
      </div>
 
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className='text-black p-2 my-2 rounded bg-neutral-700'>
    <h2 className='text-white p-1'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        인생풀이
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='p-2 bg-white '>
      <div className="flex flex-col">
      <a href="#" onClick={()=>handleMenuClick("menu9") }> -	 	바이오리듬</a>

      </div>
 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
       </div>
    
        
      <div className=" m-2 ml-36 flex-1 flex flex-col items-center gap-5 w-full">

        <div className='bg-app h-12  p-3 rounded w-[600px]'>  <h1 className=' text-white text-sm font-bold'>▶ 올해의토정비결</h1> </div>
      {/* <Card img1={"src/assets/contentPIC/saju01.gif"} img2={"src/assets/contentTEXT/saju01.jpg"} img3={"src/assets/contentPIC/saju01.jpg"} img4={"src/assets/icon/dot.gif"} img5={"src/assets/icon/barbirth.jpg"}/>
   */}
   {renderCard()}
   <img src="src/assets/underbar.jpg" alt="" />
       <FormComponent/>
     
      
       <Warining/>
       
    
        {/* <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="src/assets/contentPIC/saju01.gif" alt="Saju"/></figure>
  <div className="card-body">
    <figure><img src="src/assets/contentTEXT/saju01.jpg" alt="" /></figure>
    
    <figure><img src="src/assets/contentPIC/saju01.jpg" alt="Saju"/></figure>
  
  </div>
</div> */}

      </div>
       
    </div>
  )
}

export default Home
type ComplexProps = {
    house: string
    icon: string
}

export function Complex(props: ComplexProps) {
 return (
  <div className='flex flex-col  items-center '>
      <img className='relative w-60 h-72 rounded-md' src={props.house} alt=""/>
              
        <div className='absolute flex flex-col items-center w-52 h-14 mt-64 border bg-white'>
            Queens Complex  
            <div className='flex gap-6 cursor-pointer'>
            <p className='transition hover:text-orange-500'>Get Details</p> <img src={props.icon} alt="" />
            </div>
        </div>
    </div>
 )
}
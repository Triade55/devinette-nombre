import {useCountdown} from '../hook/useCountdown'
export const Countdown =()=>{
    const {countdown,setCountdown} = useCountdown()
    
    const push = ()=>{
        setCountdown(countdown+15)
    }
   


    
    return (
        <div onClick={()=>push()} className="">
            {countdown === 0 ? "Time out" : countdown }
        </div>
    )
}

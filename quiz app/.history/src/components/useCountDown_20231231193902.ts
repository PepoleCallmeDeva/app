import { useEffect,useState } from "react";
export default function useCountDown(){
    useEffect(()=>{
        if(secondsLeft<=0)return;
        const timeout=setTimeout(()=>{
            setSecondsLeft(secondsLeft-1);

        },1000);
        return()
    })
}
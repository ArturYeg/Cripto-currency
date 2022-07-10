export const renderChangePercent = (percent)=>{
    // console.log(percent);
    if(percent > 0){
        return <span className="percent-raised">{percent}% &uarr;</span>
    }else if(percent<0){
        return <span className="percent-failen">{percent}% &darr;</span>        
    }
    return <span >{percent}%</span>
}



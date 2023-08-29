
export const formatDate=(dat)=>{
    const date=new Date(dat);
    const options={
        year:"numeric",
        month:"long",
        day:"numeric"
    }
    return date.toLocaleDateString('en-us',options);
}

export const formatRating=(rating)=>{
    return rating/10/2
}

export const fetcher=(...args)=>fetch(...args).then((res)=>res.json())
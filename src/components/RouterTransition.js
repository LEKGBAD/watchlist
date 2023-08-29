// import { NavigationProgress, nprogress } from '@mantine/nprogress';
// import { usePathname, useRouter } from 'next/navigation'
// import React, { useEffect } from 'react'

// function RouterTransition() {
//     const Router=useRouter();
//     const pathname=usePathname()

//     useEffect(()=>{
//         const handleStart=(url)=>url !== pathname && nprogress.start()
//         const handleComplete=()=>nprogress.complete()

//         Router.events.on('routeChangeStart',handleStart)
//         Router.events.on('routeChangeComplete',handleComplete)
//         Router.events.on('routeChangeError',handleComplete)

//         return ()=>{
//         Router.event.off('routeChangeStart',handleStart)
//         Router.event.off('routeChangeComplete',handleComplete)
//         Router.event.off('routeChangeError',handleComplete)

//         }

//     },[pathname])
//   return (
//     <NavigationProgress autoReset={true}/>
//   )
// }

// export default RouterTransition

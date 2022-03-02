export default function logger(reducer){
    return (preState, action, args)=>{
        console.group(action)
        console.log('preState:', preState)
        console.log('action args:', args)
        const nexState = reducer(preState, action, args)
        console.log('nextStable:', nexState)
        console.groupEnd(action)
        return nexState
    } 
}
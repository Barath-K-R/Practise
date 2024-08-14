const redux=require('redux')
const redxlogger=require('redux-logger')

const createstore=redux.createStore;
const combinereducers=redux.combineReducers
const applymiddleware=redux.applyMiddleware
const logger=redxlogger.createLogger()

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
//action creator returning actions
function buycake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyicecream(){
    return{
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}

//initial state shoul always be of object
const initialcakestate={
    numofcakes:10
}

const initialicecreamstate={
    numoficecreams:20
}

const cakereducer=(state=initialcakestate,action)=>{
      switch(action.type){
        case 'BUY_CAKE':
          return {
              ...state,
              numofcakes:state.numofcakes-1
          }
                
        default:
        return state;
      }
}

const icecreamreducer=(state=initialicecreamstate,action)=>{
    switch(action.type){
       
          case 'BUY_ICECREAM':
              return {
                  ...state,
                  numoficecreams:state.numoficecreams-1 
              }
              
      default:
      return state;
    }
}

const rootreducer=combinereducers({
    cake:cakereducer,
    icecream:icecreamreducer
})
const store=createstore(rootreducer,applymiddleware(logger))
console.log('initialstate',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
console.log(buyicecream())
unsubscribe()
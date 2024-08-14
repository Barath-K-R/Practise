const redux=require('redux')
const createstore=redux.createStore
const applymiddleware=redux.applyMiddleware
const thunkmiddleware=require('redux-thunk')
const axios=require('axios')
const initialstate={
   loading:false,
   users:[],
   error:""
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchusersrequest=()=>{
   return {
       type:FETCH_USERS_REQUEST
   }
}

const fetchuserssuccess=()=>{
   return {
       type:FETCH_USERS_SUCCESS
   }
}

const fetchusersfailure=()=>{
   return {
       type:FETCH_USERS_FAILURE
   }
}

const reducer=(state=initialstate,action)=>{
   switch(action.type)
   {
        case FETCH_USERS_REQUEST:
        return {
           ...state,
            loading:true,
        }
        case FETCH_USERS_SUCCESS:
           return{
               ...state,
               loading:action.payload,
               error:""
           }

           case FETCH_USERS_FAILURE:
               return {
                   ...state,
                   loading:false,
                   users:[],
                   error:action.payload
               }
   }

}

const fetchusers=()=>{
     return function (dispatch){
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res=>{
             const users=res.data.map((user)=>user.id)
             dispatch(fetchuserssuccess(users))
          })
          .catch(err=>{
           dispatch(fetchusersfailure(err.message))
          })
     }
}
const store=createstore(reducer,applymiddleware(thunkmiddleware))
store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchusers)


//------------------------------------------------------------------------------------------------------


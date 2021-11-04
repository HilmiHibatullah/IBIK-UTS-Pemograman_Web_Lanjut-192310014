const authReducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "SIGN_IN":
            localStorage.setItem("AuthToken",action.param);
        break; 
        
        case "SIGN_OUT":
            localStorage.removeItem("AuthToken");
            window.location = '/login'; 
            break;
        default:
            return 0;  
    }
};

export default authReducer;
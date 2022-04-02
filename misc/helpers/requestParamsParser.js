const  requestParamsParser =(method, token =null, data=null)=>{
    let params = {};
    params.method=method;
    
    params.headers = {
        "Content-Type":"application/json",
    }
    if(token){
        params.headers.Authorization =`Token ${token}`;
    }

    if(data){
        params.body = JSON.stringify(data)
    }
    return params;
};

export default requestParamsParser;
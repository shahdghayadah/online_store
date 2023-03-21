import React ,{useContext} from "react";
import LoginPage from "../../page/Login";
import AuthContext from "../../context/AuthContex";
const ProtectRouter =(props)=>{
///create const using in context
    console.log('props',props);
    const {isLoging} = useContext(AuthContext);;
    const {children} = props;

///undifinde null false data  ! 
    if(!isLoging){
        return <LoginPage/>
    }
    return children;
};
export default ProtectRouter;

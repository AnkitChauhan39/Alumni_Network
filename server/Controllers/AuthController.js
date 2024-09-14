
const UserModel = require('../Models/Users') ; 
const jwt = require('jsonwebtoken') ;

const bcrypt = require('bcrypt') ;

const signup = async (req , res) =>{
    try{
        console.log(req)
        const {name , email , password, photo , bio , phone} = req.body ; 
        const user = await UserModel.findOne({email}) ; 
        if(user){
            return res.status(409)
            .json({message : 'User is already exist , you can login' , success : false}) ; 
        }

        const userModel = new UserModel({name , email , password , photo , bio , phone}) ; 

        userModel.password = await bcrypt.hash(password , 10) ; 
        await userModel.save() ;
        res.status(201)
            .json({
                message : "Signup successfully" , 
                success : true 
            })
    }
    catch(err){
        console.log(err); 
        res.status(500)
            .json({
                message : "Internal server error" , 
                success : false 
            })
    }
}

const login = async (req , res) =>{
    try{
        // (req.token) ; 
        const {email , password} = req.body ; 
        const user = await UserModel.findOne({email}) ; 
        const errorMsg = "Auth failed email or password is wrong"
        if(!user){
            return res.status(409)
            .json({message : errorMsg , success : false}) ; 
        }

        const val = await bcrypt.hash(password , 10) ;

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error("Error comparing password:", err);
            } else if (isMatch) {
                console.log("Password match! User is authenticated.");
            } else {
                console.log("Password does not match. Authentication failed.");
            }
        });
        const isPassEqual = await bcrypt.compare(password , user.password) ; 


        if(!isPassEqual){
            return res.status(409)
            .json({message : errorMsg , success : false}) ; 
        }

        const jwtToken = jwt.sign(
            {email : user.email , _id : user._id} ,
            process.env.JWT_SECRET , 
            {expiresIn : '24h'}
        )

        res.status(200)
        .json({
            user,
            message : "Login Success" ,
            success : true,
            jwtToken , 
            email , 
            name : user.name
        })

       
    }
    catch(err){
        res.status(500)
            .json({
                message : "Internal server error" , 
                success : false 
            })
    }
}





module.exports = {
    signup , 
    login 
}
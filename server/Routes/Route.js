const express = require("express") ; 
const router = express.Router() ; 
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const {signup , login} = require('../Controllers/AuthController')

const {AllpostData , AddPost , EditPost , DeletePost} = require('../Controllers/PostController');
const ensureAuthenticated = require("../Middlewares/Auth");

//  
//  /auth/login
//  /auth/signup


//  /allposts 

// post  ---> method 
// /post/:id -->method post --> edit ; 
// /post/:id --->method delete --> delete ; 
 
router.post('/auth/signup', signupValidation , signup)
router.post('/auth/login', loginValidation ,  login);


router.post('/allposts' , ensureAuthenticated ,  AllpostData ) ; 

router.post('/post/add' ,  ensureAuthenticated ,   AddPost) ;
router.post('/post/:expenseId' , ensureAuthenticated ,  EditPost) ; 
router.delete('/post/:expenseId' , ensureAuthenticated ,  DeletePost) ;



module.exports = router ; 
module.exports = (req,res,next)=>{
   console.log(req.sessionID)
   const { name, password } = req.body
   console.log(req.body)
   if (name && password) {
     if (req.session.authenticated) {
        res.json(req.session)
         next()
     }else{
      if(password === '123'){
       req.session.authenticated = true
       req.session.user={
        name,password 
       }

         res.json(req.session)
          next()
      }else{
       return res.status(403).json({msg:"Bad Credentials"})
      }
     }
   }else{
       return res.status(403).json({ msg: 'Bad Credentials' })

   }

  
}
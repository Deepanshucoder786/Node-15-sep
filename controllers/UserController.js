const user= require('../users.json')


function getuser(req, res){
    try {
        res.json(user)
    } catch (error) {
        
    }
}

module.exports={
    getuser
}
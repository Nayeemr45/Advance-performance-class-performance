const express 	= require('express');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: req.cookies['uname'], id:'12'});
});


router.get('/userlist', (req, res)=>{
	res.render('home/userlist', {users: req.session.userlist});
})

module.exports = router;
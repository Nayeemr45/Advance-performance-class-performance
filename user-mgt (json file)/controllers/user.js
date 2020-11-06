const express 	= require('express');
const router 	= express.Router();
const fs		= require('fs');

var id=0;

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});

router.post('/create', (req, res)=>{
		
		res.redirect('/home/userlist');		

	
});

router.get('/edit/:id', (req, res)=>{

		res.render('user/edit', user);
	
	
});

router.post('/edit/:id', (req, res)=>{
	
		res.redirect('/home/userlist');

});

router.get('/delete/:id', (req, res)=>{
	
	
		res.render('user/delete', user);
	
});

router.post('/delete/:id', (req, res)=>{
	
	
		res.redirect('/home/userlist');
	
});

module.exports = router;


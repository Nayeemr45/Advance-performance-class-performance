const express 	= require('express');
const router 	= express.Router();
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
		var user = [++req.session.userid,req.body.username, req.body.password, req.body.email];
		console.log(user);
		var newlist = req.session.userlist;
		newlist.push(user);
		console.log(newlist);
		req.session.userlist = newlist;

		res.redirect('/home/userlist');		

	
});

router.get('/edit/:id', (req, res)=>{

		res.render('user/edit', user);
	
	
});

router.post('/edit/:id', (req, res)=>{
	
	
		res.redirect('/home/userlist');

});

router.get('/delete/:id', (req, res)=>{
	
	var user=''
		req.session.userlist.forEach( function(std){
			if(req.params.id == std[0]){
				 user = {username :std[1] , password: std[2] ,email: std[3]}
			}
		});
		res.render('user/delete', user);
	
});

router.post('/delete/:id', (req, res)=>{
	
		res.redirect('/home/userlist');
	
});

module.exports = router;


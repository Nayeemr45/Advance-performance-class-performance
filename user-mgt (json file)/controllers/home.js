const express 	= require('express');
const router 	= express.Router();
const fs		= require('fs');

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
	var data=fs.readFileSync('./controllers/userlist.json');
		var userlist=JSON.parse(data);
		var newlist = [];

		userlist.forEach( std =>{
			var user = [std.id,std.username,std.email,std.password]
			newlist.push(user);
		});

		console.log(newlist);
		req.session.userlist = newlist;

	res.render('home/userlist', {users: req.session.userlist});
})

module.exports = router;
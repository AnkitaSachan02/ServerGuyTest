let passport = require("passport");
let googleStrategy = require("passport-google-oauth20");
let key = require('./keys');
let userApi = require('./../api/userApi');
let schema = require('./../schema/userSchema');

passport.serializeUser((user, done) => {
	console.log("in serializeUser", user);
	done(null, user._id);
})

passport.deserializeUser((id, done) => {
	console.log("in deserializeUser", id);
	schema.findById(id).then(user => {
		console.log("deserialized user is ", user);
		done(null, user);
	})
})

passport.use(new googleStrategy({
	callbackURL:'/user/auth/google/redirect', 
	clientID: key.clientID,
	clientSecret: key.clientSecret, 
}, async function(accessToekn, refreshToken, profile, done){
	//console.log("this is profile", profile);
		let data = {
		 	email : profile.emails[0].value,
		 	sex : profile.gender,
		 	firstName: profile.name.givenName,
		 	lastName: profile.name.familyName,
		 	userName: profile.emails[0].value.slice(0, -10),
		 	verified: true
		}

		try{
			console.log("in try block of callback");
			let res = await userApi.adduser(data)
			done(null, res);
		}catch(error){
			console.log("in catch block of callback");
			let resFind = await userApi.finduser({email: data.email});
			done(null, resFind[0]);
		}
}))
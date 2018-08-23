let passport = require("passport");
let googleStrategy = require("passport-google-oauth20");
let facebookStrategy = require("passport-facebook");

passport.serializeUser((user, done) => {
	console.log("in serializeUser", user);
	done(null, user._id);
})

passport.deserializeUser((id, done) => {
	console.log("in deserializeUser", id);
	done(null, id);
})

passport.use(new googleStrategy({
	callbackURL:'auth/redirect',
	clientID: "195195470406-mos65gc39rlktc8oj17553bpug6ff258.apps.googleusercontent.com",
	clientSecret: "DddUrblhv1hbcJNDwiQl2Ius", 
}, async function(accessToekn, refreshToken, profile, done){
	console.log("this is profile", profile);
		try{
			console.log("in try block of callback");
			done(null, "");
		}catch(error){
			console.log("in catch block of callback");
			done(null, "");
		}
}))

passport.use(new facebookStrategy({
	callbackURL:'auth/fredirect',
	clientID: "542899819495663",
	clientSecret: "2951dbc2d13c4e0e2ac6e34b8c487e05", 
}, async function(accessToekn, refreshToken, profile, done){
	console.log("this is profile", profile);
		try{
			console.log("in try block of callback");
			done(null, "");
		}catch(error){
			console.log("in catch block of callback");
			done(null, "");
		}
}))
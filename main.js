window.onload = async () => {
	let response = await fetch('http://quizzardapi-env-1.eba-3m7rumy3.us-east-1.elasticbeanstalk.com/questions');
	console.log(response);
}

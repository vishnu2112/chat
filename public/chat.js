var socket = io.connect('http://localhost:3000');
var message = document.getElementById('message');
var username = document.getElementById('username');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });    
});


socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
    
});

socket.on('chat',function(data){
	if(data.message == "hii"){
	
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "hii " + data.username + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "How r u ??" + '</p>';
	}
	else if(data.message == "i am fine"){
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "Good " + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "Which class are you studying?" + '</p>';
	    
	}
	else if(data.message == "how r u ?"){
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "i am fine" + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "how r ur parents and sis?" + '</p>';
	}
	else if(data.message == "B-tech"){
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "Good " + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "How is your studies going on?" + '</p>';
	}
	else if(data.message == "B-tech"){
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "Good " + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "How can I help u?" + '</p>';

	}
	else if(data.message == "I am interested to join foss"){
		feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "ohh fine" + '</p>';
	    feedback.innerHTML = '';
	    output.innerHTML += '<p> <strong>Frnd: </strong>'+ "R u from CSE background?" + '</p>';
	    
	}
	
	
	else{
		feedback.innerHTML = '';
	    
	}
	
});


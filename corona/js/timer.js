
 var show1 = document.getElementById('show11');
         var show2 = document.getElementById('show2');
         var show3 = document.getElementById('show3');
         var show4 = document.getElementById('show4');
         var hide1 = document.getElementById('hide1');
         var  hide2 = document.getElementById('hide2');
         var  hide3 = document.getElementById('hide3');
         var  hide4 = document.getElementById('hide4');
         var addBtn = document.getElementById('add-btn');
         show1.addEventListener("click", function(){
            hide1.style.display = "block";
            show1.style.display = "none";
         });
             show2.addEventListener("click", function(){
            hide2.style.display = "block";
         });
               show3.addEventListener("click", function(){
            hide3.style.display = "block";
         });
                 show4.addEventListener("click", function(){
            hide4.style.display = "block";
         });
         // addBtn.addEventListener('click', function(){
         //     notification.style.display = "block";
         //    container.style.display = "none";
        
         // })








	// console.log( (new Date()).getTime());
	// var storage= window.localStorage;
 //  var alarmSound = new Audio();
 //  var snoozeDiv = document.getElementById('snoozeDiv');
 //  alarmSound.src = 'images/B4.mp3';
 //  	var differenceInMs= 0;

	// function setAlarm () {
		// var sleepTime = document.getElementById("sleepTime").valueAsNumber;
		// var wakeTime = document.getElementById("wakeTime").valueAsNumber;
	     
  //     if(isNaN(wakeTime)){
		// 	alert("Invalid Date");
  //          return;
  //      }

	 //  var wake = new Date(wakeTime);
	 //  var currentTime = new Date().getTime();
		// 	var timeTowake = new Date(wake.getUTCFullYear(), wake.getUTCMonth(), wake.getUTCDate(), wake.getUTCHours(), wake.getUTCMinutes(), wake.getUTCSeconds());
		// var wakeMe =(timeTowake.getTime());
		// differenceInMs = wakeMe - currentTime;

		// console.log(`time to wake = ${timeTowake}`);
		// console.log(` differenceInMs = ${ differenceInMs}`);
		// console.log(` current time = ${currentTime}`);

  //       if ( differenceInMs < currentTime ) {
  //       	alert('time already passed')
  //       }

     // setTimeout(initAlarm,  differenceInMs);
// 	initAlarm();
 
// 		 };



// 	function initAlarm() {
//       alarmSound.play();
//       document.getElementById("alarmOptions").style.display = '';
//       console.log('time to wake');
//       snooze();
// 	};

// 	function stopAlarm() {
// 		alarmSound.pause();
// 		alarmSound.currentTime = 0;
// 		 document.getElementById("alarmOptions").style.display = 'none';
		
// 	};
// 	function snooze() {
    
		
// 	var snoozeOptions =	 document.getElementById("snoozeOptions").value;
//    var snoozeDiv =	 document.getElementById("snoozeDiv");
    
	
// 	  var snoozeTime = snoozeOptions  * 60000;
	
// 		setInterval(initAlarm, snoozeTime);
// 			container.style.display = 'block';
// 	notification.style.display = 'none';
	
// 	snoozeDisplay.innerHTML = "you wiil be reminded  every " + snoozeOptions + "mins.";
// // 	var removeDiv = storage.setItem("divDisplay", "none");

// // snoozeDiv.style.display = storage.getItem("divDisplay");
// // snoozeDiv.style.display = storage.setItem("divDisplay", "none");




// 	}

	  
function goDown() {
	    document.images['chuckNorris'].style.top = imgTopInt+spdy+"px";
   if (imgTopInt >  (winHeight-imgHeight)){       // we've hit the edge of the screen
      diry = 0;                                              // next time through go up
       spdy= setRand();                                 // set my new speed
   }

}

	function goUp() {
	    document.images['chuckNorris'].style.top = (imgTopInt-spdy) +"px";
	    if (imgTopInt < 5){                                        // we've hit the top of the screen
	        diry = 1;                                               // next time through go down
	        spdy= setRand();                                  // set my new speed
	    }
	}
goDown();

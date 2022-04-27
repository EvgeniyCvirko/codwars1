	function direction(facing, turn){
		let arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
		turn = (turn/45) % 8 + 8
		return arr[(arr.indexOf(facing) + turn) % 8]
	 }
	
	



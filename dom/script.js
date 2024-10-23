  const boxes = document.querySelectorAll(".span");
  const body = document.querySelector("body")
  boxes.forEach(box=>{
	box.addEventListener("click",function(e){
		const id = e.target.id;
switch (id) {
	case 'blue':
		body.style.backgroundColor="blue"
		break;
		case 'green':
			body.style.backgroundColor="green"
			break;
			case 'yellow':
			body.style.backgroundColor="yellow"
			break;
			case 'orange':
				body.style.backgroundColor="orange"
				break;
				
	default:
		break;
}

		console.log("clck");
		
		  })
  })

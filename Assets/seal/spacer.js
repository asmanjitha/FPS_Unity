var ai : GameObject;
var tag1 = "Spacer";
private var isChasing = true;

function OnTriggerStay(col : Collider){
	if(col.tag == tag1){
	}
	else{
		isChasing = false;
	}
}
function OnTriggerExit(){
	isChasing = true;
}
function Update(){
	if(isChasing == false){
		ai.GetComponent("Attack").directT = false;
	}
	else{
		ai.GetComponent("Attack").directT = true;
	}
}
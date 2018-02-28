var ai : GameObject;
var tag1 = "Spacer";

function OnTriggerStay(col : Collider){
	if(col.tag == tag1){
	}
	else{
		if(ai.GetComponent("Attack").timer > ai.GetComponent("Attack").startTime){
			ai.GetComponent("Attack").directT = false;
			ai.GetComponent("Attack").Turn();
			print("Kazooey!!");
		}
	}
}
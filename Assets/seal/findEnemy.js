var player : Transform;
var enemyTag = "ally";
var enemy = true;
var distance1;
var distance2;

function Start () {

}

function OnTriggerEnter (col : Collider) {
	distance1 = Vector3.Distance(player.position, player.gameObject.GetComponent("Attack").target.position);
	distance2 = Vector3.Distance(player.position, GetComponent.<Collider>().transform.position);
	if(col.tag == enemyTag){
		if(distance2 < distance1){
			player.GetComponent("Attack").target = col.transform.parent.transform;
			player.GetComponent("Attack").player = col.transform.parent.gameObject;
		}
	}
	if(enemy == true){
		if(col.tag == "Player"){
			if(distance2 < distance1){
				player.GetComponent("Attack").target = col.transform;
				player.GetComponent("Attack").player = col.gameObject;
			}
		}
	}
}
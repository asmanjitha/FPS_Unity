var playerTag = "Player";
var gun : GameObject;

function OnTriggerEnter (col : Collider) {
	if(col.tag == playerTag){
		var shoot1 : shoot = gun.GetComponent("shoot");
		shoot1.ammo = shoot1.maxAmmo;
	}
}
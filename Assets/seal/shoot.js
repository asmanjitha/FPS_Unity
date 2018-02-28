var ammo : int = 100;
var maxAmmo : int = 100;
var magCapacity = 10;
var fullAuto = false;
var fireRate = 0.2;
var key : String = "mouse 0";
var bullet : Rigidbody;
var speed : float = 1000;
var reloadKey = "r";
var reloadTime = 1.5;
var hasAudio = false;
private var mag : int;
private var isntReloading = true;
mag = magCapacity;

function Update () {
	if(fullAuto == false){
		if(Input.GetKeyDown(key)){
			if(ammo > 0){
				shoot();
			}
		}
	}
	if(fullAuto == true){
		if(Input.GetKey(key)){
			if(ammo > 0){
				if(IsInvoking("shoot") == false){
					Invoke("shoot", fireRate);
				}
			}
		}
		else{
			if(hasAudio == true){
				GetComponent.<AudioSource>().Stop();
			}
		}
	}
	if(Input.GetKey(reloadKey)){
		isntReloading = false;
		reload();
	}
	if(Input.GetKeyUp(reloadKey)){
		isntReloading = true;
	}
}
function shoot(){
	if(mag > 0){
		var bullet1 : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		bullet1.AddForce(transform.forward * speed);
		mag--;
		if(hasAudio == true){
			if(fullAuto == true){
				if(GetComponent.<AudioSource>().isPlaying == false){
					GetComponent.<AudioSource>().Play();
				}
			}
			else{
				GetComponent.<AudioSource>().Play();
			}
		}
	}
}
function OnGUI(){
	GUI.Label(Rect(10, 10, 500, 500), ""+mag+"/"+ammo);
}
function reload(){
	yield WaitForSeconds(reloadTime);
	if(Input.GetKeyUp(reloadKey)){
	}
	if(isntReloading == true){
	}
	else{
		ammo += (mag-magCapacity);
		mag = magCapacity;
	}
}
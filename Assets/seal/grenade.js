var time = 4.0;
var explosion : GameObject;

function Start () {
	Invoke("blow", time);
}

function blow () {
	GetComponent.<Rigidbody>().useGravity = false;
	GetComponent.<Collider>().radius = 10;
	GetComponent.<Collider>().isTrigger = true;
	explosion.SetActive(true);
	Destroy(gameObject, 4);
}
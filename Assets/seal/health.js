var body : GameObject;
var bulletTag = "Bullet";
var distance;
var distanceToRespawn = 50.0;
var player : GameObject;
var health : int;
var spawns : Transform[];
var isAlly : boolean;
private var curHealth = health;

function OnTriggerEnter(col : Collider){
	if(col.tag == bulletTag){
		curHealth --;
	}
}

function death(){
	var body1 : GameObject = Instantiate(body, transform.position, transform.rotation);
	body1.transform.localScale = gameObject.transform.localScale;
	body1.SetActive(true);
	curHealth = health;
	if(isAlly == true){
		score.eScore ++;
	}
	else{
		score.aScore ++;
	}
	var spawnNumber : int = Random.Range(0, spawns.length-1);
	transform.position = spawns[spawnNumber].position;
}
function Update(){
	if(curHealth < 1){
		death();
	}
}
function Start(){
	curHealth = health;
}
var target : Transform;
var speed = 5.0;
var attackDistance = 2.0;
var attackAnim : String;
var runAnim : String;
var leftSide : Transform;
var rightSide : Transform;
var startTime = 5.5;
var enemy = true;
var player : GameObject;
private var directT : boolean;
private var isAttacking = false;
private var timer = 0.0;
var leftDistance;
var rightDistance;
var distance;

function Update(){
	leftDistance = Vector3.Distance(transform.position, leftSide.position);
	rightDistance = Vector3.Distance(transform.position, rightSide.position);
	distance = Vector3.Distance(transform.position, target.position);
	
	if(directT == true){
		var rotation = Quaternion.LookRotation(target.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * 6);
	}
	if(isAttacking == false){
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
		GetComponent.<Animation>().Play(runAnim);
	}
	if(distance < attackDistance){
		attack();
	}
	if(distance > attackDistance){
		isAttacking=false;
	}
	timer += Time.deltaTime;
}
function Turn(){
	var rotation1 = Quaternion.LookRotation(leftSide.position - transform.position);
	var rotation2 = Quaternion.LookRotation(rightSide.position - transform.position);
	if(leftDistance < rightDistance){
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation1, Time.deltaTime * 6);
	}
	else{
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation2, Time.deltaTime * 6);
	}
}
function attack(){
	if(GetComponent.<AudioSource>().isPlaying == false){
		GetComponent.<AudioSource>().Play();
	}
	isAttacking = true;
	GetComponent.<Animation>().Play(attackAnim);
	player.GetComponent("health").curHealth = 0;
}
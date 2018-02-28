static var aScore : int = 0;
static var eScore : int = 0;
var limit : int;
var winLevel : String;
var loseLevel : String;

function Start () {

}

function Update () {
	if(aScore == limit){
		aScore = 0;
		eScore = 0;
		Application.LoadLevel(winLevel);
	}
	if(eScore == limit){
		aScore = 0;
		eScore = 0;
		Application.LoadLevel(loseLevel);
	}
}
function OnGUI(){
	GUI.Label(Rect(30, 0, 500, 500), "A"+aScore+"  E"+eScore);
}
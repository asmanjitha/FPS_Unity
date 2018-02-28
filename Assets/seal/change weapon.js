var key = "1";
var items : GameObject[];
private var curItem = 0;

function Update () {
	if(Input.GetKeyDown(key)){
		items[curItem].SetActive(false);
		if(curItem < items.Length - 1){
			curItem ++;
		}
		else{
			curItem = 0;
		}
	}
	items[curItem].SetActive(true);
}
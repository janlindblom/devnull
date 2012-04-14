function addButtonsToNode(howmany, domnode)
{
	for(var i = 0; i < howmany; i++)
	{
		var div = document.createElement("div");
		domnode.appendChild(div);
		div.innerHTML = i;

        div.setAttribute('onclick','function() { alert('+i+'); }');
	}
}
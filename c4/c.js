
function showField(fieldToShow) {
    for (var i=1;i<4;i++) {
        document.getElementById('field'+i).style.display="none";
    }
    var f = document.getElementById('field'+fieldToShow);
    if (f.id === 'field'+fieldToShow) {
        f.style.display="block";
    }
}


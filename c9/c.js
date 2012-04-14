
var obj = {
    table1:
    [
        {id: 1, label: "container1", parent: null},
        {id: 2, label: "container2", parent: 1},
        {id: 3, label: "container3", parent: 1},
        {id: 4, label: "container4", parent: 2}
    ],
    table2:
    [
        {id: 5, label: "leaf1", parent: 1},
        {id: 6, label: "leaf2", parent: 4},
        {id: 7, label: "leaf3", parent: 4},
        {id: 8, label: "leaf4", parent: 3}
    ]
};

function gentree() {
    console.log('digraph g {');
    var all = [];
    for (var i in obj.table1) {
        all.push(obj.table1[i]);
    }
    for (var i in obj.table2) {   
        all.push(obj.table2[i]);
        
    }

    for (var i in all) {
        var id = all[i].id;
        var label = all[i].label;
        var parent = all[i].parent;
        console.log(id+' [label='+label+'];');
        if (parent != null) {
            console.log(parent + " -> " + id+';');
        }
    }
    console.log('}');
}

gentree();
var creatures = [{
	name: "Justin",
	initiative: 2,
	roll: 0
},{
	name: "Bailey",
	initiative: 0,
	roll: 0
},{
	name: "Ian",
	initiative: 4,
	roll: 0
},{
	name: "Cruz",
	initiative: 2,
	roll: 0
},{
	name: "Brad",
	initiative: 2,
	roll: 0
},{
	name: "Tyler",
	initiative: 2,
	roll: 0
},{
	name: "Ryan",
	initiative: 2,
	roll: 0
},{
	name: "Evan",
	initiative: 2,
	roll: 0
}]

$(document).ready(function()
{
	// Store table body
	var tableBody = $('#creatureTable tbody');
	for(var i = 0; i < creatures.length; ++i)
	{
		tableBody.append('<tr id=' + i + '>' + 
			'<td class="name">' + '<input type=text class="form-control name" onkeyup="update_name(this)" value=' + creatures[i].name + '></td>' + 
			'<td class="initiative"><input type=number class="form-control init" value=' + creatures[i].initiative + '></td>' + 
			'<td class="roll">' + creatures[i].roll + '</td>' + 
			'<td class="advantage"><input type=checkbox class="form-control advantage"></td>' + 
			'<td><input type="button" value="Delete" onclick="delete_row(this)"></td></tr>');
	}
});

function update_name(o)
{
	var i = Number($(o).closest("tr")[0].rowIndex);
	creatures[i].name = o.value;
}

//WARNING: Is not actually called now
function update_initiative(o)
{
	var i = Number($(o).closest("tr")[0].rowIndex);
	creatures[i].initiative = o.value;
}

function update_rolls(o)
{
	for(var i = 0; i < $('#creatureTable tbody tr').length; ++i)
	{
		creatures[i].roll = $('#creatureTable #' + i + ' .roll').html();
	}
}

function roll_dice(clicked_id)
{
    for(var i = 0; i < $('#creatureTable tbody tr').length; ++i)
    {
    	var init = Number($('#creatureTable #' + i + ' .initiative .init').val());
    	var roll = Math.floor(Math.random() * 20) + 1;
    	$('#creatureTable #' + i + ' .roll').html(roll + init);
    }
    update_rolls(clicked_id);
}

function add_creature(clicked_id)
{
	creatures.push({
		name: " ",
		initiative: 0,
		roll: 0
	})
}

function add_row(clicked_id)
{
	var tableBody = $('#creatureTable tbody');
	var numRows = $('#creatureTable tbody tr').length;
	tableBody.append('<tr id=' + numRows + '>' + 
			'<td class="name">' + '<input type=text class="form-control name"></td>' + 
			'<td class="initiative"><input type=number class="form-control init" value=0></td>' + 
			'<td class="roll">' + 0 + '</td>' + 
			'<td class="advantage"><input type=checkbox class="form-control advantage"></td>' +
			'<td><input type="button" value="Delete" onclick="delete_row(this)"></td></tr>');

	add_creature(clicked_id);
}

function delete_creature(o)
{
	var i = Number($(o).closest("tr")[0].rowIndex)
	creatures.splice(i, i + 1);
}

//Delete row on click
function delete_row(o) 
{
	var p = o.parentNode.parentNode;
	p.parentNode.removeChild(p);
}
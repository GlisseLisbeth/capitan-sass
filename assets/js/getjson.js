"use strict";
const render = (root)=>{
	root.empty();
	state.forEach((name)=> {
    const list = $('<li>'+ name +'<input type="checkbox"> </li>');
    root.append(list);
  })
}

const state = {
	name:null
};

$(_=>{
	getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',(error, json)=>{
		if (error){
			return alert(error.message);
		}
		console.log(json);
		state.name = json.name;
		const root = $("#root");
		render(root);
	});
})

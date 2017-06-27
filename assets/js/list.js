"use strict";
const render = (root)=>{
	root.empty();
	state.students.forEach((student,index)=> {
    const list = $('<li>'+ state.students[index].name +'<input type="checkbox"> </li>');
    root.append(list);
  })
}

const state = {
	students:null
};

$(_=>{
	getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',(error, json)=>{
		if (error){
			return alert(error.message);
		}
		state.students = json;
		const root = $("#root");
		render(root);
	});
})

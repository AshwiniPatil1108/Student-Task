const cl = console.log;

const fname = document.getElementById("fname ");
const stdContainer = document.getElementById("stdContainer");
const stdForm = document.getElementById("stdForm");



const stdArr =[
	{
		fname:"Ashu",
		lname:"Patil",
		email:"ashu@gmail.com",
		contact: 7896543490,
		id:'120'
	},
	{
		fname:"Sanju",
		lname:"Patil",
		email:"sanju@gmail.com",
		contact: 8073543490,
		id:'121'
	}
]

const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const creatRows =(array, idContainer)=>{
	let result =``;

array.forEach((std, i)=>{
	result+=`
				<tr id ="${std.id}">
					<td>${i+1}</td>
					<td>${std.fname}</td>
					<td>${std.lname}</td>
					<td>${std.email}</td>
					<td>${std.contact}</td>
				</tr>
	`
})
stdContainer.innerHTML = result;
cl(result);
};

creatRows(stdArr, stdContainer);

const onStdAdd = (eve) => {
	eve.preventDefault();
	cl(eve)
	let newStd = {
		fname: eve.target['0'].value,
		lname: eve.target['1'].value,
		email: eve.target['2'].value,
		contact: eve.target['3'].value,
		id: generateUuid()
	}
	cl(newStd);
	stdArr.unshift(newStd)
	creatRows(stdArr, stdContainer);
	eve.target.reset()
};



stdForm.addEventListener("submit", onStdAdd)
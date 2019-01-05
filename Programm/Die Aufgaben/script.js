var c=document.getElementById('mycanvas');
var ctx=c.getContext('2d');
let k=nn.LinearNN(2,1,[2],nn.DeLU);
let n=nn.LinearNN(1,1,[6,2]);
let l=new nn.MaxPooling(2,2);
l.input=new nn.Save(new Matrix(2,2));
l.output=new nn.Save(new Matrix(1,1));
l.input.v.set(0,0,1);
l.input.v.set(1,0,2);
l.input.v.set(0,1,4);
l.input.v.set(1,1,3);
l.run(true);
l.output.d.set(0,0,1);
let data=[
	{i:[0,0],o:[0]},
	{i:[1,1],o:[0]},
	{i:[0,1],o:[1]},
	{i:[1,0],o:[1]}
];
function letrain(n=1,m=2){
	for(let i=0;i<n;i++){
		let dt=[];
		for(let j=0;j<m;j++){
			let r=Math.floor(Math.random()*4);
			dt.push({i:new Matrix(1,2,data[r].i),o:new Matrix(1,1,data[r].o)});
		}
		k.train(dt);
	}
}
function t2(){
	let dt=[]
	for(let j=0;j<10;j++){
		let r=Math.random();
		dt.push({i:new Matrix(1,1,[r]),o:new Matrix(1,1,[Math.sin(r)])})
	}
	n.train(dt);
}
function test(n=0){
	console.log("ReLU:"+k.run(data[n]).body);
	console.log("Expected:"+n);
}
pcount=50;
s=c.width/pcount;
var mat=new Matrix(1,2);
function updating(){
	letrain(50,8);
	ctx.clearRect(0,0,1000,1000);
	for(let i=0;i<pcount;i++)for(let j=0;j<pcount;j++){
		ctx.beginPath();
		ctx.rect(i*s,j*s,s,s);
		mat.set([i/pcount,j/pcount]);
		let v=k.run(mat).body[0];
		if(v>1)v=1;
		ctx.fillStyle='rgb('+v*255+','+v*255+','+v*255+')';
		ctx.fill();
	}
}
let wow={
	f:"DeLU",
	input:{r:2,c:2},
	output:{r:2,c:2},
	actions:[{type:'Convolution',d:{c:0,r:0},input:'input',output:'output'}]
};
wow=nn.createNeuralNetwork(wow);
window.setInterval(updating,100);
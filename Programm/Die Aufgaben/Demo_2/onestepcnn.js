var c=document.getElementById("mycanvas");
var ctx=c.getContext('2d');
let training=true;
let smooth=true;
var fsave=nn.manageArrayOfSaves;
var fcon=nn.manageArrayOfConvolutions;
const size=50;
const fs=1;
const hiddencount=10;
var scanner=nn.createNeuralNetwork({
	f:'DeLU',
	input:{r:size,c:size},
	output:{r:size,c:size},
	saves:fsave({r:size,c:size,name:'a',number:hiddencount})
		.concat(fsave({r:size,c:size,name:'b',number:hiddencount}))
		.concat([{r:size,c:size,name:'c'}]),
	actions:fcon({t:"Convolution",d:{r:fs,c:fs},input:'input',output:'a',bias:false,isame:true,number:hiddencount})
		.concat(fcon({t:"Activation",input:'a',output:'b',number:hiddencount}))
		.concat(fcon({t:"Convolution",d:{r:1,c:0},input:'b',output:'c',bias:false,osame:true,number:hiddencount}))
		.concat(fcon({t:"Activation",input:'c',output:'output',osame:true,isame:true,number:1})),
});
let data=[];

function createdata(n=5){
	for(let i=0;i<n;i++){
		game.randomize();
		let current=game.tiles;
		game.step();
		data.push({i:current,o:new Matrix(size,size,game.tiles)});
	}
}

function letrain(n=1,m=5){
	for(let i=0;i<n;i++){
		let traindata=[];
		for(let j=0;j<m;j++)traindata.push(data[Math.floor(Math.random()*data.length)]);
		scanner.train(traindata);
	}
}

function hold(val,min,max){
	return(val>max)?max:(val<min)?min:val;
}

var game={
	tiles:[],
	NNtiles:[],
	tc:size,
	step:function(Neural=false){
		let nextgen=[];
		for(let y=0;y<this.tc;y++)for(let x=0;x<this.tc;x++){
			let sum=0;
			for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)sum+=this.get(x+i,y+j);
			sum-=this.get(x,y);
			nextgen.push((sum==3||(this.get(x,y)==1&&sum==2))?1:0);
		}
		if(Neural) this.NNtiles=scanner.run(this.tiles);
		this.tiles=nextgen;
	},
	randomize(chance=0.2){
		this.tiles=[];
		for(let i=0;i<this.tc**2;i++)this.tiles.push((Math.random()<chance)?1:0);
		return this.tiles;
	},
	show:function(){
		ctx.clearRect(0,0,1000,1000);
		let s=c.width/this.tc;
		for(let x=0;x<this.tc;x++)for(let y=0;y<this.tc;y++){
			ctx.beginPath();
			ctx.rect(x*s,y*s,s,s);
			if(smooth) ctx.fillStyle=`rgb(${this.get(x,y)*255},${hold(this.NNtiles.get(y,x),0,1)*255},0)`;
			else ctx.fillStyle=`rgb(${this.get(x,y)*255},${((this.NNtiles.get(y,x)>0.5)?255:0)},0)`;
			ctx.fill();
		}
	},
	get:function(x,y){
		return(x<0||x>=this.tc||y<0||y>=this.tc||!this.tiles[y*this.tc+x])?0:this.tiles[y*this.tc+x];
	}
}

function updating(){
	if(training) letrain(1,10);
	game.step(true);
	game.show();
}

function setup(){
	createdata(300);
	game.randomize();
}
setup();
let ui=window.setInterval(updating,100);

function test(n=100){
	console.time('Scanner');
	for(let i=0;i<n;i++)scanner.run(data[Math.floor(Math.random()*data.length)]);
	console.timeEnd('Scanner');
	console.log(`${n} iterations`);
}

function getcost(a,b){
    let sum=0;
    for(let i =0;i<a.length;i++) sum+=(a[i]-b[i])**2;
    return sum/a.length
}
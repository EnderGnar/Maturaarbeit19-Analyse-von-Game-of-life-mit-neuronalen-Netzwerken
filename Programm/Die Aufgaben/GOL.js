var c=document.getElementById("mycanvas");
var ctx=c.getContext('2d');
var id=false;
var scanner=new nn.LinearNN(9,1,[5,5],nn.DeLU);
const size=32;
const fs=2;
var scanner2=nn.createNeuralNetwork({
	f:'DeLU',
	input:{r:size,c:size},
	output:{r:size,c:size},
	saves:[
		{r:size,c:size,name:'a1'},
		{r:size,c:size,name:'a2'},
		{r:size,c:size,name:'a3'},
	],
	actions:[
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'input',
			output:'a1'
		},
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'input',
			output:'a2'
		},
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'input',
			output:'a3'
		},
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'a1',
			output:'output'
		},
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'a2',
			output:'output'
		},
		{
			t:'Convolution',
			d:{r:fs,c:fs},
			input:'a3',
			output:'output'
		},
	],
});
var totaltrains=0;
var dataset=[];
var outputscale=[0,0,0,0,0]
function letrain(n=10,t=5){
	totaltrains+=n;
	for(let i=0;i<n;i++){
		let data=[];
		for(let j=0;j<t;j++){
			let sum=0;
			let mat=new Matrix(1,9);
			for(let k=0;k<9;k++){
				let nm=Math.floor(Math.random()*2);
				mat.body[k]=nm
				if(k!==4)sum+=nm;
			}
			data.push({i:mat,o:new Matrix(1,1,[(sum==3||(mat.body[4]==1&&sum==2)?1:0)])});
		}
		scanner.train(data);
	}
}
var game={
	tiles:[],
	NNtiles:[],
	tc:32,
	step:function(Neural=false){
		let nextgen=[];
		for(let y=0;y<this.tc;y++)for(let x=0;x<this.tc;x++){
			let sum=0;
			for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)sum+=this.get(x+i,y+j);
			sum-=this.get(x,y);
			nextgen.push((sum==3||(this.get(x,y)==1&&sum==2))?1:0);
		}
		if(Neural){
			this.NNtiles=[];
			for(let y=0;y<this.tc;y++)for(let x=0;x<this.tc;x++)this.NNtiles.push(this.getNN(x,y));
		}
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
			let c=this.get(x,y)*255;
			ctx.fillStyle='rgb('+c+','+((this.NNtiles[y*this.tc+x]>0.5)?255:0)+',0)';
			ctx.fill();
		}
	},
	showI:function(){		
		let imgData=ctx.createImageData(this.tc,this.tc);
		for (let i=0;i<imgData.data.length;i+=4){
			let c=this.tiles[i/4]*255
			imgData.data[i+0]=c;
			imgData.data[i+1]=c;
			imgData.data[i+2]=c;
			imgData.data[i+3]=255;
		}
		ctx.putImageData(imgData,0,0);
	},
	get:function(x,y){
		return(x<0||x>=this.tc||y<0||y>=this.tc||!this.tiles[y*this.tc+x])?0:this.tiles[y*this.tc+x];
	},
	getNN:function(x,y){
		let data=[];
		for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)data.push(this.get(x+i,y+j));
		let out=scanner.run(data).body[0];
		if(out<0)out=0;
		if(out>1)out=1;
		return out;
	}
}
function updating(){
	//letrain(10,20);
	game.step(true);
	if(id)game.showI();
	else game.show();
}
function equal(A,B){
	for(let i=0;i<A.length;i++)if(A[i]!==B[i])return false;
	return true;
}
function createData(n){
	for(let i=0;i<n;i++){
		let dat={i:game.randomize()};
		for(let j=0;j<1000;j++)game.step();
		dat.o=getcycle();
		outputscale[dat.o]++;
		dataset.push(dat);
	}
}
function createData2(n){
	for(let i=0;i<n;i++){
		game.randomize();
		for(let j=0;j<1000;j++)game.step();
		let dat={i:game.tiles};
		dat.o=getcycle();
		outputscale[dat.o]++;
		dataset.push(dat);
	}
}
function getcycle(inp){
	if(inp) game.tiles=inp;
	let current=game.tiles
	for(let j=0;j<5;j++){
		game.step();
		if(equal(game.tiles,current)){
			return j;
		}
	}
	return 4;
}
function setup(){
	game.randomize();
}
setup();
let ui=window.setInterval(updating,100);
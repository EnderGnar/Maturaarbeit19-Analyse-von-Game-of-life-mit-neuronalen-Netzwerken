var c=document.getElementById("mycanvas");
var ctx=c.getContext('2d');
var id=false;
var scanner=new nn.LinearNN(9,1,[8],nn.ReLU);
var totaltrains=0;
var testdata=[];
var lookup=true;
var learn=[];
var ln=100;
for(let i=0;i<20;i++){
	let sum=0;
	let mat=new Matrix(1,9);
	for(let k=0;k<9;k++){
		let nm=Math.floor(Math.random()*2);
		mat.body[k]=nm
		if(k!==4)sum+=nm;
	}
	testdata.push({i:mat,o:(sum==3||(mat.body[4]==1&&sum==2)?1:0)});
}
//generiert mögliche Situationen
//rechnet aus, was ihre Lösungen sind
//gibt beide Informationen dem Neural Network zum Trainieren.
function letrain(n=10,t=5){
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
		totaltrains++;
		if(lookup&&totaltrains%ln==0&&testcost()<0.1) return totaltrains;
	}
}

//Fehler des NN messen
function testcost(){
	sum=0;
	for(let i=0;i<testdata.length;i++){
		sum+=(scanner.run(testdata[i].i).body[0]-testdata[i].o)**2;
	}
	return sum
}

//Teste über n Netzwerke ihre Leistung
function testscanner(n=1){
	data=[];
	for(let i=0;i<n;i++){
		scanner=new nn.LinearNN(9,1,[8,4],nn.DeLU);
		totaltrains=0;
		let result=letrain(20000,10)
		if(result!==undefined)data.push(result);
		else data.push('not done');
	}
	return data;
}

//hält Wert in einem Interval
function hold(val,min,max){
	return(val>max)?max:(val<min)?min:val;
}

var game={
	tiles:[],
	NNtiles:[],
	tc:50,
	
	//rechnet die nächste Generation aus. Voraussage des NN optional
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
	
	//erneuert Feld
	randomize(chance=0.2){
		this.tiles=[];
		for(let i=0;i<this.tc**2;i++)this.tiles.push((Math.random()<chance)?1:0);
		return this.tiles;
	},
	
	//gibt drawcall um die einzelnen Felder nach Voraussage des NN und eigentlichem Wert einzufärben
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
	
	//gibt Wert der Zelle auf Pos(x,y) zurück
	get:function(x,y){
		return(x<0||x>=this.tc||y<0||y>=this.tc||!this.tiles[y*this.tc+x])?0:this.tiles[y*this.tc+x];
	},
	
	//erschafft die Voraussage des NN zurück
	getNN:function(x,y){
		let data=[];
		for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)data.push(this.get(x+i,y+j));
		return hold(scanner.run(data).body[0]);;
	}
}

function updating(){
	//letrain(10,20);
	game.step(true);
	game.show();
}

function setup(){
	game.randomize();
}
setup();
let ui=window.setInterval(updating,100);
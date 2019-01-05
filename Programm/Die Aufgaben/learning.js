var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
var scanner=nn.LinearNN(9,1,[12,8,10]);
var noice=0.2;
let mat=new Matrix(1,9);
function letrain(times=10,fors=10){
	for(var h=0;h<times;h++){
		var data=[];
		for(i=0;i<fors;i++){
			var field=[];
			var counter=0;
			for(j=0;j<9;j++){
				var bool=Math.random()<0.5;
				field.push((bool)?1-Math.random()*noice:Math.random()*noice);
				mat.set(field);
				if(j!==4&&bool){
					counter++;
				}
			}
			data.push({i:field,o:[((counter==3)||(field[4]>0.5&&counter==2))?1:0]})
		}
		scanner.train(data);
	}
}
function rungame(field){
	var counter=0;
	for(j=0;j<9;j++){
		if(j!==4&&field[j]>0.5){
			counter++;
		}
	}
	return ((counter==3)||(field[4]>0.5&&counter==2))?1:0;
}
var ttimes=100;
var train=true;
var shownn=false;

var game={
	size:{x:0,y:0},
	cells:[],
	nnprediction:[],
	cellsize:20,
	chance:0.5,
	smooth:true,
	draw:function(mat=this.cells,off={x:0,y:0},style=function(cell){ctx.fillStyle=(cell>0.5)?'#FFFFFF':'#000000'}){
		ctx.clearRect(off.x,off.y,this.cellsize*this.size.x,this.cellsize*this.size.y);
		for(i=0;i<mat.length;i++){
			ctx.beginPath();
			style(mat[i]);
			ctx.rect((i%this.size.x)*this.cellsize+off.x,Math.floor(i/this.size.x)*this.cellsize+off.y,this.cellsize,this.cellsize);
			ctx.fill();
		}
	},
	step:function(){
		var oldlayer=this.cells;
		this.cells=[];
		this.nnprediction=[];
		for(i=0;i<this.size.y;i++){
			for(h=0;h<this.size.x;h++){
				var areaa=[];
				for(j=-1;j<=1;j++){
					for(k=-1;k<=1;k++){
						if(h+j>=0&&h+j<this.size.x&&i+k>=0&&i+k<this.size.y){
							areaa.push(oldlayer[h+j+(this.size.x*(i+k))]);
						}
						else{
							areaa.push(0);
						}
					}
				}
				this.cells.push(rungame(areaa));
				if(this.smooth){
					this.nnprediction.push(scanner.run(areaa)[0]);
				}
				else{
					this.nnprediction.push((scanner.run(areaa)<0.5)?0:1);
				}
			}
		}
	},
	randomize:function(){
		this.cells=[];
		for(i=0;i<this.size.x*this.size.y;i++){
			this.cells.push((Math.random()<this.chance)?1:0);
		}
	}
}
game.size={x:3,y:3};
game.randomize();
game.step();

function updating(){
	if(train){
		letrain(ttimes);
	}
	if(shownn){
		ctx.clearRect(0,0,1000,1000)
		scanner.draw();
	}
	else if(live){
		game.step();
		game.draw();
	}
	else{
		dreamtick();
	}
}
window.setInterval(updating,30);
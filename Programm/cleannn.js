class Matrix{
	constructor(x=1,y=1,a){
		this.body=[];
		if(Array.isArray(x)&&Array.isArray(x[0])){
			this.d={c:x.length,r:x[0].length};
			for(let i of x) for(let j of i)this.body.push(j);
			return this;
		}
		this.d={c:x,r:y};
		if(a===undefined) for(let t=0;t<x*y;t++)this.body.push(0);
		else for(let t=0;t<x*y;t++)this.body.push(a[t]);
	}
	get columns(){
		return this.d.c
	}
	get rows(){
		return this.d.r
	}
	each(f){
		this.body.forEach(f);
	}
	get(x=0,y=0){
		if(x<0||y<0||x>=this.d.c||y>=this.d.r) return 0;
		return this.body[y+x*this.d.r];
	}
	set(x=0,y=0,v){
		if(Array.isArray(x)){
			for(let i in x)this.body[i]=x[i];
			return;
		}
		if(Array.isArray(x.body)){
			for(let i in x.body)this.body[i]=x.body[i];
			return;
		}
		if(!(y<this.d.r&&x<this.d.c))return 0;
		this.body[y+x*this.d.r]=v;
	}
	log(){
		let arar=[];
		for(let i=0;i<this.d.r;i++)arar.push([]);
		for(let i=0;i<this.d.c;i++) for(let j=0;j<this.d.r;j++)arar[j][i]=this.body[j+i*this.d.r];
		console.table(arar);
	}
	copy(){
		return new Matrix(this.d.c,this.d.r,[...this.body]);
	}
	mul(a){
		if(!(a.d.c==this.d.r)) return console.log("Multiplication failed A.#row != B.#column");
		let arr=[];
		for(let k=0;k<this.d.c;k++) for(let j=0;j<a.d.r;j++){
			let sum=0;
			for(let m=0;m<this.d.r;m++)sum+=this.body[m+k*this.d.r]*a.body[j+m*a.d.r];
			arr.push(sum);
		}
		return new Matrix(this.d.c,a.d.r,arr);
	}
	add(a=0,y=0,v){
		if(!a.body){		
			this.body[y+a*this.d.r]+=v;
			return;
		}
		if(!(a.d.c==this.d.c&&a.d.r==this.d.r)) return console.log("Addition failed NOT same dimensions");
		for(let i=0;i<this.body.length;i++)this.body[i]+=a.body[i];
	}
}
var nn={
	NeuralNetwork:class{
		constructor(){
			this.type='NN';
			this.input;
			this.corr=0.1;
			this.output;
			this.saves=[];
			this.actions=[];
			this.cost=nn.sqCost;
		}
		run(arr,s=false){
			this.saves.forEach(function(e){e.v.body.fill(0)});
			this.input.v.set(arr);
			this.actions.forEach(function(e){e.run(s)});
			return this.output.v;
		}
		train(arr){
			for(let j=0;j<arr.length;j++){
				this.run(arr[j].i,true);
				this.saves.forEach(function(e){e.d.body.fill(0);});
				this.calcCost(arr[j].o);
				for(let i=this.actions.length-1;i>-1;i--)this.actions[i].train();
			}
			this.apply(arr.length);
		}
		calcCost(expected){
			for(let i=0;i<this.output.v.body.length;i++)this.output.d.body[i]=this.cost.d(expected.body[i],this.output.v.body[i]);
		}
		apply(n=1){
			for(let i=0;i<this.actions.length;i++)this.actions[i].apply(this.corr,n);
		}
		store(){
			let out={};
			this.saves.forEach((e,i)=>e.name='s'+i);
			let sac=[];
			for(let act of this.actions)sac.push(act.store())
			out.actions=sac;
			let ssv=[];
			this.saves.forEach((e)=>{
				ssv.push({r:e.v.d.r,c:e.v.d.c,name:e.name});
			});
			out.saves=ssv;
			out.input=this.input.name;
			out.output=this.output.name;
			return out;
		}
	},
	MaxPooling:class{
		constructor(x=1,y=1){
			this.input;
			this.output;
			this.d={x:x,y:y};
			this.sp;
		}
		run(sv=false){
			if(sv)this.sp=new Matrix(this.input.v.columns,this.input.v.rows);
			for(let c=0;c<this.output.v.d.c;c++)for(let r=0;r<this.output.v.d.r;r++){
				let max=-Infinity;
				let mp;
				for(let x=0;x<this.d.x;x++)for(let y=0;y<this.d.y;y++){
					let n=this.input.v.get(c*this.d.x+x,r*this.d.y+y);
					if(n>max){
						if(sv)mp={x:x,y:y};
						max=n;
					}
				}
				if(sv)this.sp.set(c*this.d.x+mp.x,r*this.d.y+mp.y,1);
				this.output.v.body[c*this.output.v.d.r+r]=max;
			}
		}
		train(){
			for(let c=0;c<this.output.v.d.c;c++)for(let r=0;r<this.output.v.d.r;r++){
				for(let x=0;x<this.d.x;x++)for(let y=0;y<this.d.y;y++){
					this.input.d.add(c*this.d.x+x,r*this.d.y+y,this.output.d.get(c,r)*this.sp.get(c*this.output.d.d.c+x,r*this.output.d.d.r+y));
				}
			}
		}
		apply(){}
		store(){
			return {input:this.input.name,output:this.output.name,d:{r:this.d.x,c:this.d.y},t:'MaxPooling'};
		}
	},
	Activation:class{
		constructor(F=nn.Sigmoid){
			this.type='activation';
			this.Function=F;
			this.input;
			this.output;
			this.so;
		}
		run(sv=false){
			let out=this.input.v.copy();
			var _f123=this.Function.f;
			out.each(function(e,i,a){a[i]=_f123(e)});
			if(sv)this.so=out;
			this.output.v.add(out);
		}
		train(){
			let tdo=this.output.d;
			for(let i=0;i<tdo.body.length;i++)this.input.d.body[i]+=tdo.body[i]*this.Function.d(this.input.v.body[i],this.so.body[i]);
		}
		apply(){}
		store(){
			return {f:this.Function.name,input:this.input.name,output:this.output.name,t:'Activation'};
		}
	},
	Transfer:class{
		constructor(){
			this.inputs=[];
			this.output;
		}
		run(){
			let s=0;
			for(let input of this.inputs){
				for(let i =0; i<input.v.body.length;i++){
					this.output.v.body[s+i]=input.v.body[i];
				}
				s+=input.v.body.length;
			}
		}
		train(){
			let s=0;
			for(let input of this.inputs){
				for(let i =0; i<input.v.body.length;i++){
					input.d.body[i]=this.output.d.body[s+i];
				}
				s+=input.v.body.length;
			}
		}
		apply(){
			return
		}
		store(){
			let namearr=[];
			for(let i of this.inputs) namearr.push(i.name);
			return {inputs:namearr,output:this.output.name,t:'Transfer'};
		}
	},
	Convolution:class{
		constructor(x=1,y=1,bias=false){
			this.filter=new Matrix(2*x+1,2*y+1);
			this.df=this.filter.copy();
			this.filter.each(function(e,i,a){a[i]=(Math.random()*2-1)/(4*x*y+1)})
			if(bias){
				this.bias=Math.random()*2-1;
				this.db=0;
			}
			this.input;
			this.output;
		}
		run(sv=false){
			let v=this.input.v;
			for(let i=0;i<v.body.length;i++)for(let j=0;j<this.filter.body.length;j++){
				let pos={c:Math.floor(i/v.d.r)+Math.floor(j/this.filter.d.r)-(this.filter.d.c-1)/2,r:i%v.d.r+j%this.filter.d.r-(this.filter.d.r-1)/2};
				this.output.v.body[i]+=this.filter.body[j]*v.get(pos.c,pos.r);
			}
			if(this.bias)this.output.v.body.forEach((e,i,a)=>a[i]+=this.bias);
		}
		train(){
			let d=this.output.d;
			for(let i=0;i<d.body.length;i++)for(let j=0;j<this.filter.body.length;j++){
				let pos={c:Math.floor(i/d.d.r)-(Math.floor(j/this.filter.d.r)-(this.filter.d.c-1)/2),r:i%d.d.r-(j%this.filter.d.r-(this.filter.d.r-1)/2)};
				this.input.d.body[i]+=this.filter.body[j]*d.get(pos.c,pos.r);
				this.df.body[j]+=this.input.v.body[i]*d.get(pos.c,pos.r);
			}
			if(this.bias)this.db+=this.output.d.body.reduce((a,e)=>a+e,0);
		}
		apply(c=0.1,n){
			for(let i=0;i<this.filter.body.length;i++)this.filter.body[i]-=(this.df.body[i]/this.input.v.body.length/n)*c;
			this.df.body.fill(0);
			if(this.bias){
				this.bias-=(this.db/this.input.v.body.length/n)*c;
				this.db=0;
			}
		}
		store(){
			return {d:{r:(this.df.d.r-1)/2,c:(this.df.d.c-1)/2},input:this.input.name,output:this.output.name,bias:this.bias,v:[...this.filter.body],t:'Convolution'};
		}
	},
	Bias:class{
		constructor(s=1){
			this.type='bias';
			this.output;
			this.b=new Matrix(1,s);
			this.db=new Matrix(1,s);
			this.b.each(function(e,i,a){a[i]=Math.random()*2-1});
		}
		run(){
			this.output.v.add(this.b);
		}
		train(){
			this.db.add(this.output.d);
		}
		apply(c=0.1,n){
			for(let i=0;i<this.b.body.length;i++)this.b.body[i]-=(this.db.body[i]/n)*c;
			this.db.body.fill(0);
		}
		store(){
			return {r:this.b.d.r,output:this.output.name,v:this.b.copy().body,t:'Bias'};
		}
	},
	Weight:class{
		constructor(i=1,o=1){
			this.type='weight';
			this.input;
			this.output;
			this.weights=new Matrix(i,o);
			this.dw=new Matrix(i,o);
			this.weights.each(function(e,i,a){a[i]=Math.random()*2-1});
		}
		run(){
			this.output.v.add(this.input.v.mul(this.weights));
		}
		train(){
			for(let c=0;c<this.weights.d.c;c++){
				let sum=0;
				for(let r=0;r<this.weights.d.r;r++){
					this.dw.body[c*this.dw.d.r+r]+=this.output.d.get(0,r)*this.input.v.get(0,c);
					sum+=this.weights.get(c,r)*this.output.d.get(0,r);
				}
				this.input.d.add(0,c,sum);
			}
		}
		apply(c=0.1,n){
			for(let i=0;i<this.weights.body.length;i++)this.weights.body[i]-=(this.dw.body[i]/n)*c;
			this.dw.body.fill(0);
		}
		store(){
			return {d:{r:this.dw.d.r,c:this.dw.d.c},input:this.input.name,output:this.output.name,v:this.weights.copy().body,t:'Weights'};
		}
	},
	Function:class{
		/*
		* this.name is nn.NAME to get it (to read/write NN)
		* this.f is function(input(x)) 
		* this.d is derivative(input(x),output(y) of this.f)
		*/
		constructor(f,d,n){
			this.f=f;
			this.d=d;
			this.name=n;
		}
	},
	LinearNN:function(inp=1,ou=1,h=[],f=nn.Sigmoid){
		let out=new nn.NeuralNetwork();
		out.saves.push(new nn.Save(new Matrix(1,inp)));
		out.input=out.saves[0];
		let o=out.input;
		for(let i=0;i<h.length;i++){
			let w=new nn.Weight(o.v.rows,h[i]);
			out.actions.push(w);
			w.input=o;
			let b=new nn.Bias(h[i]);
			out.actions.push(b);
			o=new nn.Save(new Matrix(1,h[i]));
			out.saves.push(o);
			b.output=o;
			w.output=o;
			let fu=new nn.Activation(f);
			out.actions.push(fu);
			fu.input=o;
			o=new nn.Save(new Matrix(1,h[i]));
			out.saves.push(o);
			fu.output=o;
		}
		let w=new nn.Weight(o.v.rows,ou);
		out.actions.push(w);
		w.input=o;
		o=new nn.Save(new Matrix(1,ou));
		out.saves.push(o);
		w.output=o;
		let b=new nn.Bias(ou);
		out.actions.push(b);
		b.output=o;
		let fu=new nn.Activation(f);
		out.actions.push(fu);
		fu.input=o;
		o=new nn.Save(new Matrix(1,ou));
		out.output=o;
		out.saves.push(o);
		fu.output=o;
		return out;
	},
	Save:class{
		constructor(proto){
			this.v=proto.copy();
			this.d=proto.copy();
		}
	}
}
Math.sigmoid=function(x){
	return 1/(1+Math.exp(-x));
}
nn.Sigmoid = new nn.Function(function(x){return Math.sigmoid(x)},function(x,y){return y*(1-y)},'Sigmoid');
nn.ReLU = new nn.Function(function(x){return (x>0)?x:0},function(x){return(x>0)?1:0},'ReLU');
nn.DeLU = new nn.Function(function(x){return (x>0)?x:x/10},function(x){return(x>0)?1:1/10},'DeLU');
nn.Linear = new nn.Function(function(x){return x},function(){return 1},'Linear');
nn.sqCost = new nn.Function(function(g,v){return (g-v)**2;},function(g,v){return 2*(v-g);},'sqCost');
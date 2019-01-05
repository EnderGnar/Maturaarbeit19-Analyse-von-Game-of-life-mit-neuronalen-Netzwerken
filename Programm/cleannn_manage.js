nn.createSave=function(obj={}){
	if(obj.d)return new this.Save(new Matrix(obj.d.c,obj.d.r));
	if(obj.r&&obj.c)return new this.Save(new Matrix(obj.c,obj.r));
	if(obj.r)return new this.Save(new Matrix(1,obj.r));
	return new this.Save(new Matrix());
};
nn.createBias=function(obj={}){
	let out=new this.Bias(obj.r);
	if(obj.v)out.b.set(obj.v);
	if(obj.o)out.output=obj.o;
	return out;
};
nn.createWeight=function(obj={}){
	let out;
	if(obj.d)out=new this.Weight(obj.d.c,obj.d.r);
	if(obj.v)out.weights.set(obj.v);
	if(obj.i)out.input=obj.i;
	if(obj.o)out.output=obj.o;
	return out;
};
nn.createMaxPooling=function(obj={}){
	let out=new this.MaxPooling(obj.d.c,obj.d.r);
	if(obj.i)out.input=obj.i;
	if(obj.o)out.output=obj.o;
	return out;
}
nn.createTransfer=function(obj={}){
	let out=new this.Transfer();
	if(obj.inputs){
		if(Array.isArray(obj.inputs))out.inputs=[...obj.inputs];
		else out.inputs=[obj.inputs]
	}
	if(obj.o)out.output=obj.o
	return out;
}
nn.createActivation=function(obj={}){
	let out=new this.Activation();
	if(obj.f){
		if(typeof obj.f=='string')out.Function=nn[obj.f];
		else if(obj.f)out.f=f;
		if(obj.i)out.input=obj.i;
		if(obj.o)out.output=obj.o;
	}
	return out;
};
nn.createConvolution=function(obj={}){
	let out;
	if(obj.d)out=new this.Convolution(obj.d.c,obj.d.r,Boolean(obj.bias));
	if(obj.bias&&obj.bias!==true)out.bias=obj.bias;
	if(obj.v)out.filter.set(obj.v);
	if(obj.i)out.input=obj.i;
	if(obj.o)out.output=obj.o;
	return out;
};
nn.createNeuralNetwork=function(obj={}){
	let out=new this.NeuralNetwork();
	let saves=[];
	let actions=[];
	if(obj.input&&typeof obj.input !=='string'){
		if(obj.input.r||obj.input.d.r){
			out.input=this.createSave(obj.input)
			saves.push({o:out.input,name:obj.input.name||'input'});
		}
		else{
			saves.push({o:obj.input,name:obj.input.name||'input'});
			obj.input=obj.input;
		}
	}
	if(obj.output&&typeof obj.output !=='string'){
		if(obj.output.r||obj.output.d.r){
			out.output=this.createSave(obj.output)
			saves.push({o:out.output,name:obj.output.name||'output'});
		}
		else{
			saves.push({o:obj.output,name:obj.output.name||'output'});
			out.output=obj.output;
		}
	}
	if(obj.saves){
		for(let i=0;i<obj.saves.length;i++){
			if(obj.saves[i].type=='save'||obj.saves[i].t=='save'||obj.saves[i].name)saves.push({name:obj.saves[i].name,o:this.createSave(obj.saves[i])});
			else saves.push({name:obj.saves[i].name,o:obj.saves[i]});
		}
	}
	let a=obj.actions;
	for(let i=0;i<a.length;i++){
		if(typeof a[i].input=='object'){
			if(a[i].input.type=='save'||a[i].input.t=='save'||a[i].input.name){
				saves.push({name:a[i].input.name,o:this.createSave(a[i].input)});
			}
			else saves.push({name:a[i].input.name,o:a[i].input});
			a[i].input=a[i].input.name;
		}
		if(typeof a[i].output=='object'){
			if(a[i].output.type=='save'||a[i].output.t=='save'||a[i].output.name){
				saves.push({name:a[i].output.name,o:this.createSave(a[i].output)});
			}
			else saves.push({name:a[i].output.name,o:a[i].output});
			a[i].output=a[i].output.name;
		}
	}
	for(let i=0;i<a.length;i++){
		if(!a[i].t)a[i].t=a[i].type;
		switch(a[i].t){
			case 'Activation':
				if(!a[i].f)a[i].f=obj.f;
				actions.push(this.createActivation(a[i]));
				break;
			case 'Bias':
				actions.push(this.createBias(a[i]));
				break;
			case 'Weights':
				actions.push(this.createWeight(a[i]));
				break;
			case 'Convolution':
				actions.push(this.createConvolution(a[i]));
				break;
			case 'MaxPooling':
				actions.push(this.createMaxPooling(a[i]));
				break;
			case 'Transfer':
				actions.push(this.createTransfer(a[i]));
				break;
			default:
				console.log(`${a[i].t} is unknown`)
				return
		}
		a[i];
		if(a[i].input)actions[i].input=saves.find((e) => {return e.name==a[i].input}).o;
		else if(a[i].inputs)actions[i].inputs.forEach((k,index,a)=>actions[i].inputs[index]=saves.find((e)=>e.name==k).o);
		if(a[i].output)actions[i].output=saves.find((e) => {return e.name==a[i].output}).o;
	}
	for(let i=0;i<saves.length;i++)out.saves.push(saves[i].o);
	if(typeof obj.input =='string') out.input=saves.find((e) => {return e.name==obj.input}).o;
	if(typeof obj.output =='string') out.output=saves.find((e) => {return e.name==obj.output}).o;
	out.actions=actions;
	return out;
}
nn.manageArrayOfConvolutions=function(obj){
	out=[];
	for(let i=0;i<obj.number;i++){
		out.push({...obj,input:(obj.isame)?obj.input:obj.input+i,output:((obj.osame)?obj.output:obj.output+i)})
	}
	return out;
}
nn.manageArrayOfSaves=function(obj){
	out=[];
	for(let i=0;i<obj.number;i++){
		out.push({...obj,name:obj.name+i});
	}
	return out;
}
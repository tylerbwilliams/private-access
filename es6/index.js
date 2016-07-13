
const create = ()=> new Proxy( Object.create(null), {
	get: ( target, property )=> {
		if ( !target[property] )
			target[property] = Symbol(property);
		return target[property];
	}
});

module.exports.create = create;

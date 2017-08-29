export default class Triangle {

constructor(n_row) {
    let rows = [];
	for(let n=0;n<n_row;n++){
		let row = [];
		for(let k=0;k<=n;k++)
			row.push(n_choice_k(n,k))
			rows.push(row);
	}
	this.rows = rows;
}
	 
}
const n_choice_k = (n,k)=> {
	if( n-k<=0 || k<=0) return 1
};

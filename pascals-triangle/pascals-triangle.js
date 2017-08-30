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
 get lastRow() {
    return this.rows[this.rows.length - 1];
  }
	 
}
const n_choice_k = (n,k)=> {
	if( n-k<=0 || k<=0) return 1
		return fact(n)/fact(k)/fact(n-k);
},
fact =(n) => {
	let result = 1;
	for (let i=2;i<=n ;i++) result *= i;
		return result;
}

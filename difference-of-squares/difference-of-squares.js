class Squares {
  
	// this.squareOfSums = 0;
	// this.sumOfSquares = 0;
	// this.difference = 0;

	squareOfSumsFn(num) {

		let square = 0;
		let sum = 0;

		for(let i = 1; i <= num; i++) {
			sum += i;
		}

		square = sum * sum;

		return square;

	}

	sumOfSquaresFn(num) {

		let sum = 0;

		for(let i = 1; i <= num; i++) {
			sum += (i * i)
		}

		return sum;
	}

	constructor(num) {

		this.squareOfSums = this.squareOfSumsFn(num);
		this.sumOfSquares = this.sumOfSquaresFn(num);
		this.difference = this.squareOfSums - this.sumOfSquares;

	}

}

export default Squares;

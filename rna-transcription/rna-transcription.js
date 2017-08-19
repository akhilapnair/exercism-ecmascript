
 class Transcriptor {

  toRna(strand) {
  	let rna = '';
 		 for(const ch of strand) {
		   switch (ch)
		   {
		   	case 'C':
		   	rna += 'G';
		   	break;
		   	case 'G':
		   	rna += 'C'
		   	break;
		   	case 'T':
		   	rna += 'A';
		   	break;
		   	case 'A':
		   	rna += 'U';
		    break;
		   	default:
		   	 throw 'Invalid input DNA.';
		  }
		}
		  return rna;
		}
}
export default Transcriptor;

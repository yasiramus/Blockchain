// Import crypto-js/sha256 for Hashing data and assign to a constant
const chain = require('crypto-js/sha256')
// Create class with name "CryptoBlock"
class CryptoBlock {
    // Call constructor method for initializing object instance with defined object properties.
    constructor( index='',current_time='',info='',nextHash=''){
        this.index=index;
        this.current_time=current_time;
        this.info=info;
        this.nextHash=this.computeHash();
    }
    // Create class function to compute the value or the object property (hash)
    computeHash(){
        let Chains = this.index + this.nextHash + this.current + JSON.stringify(this.info).toString()
      return chain(Chains)
    }
}
 
// creating a new class remember we dont create classes inside a class
class Blockchain {
    constructor( ){ 
        this.chainBlock=[this.initBlock()];
        this.difficulty = 4;
    }
    initBlock(){
        return new CryptoBlock (0,"11/11/2021","Initial Block in our network","0"); 
    }
    obtainLatestBlock(){
        // when you dont know the last digit of an array length you use the rule .lenght-1 to get the last index
        // return this.chainblock[this.chainblock.length-1] fatches the value of the index (block)
        return this.chainBlock[this.chainBlock.length-1]
    }
    addNewBlock(newBlock) {
		newBlock.nextHash = this.obtainLatestBlock().hash;
		newBlock.hash = newBlock.computeHash();
		this.chainBlock.push(newBlock);
	}
	checkChainValidity() {
		for (let i = 1; i < this.chainBlock.length; i++) {
			const currentBlock = this.chainBlock[i];
			const nextHash = this.chainBlock[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash())
				return false;

			if (currentBlock.nextHash !== nextHash.hash)
			 return false;
		}
		return true;
	}
}

let chainCoin = new Blockchain();

console.log("chainCoin mining progressing....");

chainCoin.addNewBlock(
	new CryptoBlock(1, "11/11/2021", {
		sender: "Badar Ismail",
		recipient: "Arafat Yashir",
		quantity: 200
	})
);

chainCoin.addNewBlock(
	new CryptoBlock(2, "11/11/2021", {
		sender: "Abdul Latif Rufai",
		recipient: "Salifu Mubarak",
		quantity: 400
	})
);
chainCoin.addNewBlock(
	new CryptoBlock(3, "11/11/2021", {
		sender: "Kawthar Abu Safiu",
		recipient: "Hasia Mohammed",
		quantity: 600
	})
);
chainCoin.addNewBlock(
	new CryptoBlock(4, "11/11/2021", {
		sender: "Hamza Ahmed",
		recipient: "Osuman Yasir",
		quantity: 600
	})
);
chainCoin.addNewBlock(
	new CryptoBlock(5, "11/11/2021", {
		sender: "Yasira Yusif",
		recipient: "Abdul Matinu Yusif",
		quantity: 800
	})
);
console.log(JSON.stringify(chainCoin, null, 4));

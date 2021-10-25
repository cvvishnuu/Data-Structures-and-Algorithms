class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    put(key, value) {
        const location = this._hash(key);
        if(!this.data[location]) {
            this.data[location] = []            
        }   
        this.data[location].push([key, value])
    }

    get(key) {
        const location = this._hash(key);
        const currentBucket = this.data[location];        
        if(currentBucket.length) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i]
                }
            }
        }
        return undefined;        
        
    }
}

const myHashTable = new HashTable(50);

myHashTable.put("grapes", 1000);
myHashTable.put("apples", 2000);

console.log(myHashTable.get("grapes"))
console.log(myHashTable.get("apples"))


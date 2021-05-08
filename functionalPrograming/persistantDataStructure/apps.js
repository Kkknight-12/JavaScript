class PersistentArray {
    constructor(items = []) {
                this.persistentArray = items
    }

    push(newItem) {
                return new PersistentArray(this.persistentArray.concat(newItem))
    }

    pop() {
                let poppedArray = [...this.persistentArray]
                poppedArray.pop()
                return new PersistentArray(poppedArray)
    }
}

const a = new PersistentArray([1, 2, 3])
console.log("A", a)

const b = a.push(4)
console.log("A", a)
console.log("B", b)

const c = a.pop()
console.log("A", a)
console.log("B", b)
console.log("C", c)

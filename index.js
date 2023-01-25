class Node {
    constructor(data) {
        this.data = data
        this[0] = null
        this[1] = null
        this[2] = null
        this[3] = null
        this[4] = null
        this[5] = null
        this[6] = null
        this[7] = null
    }
}

class Tree {
    constructor(arg1, arg2) {
        this.root = new Node(arg1)
        this.end = arg2
    } 

    findPath(node = this.root, end, array = []) {
        if (node === null) {
            return false
        }
        if (JSON.stringify(node.data) === JSON.stringify(end)) {
            array.push(node.data)
            return `You made it in ${array.length} moves! Here's your path: \n${array.join('\r\n')}`
        }
        let subArray = array.map(x => (x))
        subArray.push(node.data)
        for (let i = 0; i < 8; i++) {
            let result = this.findPath(node[i], end, subArray)
            if (result) {
                return result
            }
        }
    }

    travail(array = [this.root]) {
        if (array.length === 0) {
            return
        }
        let node = array.shift()
        if (JSON.stringify(node.data) === JSON.stringify(this.end)) {
            return this.findPath(this.root, this.end) 
            // return height and carry out function to print route
        }
        node[0] = new Node([(node.data[0] + 1), (node.data[1] + 2)]) /*arg1 array +1 to 0 and +2 to 1*/
        node[1] = new Node([(node.data[0] + 1), (node.data[1] - 2)])
        node[2] = new Node([(node.data[0] - 1), (node.data[1] + 2)])
        node[3] = new Node([(node.data[0] - 1), (node.data[1] - 2)])
        node[4] = new Node([(node.data[0] + 2), (node.data[1] + 1)])
        node[5] = new Node([(node.data[0] + 2), (node.data[1] - 1)])
        node[6] = new Node([(node.data[0] - 2), (node.data[1] + 1)])
        node[7] = new Node([(node.data[0] - 2), (node.data[1] - 1)])

        for (let i = 0; i < 8; i++) {
            if (node[i].data[0] > 8 || node[i].data[0] < 0) {
                node[i] = null
            } else if (node[i].data[1] > 8 || node[i].data[1] < 0) {
                node[i] = null
            }
            if (node[i] !== null) {
                array.push(node[i])
            }
            /* repeat for 8 times, including all options*/
        }
        return this.travail(array)
    }
}

function knightMoves(start, end) {
    let knight = new Tree(start, end)
    console.log(knight.travail())
}

knightMoves([0, 0], [0, 1])
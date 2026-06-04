function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(10);

console.log(head); // node { data: 10, next: null }
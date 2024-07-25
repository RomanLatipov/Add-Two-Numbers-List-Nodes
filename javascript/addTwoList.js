class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function addTwoList(l1, l2) {
  let num1 = '';
  let num2 = '';

  while (l1 || l2) {
    if(l1) {
      num1 += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num2 += l2.val;
      l2 = l2.next;
    }
  }
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  const sum = (parseInt(num1) + parseInt(num2)).toString();

  let currentNode = null;
  for(let i=0; i<sum.length; i++) {
    const node = new Node(parseInt(sum[i]), currentNode);
    currentNode = node;
  }
  
  return currentNode;
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: { val: 0, next: null }");
console.log("=>", addTwoList({ val: 0, next: null }, { val: 0, next: null }));
}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution
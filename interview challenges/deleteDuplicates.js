// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(1);
node1.next = node2;
let node3 = new ListNode(2);
node2.next = node3;
let node4 = new ListNode(3);
node3.next = node4;
let node5 = new ListNode(3);
node4.next = node5;


// console.log(node1);
// debugger;

// var deleteDuplicates = function (head) {
//   if(!head) return head
//     if(head.next && head.val === head.next.val) {
//       head.next = head.next.next;
//     }
//     if(head.next){
//       deleteDuplicates(head.next);
//     }
//     return head;
// };

var deleteDuplicates = function(head) {
  if(!head) return head
  var cur = head

  while(cur!=null && cur.next != null) {
      if(cur.next.val === cur.val) {
          cur.next = cur.next.next
      }else {
          cur = cur.next
      }
  }
  return head
}


console.log(deleteDuplicates(node1));
debugger;

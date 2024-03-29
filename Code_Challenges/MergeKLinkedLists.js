/*
Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output:[1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
1->4->5,
1->3->4,
2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example2:
Input: lists= []
Output: []

Example3:
Input: lists = [[]]
Output: []

Constraints:

k == lists.length
0 <= k <= 104	
0 <= lists[i].length <= 500	
-104 <= lists[i][j] <= 104	
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.*/

let mergeKLists = function (lists) {
    // Base condition
    if (lists === undefined || lists.length === 0 || lists.length > 104) {
        return null;
    }
    return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = (lists, start, end) => {
    // Base condition
    if (start === end) {
        return lists[start];tr
    }
    // Mid point of the list of lists
    let mid = start + parseInt((end - start) / 2);
    // Recursive call for left sublist
    let left = mergeLists(lists, start, mid);
    // Recursive call for right sublist
    let right = mergeLists(lists, mid + 1, end);
    // Merge two sorted lists
    return merge(left, right);
};

const merge = (left, right) => {
    // Dummy node
    let head = new ListNode(-1);
    // Temp node
    let temp = head;
    // Loop until either list becomes null
    while (left !== null && right != null) {
        // Choose the value from the left and right which is smaller
        if (left.val < right.val) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
    }
    // Take nodes from left list if remaining
    while (left != null) {
        temp.next = left;
        left = left.next;
        temp = temp.next;
    }
    // Take nodes from right list if remaining
    while (right != null) {
        temp.next = right;
        right = right.next;
        temp = temp.next;
    }
    return head.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//formats the results to a single line
function printList(node) {
    let list = [];
    while (node != null) {
        list.push(node.val);
        node = node.next
    }
    console.log(list.join(" "));
}

let head1 = new ListNode(1);
head1.next = new ListNode(4);
head1.next.next = new ListNode(5);

let head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

let head3 = new ListNode(2);
head3.next = new ListNode(6);

const result = mergeKLists([head1, head2, head3]);

printList(result);
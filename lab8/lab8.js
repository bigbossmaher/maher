let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {

    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((a, b) => a + b) / this.grades.length
  }
};


let st1 = Object.create(student);
st1.firstName = "f1";
st1.lastName = "l1";
st1.grades = [60, 87, 90, 60];

let st2 = Object.create(student);
st2.firstName = "f2";
st2.lastName = "s2";
st2.grades = [88, 90, 75, 55];

let students = [stu1, stu2];
let  average = students.reduce(
  (average, student, index, array) =>
    average + student.computeAverageGrade() / array.length,
  0
);
console.log(result);





//Q4


function LinkedList(){
  this.length = 0;
  this.head = null;
  this.tail = null;
}
function Node(value) {
  return {
    value: value,
    next: null
  }
}

LinkedList.prototype.add = function(val){
  if(this.head == null){this.head = Node(val);this.tail = this.head;this.length++;}
  else{
    this.tail.next=Node(val);
    this.tail = this.tail.next;
    }
}

LinkedList.prototype.print = function(){
  current = this.head;
  while(current){
    console.log(current.value);
    current = current.next;

  }
  
  
}


LinkedList.prototype.remove = function (val) {

    if (this.head.data == val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.data == val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
};

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();




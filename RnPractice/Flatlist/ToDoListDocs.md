1. Why keyExtractor={(item, index) => index.toString()}?
Your code:
keyExtractor={(item, index) => index.toString()}


keyExtractor receives two arguments:
- item — the current task, such as "Learn React Native".
- index — the task's position in the array, such as 0, 1, or 2.
Suppose your tasks are:
const tasks = ['Learn React Native', 'Practice FlatList', 'Build an app'];


Item	Index	index.toString()
Learn React Native	0	"0"
Practice FlatList	1	"1"
Build an app	2	"2"

Why toString()?

It converts the number 0 into the string "0". React Native expects each key to be a string.

Why not just item?

You actually can write:
keyExtractor={(item) => item}


But that only works safely if every task text is unique. If the user adds "Study" twice, both tasks have the same key.

Using the index avoids duplicate keys in this example:
keyExtractor={(item, index) => index.toString()}


For a more advanced app, stable unique IDs are better than array indexes, especially when items can be deleted or reordered.

2. Why did you use two states?
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);


Because they store two different things.
State 1: task

Stores the text currently being typed in the input.
const [task, setTask] = useState('');


Example value: "Learn JavaScript"


State 2: tasks

Stores all tasks that have been added.
const [tasks, setTasks] = useState([]);


Example value:
['Learn JavaScript', 'Practice React Native']




Think of task as the text you're writing on a piece of paper, and tasks as your saved to-do list.

When you type, task changes. When you press Add, the task moves into tasks.

3. What does setTasks([...tasks, task]) mean?
This is the most important line:
setTasks([...tasks, task]);


Let's say your current state is:
tasks = ['Study JavaScript', 'Practice React Native'];
task = 'Build a Todo App';


Break down the expression:

Step 1: ...tasks spreads the existing array's items.
['Study JavaScript', 'Practice React Native']


Step 2: Add task at the end.
[
  'Study JavaScript',
  'Practice React Native',
  'Build a Todo App'
]


Step 3: setTasks(...) saves this new array in state, causing React Native to re-render the list.
Before pressing Add

tasks = ['Study JavaScript']

task = 'Practice React Native'

After pressing Add

tasks = ['Study JavaScript', 'Practice React Native']

task = ''
The input clears, but the saved task remains in the list.
Why not just write setTasks([task])?

Because that replaces the list with only the new task and removes the previously saved tasks.
Quick test
If:
const tasks = ['A', 'B'];
const task = 'C';


What will this produce?
setTasks([...tasks, task]);


A. ['C']

B. ['A', 'B', 'C']

C. ['A', 'B']

Choose A, B, or C.

const accountId = 144553;
let accountEmail = "Piyush@google.com";
var accountPassword = "12345";

console.table([accountEmail, accountId, accountPassword]);
/* if wrote console.table(var1, var2) will gave error 
 
console.table([var1, var2]) is correct 

const var1 = ['ab', 'bc'];
console.log(var1) -> correct

*/

{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // ✅ 1
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError

/* var is function-scoped → exists outside the block

// let and const are block-scoped → exist only inside {}

Situation	Use
Value won't change	const
Value might change later	let
Need old browser support (but not recommended)	var (use cautiously)



Feature	var	let	const
Scope	Function scoped	Block scoped ({})	Block scoped ({})
Hoisting	Hoisted (initializes as undefined)	Hoisted (but not initialized)	Hoisted (but not initialized)
Reassignable	✅ Yes	✅ Yes	❌ No
Redeclarable	✅ Yes (in same scope)	❌ No	❌ No
Use Case	Avoid using (outdated behavior)	When the value can change	When the value should not change

*/

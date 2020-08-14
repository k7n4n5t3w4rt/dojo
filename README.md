#Today's Kata: "Balanced Parentheses"

Write a program to determine if the the parentheses (), the brackets [], and the braces {}, in a string are balanced.

For example:

{{)(}} is not balanced because ) comes before (

({)} is not balanced because ) is not balanced between {} and similarly the { is not balanced between ()

[({})] is balanced

{}([]) is balanced

{()}[[{}]] is balanced

## The Plan. Well, a plan.

The principle I have in mind is that a structural solution is more likely to get a result than a procedural solution.
So, rather than thinking in terms of doing things with strings, I'm going to try thinking in terms of structures.

In this case, I see a tree structure inherent in the idea of "balanced" parentheses. So this string:

[({})]

...is a tree:

    						[]
    						()
    						{}

This one:

{}([])

...is also a tree, but it has two root nodes:

    						{}							()
    															[]

{()}[[{}]] is also a tree with two root nodes:

    							{}							[]
    							()							[]
    															{}

We're going to have a top-level function that accepts a string and returns a `true` or `false`.
A tree structure lends itself to recursion.

Steps:

{}([])

```
[
	{
		type: "curly",
		children: []
	},
	{
		type: "round",
		children: [
			{
				type: "square",
				children: []
			}
		]
	}
]
```

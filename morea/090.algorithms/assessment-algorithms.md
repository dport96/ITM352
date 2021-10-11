---
title: "Lab3: Algorithms Assessment"
published: true
morea_id: assessment-algorithms
morea_type: assessment
morea_sort_order: 1
morea_outcomes_assessed:
 - outcome-algorithms
---

Many people seemed to have trouble with Exercise #2.

**Exercise #2: Program Logic (DNF 8+ minutes)**

```JAVASCRIPT
	$a = 'Dan'; $b = 'Port';

	$a = $b;

	$b = $a;

	echo 'Name (last, first)'.$a.','.$b;
```

The above program tries to swap the values assigned to the variables $a and $b in order to display your name in the format <last>, <first>. It will not work!

a. (5 minutes) What's wrong with the above program and how can you fix it (without changing the first or last lines)?

A number of people did something strange and used the list() command (which we have NEVER discussed!):

list($b,$a)=array($a,$b); 

Props for a very creative and clever solution! I would like to know who came up with this. It seems several people may have copied this solution. This isn't wrong per se BUT this solution avoids the main point of the exercise so maybe you missed something important. The solution is so much simpler! When $a = $b, the original value of $a is overwritten by the value of $b  The original value of $a is therefore lost.  By introducing a new variable, $c, to temporarily hold the original value of $a, the original value of $a can be preserved.  So the code would look as follows:

{% highlight JAVASCRIPT %}
$c = $a;
$a = $b;
$b = $c;
{% endhighlight %}

This way the original values of $a and $b are swapped.


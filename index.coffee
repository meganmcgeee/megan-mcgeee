elem = $(".test")
arr = "Goodbye, cruel world...".split("")

prop = Bacon.sequentially(150, arr).scan("", (a,b)->a+b)
prop.assign elem, "text"

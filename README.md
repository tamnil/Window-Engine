# Window Engine

![demo](https://github.com/GStaehler/Window_Engine/blob/master/demo.JPG)

---

Welcome to **Window Engine**. Window Engine helps you start projects that need 
draggable and beautiful custom windows.
All windows have that structure :

```html
<div id="mydiv!" class="mydiv">
	<div id="mydiv!header" class="mydivheader color">
		<p class="windowTitle">Title</p>
		<b id="closeButton!">&times;</b>
	</div>
	<div class="mainWindow">Content</div>
</div>
```
*! is the number of the window*

### Add a new window

To add a new window, copy the structure above in your html and change ! (if this is your third window, ! = 3 for example)

You can add another button to open you new window :

```html
<span id="button!"></span>
```

Colors :
- Black (default)
- Purple
- Orange
- Brown
- Cyan
- Crimson
- Green
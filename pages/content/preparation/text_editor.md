Similar to writing a document in a program like Microsoft Word, when programming you need to use a program to, well, program. Such text editors include Sublime Text, Notepad, VSCode, and Atom. At 42, you have two options: Vim or Emacs. While you can use other text editors for other things, for exams you are required to pick from Vim or Emacs.

Everyone has their preference, but I will only go over Vim since that's the one I chose and it's much simpler to start with and get into. Vim is installed on pretty much every Unix-like system, it's lightweight and fast, and it's keyboard-centric meaning, it's to be used without using a mouse.

So there are two types of editors: modeless and modal. A modeless editor is any other word processing program that you might have used before, it only has one mode, inserting text. This includes Notepad, all of the former text editors like VSCode, etc, as well as Microsoft Word. 

A modal editor is where there is more than one mode. In Vim, there are 2 main modes, inserting text and normal mode. Inserting text is the same as the modeless editors, you type, and text is inputted on the screen. Normal mode differs in that when you push a key in normal mode, it does not put a character on the screen. It will instead do a command. So if you pushed the key "l" in normal mode, it will move your cursor right, similar to using the right arrow key.

As an example, basic navigation is bound to HJKL, left down up, and right respectively. Pressing the 'i' key while in normal mode, will switch you over to insert mode. It takes a little getting used to and it may seem confusing at first, but don't worry.

There are also two other modes for Vim. Command mode allows you to use commands for the editor and other things. To bring it up, press ":". At the bottom, you'll see a prompt. Visual mode allows you to select text.


I'd strongly suggest watching the Piscine video for Vim as well as doing Vimtutor. To exit out of vim, make sure you're in normal mode. You can check by looking at the bottom left of the terminal window. If it says insert, then you're in insert mode. Get out of insert mode by pressing the 'Esc' key. Once in normal mode, type the ':' key, followed by 'q'. Then, press enter. You can also do ":exit" or ":qa!". To save, type ":w" or ":wq" to save, then quit.

Vim, while useful, might feel lacking in one way or another. Adding plugins, changing color schemes, and making custom keybinds is all possible. While there are many guides for these, I won't go into too much detail as it's best to get comfortable with basic Vim, then add and change what you want as you need to.


With Vim, it can be a struggle to go from the normal way of typing into a program that has only one mode, to a modal editor. I'd suggest as a tip, try to do all of your typing within Vim if you can, try to learn the basic verb, modifier, and noun keys. Verbs, meaning actions like deleting, selecting, copying, and pasting. Modifiers, like start inserting text here or find this word. Noun, more navigation skipping around words, going forwards, backward, and going to the end or beginning of a line.

Below are some starter resources for Vim. Just like man pages for the command line, you can use ":help" for vim while in the editor.

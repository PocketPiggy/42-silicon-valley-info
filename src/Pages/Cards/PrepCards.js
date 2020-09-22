const PrepCards = [
  [
    //    CLI
    {
      aHref: "https://lym.readthedocs.io/en/latest/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/LCLFYAM.png`,
      title: "Linux CLI FYAM",
      text: "An online book for linux command lines. Good reference material.",
    },
    {
      aHref: "https://en.wikibooks.org/wiki/Bash_Shell_Scripting",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/wb-bss.png`,
      title: "Bash Shell Scripting",
      text: "Another online book for Bash. Good reference material.",
    },
    {
      aHref: "https://ryanstutorials.net/linuxtutorial/cheatsheet.php",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/rt-lcs.png`,
      title: "Ryan's Linux cheatsheet",
      text: "Cheatsheet with all useful commands. Reference material.",
    },
    {
      aHref: "https://explainshell.com/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/explainshell.png`,
      title: "Explain Shell",
      text:
        "Useful for deciphering scripts and commands bit by bit. Recommended.",
    },
    {
      aHref: "https://www.learnenough.com/command-line-tutorial/basics",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/LECLTBD.png`,
      title: "Learn enough CL TBD",
      text: "The free parts are an okay introduction for a simple walkthrough.",
    },
    {
      aHref:
        "https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/T&CLI/zsh.png`,
      title: "Configure terminal: ZSH",
      text:
        "A quick walkthrough on the basics of installing and setting up zsh.",
    },
  ],
  [
    //  Text Editor - Places to learn VIM
    {
      aHref: null,
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/vimtutor.png`,
      title: "Vimtutor",
      text:
        "Worth doing at least once, most helpful resource. Open in terminal.",
    },
    {
      aHref: "http://vimgenius.com/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/VimGenius.png`,
      title: "Vim Genius",
      text: "Has a review/testing feature as well as  a tutorial.",
    },
    {
      aHref: "https://www.learnenough.com/text-editor-tutorial/vim",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/LETETBD.png`,
      title: "Learn enough TE TBD",
      text:
        "The free vim part is an okay introduction as a simple walkthrough.",
    },
  ],
  [
    //  Text Editor - Cheatsheets & addons
    {
      aHref: "https://vimawesome.com",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/VimAwesome.png`,
      title: "Vim Awesome",
      text:
        "For Vim addons & themes, might be best to feel comfy with vim first.",
    },
    {
      aHref: "https://vim.rtorr.com/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/VimRtorr-cs.png`,
      title: "Vim rtorr",
      text: "A Vim cheatsheet with lots of commands listed for advanced use.",
    },
    {
      aHref: "https://vimsheet.com/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/VimSheet-cs.png`,
      title: "Vim Sheet",
      text: "Another Vim cheatsheet that goes into a little more detail.",
    },
  ],
  [
    //  Text Editor - Video guides & other things
    {
      aHref: "https://www.youtube.com/watch?v=-uyFC5ixUQw",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/vim-plugin-manager.jpg`,
      title: "Vim Plug",
      text: "A 11 minute long video going over vim plugin manager.",
    },

    {
      aHref: "https://www.youtube.com/watch?v=nDv9iPv_8R4",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/vim-mini-plug.jpg`,
      title: "Vim Plug - Minimalist",
      text: "A quick 5 minute video showing how to use vim-plug.",
    },
    {
      aHref: "https://www.youtube.com/watch?v=_NUO4JEtkDw",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/TE/tb-vim.jpg`,
      title: "Learning Vim in a week",
      text: "A 24 minute talk about incorporating vim within your life.",
    },
  ],
  [
    //  Git - Tutorials
    {
      aHref:
        "https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/netninja-git.jpg`,
      title: "Net Ninja - Git",
      text: "A very thorough tutorial & walkthrough. Recommended.",
    },
    {
      aHref:
        "https://www.freecodecamp.org/news/what-is-github-what-is-git-and-how-to-use-these-developer-tools/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/fcc-git.png`,
      title: "Freecodecamp - Git",
      text: "A very thorough explanation and example of git in use.",
    },
    {
      aHref: "https://git-scm.com/book/en/v2",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/git-book.png`,
      title: "Pro Git",
      text: "A free eBook. Very, very useful reference material.",
    },
    {
      aHref: "https://learngitbranching.js.org/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/gitbranching.png`,
      title: "Git Branching",
      text: "Excellent way to learn about git & branching. More advanced.",
    },
    {
      aHref:
        "https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/github-cs.png`,
      title: "Github cheatsheet",
      text: "A 2 page cheatsheet with the most used commands.",
    },
    {
      aHref: "https://www.learnenough.com/git-tutorial/getting_started",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/GIT/LEGTBD.png`,
      title: "Learn enough git TBD",
      text: "Free part is an okay introduction, with interesting tidbits.",
    },
  ],
  [
    //  C - CS50
    {
      aHref:
        "https://www.edx.org/course/cs50s-introduction-to-computer-science",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/cs50edx.png`,
      title: "Harvard's CS50x",
      text: "One of the best free beginner programming courses.",
    },
    {
      aHref: "https://study.cs50.net/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/cs50study.png`,
      title: "CS50 Study",
      text: "A good complement to the main CS50 course.",
    },
    {
      aHref: "https://cs50.stackexchange.com/",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/cs50stackex.png`,
      title: "CS50 SE",
      text:
        "Stack exchange specifically for CS50, very helpful for common questions.",
    },
  ],
  [
    // C - C:AMA
    {
      aHref: "https://duckduckgo.com/?q=c+a+modern+approach+pdf&t=ffab&ia=web",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/cama.jpg`,
      title: "C: A modern approach",
      text: "A very, very thorough book covering C89/C99 standards.",
    },
  ],
  [
    //  C - K&R
    {
      aHref: "https://duckduckgo.com/?q=the+c+programming+language+pdf&t=ffab",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/k&r.jpeg`,
      title: "The C Programming Language",
      text: "The holy bible for the C language.",
    },
  ],
  [
    //  C - Misc resources
    {
      aHref: "https://en.wikibooks.org/wiki/C_Programming",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/wb-clang.png`,
      title: "Wikibooks - C",
      text: "A free wikibooks reference and resource for C.",
    },
    {
      aHref: "https://www.youtube.com/watch?v=-CpG3oATGIs",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/programknow.jpg`,
      title: "C Programming tutorial",
      text: "A 4 1/2 hour video going over C.",
    },
    {
      aHref: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/fcc-clang.jpg`,
      title: "Freecodecamp - C",
      text: "A 4 hour introduction on C.",
    },
    {
      aHref: "https://www.youtube.com/watch?v=t5NszbIerYc",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/pointers.jpg`,
      title: "Computerphile: Pointers",
      text: "A 20 minute video breaking down pointers. Recommended.",
    },
    {
      aHref: "https://www.youtube.com/watch?v=Mv9NEXX1VHc",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/recursion.jpg`,
      title: "Computerphile: Recursion",
      text: "A 10 minute video explaining recursion. Recommended.",
    },
    {
      aHref:
        "https://stackoverflow.com/questions/562303/the-definitive-c-book-guide-and-list",
      imgSrc: `${process.env.PUBLIC_URL}/assets/Images/Pages/Preparation/CLANG/cbooks.png`,
      title: "List of C books",
      text:
        "StackOverflow thread full of lots of good C resources, for different levels. ",
    },
  ],
];

export default PrepCards;

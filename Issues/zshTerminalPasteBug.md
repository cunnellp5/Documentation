# Zsh Terminal Bug

## Paste text

### Problem

When pasting text into my terminal I ran into glitches where it looked like i couldnt delete all the text, causing readability issues

### Why did this happen?

I manually customize my terminal so I dont have to download anything I wont use.
I also like showing different symbols depending on the state of my repository.

### Root cause

The following function inside my .zshrc set scoped variables using ascii escape codes to generate colors. This caused the paste bug to occur:

```zsh
parse_git_branch() {
   local branch=$(git symbolic-ref HEAD 2>/dev/null | sed 's|refs/heads/||')
   local check_symbol="\033[32m✓\033[0m"
   local x_symbol="\033[31m✗\033[0m"
   local staged_symbol="\033[33m▲\033[0m"
   local unpushed_symbol="\033[38;5;214m↑\033[0m"
    # ...more code below...
}
```

### Solution

Zsh has a specific way of using colors, this lets me paste new lines and delete text without any gliches

```zsh
parse_git_branch() {
   local branch=$(git symbolic-ref HEAD 2>/dev/null | sed 's|refs/heads/||')
   local check_symbol="%F{green}✓%f"
   local x_symbol="%F{red}✗%f"
   local staged_symbol="%F{yellow}▲%f"
   local unpushed_symbol="%F{214}↑%f"
   # ...more code below...
}
```

## <br>

<br>

[gist link to my .zshrc file](https://gist.github.com/cunnellp5/d27445da7f8be31e02731a0c7b51a000) <small>(This should be updated to what i currently use)</small>

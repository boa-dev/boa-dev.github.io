# Below is a VHS tape file
Output backtrace.gif

# Setup env
Hide

Set TypingSpeed 50ms
Set Theme "GruvboxDark"

# boa_cli needs to be installed for the tape to run.
Require boa

Show

Type@100ms `echo "const oops = () => { throw new Error() }; oops();" > yikes.js `

Enter

Type@100ms "boa yikes.js"

Enter

Sleep 4s

Hide

Type "rm yikes.js"

Enter

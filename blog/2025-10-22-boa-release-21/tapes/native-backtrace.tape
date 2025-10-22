Output native-backtrace.gif

# Setup env
Hide

Set TypingSpeed 50ms
Set Theme "GruvboxDark"

# boa_cli needs to be installed for the tape to run.
Require boa

Show

Type@100ms `cat <<EOF > native.js`
Enter
Type@100ms `Array.prototype.every.call([[10]], arr => arr.forEach(`
Enter
Type@100ms `  e => { throw value; }`
Enter
Type@100ms `));`
Enter
Type@100ms `EOF`
Enter

Type@100ms "boa native.js"

Enter

Sleep 10s

Hide

Type "rm native.js"

Enter

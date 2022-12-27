

export default function text({ addEmoji}) {
const text="i love javascript so much"
return<div>{ addEmoji?addEmoji(text,'\u{1F949}'):text}</div>
}

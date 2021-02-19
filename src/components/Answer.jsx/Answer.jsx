export default function Answer (props){
  const {choices} = (props)
  return <div>
    {choices.map((choice) => <div> {choice} <div/>}
}
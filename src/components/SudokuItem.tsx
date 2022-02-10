
interface props {
    number: number | string
}

export const SudokuItem = ({ number }:props) =>
<article style={{ height:50, width:50, background:'', border:"1px solid white", display:'flex', alignItems:'center',justifyContent:"center"}}>
    <p style={{color:'white'}}>{ number }</p>
</article>
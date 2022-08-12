import MahjongCard from "./MahjongCard";

export default function MahjongContainer(){
    return(
        <div className="container">
            <div className ="row justify-content-around">
            <MahjongCard/>
            <MahjongCard/>
            <MahjongCard/>
            </div>
        </div>
    )
}
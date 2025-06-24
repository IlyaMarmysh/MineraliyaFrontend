import IndexSlide from "@/components/pages/index/components/Slide";
import Collectors from "@/components/pages/index/components/Collectors";
import MineralMain from "@/components/pages/index/components/MineralMain";
import SimilarMinerals from "@/components/pages/index/components/SimilarMinerals";

export default function MainContent() {
    return (
        <>
            <IndexSlide/>
            <Collectors/>
            <MineralMain/>
            <SimilarMinerals/>
        </>
    )
}
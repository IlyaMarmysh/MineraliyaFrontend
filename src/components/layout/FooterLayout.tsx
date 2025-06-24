import FooterNavigationLinks from "@/components/layout/footer/FooterNavigationLinks";
import FooterIconsLinks from "@/components/layout/footer/FooterIconsNavigation";

export default function FooterLayout (){
    return (
        <footer className="flex flex-col w-10/12 items-center mx-auto">
            <FooterNavigationLinks/>
            <FooterIconsLinks/>
            <span className="text-soft-mint text-xl mt-10">© 2025 Mineral collectors. All rights reserved.</span>
        </footer>
    )
}
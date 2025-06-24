import Logo from "@/components/ui/Logo";
import HeaderNavigation from "@/components/layout/header/HeaderNavigation";

import IconsNavigation from "@/components/layout/header/IconsNavigation";
import HeaderSearchForm from "@/components/layout/header/HeaderSearchForm";
import {HeaderUserProfile} from "@/components/layout/header/HeaderUserProfile";


export default function HeaderLayout() {

    return (
        <header className="flex-wrap flex justify-center gap-2 w-full border-b border-light-snow py-5 px-10 xl:gap-9">
            <Logo/>
            <HeaderNavigation/>
            <HeaderSearchForm/>
            <IconsNavigation/>
            <HeaderUserProfile/>
        </header>
    )
};
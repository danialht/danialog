import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu"

import { ModeToggle } from './components/mode-toggle'

interface Props {
    handleNavigation: (page: string) => void
}

function Navbar(props: Props) {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => { props.handleNavigation('home') }} className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => { props.handleNavigation('blog') }} className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => { props.handleNavigation('about') }} className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <ModeToggle />


                </NavigationMenuList>
            </NavigationMenu>

        </>

    );
}

export default Navbar;
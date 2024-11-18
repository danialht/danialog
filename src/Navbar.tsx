import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu" // @

import { ModeToggle } from './components/mode-toggle' // @

function Navbar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/danialog/" className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/danialog/blog" className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/danialog/about" className={navigationMenuTriggerStyle()}>
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
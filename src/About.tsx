import { ThemeProvider } from "./components/theme-provider"

import { Timeline } from "./components/ui/timeline.tsx";
import { Internships, Projects, Education } from './AboutData.tsx';

interface ElementObject {
    title: string;
    content: React.ReactNode;
}

function App() {

    const getTitleElement = (name: string) => {
        return (
            {
                title: name, // <div className="text-7xl" style={titleStyle}> {name} </div>,
                content: <></> as React.ReactNode
            }

        );
    }

    let data: ElementObject[] = [];

    data.push(getTitleElement("Internship"))

    Object.keys(Internships).map(key => (
        data.push({ title: key, content: Internships[key as keyof typeof Internships] })
    ))

    data.push(getTitleElement("Education"))

    Object.keys(Education).map(key => (
        data.push({ title: key, content: Education[key as keyof typeof Education] })
    ))

    data.push(getTitleElement("Projects"))

    Object.keys(Projects).map(key => (
        data.push({ title: key, content: Projects[key as keyof typeof Projects] })
    ))

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >

            <Timeline data={data} />

            <p style={{ padding: "14%" }}></p>

        </ThemeProvider >
    )
}

export default App;
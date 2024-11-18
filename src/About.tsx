import { ThemeProvider } from /*@*/ "./components/theme-provider"

import Navbar from './Navbar.tsx'
import { Timeline } from /*@*/"./components/ui/timeline.tsx";
import { Internships, Projects, Education } from './AboutData.tsx';
// TODO: timeline from aceternity ui

interface ElementObject {
    title: string;
    content: React.ReactNode;
}

function App() {

    // const glowColor = "122, 67, 250"

    // const titleStyle: React.CSSProperties = {
    //     textShadow: "0 0 10px rgba(" + glowColor + " , 0.5), 0 0 15px rgba(" + glowColor + ", 0.3), 0 0 20px rgba(" + glowColor + ", 0.2)",
    //     color: "white",
    //     paddingTop: "12%",
    //     paddingBottom: "10%",
    //     textAlign: "left",
    // };

    const getTitleElement = (name: string) => {
        return (
            {
                title: name, // <div className="text-7xl" style={titleStyle}> {name} </div>,
                content: <></> as React.ReactNode
            }

        );
    }

    // const data = [
    //     { title: getTitleElement("Education") },
    //     { title: "MIT", content: (<>2024-2026<br />Computer Science and Mathematics</>) },
    //     { title: "Sharif", content: <>2022-2024<br /> Computer Engineering</> },
    //     { title: getTitleElement("Experience"), content: <></> },
    //     { title: "Reasearch Internship", content: <></> },
    //     { title: getTitleElement("Projects"), content: <></> },
    //     { title: "Project name1", content: <></> },
    //     { title: "Project name2", content: <></> },
    //     { title: "Project name3", content: <></> },
    //     { title: "Project name4", content: <></> },
    //     { title: "Project name5", content: <></> },
    //     { title: getTitleElement("Awards"), content: <></> },
    //     { title: "IPhO", content: <>Silver Medal in International Physics Olympiad (IPhO) 2022</> },
    //     { title: "APhO", content: <>Bronze Medal in Asian Physics Olympiad (APhO) 2022</> }
    // ];


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
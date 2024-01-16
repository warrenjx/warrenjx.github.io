import { MainLayout, SectionContainer } from "./components"
import { SectionIdEnum } from "./types"
import { IntroSection, AboutSection, EducationSection, ProjectsSection, ContactSection } from "./components/sections"
import { Divider } from "@mui/material";

function App() {
  const sections = [
    {
      sectionId: SectionIdEnum.intro, 
      component: <IntroSection />, 
    }, 
    {
      sectionId: SectionIdEnum.about, 
      component: <AboutSection />, 
    }, 
    {
      sectionId: SectionIdEnum.education, 
      component: <EducationSection />, 
    }, 
    {
      sectionId: SectionIdEnum.projects, 
      component: <ProjectsSection />, 
    }, 
    {
      sectionId: SectionIdEnum.contact, 
      component: <ContactSection />, 
    }, 
  ]; 

  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return <SectionContainer sectionId={sectionId} key={sectionId}>
          <Divider />
          {component}
        </SectionContainer>
      })}
    </MainLayout>
  ); 
}

export default App

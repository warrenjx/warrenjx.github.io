import { MainLayout, SectionContainer } from "./components"
import { SectionIdEnum } from "./types"
import { IntroSection } from "./components/sections"
import { Divider } from "@mui/material";

function App() {
  const sections = [
    {
      sectionId: SectionIdEnum.intro, 
      component: <IntroSection />, 
    }, 
    {
      sectionId: SectionIdEnum.about, 
      component: <IntroSection />, 
    }, 
    {
      sectionId: SectionIdEnum.education, 
      component: <IntroSection />, 
    }, 
    {
      sectionId: SectionIdEnum.projects, 
      component: <IntroSection />, 
    }, 
    {
      sectionId: SectionIdEnum.contact, 
      component: <IntroSection />, 
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

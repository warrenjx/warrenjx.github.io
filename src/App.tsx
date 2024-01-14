import Heading from "./components/Heading"
// if not having "export default" section at the end and "export const" instead of "const"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title={"This is a very much"}/>
      <Section title={"incomplete website"}>some random stuff below</Section>
      <Counter setCount = {setCount}> Count is {count}</Counter>
      <List items={["blah", "blah blah", "blah blah blah"]} render={(item: string) => <span className="bold">{item}</span>} />
    </>
  )
}

export default App

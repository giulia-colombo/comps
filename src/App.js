import './App.css';
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: "jdfj",
      label: "Can I use React?",
      content: "Yes you can use React"
    },
    { 
      id: "dhsud",
      label: "Can I use JS?",
      content: "Yes you can use JS"
    },
    {
      id: "fdjbv",
      label: "Can I use CSS?",
      content: "Yes you can use CSS"
    }
  ];

  return <Accordion items={items}/>
}

export default App;

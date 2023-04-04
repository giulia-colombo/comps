import './App.css';
import Button from '../components/Button';
import { GoBell,GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => console.log("clicked!");

  return (
    <div className="App">
      <div>
        <Button className="mb-5" onClick={handleClick} success rounded>
          <GoBell/>
          Click me!
        </Button>
      </div>
      <div>
        <Button warning rounded>
        <GoDatabase/>
        Buy now
        </Button>
      </div>
      <div>
        <Button warning>
        <GoCloudDownload/>
        See deal
        </Button>
      </div>
      <div>
        <Button danger>Hide ads</Button>
      </div>
      <div>
        <Button primary rounded outline>something</Button>
      </div>
    </div>
  );
}

export default ButtonPage;

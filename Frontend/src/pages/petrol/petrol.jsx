import './petrol.scss'
import * as React from 'react';

const Petrol = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };


  return (
    <div>
      Petrol
      <div>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul className = "menu">
            <li className="menu-item">
              <button>Petroleum</button>
            </li>
            <li className="menu-item">
              <button>Natural Gas</button>
            </li>
          </ul>
        ) : null }
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
      </div>

    </div>
      
  );
};

export default Petrol;
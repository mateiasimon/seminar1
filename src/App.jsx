import { useState } from "react";
import Phones from "./Phones";
import Tablets from "./Tablets";
import "./App.css";

const DeviceToggle = () => {
    const [isShowingPhones, setIsShowingPhones] = useState(true);

    return (
        <div className="device-toggle">

            <div className="toggle-buttons">
                <button  id="Phones" onClick={() => setIsShowingPhones(true)}className={isShowingPhones ? "active" : ""}>Show Phones</button>

                <button id="Tablets" onClick={() => setIsShowingPhones(false)} className={!isShowingPhones ? "active" : ""}> Show Tablets</button>
            </div>


            <div className="device-list">
                {isShowingPhones
                    ? Phones.map((phone, index) => (
                        <div className="device-item" key={index}>
                            <img src={phone.image} alt={phone.name} />
                            <h3>{phone.name}</h3>
                            <p>Price: ${phone.price}</p>
                            <p>{phone.description}</p>
                        </div>
                    ))
                    : Tablets.map((tablet, index) => (
                        <div className="device-item" key={index}>
                            <img src={tablet.image} alt={tablet.name} />
                            <h3>{tablet.name}</h3>
                            <p>Price: ${tablet.price}</p>
                            <p>{tablet.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DeviceToggle;

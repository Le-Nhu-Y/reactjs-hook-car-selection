import {useState,useEffect} from 'react';
function Selector(){
    let [selected, setSelected]= useState('0');
    let [valueSelected, setValueSelected]= useState('');

    let [color, setColor]= useState('0');
    let [valueColor, setValueColor]= useState('');

    const choice1 = e =>{
        setSelected(e.target.value);
    };
    const choice2 = e =>{
        setColor(e.target.value);
    };

    useEffect(() => {
        switch (selected) {
          case "0":
            setValueSelected("Maybach S450");
            break;
          case "1":
            setValueSelected("Maybach S480");
            break;
          case "2":
            setValueSelected("Maybach S580");
            break;
          case "3":
            setValueSelected("Maybach S680");
            break;
          case "4":
            setValueSelected("Maybach GLS 600");
            break;

          default:
        }
      }, [selected]);


      useEffect(() => {
        switch (color) {
          case "0":
            setValueColor("Red");
            break;
         case "1":
            setValueColor("Black");
            break;
         case "2":
            setValueColor("White");
            break;
         case "3":
            setValueColor("Blue");
        break;
          default:
        }
      }, [color]);

    return(
    <div>
        <div>
            Select a car :
            <select
                onChange={e => {
                choice1(e);
                }}
            >
                <option value="0">Maybach S450</option>
                <option value="1">Maybach S480</option>
                <option value="2">Maybach S580</option>
                <option value="3">Maybach S680</option>
                <option value="4">Maybach GLS 600</option>
            </select>  
        </div>
        <div>
            Select a color :
            <select
                onChange={e => {
                choice2(e);
                }}
            >
                <option value="0">Red</option>
                <option value="1">Black</option>
                <option value="2">White</option>
                <option value="3">Blue</option>
            </select>  
        </div>
        <div>
            <h2>Your selected a : {valueSelected} -{valueColor} </h2>
        </div>
    </div>
    )
}

export default Selector;
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

const Search = () => {
    const [listmobil,setlistmobil] = useState();
    const [tipemobil,settipemobil] = useState();
    const [tanggal,settanggal] = useState();
    
    const getalldata = async () => {
        const {data} = await axios("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
        setlistmobil(data);
    }

    const searchcar = () => {
        const hasilfilter = listmobil?.filter((mobil)=> {
            return mobil.type == tipemobil
        })

        setlistmobil(hasilfilter);
      
    }
    useEffect(()=> {
        getalldata();

    },[])

    return (
    <>
        <h1>Cari Mobile</h1>
        <select id="tipe" onChange={(event)=> settipemobil(event.target.value)}>
            <option value="Sedan">Sedan</option>
            <option value="Convertible">Convertible</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Minivan">Minivan</option>
        </select>
        <input type="date" id="tanggal" onChange={(event)=> settanggal(event.target.value)}/>
        <button onClick={searchcar}>Search</button>
        <br/>
        {listmobil?.map((mobil)=>{
            return (
                <div>
                    <p><b>{mobil.model}</b></p>
                    <p>{mobil.type}</p>
                </div>
            )
        })}
    </>
        
    )
}
export default Search;
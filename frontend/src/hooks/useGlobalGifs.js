import { useContext } from "react";
import GifsContext from "../context/GIfsContext";

export default function useGlobalGIfs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}

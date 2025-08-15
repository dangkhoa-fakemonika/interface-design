import {useEffect, useState} from "react";
import {useTypewriter} from "@/pages/ChatbotPage/hooks/useTypeWriter.js";

function Typewriter(props){
    const {input} = props;

    const typed = useTypewriter(input);

    return (
        <div>
            {typed}
        </div>
    )
}

export default Typewriter;
import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Planeacion from "./steps/Planeacion";
import Step4 from "./steps/4";
import Step5 from "./steps/5";
import Step6 from "./steps/6";

export default function Steps() {
    const { id } = useParams()
    const { steps } = useStateContext()

    let components = {
        1: Planeacion,
        2: Planeacion,
        3: Planeacion,
        4: Step4,
        5: Step5,
        6: Step6,
        // 6: Step6,
        // 7: Step7,
        // 8: Step8,
        // 9: Step9,
        // 10: Step10,
        // 11: Step11,
        // 12: Step12,
        // 13: Step13,
        // 14: Step14,
        // 15: Step15,
        // 16: Step16,
        // 17: Step17,
        // 18: Step18,
        // 19: Step19,
        // 20: Step20,
        // 21: Step21,
        // 22: Step22,
        // 23: Step23,
        // 24: Step24
    };

    const time_line = steps[id - 1] ?? null
    if (time_line && time_line.estado === 3) location.href = '/inicio'
    if (time_line) {
        const Step = components[id || 1] ?? null;
        return <Step time_line={time_line} />
    }
}
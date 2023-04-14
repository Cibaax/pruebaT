import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Step1 from "./steps/1";
import Step2 from "./steps/2";

export default function Steps() {
    const { id } = useParams()
    const { steps } = useStateContext()

    let components = {
        1: Step1,
        2: Step2,
        // 3: Step3,
        // 4: Step4,
        // 5: Step5,
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

    const Step = components[id || 1];
    return <Step time_line={steps[id - 1] ?? null} />
}
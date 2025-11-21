/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const Step6 = () => {
    return (
        <div id={'costs-step-six'}>
            <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mt-16 mb-4 border-l-4 border-[#ffca38] pl-4" >Step6. Book Marketing</h2>

            <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c] mb-4">
                When determining your overall publishing budget, ensure that you factor in a portion for marketing.
            </p>

            <p className="text-[clamp(0.875rem,2.5vw,1rem)] font-bold text-[#3c3c3c] mb-4"> According to a {" "}
                <Link href="#"
                    className='underline text-[#4e9eb8] hover:opacity-70 font-bold'>NetGalley study</Link>
                {" "}"as authors' budgets increased, so did their corresponding spend on marketing and advertising."
            </p>

            <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c] mb-4">
                Investing in marketing initiatives that allow you to track dollars directly to sales is a good tactic for those with a smaller budget and limited freedom to experiment.
            </p>
        </div>
    );
};

export default Step6;

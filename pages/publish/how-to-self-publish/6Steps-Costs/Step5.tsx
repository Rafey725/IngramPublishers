import React from "react";
import Link from "next/link";

const Step5 = () => {

    const data = [
        "Trim Size",
        "Interior Color and Paper",
        "Binding Type (paperback or hardback)",
        "Laminate Type (gloss, matte, or textured)",
        "Page Count",
        "Quantity",
        "Ship-To Address"
    ];

    return (
        <div id={'costs-step-five'}>
            <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mt-16 mb-4 border-l-4 border-[#ffca38] pl-4" >5. Printing & Shipping</h2>
            <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c] mb-4">
                The cost to print and ship a book with IngramSpark depends on the following:
            </p>
            <ul className="blueBullets space-y-2 mb-2.5 text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
                {data.map((item, index) => (
                    <li key={index} className="">
                        {item}
                    </li>
                ))}
            </ul>

            <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c] mb-4">IngramSpark has a{" "}
                <Link href="#"
                    className='underline text-[#4e9eb8] hover:opacity-70 font-bold'>Print and Ship Calculator</Link>
                {" "}to help you understand how much it will cost.
            </p>
        </div>
    );
};

export default Step5;

import React from 'react'
import { PiSquareLight } from "react-icons/pi";
import BtnOrigin from '../BtnOrigin/BtnOrigin';
import InfoBtnOrigin from '../BtnOrigin/InfoBtnOrigin';
function PaginationBox() {
    return (
        <>
            <div>
                <div>
                    <img src="/images/blog/blog-1.png" alt="fruit blog" />
                </div>
                <div>
                    <span>22 Dec, 2024</span>
                    <span>
                        <PiSquareLight />
                        Malisa John
                    </span>
                </div>
                <h3>
                    Cross-Cultural Encounters and Insights
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.
                </p>
                <div>
                    <BtnOrigin text={InfoBtnOrigin[4].info}/>
                </div>
            </div>
        </>
    )
}

export default PaginationBox
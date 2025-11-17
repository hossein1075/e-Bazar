import React from 'react'
import { Link } from 'react-router-dom'
function BlogDetailPoint() {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <h5>3 Comments</h5>
                <div>
                    <div>
                        <div>
                            <img src="/images/slider/Image-1.png" alt="" />
                        </div>
                        <div>
                            <span>24 Aug, 2024</span>
                            <span>Stephen Robert</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus massa massa et nisl ornare amet sed.
                         Venenatis egestas massa pharetra nunc quam urna donec in. Quis non a tincidunt tortor commodo.
                         Tristique facilisi sapien est elementum fringilla dignissim.
                    </p>
                    <Link to='#'>Reply</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogDetailPoint
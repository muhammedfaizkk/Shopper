import React from 'react'
import './descriptions.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Description() {
    return (
        <div className='description'>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Descriptions">
                    <div className="iodescription-box-descriptns">
                        <p>
                            An eCommerce online application is a digital platform that
                            facilitates the buying and selling of goods and services over
                            the internet. It serves as a virtual marketplace where
                            businesses and consumers can engage in transactions without
                            the need for physical presence. Below is a comprehensive
                        </p>
                        <p>I took the 5 most popular dresses from AliExpress at the
                            time of writing and set out to write descriptions at least
                            200 words long. Each description focuses on details specific
                            to each dress. I used the product description generator to
                            get me started and did research on styles, trends, and
                            anything about the dresses with which I was unfamiliar.
                            Each description took about an hour to write.</p>

                    </div>
                </Tab>
                <Tab eventKey="profile" title="Reviews(122)">
                    <div className="iodescription-box-descriptns">
                        <p>
                            An eCommerce online application is a digital platform that
                            facilitates the buying and selling of goods and services over
                            the internet. It serves as a virtual marketplace where
                            businesses and consumers can engage in transactions without
                            the need for physical presence. Below is a comprehensive
                        </p>

                    </div>
                </Tab>
            </Tabs>


        </div>
    )
}

export default Description

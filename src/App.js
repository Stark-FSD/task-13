import React from 'react' 
import Card from  './components/Card'
function App() {
    let data = [{

        plan:"FREE",
        price : 0,
        user : "Single user",
        storage : "5GB Storage",
        publicproject:"Unlimited Public Projects",
        puPEnabler : true,
        access: "Community Access",
        accessEnabler : true,
        privateproject:"Unlimited Private Projects",
        prPEnabler : false,
        support : "Dedicated Phone Support",
        supportEnabler : false,
        domain : "Free Subdomain",
        domainEnabler : false,
        report: "Monthly Status Reports",
        reportEnabler  : false
    }, {
        plan:"PLUS",
        price : 9,
        user : "5 Users",
        storage : "50GB Storage",
        publicproject:"Unlimited Public Projects",
        puPEnabler : true,
        access: "Community Access",
        accessEnabler : true,
        privateproject:"Unlimited Private Projects",
        prPEnabler : true,
        support : "Dedicated Phone Support",
        supportEnabler : true,
        domain : "Free Subdomain",
        domainEnabler : true,
        report: "Monthly Status Reports",
        reportEnabler  : false
    }, {
        plan:"PRO",
        price : 49,
        user : "Unlimited Users",
        storage : "150GB Storage",
        publicproject:"Unlimited Public Projects",
        puPEnabler : true,
        access: "Community Access",
        accessEnabler : true,
        privateproject:"Unlimited Private Projects",
        prPEnabler : true,
        support : "Dedicated Phone Support",
        supportEnabler : true,
        domain : "Free Subdomain",
        domainEnabler : true,
        report: "Monthly Status Reports",
        reportEnabler  : true
    }]
    return <>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {/* <Card/> props(property) contact one to another component */}
                    {
                        data.map((e,i)=>{
                            return <Card detail={e} key={i}/>
                        })
                    }
                </div>
            </div>
        </section>
    </>
}

export default App
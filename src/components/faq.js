import React, { Component } from "react";
import "./Login.css";


class FaqApp extends Component {

    render() {

        return (
            <div className="faq-wrapper">
            <div>
                <header className="App__header">
                    <div>
                        <button className="App__view-cart">
                            <a href="/shop">back</a>
                        </button>
                    </div>
                </header>
            
                <div style={{maxWidth: '70%', margin: '0px auto 0', paddingTop: '7em', paddingBottom: '10em'}}>
                
            
            
                    
                    <p className="faq-title" style={{textDecoration: 'underline'}}>ORDER CHANGES</p>
            
                    <p className="faq-title">My shipping info is incorrect/has changed</p>
                    <p className="faq-paragraph">Unfortunately, we cannot guarantee address changes if the order is already in production. If you would like to check if it’s possible to change your shipping address, please email info@purgatoryxla.com your order number and updated shipping address. If your package has shipped, please contact the shipping provider and ask them to update the shipping address. If the package is returned to our Distribution Center, we will email you and let you know.</p>
            
                    <p className="faq-title">Cancel order</p>
                    <p className="faq-paragraph">Unfortunately we cannot guarantee cancellations if the order is already in production. Most orders go into production 48 hours after purchasing. If you would like to check if it’s possible to cancel your order, please email info@purgatoryxla.com immediately with your order number and request for the order to be canceled.</p>
            
                    <p className="faq-title">I would like to change an item</p>
                    <p className="faq-paragraph">Unfortunately we cannot guarantee an item change if the order is already in production. If you would like to check if it’s possible to make changes to the items in your order, please email info@purgatoryxla.com with your order number and the item and/or size change. If your package has shipped, once the order is delivered you may contact info@purgatoryxla.com to begin a return.</p>
            
                    <p className="faq-title" style={{textDecoration: 'underline'}}>SHIPPING</p>
            
                    <p className="faq-title">When will I receive my package?</p>
                    <p className="faq-paragraph">Due to reduced capacity caused by COVID-19, your order may be delayed. Currently, the estimated processing time is 14-21 days.</p>
                    <p className="faq-paragraph">Processing time is separate from shipping time. Orders are processed Monday-Friday (excluding holidays). Processing time requires 7-10 days. Shipping timelines do not apply to orders shipped to APO/FPO addresses.</p>
                    <p className="faq-paragraph">Tracking information states my package as being delivered but I never received it</p>
                    <p className="faq-paragraph">Purgatory by Vinnie Hacker does not hold or accept responsibility for packages or items lost,  stolen, or stuck in transit when being delivered. Concerns or questions about your order after it has shipped should be made to the carrier directly. The Customer Support Team can only see the same tracking information given to the customer through the tracking number.</p>
                    
                     <p className="faq-title">Tracking information shows the package delayed</p>
                     <p className="faq-paragraph">Contact the shipping courier with your tracking information, located on your shipping confirmation email, to find out the most updated status of your package. Concerns or questions about your order after it has shipped should be made to the carrier directly. The Customer Support Team can only see the same tracking information given to the customer through the tracking number.</p>
                     <p className="faq-paragraph">Purgatory by Vinnie Hacker does not hold or accept responsibility for packages or items lost, stolen, or stuck in transit when being delivered.</p>
                     
                     <p className="faq-title">What countries do you ship to?</p>
                     <p className="faq-paragraph">Australia, Canada, France, Germany, Italy, Norway, Spain, Sweden,  United Kingdom, United States, and the United States Minor Outlying Islands</p>
                     <p className="faq-paragraph">*Purgatory is not responsible for the payment of duties and taxes.</p>
                     
                     <p className="faq-title">What happens if my package is returned to sender or refused?</p>
                     <p className="faq-paragraph">If your order is returned to us by the courier, we will contact you by email once the order is returned to our distribution center. Original shipping fees are non-refundable. For items returned to Purgatory by Vinnie Hacker due to an undeliverable address or issues with customs, refunds will be issued for the net price of your item(s) minus the shipping charge.</p>
                     
                     <p className="faq-title">International Shipping</p>
                     <p className="faq-paragraph">Purgatory by Vinnie Hacker is not responsible for the payment of customs or VAT fees. The fee varies and is determined by each country and cannot be calculated in advance. By processing an order, you agree and acknowledge you will pay any customs and VAT fees that may occur.</p>
                     
                     <p className="faq-title" style={{textDecoration: 'underline'}}>RETURNS</p>
                     
                     <p className="faq-title">How do I return an item?</p>
                     <p className="faq-paragraph">You can return a product for up to 30 days from the fulfillment/shipping date if it is not a final sale item. After 30 days from the fulfillment/shipping date, a refund cannot be offered. To be eligible for a return, the item must be unworn and unwashed (free of any stains, odors, makeup, deodorant, hair, or wear) and in original packaging.</p>
                     <p className="faq-paragraph">By processing a return you acknowledge and have read our entire Return Policy and understand the terms. Please start your return in the Returns Portal. Reach out to info@purgatoryxla.com with any questions.</p>
                     
                     <p className="faq-title">Can I exchange an item?</p>
                     <p className="faq-paragraph">Because we can't ensure our customers will be issued the style/size they desire by the time their returned items come back to the distribution center we do not offer exchanges.</p>
                     <p className="faq-paragraph">By processing a return through the Returns Portal and sending your items back, you will receive an electronic store credit to make a future purchase.</p>
                     
                     <p className="faq-title">I received the wrong item/item size</p>
                     <p className="faq-paragraph">Damaged items must be reported/emailed within 3 days of receipt with photos attached to info@purgatoryxla.com. If not reported within 3 days, we will not issue replacements. Purgatory by Vinnie Hacker is not responsible for normal wear and tear to items purchased and will not issue a new item outside of the 3 day window of receiving the item.</p>
                     <p className="faq-paragraph">If you have received an incorrect item or have experienced another issue with your order, please contact info@purgatoryxla.com within 3 days of receiving your order with a picture of the items and packing slip.</p>
                     
                     <p className="faq-title">My package was missing an item and I was issued a refund</p>
                     <p className="faq-paragraph">If your order includes multiple items and one (or more) of the items are out of stock, we will issue a refund for item(s) not in stock and go ahead and ship the rest of your order.</p>
                     
                     <p className="faq-title" style={{textDecoration: 'underline'}}>PAYMENTS AND REFUNDS</p>
                     
                     <p className="faq-title">What currency will I be charged in?</p>
                     <p className="faq-paragraph">All charges on Purgatory by Vinnie Hacker are processed in US Dollars.</p>
                     
                     <p className="faq-title">Price Changes</p>
                     
                     <p className="faq-paragraph">We reserve the right to change the prices of our products at any time.</p>
                     
                     <p className="faq-title">Exchange Rates</p>
                     
                     <p className="faq-paragraph">Differences in prices may vary according to the time an order is placed, and the time the payment is processed. When an order or return is processed, the order or refund will be generated in US Dollars. Purgatory by Vinnie Hacker is not responsible for differences in exchange rates from when an order is placed, the payment is processed, or when a refund is processed.</p>
                     
                     <p className="faq-title">Discount Codes/Retroactive Discounts</p>
                     <p className="faq-paragraph">The amount paid at checkout and the amount that appears on your invoice is non negotiable. Purgatory by Vinnie Hacker will not apply retroactive discounts to orders being processed or that have been processed. Discount codes and site wide sales are only good on orders placed after the start date and before the end date of the discount code/sale. The discount code must be entered during the payment process as it can not be applied later. We are not responsible if the code is not entered at checkout.</p>
                     
                     <p className="faq-title">Late or Missing Refunds</p>
                     <p className="faq-paragraph">Refunds can take up to 10 business days to appear on your statement, depending on how your bank or financial institution processes them. If Purgatory by Vinnie Hacker processed a refund and you have not received a refund after 10 business days, contact your bank or credit card company to see if the refund is still pending.  Currency exchanges may take longer than 10 business days.</p>
                     <p className="faq-paragraph">If you have contacted your bank or credit card company and you still have not received your refund, please contact us at info@purgatoryxla.com.</p>
                     
                    <p className="faq-title">Refunds for Returns</p>
                    <p className="faq-paragraph">Please note that original shipping fees are non-refundable and the cost of the return shipping label is the customer’s responsibility</p>
                    <p className="faq-paragraph">Once your return is received and inspected, we will notify you of the approval or rejection of your return. If you are approved, you will receive an email with a digital store credit for the net amount of the item(s) returned, that can be used immediately.</p>
                     
                </div>
            </div>
        </div>
        );
    }
}
export default FaqApp;

import React, { Component } from 'react';
import DealsComponent from '../Component/Deals';
import _ from 'lodash';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class DealMerchant extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  render() {
    
  let merchantDealArr = _(this.props.deals).groupBy(deal => deal.business_name).map( (value, key)=> {
    return {
      business_name: key, deals: value
    }
  }).value()

  const merchantDeal = merchantDealArr.map(merchant => {
    const deals = merchant.deals.map((deal, index) => <DealsComponent key={index} deal={deal} add={this.props.add} customClass="m12"/> );
   
      return (
        <div id={merchant.business_name} className={merchant.business_name} key={merchant.business_name}>
          <h2 className="merchantname">{merchant.business_name}</h2>
          <Carousel 
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {max: 3000,min: 1024},
                items: 3,
                paritialVisibilityGutter: 40},
              mobile: {
                breakpoint: {max: 464,min: 0},
                items: 1,
                paritialVisibilityGutter: 30},
              tablet: {
                breakpoint: {max: 1024,min: 464},
                items: 2,
                paritialVisibilityGutter: 30}
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            >
            {deals}
          </Carousel>
        </div>
      )
  });
    
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <main className="container"  style={{marginTop:'20px', bottom: "20px"}}>
          <div className="row">
            {merchantDeal}
            {/* {this.props.isready ? merchantDeal : <Loading /> } */}
          </div>
        </main>
      </div>
    );
  }
}

export default DealMerchant;


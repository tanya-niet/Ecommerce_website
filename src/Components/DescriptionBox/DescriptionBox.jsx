import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur labore laborum voluptates tenetur, natus ab iure iusto laboriosam. Quod perspiciatis aperiam exercitationem sequi inventore praesentium qui, ea non ipsum iure consectetur repellendus dolorem!</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis commodi voluptates maiores libero ut architecto quaerat quidem deserunt, asperiores tempora aliquid neque a magnam! Tempore.
            </p>
        </div>
    </div>
  )
}

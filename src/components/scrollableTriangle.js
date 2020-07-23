import React from 'react';
import anime from 'animejs';

let MAX_SVG_HEIGHT = 70;
const TOP_MARGIN = 40;

class ScrollableTriangle extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.triangleSVG = React.createRef();
        this.state = {svgHeight: MAX_SVG_HEIGHT};
        this.heightEndpoint = MAX_SVG_HEIGHT;
        MAX_SVG_HEIGHT = !props.amount ? MAX_SVG_HEIGHT : 12 * props.amount + TOP_MARGIN;
    }
    getPath(svgHeight) {
        const BOTTOM = MAX_SVG_HEIGHT;
        // Width & height of the big triangle
        const WIDTH = 6;
        const HEIGHT = BOTTOM - Math.floor(svgHeight) + TOP_MARGIN;
        const ARROW_WIDTH = 4;
        const ARROW_HEIGHT = 3;
        const ARROW_BASE_Y = HEIGHT + ARROW_HEIGHT;
        const ARROW_DELTA = (WIDTH - ARROW_WIDTH) / 2;
        const path = [
            // Start at the base
            'M', 0, BOTTOM,
            // Draw to the right base point 
            'h', WIDTH, 
            // Line to the right arrow intersect
            'L', WIDTH/2 + ARROW_WIDTH/2 - ARROW_DELTA, ARROW_BASE_Y,
            // Go back to the base
            'M', 0, BOTTOM,
            // Line to the left arrow intersect
            'L', WIDTH/2 - ARROW_WIDTH/2 + ARROW_DELTA, ARROW_BASE_Y,
            // Start the arrow
            'h', -ARROW_DELTA,
            // Line to arrow tip
            'L', WIDTH/2, HEIGHT,
            // Move to the right end 
            'L', WIDTH/2 + ARROW_WIDTH/2, ARROW_BASE_Y,
            // End the loop
            'h', -ARROW_DELTA
        ].join(' ');
        return path; 
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {this.handleScroll()});
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', () => {this.handleScroll()});
    }
    handleScroll(_) {
        if (window === undefined) return;
        let target = this;
        const triangle = target.triangleSVG.current;
        if(!triangle) {
            return
        }

        const scrollY = window.scrollY;

        // Using .offsetTop is probably not a good
        // option considering this gets resized
        // and its parent is nto body
        // but might be better for performance.
        // TODO: Move these constants to constructor
        const divRect = triangle.getBoundingClientRect();
        const topPoint = divRect.top - 100;
        const triangleHeight = divRect.height;
        const bottomPoint = divRect.bottom - 100;
        let relativeD = (scrollY - topPoint - bottomPoint) / (triangleHeight * 3);
        if(relativeD < 0) relativeD = 0;
        if(relativeD > 1) relativeD = 1;

        const newHeight = MAX_SVG_HEIGHT - relativeD * MAX_SVG_HEIGHT;

        // Set state seems to be superior to animeJS for this
        // this.setState({
        //   svgHeight: newHeight
        // });
        console.log(target.heightEndpoint, newHeight, target.heightEndpoint - newHeight >= 0.1);
        if(Math.abs(target.heightEndpoint - newHeight) >= 1 && newHeight !== 0) {
            anime({
                targets: "#contact_triangle",
                d: target.getPath(newHeight),
                duration: 1200,
                easing: 'easeOutExpo',
            });
            target.heightEndpoint = newHeight;  
        }
    }
    render() {
        return (
            <div ref={this.triangleSVG} className={this.className}>
                <div>
                <svg width="270px" viewBox={"0 0 6 " + MAX_SVG_HEIGHT}>
                    <path id="contact_triangle" 
                          d={this.getPath(this.state.svgHeight)} 
                          fill="#1A1D1C" />
                </svg>
                </div>
            </div>
        )
    }
};

export default ScrollableTriangle;
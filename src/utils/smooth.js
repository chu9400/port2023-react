import Lenis from "@studio-freight/lenis";

function lenis () {
    
    const lenis = new Lenis({
        duration : 2,
        easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
}

export default lenis;
$('.hamburger-button').on("click", function(){
  $('.mobile-menu').fadeToggle(100);
});


gsap.from( '.gsap-hide', { 
    x: '200px', 
    duration: 2 
  });

// SCROLL JS //
//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const headings = document.querySelectorAll(".scroll-in-from-bottom")

// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
headings.forEach(object => {

  // we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
        trigger: object,
        // this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in screen or trigger element) )   
        start: "-90% 80%",
		// same as start but the end point of the animation          
        end: "center bottom",
        // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
        scrub: true,
        // last but not least this helps us to visualize the script
        markers: false,
      }
    }).from(object,{
        y:300,
        opacity:0
    })
});


// Cloud Cannon Editor Live Updates
if (!window.CloudCannon) {
  document.addEventListener('cloudcannon:load', function (e) {
    onLiveEditorLoad(e.detail.CloudCannon);
  });
} else {
  onLiveEditorLoad(window.CloudCannon);
};

function onLiveEditorLoad(CloudCannon) {
  CloudCannon.enableEvents();
};

document.addEventListener('cloudcannon:update', async function (e) {
  useNewPageProps(e.detail.CloudCannon);
});
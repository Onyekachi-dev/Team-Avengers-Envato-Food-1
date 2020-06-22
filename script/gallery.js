const DOMStrings = {
  'firstBtn': document.querySelector('.btn-1'),
  secondBtn: document.querySelector('.btn-2'),
  thirdBtn: document.querySelector('.btn-3'),
  gridContainer: document.querySelector('.grid-container')
}

const page1 = `
<div class="row page">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img  data-aos="fade-left" src="../images/gallery/Rectangle 88.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 95.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 89.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="flip-up" src="../images/gallery/Rectangle 92.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-right" src="../images/gallery/Rectangle 96.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 99.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 98.png" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal" ><img data-aos="fade-down" src="../images/gallery/Rectangle 91.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 90.png" alt=""> </a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 93.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img src="../images/gallery/Rectangle 94.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-up" src="../images/gallery/image-2.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
`

const page2 = 
  `
  <div class="row page">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img  data-aos="fade-left" src="../images/gallery/Rectangle 88.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 95.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 89.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="flip-up" src="../images/gallery/Rectangle 92.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-right" src="../images/gallery/Rectangle 96.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 99.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 98.png" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal" ><img data-aos="fade-down" src="../images/gallery/Rectangle 91.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 90.png" alt=""> </a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 93.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img src="../images/gallery/Rectangle 94.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-up" src="../images/gallery/image-2.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
  `
const page3 = `
<div class="row page">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img  data-aos="fade-left" src="../images/gallery/Rectangle 88.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 95.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 89.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="flip-up" src="../images/gallery/Rectangle 92.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-right" src="../images/gallery/Rectangle 96.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 99.png" alt=""></a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 98.png" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal" ><img data-aos="fade-down" src="../images/gallery/Rectangle 91.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="zoom-in" src="../images/gallery/Rectangle 90.png" alt=""> </a>
            </div>
            <div class="col-sm-6">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-down" src="../images/gallery/Rectangle 93.png" alt=""></a>
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img src="../images/gallery/Rectangle 94.png" alt=""></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <a href="#myModal" role="button" data-toggle="modal" data-target="#myModal"><img data-aos="fade-up" src="../images/gallery/image-2.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
`

function setUpEventListener(element, callback) {
  element.addEventListener('click', callback)
}

let prevBtn = DOMStrings.firstBtn
function paginate(next, gridContainer) {
  
  return (e) => {
    const currentBtn = e.target
    if(prevBtn) {
      prevBtn.classList.remove('custom-btn-focus')
    }
    currentBtn.classList.add('custom-btn-focus')
    prevBtn = currentBtn
    gridContainer.innerHTML = next
  }
}

DOMStrings.firstBtn.classList.add('custom-btn-focus')

setUpEventListener(DOMStrings.secondBtn, paginate( page2, DOMStrings.gridContainer))
setUpEventListener(DOMStrings.firstBtn, paginate( page1, DOMStrings.gridContainer))
setUpEventListener(DOMStrings.thirdBtn, paginate( page3, DOMStrings.gridContainer))

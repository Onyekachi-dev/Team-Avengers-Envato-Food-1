const DOMStrings = {
  'firstBtn': document.querySelector('.btn-1'),
  secondBtn: document.querySelector('.btn-2'),
  thirdBtn: document.querySelector('.btn-3'),
  gridContainer: document.querySelector('.grid-container')
}

const page1 = `
<div class="row fade-in">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 88.png" alt="">
              <img src="../images/gallery/Rectangle 95.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 89.png" alt="">
              <img src="../images/gallery/Rectangle 92.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/Rectangle 96.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 99.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 98.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 91.png" alt="">
              <img src="../images/gallery/Rectangle 90.png" alt=""> 
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 93.png" alt="">
              <img src="../images/gallery/Rectangle 94.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/image-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
`

const page2 = 
  `
  <div class="row fade-in">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/Rectangle 96.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 89.png" alt="">
              <img src="../images/gallery/Rectangle 92.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 88.png" alt="">
              <img src="../images/gallery/Rectangle 95.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 99.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 98.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/image-2.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 94.png" alt="">
              <img src="../images/gallery/Rectangle 93.png" alt=""> 
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 90.png" alt="">
              <img src="../images/gallery/Rectangle 91.png" alt="">
            </div>
          </div>
        </div>
      </div>
  `
const page3 = `
<div class="row fade-in">
        <div class="col-sm-6">
        <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 99.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 98.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/Rectangle 96.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 88.png" alt="">
              <img src="../images/gallery/Rectangle 95.png" alt="">
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 89.png" alt="">
              <img src="../images/gallery/Rectangle 92.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <img src="../images/gallery/image-2.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 91.png" alt="">
              <img src="../images/gallery/Rectangle 90.png" alt=""> 
            </div>
            <div class="col-sm-6">
              <img src="../images/gallery/Rectangle 93.png" alt="">
              <img src="../images/gallery/Rectangle 94.png" alt="">
            </div>
          </div>
        </div>
      </div>
`

function setUpEventListener(element, callback) {
  element.addEventListener('click', callback)
}

function paginate(next, gridContainer) {
  return (e) => {
    gridContainer.innerHTML = next
  }
}

DOMStrings.firstBtn.focus()

setUpEventListener(DOMStrings.secondBtn, paginate( page2, DOMStrings.gridContainer))
setUpEventListener(DOMStrings.firstBtn, paginate( page1, DOMStrings.gridContainer))
setUpEventListener(DOMStrings.thirdBtn, paginate( page3, DOMStrings.gridContainer))

$("h1").css("background-color","red")

$(function (){
    $("#app-title").text("經濟系器材借閱系統");
    $("#myapp").append(Ebookcard());


    $("#myapp > div > div.ebookcard-icon > div.ebookcard-icon-icon").append(`<i id = "kindle" class="fa-solid fa-tablet-screen-button"></i>`);

    $("#myapp > div > div.ebookcard-pill > div.ebookcard-pill-availability > div.ebookcard-pill-availability-icon").append(`<i id="check" class="fa-solid fa-check"></i>`)

    let account = 10;
    $("#myapp > div > div.ebookcard-pill > div.ebookcard-pill-availability > div.ebookcard-pill-availability-number").text(account + "/10");
    $("#myapp > div > div.ebookcard-pill > div.ebookcard-pill-action > div").append("<button>Add</button>")
})


function Ebookcard() {

    return `<div class="ebookcard">
    <div class="ebookcard-icon">
      <div class="ebookcard-icon-icon"></div>
      <div class="ebookcard-icon-iconName"></div>
    </div>
    <div class="ebookcard-pill">
      <div class="ebookcard-pill-availability">
        <div class="ebookcard-pill-availability-icon"></div>
        <div class="ebookcard-pill-availability-number"></div>
      </div>
      <div class="ebookcard-pill-action">
        <div class="ebookcard-pill-action-type"></div>
      </div>
    </div>
  </div>
  `
  }

function Ebookcard3() {

  return `
  <div class="ebookcard">
  <div class="ebookcard-icon">
    <div class="ebookcard-icon-icon"></div>
    <div class="ebookcard-icon-iconName"></div>
  </div>
  <div class="ebookcard-pill">
    <div class="ebookcard-pill-availability">
      <div class="ebookcard-pill-availability-icon"></div>
      <div class="ebookcard-pill-availability-number"></div>
    </div>
    <div class="ebookcard-pill-action">
      <div class="ebookcard-pill-action-type"></div>
    </div>
  </div>
</div>
`
}
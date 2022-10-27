ui_Ebook2() |>
    htmltools::save_html("Ebook2.html")

fig <- econWeb::Fig()
fig$export("Ebook2")


tag_Ebook2 <-function(){
 tags$div(class = "ebookcard",
 tags$div(class = "ebookcard-icon",
   tags$div(class = "ebookcard-icon-icon"),
   tags$div(class = "ebookcard-icon-iconName")),
 tags$div(class = "ebookcard-pill",
   tags$div(class = "ebookcard-pill-availability",
     tags$div(class = "ebookcard-pill-availability-icon"),
     tags$div(class = "ebookcard-pill-availability-number")),
   tags$div(class = "ebookcard-pill-action",
     tags$div(class = "ebookcard-pill-action-type"))))
}
Ebook2_dependency <- function(){
htmltools::htmlDependency(
  name="Ebook2",
  version="1.0.0",
  src=c(file=normalizePath(".")),
  style="Ebook2.css",
  all_files = F
)}
ui_Ebook2 <- function(dependency=NULL){
    library(htmltools)
  tagList(tag_Ebook2(), Ebook2_dependency(), dependency)
}
ui_Ebook2() |> econWeb::browseTag2()

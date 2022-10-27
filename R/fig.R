install.packages("languageserver")

remotes::install_github("tpmartin/econWeb")


fig <- econWeb::Fig()
fig$export("Ebook")

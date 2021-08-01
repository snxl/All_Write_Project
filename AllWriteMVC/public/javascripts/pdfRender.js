

addEventListener("load", async function(e){

  const loadingTask = pdfjsLib.getDocument("/uploads/livro3.pdf");
  loadingTask.promise.then(pdf=>{
    pdf.getPage(1).then(function(page) {
      var scale = 1;
      var viewport = page.getViewport(scale);

      const canvas = this.document.querySelector("[data-pdf]")
      var context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the page into the <canvas> element.
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.promise.render(renderContext).then(function() {
        console.log("Page rendered!");
      });
    });
  },
  function(reason) {
    console.trace(reason);
  })

  // Load information from the first page.
  const page = await pdf.getPage(1);

  const scale = 1;
  const viewport = page.getViewport(scale);

  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  await page.render(renderContext);
  console.log("Page rendered!");
})

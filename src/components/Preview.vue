<template>
 <div class="preview">

  </div>
</template>
<style>
  .preview{
    background-color:#ffffff;
    min-height:100vh;
  }
</style> 
<script>
export default {
  data() {
    return {
      previewData: {
        FrontPreview: {
          Color: "Blue",
          Model: "Long arms",
          Picture: "mycar.jpg",
          Text: {
            Fontstyle: "Calibri",
            Fontsize: "18",
            FontColor: "Yellow"
          }
        },
        BackPreview: {
          Color: "Blue",
          Model: "Long arms",
          Picture: "mycar.jpg",
          Text: {
            Fontstyle: "Calibri",
            Fontsize: "18",
            FontColor: "Yellow"
          }
        }
      },
      setSize(Size) {
        this.fillingCustomData.Size = Size;
      },
      setColor(Color) {
        this.fillingCustomData.Color = Color;
      },
      addText(Text) {
        this.fillingCustomData.Text = Text;
      },
      setTshirtPreview(previewData) {
        this.previewData = Picture;
      }
    };
  }
};
</script>
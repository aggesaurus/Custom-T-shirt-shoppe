<template>
  
</template>
<script>
export default {
  data() {
    return {
      fillingCustomData: {
        FrontPreview: {
          Size: "",
          Color: "",
          Material: "",
          Model: "",
          Picture: {
            picUpload: "", //Pucha added this for US17
            picSize: "" //Pucha added this for US17
          },
          Text: {
            Fonttheme: "", //Pucha added this for US16
            Fontsize: "",
            Fontstyle: "",
            FontColor: ""
          }
        },
        BackPreview: {
          Size: "",
          Color: "",
          Material: "",
          Model: "",
          Picture: {
            picUpload: "", //Pucha added this for US17
            picSize: "" //Pucha added this for US17
          },
          Text: {
            Fonttheme: "", //Pucha added this for US16
            Fontsize: "",
            Fontstyle: ""
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
      uploadPicture(Picture) {
        this.fillingCustomData.Picture = Picture;
      },
      changetextFontsize(Fontsize) {
        this.fillingCustomData.Fontsize = Fontsize;
      },
      chooseModel(Model) {
        this.fillingCustomData.Model = Model;
      },
      chooseMaterial(Material) {
        this.fillingCustomData.Material = Material;
      },
      setFontColor(FontColor) {
        this.fillingCustomData.FontColor = FontColor;
      },
      setFontStyle(Fontstyle) {
        this.fillingCustomData.Fontstyle = Fontstyle;
      },
      setFontTheme(Fonttheme) {
        this.fillingCustomData.Fonttheme = Fonttheme;
      },
      setPicSize(picSize) {
        this.fillingCustomData.picSize = picSize;
      }
    };
  }
};
</script>
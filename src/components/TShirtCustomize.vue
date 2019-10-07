<script>
export default {
  data() {
    return {
      fillingCustomData: {
        Size: "",
        Color: "",
        Material: "",
        Model: "",
        Picture: "",
        FrontPreview: "",
        BackPreview: "",
        Text: {
          Fontstyle: "",
          Fontsize: "",
          FontColor: ""
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
      }
    };
  }
};
</script>
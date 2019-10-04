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
          Picture: "",
          Text: {
            Fontstyle: "",
            Fontsize: "",
            FontColor: ""
          }
        },
        BackPreview: {
          Size: "",
          Color: "",
          Material: "",
          Model: "",
          Picture: "",
          Text: {
            Fontstyle: "",
            Fontsize: "",
            FontColor: ""
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
      addPicture(Picture) {
        this.fillingCustomData.Picture = Picture;
      }
    };
  }
};
</script>
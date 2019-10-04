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
          Fonttheme: "",    //Pucha added this
          Fontsize: "",
          Fontstyle: "",
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
        this.fillingCustomData.Fontstyle = Fontstyle
      },
      setFontTheme(Fonttheme) {
        this.fillingCustomData.Fonttheme = Fonttheme
      }
    };
  }
};
</script>
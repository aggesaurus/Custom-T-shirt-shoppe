<script>
export default {
  data() {
    return {
      fillingCustomData: {
        Size: "",
        Color: "",
        Material: "",
        Model: "",
        Picture:  { 
          picUpload: "mycar.jpg",    //Pucha added this for US17
          picSize: "150%"            //Pucha added this for US17
        },
        FrontPreview: "",
        BackPreview: "",
        Text: {
          Fonttheme: "",    //Pucha added this for US16
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
      },
      setPicSize(picSize) {
        this.fillingCustomData.picSize = picSize

      }
    };
  }
};
</script>
<template>
  <div class="t-shirt-config row">
    <h4 class="col-12 headline">Design your TShirt!</h4>
    <form class="needs-validation" novalidate>

      <div class="col-12 form-group">
        <label for="size">Size</label>
        <select class="custom-select d-block w-100" v-model="fillingCustomData.size" id="size" required>
          <option value="">Choose...</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      <div class="col-12 form-group">
        <label for="size">Color</label>
        <select class="custom-select d-block w-100" v-model="fillingCustomData.color" id="color" required>
          <option value="">Choose...</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div class="col-12 form-group">
        <label for="size">Model</label>
        <select class="custom-select d-block w-100" v-model="fillingCustomData.Model" id="model" required>
          <option value="">Choose...</option>
          <option value="long sleeves">long sleeves</option>
          <option value="short sleeves">short sleeves</option>
          <option value="tight">tight</option>
          </select>
      </div>

      <div class="col-12 form-group">
        <label for="image">Image</label>
        <!-- <FileUpload class="form-control-file" id="image" v-model="fillingCustomData.picture"></FileUpload> -->
      </div>

      <div class="col-12 form-group">
        <hr>
        <button class="btn btn-secondary btn-lg btn-block" type="submit">Order your Tee</button>
      </div>
    </form>
  </div>
</template>

<script>
// import FileUpload from '@/components/FileUpload.vue'
// export default {
//   components:{
//     FileUpload
//   },
//   data(){
//     return {
//       tShirt: {
//         size: '',
//         image: ''
//       }
//     }
//   }
// }
// //</script>
<style>
  form{
    background-color:white;
    padding:15px;
    border-radius:5px;
    margin-bottom:20px;
    margin-left:20px;
  }
</style>
</script>

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
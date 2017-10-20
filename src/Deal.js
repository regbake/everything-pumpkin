import React, { Component } from 'react';
import Pumpkin from "./Pumpkin";
import './App.css';

class Deal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pumpkinData: [
        {
          name: "Blaze",
          description: "Flashy yellow, orange-striped fruits are flattened-round with shallow ribs. Sturdy, short vine plants have excellent powdery mildew resistance and produce very high yields of 3 lb. x 7'' diam. x 3.5'' tall fruits with exceptional uniformity in shape and size. Bright color and remarkable productivity make Blaze a fantastic addition to any ornamental lineup. Intermediate resistance to powdery mildew. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw6045ba66/images/products/vegetables/3668_01_blaze.jpg?sw=560&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Jill-Be-Little",
          description: "Uniform and high yielding Jill-Be-Little has a flattened shape and wide, deep ribs. Orange 1/2 lb. fruits measure 3-4'' diam. x 2 1/2'' tall. Great for tabletop and window displays, especially when paired with Spark. Improved disease resistance over Munchkin, which it replaces. Strong long vine plants",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwb10a5b68/images/products/vegetables/3767_01_jillbelittle.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Galeux d'Esines",
          description: "Unique heirloom with flattened-globe shape and salmon-pink skin. While the amount of skin blistering increases as a result of time spent on the vine, we recommend harvesting at maturity because fruits can crack when overmature. Galeux d'Eysines is an ornamental with a lot of character but also lends good flavor to soups and stews. Long vine plant habit.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwe466fdad/images/products/vegetables/3777_01_galeuxdeysines.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Early Giant",
          description: "Elongated and blocky, medium-dark orange fruits are uniform in shape. Excellent size potential, fruits range 14-40 lb. avg. 25 lb. Stocky handles, light ribs, and long vine habit. Easy to grow for such a large-fruited type, Early Giant is also well adapted and a reliable producer. Tall fruits with rich color attract attention at roadside stands and farmers' markets.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw1471c081/images/products/vegetables/03782_01_earlygiant.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Darling",
          description: "Early maturing small pumpkin with a different look. Very uniform, elongated fruit shape and stocky handles. Skin is smooth, lightly ribbed, and a vibrant medium-orange color. Fruits average 5 lb., weight range 3-9 lb. Short vine habit with concentrated fruit set. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwaaab5a3c/images/products/vegetables/3781_01_darling.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
         name: "Porcelain Doll",
         description: "Add diversity to fall ornamental displays with the unique color of Porcelain Doll. The sweet flesh can be used for pies, soups, and other gourmet delights. Full vines bear blocky, deeply ribbed fruit averaging 16-24 lb. Avg. yield 2-3 fruits/plant. ",
         url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw045bcd57/images/products/vegetables/03997_01_porcelaindoll.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Moonshine",
          description: "Very uniform, smooth-skinned pumpkins avg. 8-12 lb. Perfect for decorating or carving. Long, dark green handles. Avg. 3-4 fruits/plant. Combine it with Kakai, Sunlight PMR, and Orange Smoothie for a great display.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw735bd315/images/products/vegetables/00690_01_moonshine.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Musque de Prevence",
          description: "Ribbed, flat, tan fruits are bigger than Long Island Cheese, avg. 8-15 lb. Thick, deep orange, moderately sweet flesh. In France cut wedges are sold in supermarkets and farmers' markets for cooking. Decorative. Late maturity.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw981526a1/images/products/vegetables/02621_01_musqueprovence.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Dill's Atlantic Giant",
          description: "Huge pinkish or orange fruits for fall display. 50 to 100 pounders are commonly grown. Fertile soil, irrigation, wide spacing (70 or more sq.ft./plant), and limiting each long-vined plant to one fruit commonly result in 200-300 pounders. The current world record is an Atlantic Giant of over 2,000 lb. We offer seeds from the originator, Howard Dill of Nova Scotia. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw65564c90/images/products/vegetables/00602_01_dillsatlantic.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Valenciano",
          description: "Clearly the whitest pumpkin; unique for doorstep decorations and painting. Medium-size, flattened, avg. 11-15'' diam. x 6-8'' tall, slightly ribbed, with a smooth white skin. Thick orange flesh suitable for pies.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwad558901/images/products/vegetables/02185_01_valenciano.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Rouge Vif D'Etampes",
          description: "Known as Rouge vif d'Etampes in France. 'Rouge vif' means 'vivid red'. This is an attractive variety for fall display. Shaped flat, looking like a red cheese wheel, the fruits average 10-15 lb. The moderately sweet, orange flesh is suited for pie.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwbfe43fa0/images/products/vegetables/00614_01_rougevifdetmps.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Knuckle Head",
          description: "Freaky, orange, and warted. Spectacular warting makes them the star of the show. Moderate vines bear fruit averaging 12-16 lb. and 12'' h x 10'' w. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw9caaaed3/images/products/vegetables/00091_01_knuckle_head.jpg?sw=774&cx=322&cy=38&cw=1146&ch=1146"
        },
        {
          name: "New England Pie",
          description: "Dark orange-skinned pumpkins in a range of small sizes, typically 4-6 lb. Although not as sweet as squash, the well-colored, orange flesh is relatively starchy, dry, and stringless. A well-known mini Jack O'Lantern type for pies. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw985a42cb/images/products/vegetables/00592g_01_new_england_pie.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Casperita",
          description: "Ideal for pick-your-own operations, fall markets, and home decoration. This mini, 1/2-1 lb., white pumpkin has strong green handles and holds its color well. Avg. yield: 7-8 fruits/plant. Intermediate resistance to powdery mildew and watermelon mosaic virus. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwd87acab5/images/products/vegetables/03076_01_casperita.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Long Island Cheese",
          description: "Medium-large, flattened, medium-ribbed, suggesting a wheel of cheese. Smooth, tan skin, slender woody stem. Deep orange, moderately sweet flesh for pie. Long storage. A beautiful oldie.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwea6c2a98/images/products/vegetables/02051_01_longislandcheese.jpg?sw=774&cx=630&cy=124&cw=1000&ch=1000"
        },
        {
          name: "Marina Di Chioggia",
          description: "Avg. 6-12 lb. bumpy squashes make a wild yet subdued ornamental statement for fall. Amy Goldman in her new book, The Compleat Squash, describes this Italian seaside specialty as deliziosa, especially for gnocchi and ravioli, and a culinary revelation.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw79cf54bd/images/products/vegetables/02625_01_marinadichioggia.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Bliss",
          description: "This Asian hybrid is a mottled combination of green and orange with long, thin handles. A truly unusual coloration on the avg. 5-7 lb. fruit. The beautiful, dark yellow to orange flesh is best for savory dishes, such as curries. Vigorous plants with later maturity.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw1ac03625/images/products/vegetables/00692_01_bliss.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Baby Bear",
          description: "Baby Bear is a unique size and shape, and the deep orange, 1 1/2-2 1/2-lb. fruits are about half the size of a normal pie pumpkin. With slender, sturdy, easy-to-grip handles, they are very appealing to children. In addition to its decorative use, the flesh is good for pies and the semi-hulless seeds are good for roasted snacks.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw30957bd3/images/products/vegetables/0600t_01_babybear.jpg?sw=774&cx=70&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Cargo PMR",
          description: "Cargo PMR is a perfect medium- to large-size jack-o'-lantern pumpkin. Cargo has intermediate resistance to powdery mildew to help ensure that your crop will develop to full maturity with strong, green handles.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Turk's Turban",
          description: "Prominent blossom end button is striped silver, green, and white with a scarlet top that measures 7-9'' across. Avg. 3-5 lb.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw6e9bdfd4/images/products/vegetables/00618_01_turksturban.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Polar Bear",
          description: "Polar Bear retains its color after maturity in the field, at market, and in decorative displays. Long, vigorous vines produce fruit typically weighing 30-65 lb. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw0c19e980/images/products/vegetables/02504_01_polarbear_sm_.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Champion",
          description: "Typically 30 lb. or more, well ribbed, with thick, medium length handle with an upright shape. Vigorous medium vines.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwc3a398c8/images/products/vegetables/2601_01_champion.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Speckled Hound",
          description: "Yellow-orange, thick, dense flesh with dry matter. Oblate shape with shallow ribbing. Avg. 3-6 lb. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dweb586a6a/images/products/vegetables/02506_01_spec_hound.jpg?sw=774&cx=236&cy=94&cw=1000&ch=1000"
        },
        {
          name: "Munchkin",
          description: "Fruits avg. 1/2 lb., and are bright orange with deep ribs. Avg. yield: 14 fruits/plant. Very uniform, only 3-4'' wide.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwc3bb7d14/images/products/vegetables/03075_01_munchkin.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Winter Luxury",
          description: "This marvelous, small pumpkin has a unique, netted skin. Typical weight is 5-7 lb. Doing double duty, Winter Luxury is not only a gorgeous ornamental, but is also superb for eating. Long vines.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw4d79ec0e/images/products/vegetables/2783_01_winterluxury.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Autumn Crown",
          description: "Fantastic squash with excellent eating quality. Medium-long vine. Extremely uniform, buff-colored fruit. Combines the attractive skin and flesh characteristics of a butternut with a flat shape and great flavor. Internal color is bright orange with a small seed cavity. Fruits have the aroma of sweet melon when cut. 2-4 lb. fruits.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwc1d7f725/images/products/vegetables/02508_01_autumncrown.jpg?sw=774&cx=432&cy=86&cw=1000&ch=1000"
        },
        {
          name: "Sunlight PMR",
          description: "Create eye-catching displays, and differentiate yourself from others with these 4-6 lb. yellow pumpkins. Great for markets and mixed bins.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw9c197960/images/products/vegetables/03910_01_sunlight.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Autumn Colors Cushaw",
          description: "Unusual, tri-colored fruits have green bottoms, light-orange tops, and white stripes from top to bottom. Avg. 4-10 lb. Great for decorating.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw9a86908b/images/products/vegetables/03078_01_autumncolorscushawhorz.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Green Striped Cushaw",
          description: "Striking green and white striped fruits avg. 7-25 lb. Great for cooking. Avg. 2-4 fruits per plant. Bulbous bottom with tapered neck. Full vine.",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwaa114b92/images/products/vegetables/03899_01_greencushaw.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        },
        {
          name: "Kakai",
          description: "Eye-catching, medium-small, avg. 5-8 lb., black-striped pumpkins. After displaying the pumpkins in the fall, you can scoop out the large, dark-green, hull-less seeds, which are delicious roasted. The seeds also yield savory oil. Semibush, short-vine plants. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwe69b9145/images/products/vegetables/2860_01_kakai.jpg?sw=774&cx=368&cy=14&cw=1134&ch=1134"
        },
        {
          name: "Red October",
          description: "Red October bears uniform, bright red-orange fruit resembling hubbard squash. Avg. 6-10 lb. fruit. ",
          url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw884d4015/images/products/vegetables/02595_01_redoctober.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196"
        }
      ]
    }
  }

  render() {
    var num = 0;

    let dealOfDay = null;
    let headerPhoto = null;


    if (num === 1 ) {
      dealOfDay =
      <div id="deal-container">
        <div id="deal-div">
            <img src="http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwe466fdad/images/products/vegetables/3777_01_galeuxdeysines.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196" />
        </div>
        <div id="deal-div-right">
          <h1>Limited Edition Featured Pumpkin</h1>
          <h2>Uniform and high yielding Jill-Be-Little has a flattened shape and wide, deep ribs. Orange 1/2 lb. fruits measure 3-4'' diam. x 2 1/2'' tall. Great for tabletop and window displays, especially when paired with Spark. Improved disease resistance over Munchkin, which it replaces. Strong long vine plants</h2>
        </div>
      </div>

    } else {
      headerPhoto =

      <div id="headerPhoto">
        <img src="https://static.pexels.com/photos/265258/pexels-photo-265258.jpeg" />
      </div>
    }

    return (
      <div>

        {headerPhoto}
        {dealOfDay}

          <div id="main-body">
            < Pumpkin url={this.state.pumpkinData[2].url} name={this.state.pumpkinData[0].name} />
            < Pumpkin url={this.state.pumpkinData[1].url} name={this.state.pumpkinData[1].name} />
            < Pumpkin url={this.state.pumpkinData[3].url} name={this.state.pumpkinData[3].name} />
            < Pumpkin url={this.state.pumpkinData[22].url} name={this.state.pumpkinData[22].name} />
            < Pumpkin url={this.state.pumpkinData[28].url} name={this.state.pumpkinData[28].name} />
            < Pumpkin url={this.state.pumpkinData[13].url} name={this.state.pumpkinData[13].name} />
            < Pumpkin url={this.state.pumpkinData[24].url} name={this.state.pumpkinData[24].name} />
            < Pumpkin url={this.state.pumpkinData[25].url} name={this.state.pumpkinData[25].name} />
            < Pumpkin url={this.state.pumpkinData[17].url} name={this.state.pumpkinData[17].name} />
          </div>

      </div>
    );
  }
}

export default Deal;

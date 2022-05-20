const OrderRoutes = require("./routes/order.route");
const productRoutes = require("./routes/products.route");
const CategoryRout=require("./routes/CategoryRout")
const express = require("express");
const EmailRoute=require("./routes/email.route")
var cron = require('node-cron');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b8d3d65ff6a1f7',
    password: '706cce50',
    database: 'heroku_6ebe1a057a88886'
});
const convert = require("xml-js");
// const express = require("express");
const axios = require("axios")
const app = express();
cron.schedule(' 5 * * * * *', () => {
  console.log('running a task every minute');

const fetchBags = async() => {
    try {
        const data = await axios.get(
            `https://live.dawoodonline.pk/services.asmx/PriceChange`
        );

        // console.log(data.data)

        const products = convert.xml2js(data.data);
        console.log(JSON.stringify(products))
        let productsDetails = [];

        for (let i = 1; i < products.elements[0].elements.length; i++) {
            productsDetails.push({
                barCode: products.elements[0].elements[i].elements[0].elements[0].text,
                price: products.elements[0].elements[i].elements[1].elements[0].text,
            });
        }
        for (let i = 0; i < productsDetails.length; i++) {
            console.log(productsDetails[i].barCode + "   " + productsDetails[i].price)
            var sql = `UPDATE products set products.price = ${productsDetails[i].price} where products.Bar_code = ${productsDetails[i].barCode};`;
            await con.query(sql, (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log('Rows affected:', results.affectedRows);
            });
            // con.end()
        }

    } catch (error) {
        console.log("Error" + error)
    }
};
fetchBags()
});  


// const rate=require("./routes/rate")

// const tryRout=require("./routes/tryRout")
// const ToyRout=require("./routes/ToyRoutes")
// const ClutchRout=require("./routes/clutchRoute")
// const bracelateRout=require("./routes/bracelatesRout")
// const hairbandRout=require("./routes/hairRout")
// const mathaRout=require('./routes/mathaPattiRout')
// const giftRout=require("./routes/giftRout")
// const locektRout=require("./routes/locketRout")
// const FingerRingtRout=require("./routes/FingerRingRout")
// const CatcherRout=require("./routes/CatcherRout")
// const PonyRout=require("./routes/PonyRout")
// const LadiesRout=require("./routes/LadiesRout")
// const CoupleWatchesRout=require("./routes/CoupleWatchesRout")
// const InterNationalBrandRout=require("./routes/InterNationalBrandRout")
// const FaceRout=require("./routes/FaceRout")
// const EyeBrowsRout=require("./routes/EyeBrowsRout")
// const NailRout=require("./routes/NailRout")
// const LipsRout=require("./routes/LipsRout")
// const BrushesRout=require("./routes/BrushesRout")
// const MakeupRemoverRout=require("./routes/MakeupRemoverRout")
// const SerumfluidRout=require("./routes/SerumfluidRout")
// const MaskPolisherRout=require("./routes/MaskPolisherRout")
// const ScrubCleanserRout=require("./routes/ScrubCleanserRout")
// const MoisturizerRout=require("./routes/MoisturizerRout")
// const hairRemovalRout=require("./routes/hairRemovalRout")
// const EyeCareRout=require("./routes/EyeCareRout")
// const FacialCareRout=require("./routes/FacialCareRout")
// const personalCareRout=require("./routes/personalCareRout")
// const GelOilRout=require("./routes/GelOilRout")
// const HairMaskRout=require("./routes/HairMaskRout")
// const BodyWashRout=require("./routes/BodyWashRout")
// const HairBrushRout=require("./routes/HairBrushRout")
// const ShampooRout=require("./routes/ShampooRout")
// const StichedSuitsRout=require("./routes/StichedSuitsRout")
// const UnstichedSuitRout=require("./routes/UnstichedSuitRout")
// const FrockRout=require("./routes/FrockRout")
// const KurtiRout=require("./routes/KurtiRout")
// const CoatInnerRout=require("./routes/CoatInnerRout")
// const JacketRout=require("./routes/JacketRout")
// const ScarfSchawlRout=require("./routes/ScarfSchawlRout")
// const AbbayaRout=require("./routes/AbbayaRout")
// const TightsRout=require("./routes/TightsRout")
// const TrouserRout=require("./routes/TrouserRout")
// const BraRout=require("./routes/BraRout")
// const NightyRout=require("./routes/NightyRout")
// const SockRout=require("./routes/SockRout")
// const GloveRout=require("./routes/GloveRout")


// const TShirtRout=require("./routes/TShirtRout")
// const SweetShirtRout=require("./routes/SweetShirtRout")
// const JacketGentsRout=require("./routes/JacketGentsRout")
// const SweaterGentsRout=require("./routes/SweaterGentsRout")
// const TrackSuitRout=require("./routes/TrackSuitRout");
// const TrackSuitRout=require("./routes/TrackSuitRout");
// const pantRout=require("./routes/pantRout");
// const TrouserGentsRout=require("./routes/TrouserGentsRout");
// const ShortRout=require("./routes/ShortRout");
// const CapsRout=require("./routes/CapsRout");
// const GloveGentsRout=require("./routes/GloveGentsRout");
// const BeltRout=require("./routes/BeltRout");
// const UnderWearRout=require("./routes/UnderWearRout");
// const MenWatchesRout=require("./routes/MenWatchesRout");
// const MenGlassesRout=require("./routes/MenGlassesRout");
// const LeatherWallerRout=require("./routes/LeatherWallerRout");
// const BodyMistRout=require("./routes/BodyMistRout");
// const TrackSuitService = require("./services/");


const router = express.Router();
//  LADIES SECTION

// router.use("/try", tryRout);
// router.use("/Toy", ToyRout);
// router.use("/clutch", ClutchRout);
// router.use("/gift", giftRout);
// router.use("/locket", locektRout);
// router.use("/bracelate", bracelateRout);
// router.use("/hairband", hairbandRout);
// router.use("/mathaPatti", mathaRout);
// router.use("/FingerRing", FingerRingtRout);
// router.use("/catcher", CatcherRout);
// router.use("/Pony", PonyRout);
// router.use("/LadiesWatches", LadiesRout);
// router.use("/CoupleWatches", CoupleWatchesRout);
// router.use("/InterNationalBrand", InterNationalBrandRout);
// router.use("/Face",FaceRout);
// router.use("/EyeBrows",EyeBrowsRout);
// router.use("/Nail",NailRout);
// router.use("/Lips",LipsRout);
// router.use("/Brushes",BrushesRout);
// router.use("/MakeupRemover",MakeupRemoverRout);
// router.use("/SerumFluid",SerumfluidRout);
// router.use("/MaskPolisher",MaskPolisherRout);
// router.use("/ScrubCleanser",ScrubCleanserRout);
// router.use("/Moiturizer",MoisturizerRout);
// router.use("/HairRemoval",hairRemovalRout);
// router.use("/EyeCare",EyeCareRout);
// router.use("/FacialCare",FacialCareRout);
// router.use("/PersonalCare",personalCareRout);
// router.use("/GelOil",GelOilRout);
// router.use("/HairMask",HairMaskRout);
// router.use("/BodyWash",BodyWashRout);
// router.use("/HairBrush",HairBrushRout);
// router.use("/Shampoo",ShampooRout);
// router.use("/StichedSuits",StichedSuitsRout);
// router.use("/UnStichedSuits",UnstichedSuitRout);
// router.use("/Frock",FrockRout);
// router.use("/Kurti",KurtiRout);
// router.use("/CoatInner",CoatInnerRout);
// router.use("/Jacket",JacketRout);
// router.use("/Scarf",ScarfSchawlRout);
// router.use("/Abbaya",AbbayaRout)
// router.use("/Tights",TightsRout)
// router.use("/Trouser",TrouserRout)
// router.use("/Bra",BraRout)
// router.use("/Nighty",NightyRout)
// router.use("/Sock",SockRout)
// router.use("/Glove",GloveRout)

// Gents Section
// router.use("/TShirt",TShirtRout)
// router.use("/SweetShirt",SweetShirtRout)
// router.use("/jacketGents",JacketGentsRout)
// router.use("/SweaterGents",SweaterGentsRout)
// router.use("/TrackSuit",TrackSuitRout)
// router.use("/Pant",pantRout)
// router.use("/TrouserGents",TrouserGentsRout)
// router.use("/Shorts",ShortRout)
// router.use("/cap",CapsRout)
// router.use("/GloveGents",GloveGentsRout)
// router.use("/belt",BeltRout)
// router.use("/underwear",UnderWearRout)
// router.use("/MenWatches",MenWatchesRout)
// router.use("/MenGlasses",MenGlassesRout)
// router.use("/LeatherWallet",LeatherWallerRout)
// router.use("/BodyMist",BodyMistRout)


router.use("/Category",CategoryRout)
router.use("/product", productRoutes);
router.use("/order", OrderRoutes);
router.use("/Email",EmailRoute)
// router.use("/rate",rate)

module.exports = router;

// Importing car images
import Audi_Q7 from "./Audi_Q7.png";
import BMW_5_series from "./BMW_5_series.png";
import Ford_Endeavour from "./Ford_Endeavour.png";
import Honda_Accord from "./Honda_Accord.png";
import Honda_City from "./Honda_City.png";
import Hyundai_i20 from "./Hyundai_i20.png";
import Hyundai_Verna from "./Hyundai_Verna.png";
import Mahindra_XUV700 from "./Mahindra_XUV700.png";
import Maruti_Suzuki_Ertiga from "./Maruti_Suzuki_Ertiga.png";
import Maruti_Suzuki_Swift from "./Maruti_Suzuki_Swift.png";
import Maruti_Suzuki_Swift_Dzire from "./Maruti_Suzuki_Swift_Dzire.png";
import Maruti_Suzuki_WagonR from "./Maruti_Suzuki_WagonR.png";
import Mercedes_E_class from "./Mercedes_E_class.png";
import MG_Gloster from "./MG_Gloster.png";
import Porsche_Macan from "./Porsche_Macan.png";
import Skoda_Kylaq from "./Skoda_Kylaq.png";
// import Tata_Harrier from "./Tata_Harrier.png";
import Toyota_Fortuner from "./Toyota_Fortuner.png";
import Toyota_Innova_Crysta from "./Toyota_Innova_Crysta.png";
import Voklswagen_Virtus_GT from "./Voklswagen_Virtus_GT.png";

// Importing bike images
import Bajaj_Pulsar from "./Bajaj_Pulsar.png";
import BMW_R_1250_GSA from "./BMW_R_1250_GSA.png";
import Hero_Splendor from "./Hero_Splendor.png";
import Honda_Activa from "./Honda_Activa.png";
import Honda_Dio from "./Honda_Dio.png";
import Suzuki_Access_125 from "./Suzuki_Access_125.png";
import Suzuki_Burgman from "./Suzuki_Burgman.png";
import Suzuki_Hayabusa from "./Suzuki_Hayabusa.png";
import TVS_Jupiter from "./TVS_Jupiter.png";
import Yamaha_R15 from "./Yamaha_R15.png";

const all = [
    // Car Images
    {
        id: 1,
        name: "Audi Q7",
        image: Audi_Q7,
        category: "Car",
        price: 50000,
        seat: 7
    },
    {
        id: 2,
        name: "BMW 5 Series",
        image: BMW_5_series,
        category: "Car",
        price: 40000,
        seat: 5
    },
    {
        id: 3,
        name: "Ford Endeavour",
        image: Ford_Endeavour,
        category: "Car",
        price: 30000,
        seat: 7
    },
    {
        id: 4,
        name: "Honda City",
        image: Honda_City,
        category: "Car",
        price: 12000,
        seat: 5
    },
    {
        id: 5,
        name: "Hyundai i20",
        image: Hyundai_i20,
        category: "Car",
        price: 8000,
        seat: 5
    },
    {
        id: 6,
        name: "Honda Accord",
        image: Honda_Accord,
        category: "Car",
        price: 13500,
        seat: 5
    },
    {
        id: 7,
        name: "Hyundai Verna",
        image: Hyundai_Verna,
        category: "Car",
        price: 12000,
        seat: 5
    },
    {
        id: 8,
        name: "Mahindra XUV700",
        image: Mahindra_XUV700,
        category: "Car",
        price: 20000,
        seat: 7
    },
    {
        id: 9,
        name: "Maruti Suzuki Ertiga",
        image: Maruti_Suzuki_Ertiga,
        category: "Car",
        price: 10000,
        seat: 7
    },
    {
        id: 10,
        name: "Maruti Suzuki Swift",
        image: Maruti_Suzuki_Swift,
        category: "Car",
        price: 7000,
        seat: 5
    },
    {
        id: 11,
        name: "Maruti Suzuki Swift Dzire",
        image: Maruti_Suzuki_Swift_Dzire,
        category: "Car",
        price: 8000,
        seat: 5
    },
    {
        id: 12,
        name: "Maruti Suzuki WagonR",
        image: Maruti_Suzuki_WagonR,
        category: "Car",
        price: 5000,
        seat: 5
    },
    {
        id: 13,
        name: "Toyota Innova Crysta",
        image: Toyota_Innova_Crysta,
        category: "Car",
        price: 15000,
        seat: 7
    },
    {
        id: 14,
        name: "Toyota Fortuner",
        image: Toyota_Fortuner,
        category: "Car",
        price: 20000,
        seat: 7
    },
    {
        id: 15,
        name: "Mercedes E class",
        image: Mercedes_E_class,
        category: "Car",
        price: 40000,
        seat: 5
    },
    {
        id: 16,
        name: "MG Gloster",
        image: MG_Gloster,
        category: "Car",
        price: 18000,
        seat: 7
    },
    {
        id: 17,
        name: "Porsche Macan",
        image: Porsche_Macan,
        category: "Car",
        price: 55000,
        seat: 5
    },
    {
        id: 18,
        name: "Volkswagen Virtus GT",
        image: Voklswagen_Virtus_GT,
        category: "Car",
        price: 15000,
        seat: 5
    },
    {
        id: 19,
        name: "Skoda Kylaq",
        image: Skoda_Kylaq,
        category: "Car",
        price: 14000,
        seat: 5
    },

    // Bike Images
    {
        id: 21,
        name: "Bajaj Pulsar",
        image: Bajaj_Pulsar,
        category: "Bike",
        price: 1200,
        type: "Gear"
    },
    {
        id: 22,
        name: "BMW R 1250 GSA",
        image: BMW_R_1250_GSA,
        category: "Bike",
        price: 20000,
        type: "Gear"
    },
    {
        id: 23,
        name: "Hero Splendor",
        image: Hero_Splendor,
        category: "Bike",
        price: 1000,
        type: "Gear"
    },
    {
        id: 24,
        name: "Honda Activa",
        image: Honda_Activa,
        category: "Bike",
        price: 500,
        type: "Non-Gear"
    },
    {
        id: 25,
        name: "Honda Dio",
        image: Honda_Dio,
        category: "Bike",
        price: 800,
        type: "Non-Gear"
    },
    {
        id: 26,
        name: "Suzuki Access 125",
        image: Suzuki_Access_125,
        category: "Bike",
        price: 900,
        type: "Non-Gear"
    },
    {
        id: 27,
        name: "Suzuki Burgman",
        image: Suzuki_Burgman,
        category: "Bike",
        price: 500,
        type: "Non-Gear"
    },
    {
        id: 28,
        name: "Suzuki Hayabusa",
        image: Suzuki_Hayabusa,
        category: "Bike",
        price: 15000,
        type: "Gear"
    },
    {
        id: 29,
        name: "TVS Jupiter",
        image: TVS_Jupiter,
        category: "Bike",
        price: 700,
        type: "Non-Gear"
    },
    {
        id: 30,
        name: "Yamaha R15",
        image: Yamaha_R15,
        category: "Bike",
        price: 1500,
        type: "Gear"
    }
];

export default all;

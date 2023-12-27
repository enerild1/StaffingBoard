/* Search Bar */

document.querySelector('#search_users').addEventListener('keyup', function(e) {
    // UI Element
    let namesLI = document.getElementsByClassName('user');
  
    // Get Search Query
    let searchQuery = search_users.value.toLowerCase();
  
    // Search Compare & Display
    for (let index = 0; index < namesLI.length; index++) {
            const name = namesLI[index].textContent.toLowerCase();
  
            if (name.includes(searchQuery)) {
                    namesLI[index].style.display = 'block';
            } else {
                    namesLI[index].style.display = 'none';
            }
    }
  });
 



/* Dark-theme*/
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

 /* time */
function updateTime() {
  var dateInfo = new Date();

 
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    day = dateInfo.getDate();

  // store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);

;

document.addEventListener("DOMContentLoaded", function () {
    const usersArray = [
        
            {
                "EmployeeID": "200543336",
                "UserID": "upadhyaz",
                "EmployeeName": "Upadhyay,Rajat",
                "BadgeBarcodeID": "15243973",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108235116",
                "UserID": "tbeardsa",
                "EmployeeName": "Beardsall,Tamzin",
                "BadgeBarcodeID": "13887408",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT2024"
            },
            {
                "EmployeeID": "111455042",
                "UserID": "ptylerjx",
                "EmployeeName": "Proudlove,Tyler",
                "BadgeBarcodeID": "12306450",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "102806008",
                "UserID": "ralien",
                "EmployeeName": "Raliene,Deimante",
                "BadgeBarcodeID": "11813957",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105116523",
                "UserID": "seyclive",
                "EmployeeName": "Seymour,Clive Arthur",
                "BadgeBarcodeID": "11573162",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201599107",
                "UserID": "amrvivek",
                "EmployeeName": "Amratlal,Vivek",
                "BadgeBarcodeID": "11733840",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104901307",
                "UserID": "richvaug",
                "EmployeeName": "Vaughan,Richard Charles Henry",
                "BadgeBarcodeID": "11746628",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "102636016",
                "UserID": "skucam",
                "EmployeeName": "Skuca,Madara",
                "BadgeBarcodeID": "13124700",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111291901",
                "UserID": "niyeasmi",
                "EmployeeName": "Yeasmin,Nilufa",
                "BadgeBarcodeID": "12840235",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "111428090",
                "UserID": "cfurcris",
                "EmployeeName": "Furnea,Cristina",
                "BadgeBarcodeID": "14365624",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "112730304",
                "UserID": "mohmadap",
                "EmployeeName": "Patel,Mohmad Arfad",
                "BadgeBarcodeID": "13675684",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201552345",
                "UserID": "vaibhjiv",
                "EmployeeName": "Jivan,Vaibhavi",
                "BadgeBarcodeID": "11216892",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "102921830",
                "UserID": "mrshid",
                "EmployeeName": "Rashid Rashid,Mohammed Islam",
                "BadgeBarcodeID": "11782894",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT104"
            },
            {
                "EmployeeID": "106773708",
                "UserID": "joynesc",
                "EmployeeName": "Joynes,Christopher stewart",
                "BadgeBarcodeID": "12572605",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105126055",
                "UserID": "zoltkova",
                "EmployeeName": "Kovacs,Zoltan",
                "BadgeBarcodeID": "11041880",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "105486095",
                "UserID": "omazbeda",
                "EmployeeName": "Hussain,Omar",
                "BadgeBarcodeID": "12547065",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110870167",
                "UserID": "kabeerdc",
                "EmployeeName": "K,Chandramoule",
                "BadgeBarcodeID": "11943000",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105168101",
                "UserID": "zzoltan",
                "EmployeeName": "Zakar,Zoltan",
                "BadgeBarcodeID": "11163972",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106383804",
                "UserID": "graui",
                "EmployeeName": "Graure,Ionut Teodor",
                "BadgeBarcodeID": "116458",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT6582"
            },
            {
                "EmployeeID": "110054529",
                "UserID": "shehzaki",
                "EmployeeName": "Zakirhusein,Shehzad",
                "BadgeBarcodeID": "15156857",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108066798",
                "UserID": "beverlse",
                "EmployeeName": "Smith,Beverley Ann",
                "BadgeBarcodeID": "13707289",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "103157353",
                "UserID": "paczkt",
                "EmployeeName": "Paczkowski,Tomasz",
                "BadgeBarcodeID": "12320490",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "101780117",
                "UserID": "daadasca",
                "EmployeeName": "Adascalitei,Doru",
                "BadgeBarcodeID": "15266763",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT4678"
            },
            {
                "EmployeeID": "102717071",
                "UserID": "ivadarii",
                "EmployeeName": "Darii,Ivan",
                "BadgeBarcodeID": "11162260",
                "ManagerName": "Griffiths,Ben",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108739123",
                "UserID": "jennsmar",
                "EmployeeName": "Smart,Jennifer Jane",
                "BadgeBarcodeID": "12278434",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "109358215",
                "UserID": "warmichk",
                "EmployeeName": "Warren,Michael",
                "BadgeBarcodeID": "14401490",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108154895",
                "UserID": "samrodme",
                "EmployeeName": "Rodmell,Sam David",
                "BadgeBarcodeID": "13799417",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200666198",
                "UserID": "kduncgro",
                "EmployeeName": "Groves,Duncan",
                "BadgeBarcodeID": "14489147",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "102235598",
                "UserID": "pafurlon",
                "EmployeeName": "Furlong,Paul",
                "BadgeBarcodeID": "12194070",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200522458",
                "UserID": "getsmith",
                "EmployeeName": "Smith,George",
                "BadgeBarcodeID": "14260333",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "RT5418"
            },
            {
                "EmployeeID": "112994508",
                "UserID": "gbujosep",
                "EmployeeName": "Burge,Joey",
                "BadgeBarcodeID": "13590233",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201672460",
                "UserID": "qchintap",
                "EmployeeName": "Patel,Chintan",
                "BadgeBarcodeID": "94642",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110457734",
                "UserID": "meghjimv",
                "EmployeeName": "Meghji,Mayur",
                "BadgeBarcodeID": "14360635",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200645131",
                "UserID": "oluzadeb",
                "EmployeeName": "Adebayo,Oluwabusayo",
                "BadgeBarcodeID": "11782941",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "202073422",
                "UserID": "crjpolle",
                "EmployeeName": "Poller,Cris",
                "BadgeBarcodeID": "12381558",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "108307865",
                "UserID": "davdashe",
                "EmployeeName": "Davda,Sheetal Deepak",
                "BadgeBarcodeID": "13298673",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6582"
            },
            {
                "EmployeeID": "105109504",
                "UserID": "margoo",
                "EmployeeName": "Goodman,Mark Ian",
                "BadgeBarcodeID": "12150047",
                "ManagerName": "Nicholson,Guy",
                "ManagementAreaID": "26",
                "ShiftPattern": "DF6-0600"
            },
            {
                "EmployeeID": "201388762",
                "UserID": "thigires",
                "EmployeeName": "Thigireddy,Sai Dinesh",
                "BadgeBarcodeID": "15231661",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108822111",
                "UserID": "dkateryn",
                "EmployeeName": "Klieban,Kateryna",
                "BadgeBarcodeID": "12593595",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112654055",
                "UserID": "wasbanda",
                "EmployeeName": "Banda,Ashok",
                "BadgeBarcodeID": "147534",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "111285248",
                "UserID": "cromptju",
                "EmployeeName": "Crompton,Julie",
                "BadgeBarcodeID": "13020640",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105076315",
                "UserID": "whitkeya",
                "EmployeeName": "Whitehurst,Keyan",
                "BadgeBarcodeID": "12268913",
                "ManagerName": "Lindsay,Rob James",
                "ManagementAreaID": "5",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106127808",
                "UserID": "monwilde",
                "EmployeeName": "Wilde,Monika",
                "BadgeBarcodeID": "13245930",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200697395",
                "UserID": "mayurikn",
                "EmployeeName": "narendra,Mayurika",
                "BadgeBarcodeID": "14651662",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "110311175",
                "UserID": "awuahmbr",
                "EmployeeName": "Awuah-Mensah,Bright",
                "BadgeBarcodeID": "13765824",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "109401259",
                "UserID": "princmja",
                "EmployeeName": "Prince,Jamie",
                "BadgeBarcodeID": "14447979",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103505838",
                "UserID": "pemam",
                "EmployeeName": "Pema,Mayuri",
                "BadgeBarcodeID": "12135734",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201466808",
                "UserID": "sarvino",
                "EmployeeName": "Sara,Vinod",
                "BadgeBarcodeID": "13748641",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "104909134",
                "UserID": "gurshka",
                "EmployeeName": "Kaur,Gursharandeep",
                "BadgeBarcodeID": "295237",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106113614",
                "UserID": "mslvaaa",
                "EmployeeName": "Cenachi,Marcos",
                "BadgeBarcodeID": "13230774",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "19",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110713975",
                "UserID": "aaqhussa",
                "EmployeeName": "Hussain,Aaqib",
                "BadgeBarcodeID": "12089679",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "110002836",
                "UserID": "wimehari",
                "EmployeeName": "Mehari,Winta Beyin",
                "BadgeBarcodeID": "15101372",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "112652110",
                "UserID": "svalandv",
                "EmployeeName": "Valand,Vikash",
                "BadgeBarcodeID": "11520692",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "202440094",
                "UserID": "pasanjai",
                "EmployeeName": "PATEL,Sam",
                "BadgeBarcodeID": "13873943",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201564651",
                "UserID": "ohipatel",
                "EmployeeName": "Patel,Hiral",
                "BadgeBarcodeID": "11158169",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "201633222",
                "UserID": "harvarad",
                "EmployeeName": "VARADA,Hari krishna",
                "BadgeBarcodeID": "12136801",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "111255829",
                "UserID": "gpatenir",
                "EmployeeName": "Patel,Nirali",
                "BadgeBarcodeID": "14297189",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110173719",
                "UserID": "sketankp",
                "EmployeeName": "Patel,Ketan",
                "BadgeBarcodeID": "15284999",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "101449389",
                "UserID": "gartonsg",
                "EmployeeName": "Garton,Sean",
                "BadgeBarcodeID": "11017766",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "5",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105125704",
                "UserID": "croftsc",
                "EmployeeName": "Santos de Oliveira Crofts,Carolina Ariana",
                "BadgeBarcodeID": "11532188",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104901334",
                "UserID": "mwhithe",
                "EmployeeName": "Whitehead,Matthew James",
                "BadgeBarcodeID": "336272",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104096946",
                "UserID": "saiisla",
                "EmployeeName": "Saiful,Islam",
                "BadgeBarcodeID": "12242106",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "200522429",
                "UserID": "adrsulow",
                "EmployeeName": "Sulowski,Adrian",
                "BadgeBarcodeID": "15116950",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201679391",
                "UserID": "dhavaram",
                "EmployeeName": "Rana,Dhaval",
                "BadgeBarcodeID": "11584350",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105015650",
                "UserID": "lukeall",
                "EmployeeName": "Allen,Luke",
                "BadgeBarcodeID": "12239097",
                "ManagerName": "Corish,Eleanor",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "100753752",
                "UserID": "mttsc",
                "EmployeeName": "Mititescu,Lucian",
                "BadgeBarcodeID": "11054858",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106235005",
                "UserID": "crismiti",
                "EmployeeName": "Mititescu,Cristina Liliana",
                "BadgeBarcodeID": "13360394",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT2388"
            },
            {
                "EmployeeID": "111011985",
                "UserID": "npburrow",
                "EmployeeName": "Burrows,Paul",
                "BadgeBarcodeID": "11501293",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT2026"
            },
            {
                "EmployeeID": "105391165",
                "UserID": "karabdl",
                "EmployeeName": "Pullayathu Kareem,Abdulkalam",
                "BadgeBarcodeID": "12441767",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "111011965",
                "UserID": "valrajni",
                "EmployeeName": "Valand,Rajnikant",
                "BadgeBarcodeID": "11606625",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202018712",
                "UserID": "divyxsha",
                "EmployeeName": "Shantilal,Divyangi",
                "BadgeBarcodeID": "11865973",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "105126098",
                "UserID": "hkkelifa",
                "EmployeeName": "Kelifa,Hashim",
                "BadgeBarcodeID": "11131321",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106279448",
                "UserID": "issuanhi",
                "EmployeeName": "Issuan,Hemanshu",
                "BadgeBarcodeID": "12480505",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105206193",
                "UserID": "jasvrka",
                "EmployeeName": "Kaur,Jasvir",
                "BadgeBarcodeID": "11756789",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201940167",
                "UserID": "ravipudx",
                "EmployeeName": "PUDI,RAVI",
                "BadgeBarcodeID": "11897959",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "103778352",
                "UserID": "rashdab",
                "EmployeeName": "Rashid,Ab Aziz",
                "BadgeBarcodeID": "11675491",
                "ManagerName": "Nicholson,Guy",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110364622",
                "UserID": "macartjo",
                "EmployeeName": "MacArthur,Joseph",
                "BadgeBarcodeID": "13831733",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "202464901",
                "UserID": "aimiftah",
                "EmployeeName": "Miftah,Aisha",
                "BadgeBarcodeID": "15118744",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "109363540",
                "UserID": "habtemmu",
                "EmployeeName": "Habtemariam,Mulugeta Fisshaye",
                "BadgeBarcodeID": "14407589",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201723820",
                "UserID": "zaiarif",
                "EmployeeName": "Arif,Zain",
                "BadgeBarcodeID": "12955015",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105103384",
                "UserID": "maylaf",
                "EmployeeName": "Benedetti,Mayla",
                "BadgeBarcodeID": "11769552",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "6",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111657911",
                "UserID": "kprlimbu",
                "EmployeeName": "limbu,Prashanta",
                "BadgeBarcodeID": "13680446",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "200772320",
                "UserID": "nimesfra",
                "EmployeeName": "RAVAL,NIMESHKUMAR",
                "BadgeBarcodeID": "11260933",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200403494",
                "UserID": "parshvai",
                "EmployeeName": "Parshotam,Vaishali",
                "BadgeBarcodeID": "12193868",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "111443695",
                "UserID": "gmahesda",
                "EmployeeName": "DAVE,MAHESHKUMAR",
                "BadgeBarcodeID": "12038796",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DQ1-0730"
            },
            {
                "EmployeeID": "101978861",
                "UserID": "ndobrani",
                "EmployeeName": "Dobranis,Nicolae",
                "BadgeBarcodeID": "11930371",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201388763",
                "UserID": "imahendc",
                "EmployeeName": "Chinthalapally,Mahender Reddy",
                "BadgeBarcodeID": "12623838",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111012317",
                "UserID": "vaanchoo",
                "EmployeeName": "Anchoori,Vamshi",
                "BadgeBarcodeID": "12268636",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "110157645",
                "UserID": "hbabegen",
                "EmployeeName": "Babe,Genti",
                "BadgeBarcodeID": "15267612",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105287583",
                "UserID": "janbenit",
                "EmployeeName": "Benitez,Jan Vincent",
                "BadgeBarcodeID": "12329340",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "PT8135"
            },
            {
                "EmployeeID": "106703909",
                "UserID": "attsimon",
                "EmployeeName": "Attewell,Simon",
                "BadgeBarcodeID": "332748",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110461690",
                "UserID": "hardihbi",
                "EmployeeName": "Hardie,Billie Eloise",
                "BadgeBarcodeID": "12609244",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201965298",
                "UserID": "petregco",
                "EmployeeName": "Cosmin,Petre",
                "BadgeBarcodeID": "12695870",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107700445",
                "UserID": "jonaspin",
                "EmployeeName": "Aspinall,Jonathon",
                "BadgeBarcodeID": "11849292",
                "ManagerName": "Kishnasamy,Daven",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106172902",
                "UserID": "povlad",
                "EmployeeName": "Pop,Vlad",
                "BadgeBarcodeID": "13293521",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "101243805",
                "UserID": "bjakimov",
                "EmployeeName": "Jakimovski,Boban",
                "BadgeBarcodeID": "11327949",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105528185",
                "UserID": "kirhayes",
                "EmployeeName": "Hayes,Kirsty Elizabeth Michelle",
                "BadgeBarcodeID": "12593403",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105126047",
                "UserID": "szsolt",
                "EmployeeName": "Szabo,Zsolt",
                "BadgeBarcodeID": "12142964",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "110667387",
                "UserID": "kawaicha",
                "EmployeeName": "Chan,Ka Wai",
                "BadgeBarcodeID": "11881886",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111383467",
                "UserID": "mihubogb",
                "EmployeeName": "Mihu,Bogdan",
                "BadgeBarcodeID": "11263896",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "111205453",
                "UserID": "abijasor",
                "EmployeeName": "Abing,Jason",
                "BadgeBarcodeID": "12042588",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202181084",
                "UserID": "ankihark",
                "EmployeeName": "HARKHANI,ANKITKUMAR",
                "BadgeBarcodeID": "12602755",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201940159",
                "UserID": "tandmont",
                "EmployeeName": "Tandel,Monti",
                "BadgeBarcodeID": "14029888",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105577636",
                "UserID": "cddioni",
                "EmployeeName": "Dionisio,Cecilia Marcelina",
                "BadgeBarcodeID": "12648084",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109703735",
                "UserID": "majamshi",
                "EmployeeName": "Jamshidi,Mahmood",
                "BadgeBarcodeID": "14776942",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT1029"
            },
            {
                "EmployeeID": "103165755",
                "UserID": "ddayara",
                "EmployeeName": "Dayaram,Dipti",
                "BadgeBarcodeID": "11555449",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "105015656",
                "UserID": "natba",
                "EmployeeName": "Barrett,Nat Ann",
                "BadgeBarcodeID": "12167969",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "202180251",
                "UserID": "dmanavar",
                "EmployeeName": "Varada,Manasa",
                "BadgeBarcodeID": "11906600",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "105146204",
                "UserID": "khfahee",
                "EmployeeName": "Khan,Faheem Ahmad",
                "BadgeBarcodeID": "11524155",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "104953652",
                "UserID": "gindanil",
                "EmployeeName": "Danila,Gina",
                "BadgeBarcodeID": "207789",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "112739156",
                "UserID": "abreucla",
                "EmployeeName": "De Abreu Vasconcelos,Claudia Christina",
                "BadgeBarcodeID": "11870045",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "109368775",
                "UserID": "ratendee",
                "EmployeeName": "Singh,Ratendeep Ajay",
                "BadgeBarcodeID": "14412640",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "104901283",
                "UserID": "kehoeada",
                "EmployeeName": "Kehoe,Adam James",
                "BadgeBarcodeID": "12395842",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "DA5-0500"
            },
            {
                "EmployeeID": "101449369",
                "UserID": "smwayn",
                "EmployeeName": "Smith,Wayne",
                "BadgeBarcodeID": "171033",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106308194",
                "UserID": "bvoltoli",
                "EmployeeName": "Voltolini,Bruna Carolini",
                "BadgeBarcodeID": "12168541",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT2638"
            },
            {
                "EmployeeID": "101978863",
                "UserID": "dobrav",
                "EmployeeName": "Dobranis,Vasile",
                "BadgeBarcodeID": "11930372",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104182162",
                "UserID": "sadhanji",
                "EmployeeName": "Dhanji,Sachin",
                "BadgeBarcodeID": "15136131",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "104901297",
                "UserID": "dwhitmz",
                "EmployeeName": "White,Daniel David",
                "BadgeBarcodeID": "11345748",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT4678"
            },
            {
                "EmployeeID": "201359132",
                "UserID": "qkauram",
                "EmployeeName": "Kaur,Aman",
                "BadgeBarcodeID": "11709824",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201592182",
                "UserID": "sigurdes",
                "EmployeeName": "Singh,Gurdev",
                "BadgeBarcodeID": "14552260",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "377662",
                "UserID": "nkagimu",
                "EmployeeName": "Kagimu,Noah",
                "BadgeBarcodeID": "76143",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110421018",
                "UserID": "dendlaks",
                "EmployeeName": "Dendhi,Lakshmikanth reddy",
                "BadgeBarcodeID": "12784301",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "105146203",
                "UserID": "hgondal",
                "EmployeeName": "Gondal,Hamza",
                "BadgeBarcodeID": "159079",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "103361499",
                "UserID": "njph",
                "EmployeeName": "Nijap,Hitesh",
                "BadgeBarcodeID": "11045464",
                "ManagerName": "Wheat,Sarah",
                "ManagementAreaID": "33",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "104666975",
                "UserID": "sifss",
                "EmployeeName": "Saif,Shaikh",
                "BadgeBarcodeID": "339419",
                "ManagerName": "Stanley,Leigh",
                "ManagementAreaID": "34",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108473070",
                "UserID": "stanifri",
                "EmployeeName": "Staniforth,Richard",
                "BadgeBarcodeID": "11862029",
                "ManagerName": "Chambers,Mark",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108112775",
                "UserID": "karenlam",
                "EmployeeName": "Lamarque,Karen",
                "BadgeBarcodeID": "13756067",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106454497",
                "UserID": "abalode",
                "EmployeeName": "Balode,Alona",
                "BadgeBarcodeID": "183319",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105046724",
                "UserID": "parkelli",
                "EmployeeName": "Parsons,Kellie Courteney Danielle",
                "BadgeBarcodeID": "11735112",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200461496",
                "UserID": "lmuhamim",
                "EmployeeName": "IMRAN,MUHAMMAD FAHAD",
                "BadgeBarcodeID": "11628765",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "202073440",
                "UserID": "sushmsuv",
                "EmployeeName": "Sushma,Sushma",
                "BadgeBarcodeID": "11347878",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "102511855",
                "UserID": "meghjp",
                "EmployeeName": "Meghji,Prakash",
                "BadgeBarcodeID": "12715363",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200468719",
                "UserID": "naqkanna",
                "EmployeeName": "Kanna,Naveen kumar",
                "BadgeBarcodeID": "13956936",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110107311",
                "UserID": "khugheso",
                "EmployeeName": "Hughes,Kyla Leone",
                "BadgeBarcodeID": "15215226",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109355731",
                "UserID": "agniskrz",
                "EmployeeName": "Skrzydlewska,Agnieszka",
                "BadgeBarcodeID": "14398553",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106523330",
                "UserID": "srhmaam",
                "EmployeeName": "Rahman,S m mahbubur",
                "BadgeBarcodeID": "207033",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201679390",
                "UserID": "opiyupar",
                "EmployeeName": "Parmar,Piyush",
                "BadgeBarcodeID": "15201658",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "102614733",
                "UserID": "neblec",
                "EmployeeName": "Neblea,Cristinel",
                "BadgeBarcodeID": "11094621",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202096961",
                "UserID": "sedhumdh",
                "EmployeeName": "Sedhumadhavan,Dhanesh Puloth",
                "BadgeBarcodeID": "12606625",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110667312",
                "UserID": "alipraza",
                "EmployeeName": "Raza,Ali",
                "BadgeBarcodeID": "13028229",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "102614709",
                "UserID": "clenut",
                "EmployeeName": "Ciobotaru,Lenuta Claudia",
                "BadgeBarcodeID": "11323049",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "102669744",
                "UserID": "rinkesb",
                "EmployeeName": "Baraiya,Rinkesh",
                "BadgeBarcodeID": "13288135",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110081349",
                "UserID": "tekberha",
                "EmployeeName": "Tekleberhan,Berhane",
                "BadgeBarcodeID": "15186970",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106175257",
                "UserID": "domfurma",
                "EmployeeName": "Furman,Dominika",
                "BadgeBarcodeID": "13296144",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "106221097",
                "UserID": "gurdpsi",
                "EmployeeName": "Singh,Gurdip",
                "BadgeBarcodeID": "13345083",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106410715",
                "UserID": "nohme",
                "EmployeeName": "Castillo,Nohmer Bejosano",
                "BadgeBarcodeID": "245673",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110637560",
                "UserID": "primelay",
                "EmployeeName": "Price,Melanie",
                "BadgeBarcodeID": "13813526",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106658347",
                "UserID": "rnnavinc",
                "EmployeeName": "Navinchandra,Rahul",
                "BadgeBarcodeID": "12494700",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110994317",
                "UserID": "jayvichm",
                "EmployeeName": "Manoj,Jayvick",
                "BadgeBarcodeID": "134158",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110513079",
                "UserID": "adrppuia",
                "EmployeeName": "Puiac,Adrian Nicolae",
                "BadgeBarcodeID": "12068213",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "105071326",
                "UserID": "tamisan",
                "EmployeeName": "Nyamundanda,Tamisai Noel",
                "BadgeBarcodeID": "12088982",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202018701",
                "UserID": "dragavaf",
                "EmployeeName": "Dragan,Vasilica",
                "BadgeBarcodeID": "14519804",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "107726147",
                "UserID": "ioniccos",
                "EmployeeName": "Ionica,Costin",
                "BadgeBarcodeID": "13158184",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108304768",
                "UserID": "wcaromar",
                "EmployeeName": "martin,Carol",
                "BadgeBarcodeID": "11659357",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106176229",
                "UserID": "coystev",
                "EmployeeName": "Coy,Steven john",
                "BadgeBarcodeID": "13297222",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200739578",
                "UserID": "langdean",
                "EmployeeName": "Lang,Dean",
                "BadgeBarcodeID": "13259032",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "200720103",
                "UserID": "custahir",
                "EmployeeName": "Tahir,Usman",
                "BadgeBarcodeID": "14359176",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110861678",
                "UserID": "gabriesw",
                "EmployeeName": "Swain,Gabriel Phillip",
                "BadgeBarcodeID": "11191135",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108534714",
                "UserID": "pesmithg",
                "EmployeeName": "Smith,Pete",
                "BadgeBarcodeID": "181617",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106474632",
                "UserID": "mbasar",
                "EmployeeName": "Basar,Md Abul",
                "BadgeBarcodeID": "11080516",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "105361926",
                "UserID": "johlaing",
                "EmployeeName": "Laing,John McNeish",
                "BadgeBarcodeID": "12409815",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104141113",
                "UserID": "ganninna",
                "EmployeeName": "Gandhi,Ninnabahen",
                "BadgeBarcodeID": "13533617",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT4918"
            },
            {
                "EmployeeID": "200468720",
                "UserID": "rohitnas",
                "EmployeeName": "Nanji,Rohit",
                "BadgeBarcodeID": "14770191",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104953706",
                "UserID": "ryanmorl",
                "EmployeeName": "Morley,Ryan James",
                "BadgeBarcodeID": "11612929",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "101456746",
                "UserID": "egebrez",
                "EmployeeName": "gebrezgabiher,efrem",
                "BadgeBarcodeID": "12428041",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT8135"
            },
            {
                "EmployeeID": "104901272",
                "UserID": "gyorgyfa",
                "EmployeeName": "Gyorgyfalvi,Attila",
                "BadgeBarcodeID": "11999258",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201679392",
                "UserID": "lorentee",
                "EmployeeName": "Lorente,Erika",
                "BadgeBarcodeID": "14115141",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200561595",
                "UserID": "tanvohra",
                "EmployeeName": "VOHRA,TANVIRABAHEN",
                "BadgeBarcodeID": "13261548",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "105101197",
                "UserID": "shiptond",
                "EmployeeName": "Shipton,Daniel Roy Peter",
                "BadgeBarcodeID": "14748224",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105671524",
                "UserID": "bramleyg",
                "EmployeeName": "Bramley,Graham Barrie",
                "BadgeBarcodeID": "12752195",
                "ManagerName": "Lindsay,Rob James",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200522422",
                "UserID": "sjaveria",
                "EmployeeName": "shaikh,Javeria",
                "BadgeBarcodeID": "14118773",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104096944",
                "UserID": "bgodwin",
                "EmployeeName": "Busuttil,Godwin",
                "BadgeBarcodeID": "30808",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107020625",
                "UserID": "mmesud",
                "EmployeeName": "Muratovic,Mesud",
                "BadgeBarcodeID": "12166743",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105046725",
                "UserID": "mmchelj",
                "EmployeeName": "Johnson,Michelle Luan",
                "BadgeBarcodeID": "11523784",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201466833",
                "UserID": "ybalired",
                "EmployeeName": "Yeruva,Bali reddy",
                "BadgeBarcodeID": "14131137",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "103214490",
                "UserID": "gnoormoh",
                "EmployeeName": "MOH,Mr",
                "BadgeBarcodeID": "12003223",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200665145",
                "UserID": "nveeravn",
                "EmployeeName": "Nagulapati,Veera venkata Uma mahesh chowdary",
                "BadgeBarcodeID": "13466407",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "107753474",
                "UserID": "keihowde",
                "EmployeeName": "Howden,Keith",
                "BadgeBarcodeID": "300079",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "26",
                "ShiftPattern": "DK7-0630"
            },
            {
                "EmployeeID": "201664221",
                "UserID": "jinkmavj",
                "EmployeeName": "Mavji,Jinkal",
                "BadgeBarcodeID": "14283133",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "108167938",
                "UserID": "keffayoh",
                "EmployeeName": "KEFFA,yohannes",
                "BadgeBarcodeID": "13814946",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "104901321",
                "UserID": "stevenit",
                "EmployeeName": "Stevenitt,Alistair",
                "BadgeBarcodeID": "11527019",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111477356",
                "UserID": "catubrow",
                "EmployeeName": "Brown,Cate",
                "BadgeBarcodeID": "14244432",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105237794",
                "UserID": "laero",
                "EmployeeName": "Oshafi,Laert",
                "BadgeBarcodeID": "160255",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "201564899",
                "UserID": "saloninp",
                "EmployeeName": "Patel,Saloni",
                "BadgeBarcodeID": "13896739",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103153153",
                "UserID": "abbocanc",
                "EmployeeName": "Bocancea,Andreea",
                "BadgeBarcodeID": "11770564",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT6042"
            },
            {
                "EmployeeID": "101998632",
                "UserID": "hectunde",
                "EmployeeName": "Hecsko,Tunde",
                "BadgeBarcodeID": "161391",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104909120",
                "UserID": "smclay",
                "EmployeeName": "Smith,Clayton Paul",
                "BadgeBarcodeID": "12039843",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "24",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105677817",
                "UserID": "niktande",
                "EmployeeName": "Tandel,Nikita",
                "BadgeBarcodeID": "12757621",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "106417596",
                "UserID": "sbeeson",
                "EmployeeName": "Beeson,Pete",
                "BadgeBarcodeID": "11217288",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108068675",
                "UserID": "duahfred",
                "EmployeeName": "Duah,Fred Kwaku",
                "BadgeBarcodeID": "13709487",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112959506",
                "UserID": "kantiank",
                "EmployeeName": "Kantilal,Ankitkumar",
                "BadgeBarcodeID": "14297612",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110376693",
                "UserID": "mohpsala",
                "EmployeeName": "Mohammed,Salah",
                "BadgeBarcodeID": "11807490",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "112749812",
                "UserID": "taniskau",
                "EmployeeName": "Kaur,Tanisha",
                "BadgeBarcodeID": "11687833",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201893977",
                "UserID": "nshhusse",
                "EmployeeName": "Hussein,Shajad",
                "BadgeBarcodeID": "13053703",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "200698653",
                "UserID": "bpitsang",
                "EmployeeName": "Tsang,Ping",
                "BadgeBarcodeID": "12980182",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "108515976",
                "UserID": "simpdale",
                "EmployeeName": "Simpson,Dale",
                "BadgeBarcodeID": "11428416",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DC0-0730"
            },
            {
                "EmployeeID": "113107134",
                "UserID": "navinank",
                "EmployeeName": "Navin,Ankita",
                "BadgeBarcodeID": "11258833",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "109379004",
                "UserID": "nanjiax",
                "EmployeeName": "Nanji,Axay",
                "BadgeBarcodeID": "14424057",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201466849",
                "UserID": "sdharde",
                "EmployeeName": "Singh,Hardeep",
                "BadgeBarcodeID": "12305102",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106383860",
                "UserID": "jsvanc",
                "EmployeeName": "jsvantlal,chirag",
                "BadgeBarcodeID": "11486341",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104345961",
                "UserID": "dmubashs",
                "EmployeeName": "Dam,Mubashshir",
                "BadgeBarcodeID": "11740688",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104909080",
                "UserID": "lfeiman",
                "EmployeeName": "Feimane,Linda",
                "BadgeBarcodeID": "11351325",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "103142321",
                "UserID": "maionela",
                "EmployeeName": "Marin,Ionela",
                "BadgeBarcodeID": "12106866",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT4226"
            },
            {
                "EmployeeID": "105287555",
                "UserID": "misue",
                "EmployeeName": "Misurak,Erika Beatrix",
                "BadgeBarcodeID": "12214124",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "851916",
                "UserID": "akhtkhan",
                "EmployeeName": "Khan,Akhtar",
                "BadgeBarcodeID": "147053",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106885155",
                "UserID": "chadhrm",
                "EmployeeName": "Chaudhry,Adam Adam",
                "BadgeBarcodeID": "12757154",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201899599",
                "UserID": "falgchau",
                "EmployeeName": "Chauhan,Falguniben",
                "BadgeBarcodeID": "15065790",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108912553",
                "UserID": "dejoaorn",
                "EmployeeName": "de Barros Atan,Joao Ricardo",
                "BadgeBarcodeID": "13911940",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105678195",
                "UserID": "stueaton",
                "EmployeeName": "Eaton,Stuart Alan",
                "BadgeBarcodeID": "12758789",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106301149",
                "UserID": "nitiukad",
                "EmployeeName": "Ukad,Nitin",
                "BadgeBarcodeID": "11978835",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108148453",
                "UserID": "tesfamsa",
                "EmployeeName": "Tesfamicheal,Samuel Tadese",
                "BadgeBarcodeID": "13794439",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "111818136",
                "UserID": "asrajmay",
                "EmployeeName": "Asraf,Ajmal",
                "BadgeBarcodeID": "14229742",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "108589293",
                "UserID": "mistudni",
                "EmployeeName": "Studniarek,Milosz",
                "BadgeBarcodeID": "11384534",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105287533",
                "UserID": "nasangha",
                "EmployeeName": "Sangha,Nathan Ajit Singh",
                "BadgeBarcodeID": "12111087",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106472730",
                "UserID": "daianeb",
                "EmployeeName": "Souza Cruz Basse,Daiane Elizabeth",
                "BadgeBarcodeID": "358202",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT4918"
            },
            {
                "EmployeeID": "201940158",
                "UserID": "prasdugu",
                "EmployeeName": "Duguru,Prasad",
                "BadgeBarcodeID": "12833511",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108553844",
                "UserID": "lirafaec",
                "EmployeeName": "Lima,Rafael Dias",
                "BadgeBarcodeID": "11467445",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "103549335",
                "UserID": "snellzs",
                "EmployeeName": "Snell,Zoe Ann",
                "BadgeBarcodeID": "155335",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105003671",
                "UserID": "mynkp",
                "EmployeeName": "Patel,Mayank",
                "BadgeBarcodeID": "11759121",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200614697",
                "UserID": "mankaver",
                "EmployeeName": "MANKAVEETTIL,ROOPAKALA",
                "BadgeBarcodeID": "13163134",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "110216263",
                "UserID": "jaydobag",
                "EmployeeName": "Bagnall,Jaydon Rhys",
                "BadgeBarcodeID": "15329496",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "103685083",
                "UserID": "maulina",
                "EmployeeName": "Suresh,Maulina",
                "BadgeBarcodeID": "12523188",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "108645124",
                "UserID": "barnajam",
                "EmployeeName": "Barnard,James",
                "BadgeBarcodeID": "13195692",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "201499074",
                "UserID": "srinagan",
                "EmployeeName": "Nagandla,Sri Harsha",
                "BadgeBarcodeID": "12931274",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "109731948",
                "UserID": "thantinp",
                "EmployeeName": "Ntini,Thabani",
                "BadgeBarcodeID": "14807077",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "200961290",
                "UserID": "ramjivra",
                "EmployeeName": "Ramji,Vrajkumar Manish",
                "BadgeBarcodeID": "12706570",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "201592171",
                "UserID": "hirsurbh",
                "EmployeeName": "Hirapara,Surbhi",
                "BadgeBarcodeID": "13753262",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105103406",
                "UserID": "pessl",
                "EmployeeName": "Rigon Pessin,Lucas Viturino",
                "BadgeBarcodeID": "289317",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "103612467",
                "UserID": "jitaxibb",
                "EmployeeName": "Bhandari,Jitaxiben Jayeshbhai",
                "BadgeBarcodeID": "11670830",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202018710",
                "UserID": "pateizee",
                "EmployeeName": "Patel,Zeel",
                "BadgeBarcodeID": "12111004",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201838959",
                "UserID": "oamrutgo",
                "EmployeeName": "Gopamshana,Amruthavalli",
                "BadgeBarcodeID": "14069196",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110002842",
                "UserID": "laurboan",
                "EmployeeName": "Boanca,Laura Cosmina",
                "BadgeBarcodeID": "15101378",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "110537082",
                "UserID": "harilaav",
                "EmployeeName": "Harilal,Avani",
                "BadgeBarcodeID": "265069",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110363638",
                "UserID": "babsantd",
                "EmployeeName": "Babu,Santdas",
                "BadgeBarcodeID": "13666180",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108235673",
                "UserID": "webbbapr",
                "EmployeeName": "Webb,April",
                "BadgeBarcodeID": "13887762",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106137481",
                "UserID": "wynneja",
                "EmployeeName": "JM,JM",
                "BadgeBarcodeID": "13256110",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "102608323",
                "UserID": "lixanm",
                "EmployeeName": "Lixandru,Marieta",
                "BadgeBarcodeID": "11061295",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "201448718",
                "UserID": "wongxkay",
                "EmployeeName": "WONG,KA YAN",
                "BadgeBarcodeID": "14364552",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109375708",
                "UserID": "sharakal",
                "EmployeeName": "Kaloya,Sharanjit Kaur",
                "BadgeBarcodeID": "14420578",
                "ManagerName": "Borkowski,Rafal",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106120780",
                "UserID": "davidmax",
                "EmployeeName": "Maximo,David Cesar",
                "BadgeBarcodeID": "13238103",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200633523",
                "UserID": "bvinkum",
                "EmployeeName": "Kumar,Vinod",
                "BadgeBarcodeID": "12368186",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104567959",
                "UserID": "hliivana",
                "EmployeeName": "Hlinkova,Ivana",
                "BadgeBarcodeID": "12326297",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "109387146",
                "UserID": "flutuanu",
                "EmployeeName": "Flutur,Anna Liliana",
                "BadgeBarcodeID": "14432948",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110849272",
                "UserID": "mohmmpma",
                "EmployeeName": "Makrani,Safeen",
                "BadgeBarcodeID": "13365980",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110838648",
                "UserID": "crajinka",
                "EmployeeName": "Kaur,Rajinder",
                "BadgeBarcodeID": "12521796",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110383683",
                "UserID": "yasinmkh",
                "EmployeeName": "Khan,Yasin Mahammad Hanif",
                "BadgeBarcodeID": "13754197",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105126012",
                "UserID": "dewansaw",
                "EmployeeName": "Dewan,Sawn",
                "BadgeBarcodeID": "11277836",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201838936",
                "UserID": "sekhasir",
                "EmployeeName": "sirani,sekhar",
                "BadgeBarcodeID": "14044655",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "105000958",
                "UserID": "chmcguin",
                "EmployeeName": "McGuinness,Christopher William",
                "BadgeBarcodeID": "11240274",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "103685080",
                "UserID": "divmukes",
                "EmployeeName": "Mukes,Divya",
                "BadgeBarcodeID": "12562197",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200605174",
                "UserID": "gannepdw",
                "EmployeeName": "Gannepalli,Dwarakanadh",
                "BadgeBarcodeID": "13916652",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "107753557",
                "UserID": "abubrgel",
                "EmployeeName": "Brgeliel,Abubaker",
                "BadgeBarcodeID": "12206022",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "202018728",
                "UserID": "prangade",
                "EmployeeName": "Gade,Praneeth",
                "BadgeBarcodeID": "12775833",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201806007",
                "UserID": "sanvahor",
                "EmployeeName": "Vahora,Saniya Mahammadsad",
                "BadgeBarcodeID": "14618693",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "200614683",
                "UserID": "kramratl",
                "EmployeeName": "Amratlal,Krishna",
                "BadgeBarcodeID": "246521",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "201475826",
                "UserID": "hemaishw",
                "EmployeeName": "Ishwar,Hemankshi",
                "BadgeBarcodeID": "13458610",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105156950",
                "UserID": "modrre",
                "EmployeeName": "Moore,Darren Paul",
                "BadgeBarcodeID": "11375308",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105109743",
                "UserID": "davenhac",
                "EmployeeName": "Davenhall,Chris David",
                "BadgeBarcodeID": "11888780",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "103593164",
                "UserID": "paradzf",
                "EmployeeName": "paradza,Francis",
                "BadgeBarcodeID": "11645708",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104953713",
                "UserID": "wmjame",
                "EmployeeName": "Williams,James Adam",
                "BadgeBarcodeID": "11464647",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "200718907",
                "UserID": "prycraig",
                "EmployeeName": "Price,Craig",
                "BadgeBarcodeID": "14546387",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "101506734",
                "UserID": "jauniv",
                "EmployeeName": "Jaunius,Valentinas",
                "BadgeBarcodeID": "11423208",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "109421684",
                "UserID": "odiasjoh",
                "EmployeeName": "Odiase,Johnson",
                "BadgeBarcodeID": "14470504",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "202501434",
                "UserID": "modgurun",
                "EmployeeName": "Gurung,Mo",
                "BadgeBarcodeID": "13583857",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "105003481",
                "UserID": "ussek",
                "EmployeeName": "Ussenbai,Kayyum",
                "BadgeBarcodeID": "11474296",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110602620",
                "UserID": "mkhitari",
                "EmployeeName": "Khitarishvili,Maka",
                "BadgeBarcodeID": "13753104",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "108676006",
                "UserID": "abhisrep",
                "EmployeeName": "Bavanam,Abhishek",
                "BadgeBarcodeID": "12904661",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106137503",
                "UserID": "maturcan",
                "EmployeeName": "TURCANU,MARIUS",
                "BadgeBarcodeID": "13255885",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109387140",
                "UserID": "darbaahj",
                "EmployeeName": "Darbar,Ahjaj Dilavar",
                "BadgeBarcodeID": "14432942",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200367797",
                "UserID": "dhirajlt",
                "EmployeeName": "Dhirajlal,Shivam",
                "BadgeBarcodeID": "11195712",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "201585413",
                "UserID": "tandehem",
                "EmployeeName": "Tandel,Hemangiben Vinodbhai",
                "BadgeBarcodeID": "13323447",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202463549",
                "UserID": "pravbhav",
                "EmployeeName": "Pravin,Bhavik Pravin",
                "BadgeBarcodeID": "14463452",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109411050",
                "UserID": "iafirant",
                "EmployeeName": "Firantas,Airidas",
                "BadgeBarcodeID": "14459250",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT4678"
            },
            {
                "EmployeeID": "106137488",
                "UserID": "mawiktor",
                "EmployeeName": "Majewski,Wiktor",
                "BadgeBarcodeID": "13255873",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200624327",
                "UserID": "shravavs",
                "EmployeeName": "Vaddi,Shravan",
                "BadgeBarcodeID": "13904264",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "113002762",
                "UserID": "karsjayd",
                "EmployeeName": "Karsan,Jaydip",
                "BadgeBarcodeID": "12378179",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "106950432",
                "UserID": "blazewim",
                "EmployeeName": "Blazewicz,Magdalena",
                "BadgeBarcodeID": "11069742",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "102479593",
                "UserID": "armikram",
                "EmployeeName": "Ramesh,Armik",
                "BadgeBarcodeID": "13896607",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106561113",
                "UserID": "npinhei",
                "EmployeeName": "De Andrade Pinheiro,Natasha",
                "BadgeBarcodeID": "11980350",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "DA5-0500"
            },
            {
                "EmployeeID": "105003457",
                "UserID": "pratbari",
                "EmployeeName": "Balkrushna Bari,Pratiksha",
                "BadgeBarcodeID": "12045934",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "109342510",
                "UserID": "vasconef",
                "EmployeeName": "Vasconcelos,Efraim Davies de",
                "BadgeBarcodeID": "14383961",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "200633531",
                "UserID": "damadnan",
                "EmployeeName": "Adnan,Adnan",
                "BadgeBarcodeID": "13099567",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "105027991",
                "UserID": "chumbe",
                "EmployeeName": "Chumber,Mandeep Singh",
                "BadgeBarcodeID": "12309131",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110343324",
                "UserID": "abdusuli",
                "EmployeeName": "Suliman,Abdulazim",
                "BadgeBarcodeID": "15064354",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105162489",
                "UserID": "webemma",
                "EmployeeName": "Webb,Emma",
                "BadgeBarcodeID": "11153365",
                "ManagerName": "Nicholson,Guy",
                "ManagementAreaID": "26",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110710373",
                "UserID": "rosggeor",
                "EmployeeName": "Rose,Georgina",
                "BadgeBarcodeID": "11942469",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "111258007",
                "UserID": "todevqto",
                "EmployeeName": "Todev,Todor Nikolaev",
                "BadgeBarcodeID": "13561078",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105157577",
                "UserID": "kerrlewi",
                "EmployeeName": "Kerry,Lewis",
                "BadgeBarcodeID": "12091626",
                "ManagerName": "Griffiths,Ben",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "101556263",
                "UserID": "kideyob",
                "EmployeeName": "Kidane,Eyob",
                "BadgeBarcodeID": "220930",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108316355",
                "UserID": "asokksre",
                "EmployeeName": "Sreedharan,Asok Kumar Kuttisseril",
                "BadgeBarcodeID": "13162900",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "110164041",
                "UserID": "rorajesb",
                "EmployeeName": "Rajesh,Rohini",
                "BadgeBarcodeID": "15273219",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "110616865",
                "UserID": "smuktaar",
                "EmployeeName": "Shaikh,Muktaar",
                "BadgeBarcodeID": "13009115",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "107726156",
                "UserID": "wdominiu",
                "EmployeeName": "Willis,Dom",
                "BadgeBarcodeID": "13327986",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "202181157",
                "UserID": "liwoshin",
                "EmployeeName": "Liyanaarachchi,Woshin",
                "BadgeBarcodeID": "13132303",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "202073377",
                "UserID": "sfpargat",
                "EmployeeName": "Singh,Pargat",
                "BadgeBarcodeID": "103877",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201456075",
                "UserID": "pethanis",
                "EmployeeName": "Pethani,Shivangi",
                "BadgeBarcodeID": "13919935",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "107651806",
                "UserID": "mccarpau",
                "EmployeeName": "McCarthy,Paul Timothy",
                "BadgeBarcodeID": "113663",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106558266",
                "UserID": "lorentek",
                "EmployeeName": "Lorente,Kleber",
                "BadgeBarcodeID": "299044",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103257932",
                "UserID": "velgim",
                "EmployeeName": "Velgi,Meghna",
                "BadgeBarcodeID": "12177635",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "201552364",
                "UserID": "kadyaman",
                "EmployeeName": "kadyam,anoop",
                "BadgeBarcodeID": "11736359",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "101528948",
                "UserID": "dcatrint",
                "EmployeeName": "Catrintas,Daniel",
                "BadgeBarcodeID": "11446742",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105156001",
                "UserID": "deugiad",
                "EmployeeName": "Deugi,Alpeshkumar",
                "BadgeBarcodeID": "13557791",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "101247250",
                "UserID": "kodalibo",
                "EmployeeName": "Kolevski,Dalibor",
                "BadgeBarcodeID": "271046",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "101771683",
                "UserID": "jospage",
                "EmployeeName": "Page,Joseph",
                "BadgeBarcodeID": "11708474",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201806017",
                "UserID": "harprbao",
                "EmployeeName": "Basra,Harpreet Singh",
                "BadgeBarcodeID": "12128999",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105236482",
                "UserID": "rlst",
                "EmployeeName": "Riley,Steven",
                "BadgeBarcodeID": "12333869",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202501480",
                "UserID": "muharsaa",
                "EmployeeName": "Saad,Muhammad",
                "BadgeBarcodeID": "14458928",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "104049262",
                "UserID": "sadhyast",
                "EmployeeName": "Tandel,Sadhyashree",
                "BadgeBarcodeID": "13636117",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105146216",
                "UserID": "malladah",
                "EmployeeName": "Arias Mallada,Hector Fabian",
                "BadgeBarcodeID": "11736461",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "104953692",
                "UserID": "jayguela",
                "EmployeeName": "Guela,Jayesh Mulgi",
                "BadgeBarcodeID": "11636209",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "103166907",
                "UserID": "pjolobce",
                "EmployeeName": "Jolobceastai,Paulina",
                "BadgeBarcodeID": "12679580",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106507301",
                "UserID": "maxiange",
                "EmployeeName": "Maxim,Angelica",
                "BadgeBarcodeID": "12559769",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106383780",
                "UserID": "anpatru",
                "EmployeeName": "Graure,Andra",
                "BadgeBarcodeID": "156546",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "105481681",
                "UserID": "kccollye",
                "EmployeeName": "Collyer,Kirsty Sarah",
                "BadgeBarcodeID": "12541814",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105461267",
                "UserID": "cpontes",
                "EmployeeName": "Guilherme Pontes,Carla Eugenia",
                "BadgeBarcodeID": "12519170",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "105084168",
                "UserID": "ancollar",
                "EmployeeName": "Collard,Anne-Marie",
                "BadgeBarcodeID": "12286200",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "RT2504"
            },
            {
                "EmployeeID": "201723771",
                "UserID": "prasjama",
                "EmployeeName": "Jamallamudi,Prasanna Kumar",
                "BadgeBarcodeID": "12051573",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "108724017",
                "UserID": "zofigrzy",
                "EmployeeName": "Grzywinska,Zofia",
                "BadgeBarcodeID": "11338561",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105365262",
                "UserID": "heagj",
                "EmployeeName": "Heagney,Jamie Thomas",
                "BadgeBarcodeID": "12412672",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "200633507",
                "UserID": "nandabep",
                "EmployeeName": "Nandakumar,Ben",
                "BadgeBarcodeID": "11890512",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "19",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200394362",
                "UserID": "alexpada",
                "EmployeeName": "Padurariu-Chiriac,Alexandru",
                "BadgeBarcodeID": "11174618",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DP3-0800"
            },
            {
                "EmployeeID": "110728944",
                "UserID": "vaissav",
                "EmployeeName": "Savji,Vaishali",
                "BadgeBarcodeID": "13821933",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107458057",
                "UserID": "parvipri",
                "EmployeeName": "Parvin,Priti",
                "BadgeBarcodeID": "11091284",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "113107128",
                "UserID": "varkarsa",
                "EmployeeName": "Karsan,Varsha",
                "BadgeBarcodeID": "12066314",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "110445566",
                "UserID": "stelpadg",
                "EmployeeName": "Padgett,Stephanie",
                "BadgeBarcodeID": "11898772",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104909207",
                "UserID": "skidanef",
                "EmployeeName": "KIDANE-FESSEHAYE,Simon",
                "BadgeBarcodeID": "11311068",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "109393290",
                "UserID": "nakhudai",
                "EmployeeName": "Nakhuda,Imtiyaz Ahmed",
                "BadgeBarcodeID": "14440564",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112894387",
                "UserID": "pshilpac",
                "EmployeeName": "Chandrakant,Shilpa",
                "BadgeBarcodeID": "13543086",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201436403",
                "UserID": "gurpinfs",
                "EmployeeName": "singh,Gurpinder",
                "BadgeBarcodeID": "13812900",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "111052162",
                "UserID": "jayantxr",
                "EmployeeName": "Rama,Jayantilal",
                "BadgeBarcodeID": "12540404",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "200403539",
                "UserID": "armanubh",
                "EmployeeName": "Manubhai,Aryan",
                "BadgeBarcodeID": "14321323",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202106001",
                "UserID": "apmonika",
                "EmployeeName": "Patel,Monika",
                "BadgeBarcodeID": "12483389",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "112983438",
                "UserID": "zhareshp",
                "EmployeeName": "Patel,Haresh",
                "BadgeBarcodeID": "13117460",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106477246",
                "UserID": "zryank",
                "EmployeeName": "Kemal,Zryan",
                "BadgeBarcodeID": "11381728",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "112692400",
                "UserID": "mriamoha",
                "EmployeeName": "Mohammed,Riaz",
                "BadgeBarcodeID": "12781973",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201686956",
                "UserID": "eksnehal",
                "EmployeeName": "Koli,Snehalben Bhavesh Bhavesh",
                "BadgeBarcodeID": "12266199",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "202501440",
                "UserID": "otmakhei",
                "EmployeeName": "kheireddine,otman",
                "BadgeBarcodeID": "11010799",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "202183888",
                "UserID": "phirenkd",
                "EmployeeName": "patel,hirenkumar",
                "BadgeBarcodeID": "11776814",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "106647392",
                "UserID": "gisoldom",
                "EmployeeName": "De Souza Gisoldo,Marta Aparecida",
                "BadgeBarcodeID": "11234262",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110868352",
                "UserID": "dshecarl",
                "EmployeeName": "Sheldon,Carl David",
                "BadgeBarcodeID": "13245386",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112749817",
                "UserID": "chingwwo",
                "EmployeeName": "Wong,Karl",
                "BadgeBarcodeID": "12612226",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110838769",
                "UserID": "mszwedsy",
                "EmployeeName": "Szweder,Sylwia Justyna",
                "BadgeBarcodeID": "13987811",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106862378",
                "UserID": "falgunit",
                "EmployeeName": "Tandel,Falguni Ganesh",
                "BadgeBarcodeID": "14355909",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "202501438",
                "UserID": "oshanajo",
                "EmployeeName": "Joseph,Shanaka",
                "BadgeBarcodeID": "14852648",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "112652089",
                "UserID": "limacarj",
                "EmployeeName": "Limachiya,Arjun",
                "BadgeBarcodeID": "11050203",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106172931",
                "UserID": "bashirta",
                "EmployeeName": "Bashir,Tanveer",
                "BadgeBarcodeID": "13293537",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103811790",
                "UserID": "esandul",
                "EmployeeName": "Sandulache,Andra",
                "BadgeBarcodeID": "11754465",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105569476",
                "UserID": "rrdly",
                "EmployeeName": "Radley,Rob",
                "BadgeBarcodeID": "12639844",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108986254",
                "UserID": "kameljgi",
                "EmployeeName": "Gill,Kam",
                "BadgeBarcodeID": "13993105",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105015639",
                "UserID": "hutcjacq",
                "EmployeeName": "Hutchinson,Jacqueline May",
                "BadgeBarcodeID": "12387589",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "14",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201564653",
                "UserID": "srmareew",
                "EmployeeName": "Mareedu,Sreekanth",
                "BadgeBarcodeID": "14733671",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "101678731",
                "UserID": "tandeepa",
                "EmployeeName": "Tandel,Deepak",
                "BadgeBarcodeID": "12711155",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "101417128",
                "UserID": "beyeneab",
                "EmployeeName": "Beyene,Awet",
                "BadgeBarcodeID": "11328973",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201893970",
                "UserID": "varjyoth",
                "EmployeeName": "Varghese,Jyothish",
                "BadgeBarcodeID": "14186586",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "110016653",
                "UserID": "lshivama",
                "EmployeeName": "Mahendrakumar,Shivam",
                "BadgeBarcodeID": "11222547",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "111059414",
                "UserID": "conocorn",
                "EmployeeName": "Corrigan,Conor Michael",
                "BadgeBarcodeID": "13900911",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106254391",
                "UserID": "mitsvask",
                "EmployeeName": "Mitsevski,Vasko",
                "BadgeBarcodeID": "13380805",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "111285116",
                "UserID": "kgurindj",
                "EmployeeName": "Kaur,Gurinder",
                "BadgeBarcodeID": "13520892",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201705638",
                "UserID": "mavjrimp",
                "EmployeeName": "Mavji,Rimpal",
                "BadgeBarcodeID": "130486",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110580070",
                "UserID": "ashgulab",
                "EmployeeName": "Shaikh,Gulabsha Rafik",
                "BadgeBarcodeID": "15184180",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "105277512",
                "UserID": "feighanj",
                "EmployeeName": "Feighan,James",
                "BadgeBarcodeID": "230736",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110234592",
                "UserID": "hashpriy",
                "EmployeeName": "Hashmukhlal,Priya",
                "BadgeBarcodeID": "15352256",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105233748",
                "UserID": "helmich",
                "EmployeeName": "Helm,Michael",
                "BadgeBarcodeID": "11983054",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105046737",
                "UserID": "asgreave",
                "EmployeeName": "Greaves,Ashley",
                "BadgeBarcodeID": "11175086",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "112901507",
                "UserID": "xhollaja",
                "EmployeeName": "Holland,Jane",
                "BadgeBarcodeID": "14088025",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT4918"
            },
            {
                "EmployeeID": "201627328",
                "UserID": "dommarna",
                "EmployeeName": "Dommara Nandyala Manchala,Naveen kumar",
                "BadgeBarcodeID": "14953974",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "105103810",
                "UserID": "argatuaa",
                "EmployeeName": "Argatu,Ana-Larisa",
                "BadgeBarcodeID": "11900131",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "107422811",
                "UserID": "asoyeb",
                "EmployeeName": "Abdulrashid,Soyeb",
                "BadgeBarcodeID": "12794878",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "108847893",
                "UserID": "brheffor",
                "EmployeeName": "Hefford,Bradley",
                "BadgeBarcodeID": "47148",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201838943",
                "UserID": "deswinta",
                "EmployeeName": "Desale,Winta",
                "BadgeBarcodeID": "14451665",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108535154",
                "UserID": "rulauraj",
                "EmployeeName": "Russell,Laura",
                "BadgeBarcodeID": "12573999",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105021990",
                "UserID": "mastowel",
                "EmployeeName": "Stowell,Mark Dean",
                "BadgeBarcodeID": "12103183",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "200551473",
                "UserID": "sdarsham",
                "EmployeeName": "Sanjay,Darshana",
                "BadgeBarcodeID": "11673595",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108214703",
                "UserID": "xecaquif",
                "EmployeeName": "Xec,Aquif Abdul",
                "BadgeBarcodeID": "13866431",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "111485687",
                "UserID": "norlmarc",
                "EmployeeName": "Norton,Marc",
                "BadgeBarcodeID": "11430345",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "103730043",
                "UserID": "utamh",
                "EmployeeName": "Utam,Hemangi",
                "BadgeBarcodeID": "11859088",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "202170102",
                "UserID": "ypurvidi",
                "EmployeeName": "Dilip,Purvika",
                "BadgeBarcodeID": "11899980",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "112621574",
                "UserID": "plamarde",
                "EmployeeName": "Powar,Amar",
                "BadgeBarcodeID": "13101049",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "110479609",
                "UserID": "kaurlama",
                "EmployeeName": "Kaur,Amandeep",
                "BadgeBarcodeID": "11894910",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202018693",
                "UserID": "tuhemcha",
                "EmployeeName": "Turlapati,Hemchand",
                "BadgeBarcodeID": "12370379",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "109997266",
                "UserID": "manshany",
                "EmployeeName": "Shantilal,Manoj",
                "BadgeBarcodeID": "15094875",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DY1-0730"
            },
            {
                "EmployeeID": "106410706",
                "UserID": "vrossett",
                "EmployeeName": "Rossetto,Vanessa",
                "BadgeBarcodeID": "11709160",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "107270800",
                "UserID": "zariyabs",
                "EmployeeName": "Sheik,Zab",
                "BadgeBarcodeID": "11844849",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "105752530",
                "UserID": "ttongue",
                "EmployeeName": "Tongue,Tracy Anne",
                "BadgeBarcodeID": "12840387",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106950446",
                "UserID": "alnoob",
                "EmployeeName": "Bishari,Alnoor",
                "BadgeBarcodeID": "11820944",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DI0-0800"
            },
            {
                "EmployeeID": "200551478",
                "UserID": "shapmuha",
                "EmployeeName": "Shakeel,Muhammad",
                "BadgeBarcodeID": "15340824",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108805312",
                "UserID": "sedruzel",
                "EmployeeName": "Uzel,Sedrettin",
                "BadgeBarcodeID": "12170021",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200571418",
                "UserID": "kashlmoh",
                "EmployeeName": "Kashi,Mohammedraza",
                "BadgeBarcodeID": "12952536",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "107979949",
                "UserID": "alewinga",
                "EmployeeName": "Wingate,Alex Ewan",
                "BadgeBarcodeID": "13614099",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106279453",
                "UserID": "sbouder",
                "EmployeeName": "Boudermine,Sami",
                "BadgeBarcodeID": "92109",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106464615",
                "UserID": "julijj",
                "EmployeeName": "Jakovleva,Julija",
                "BadgeBarcodeID": "12472872",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202179953",
                "UserID": "paulspis",
                "EmployeeName": "PAULSON,PISHON",
                "BadgeBarcodeID": "12728529",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "112944463",
                "UserID": "amratlha",
                "EmployeeName": "Amratlal,Hardik",
                "BadgeBarcodeID": "13441373",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "202106007",
                "UserID": "fsahamza",
                "EmployeeName": "Hamza,Sanyia",
                "BadgeBarcodeID": "11836374",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "103981256",
                "UserID": "vasidrag",
                "EmployeeName": "Vasilev,Dragomir",
                "BadgeBarcodeID": "12685650",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110445656",
                "UserID": "justydyn",
                "EmployeeName": "Dynia,Justyna",
                "BadgeBarcodeID": "12178547",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "101449381",
                "UserID": "sharawda",
                "EmployeeName": "Shady,Rawda",
                "BadgeBarcodeID": "11052480",
                "ManagerName": "Rose,Lyndsey",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106963576",
                "UserID": "arinv",
                "EmployeeName": "Vasiljeva,Arina",
                "BadgeBarcodeID": "12667874",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105471434",
                "UserID": "smthyjr",
                "EmployeeName": "Smith,Craig Martin",
                "BadgeBarcodeID": "12530318",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107419585",
                "UserID": "stolarov",
                "EmployeeName": "Stolarova,Valerie",
                "BadgeBarcodeID": "12352886",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT345"
            },
            {
                "EmployeeID": "109991676",
                "UserID": "elpadron",
                "EmployeeName": "Padroni,Elisa Amalia",
                "BadgeBarcodeID": "15088546",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105335391",
                "UserID": "stahobbs",
                "EmployeeName": "Hobbs,Stacey Helen",
                "BadgeBarcodeID": "11964529",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111284912",
                "UserID": "joeebell",
                "EmployeeName": "Bell,Joe",
                "BadgeBarcodeID": "11404856",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105335370",
                "UserID": "pllatus",
                "EmployeeName": "Latus,Pete",
                "BadgeBarcodeID": "11886745",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106372615",
                "UserID": "nfeli",
                "EmployeeName": "Felix,Andre",
                "BadgeBarcodeID": "11846713",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107402108",
                "UserID": "neilmidd",
                "EmployeeName": "Middleton,Neil Matthew",
                "BadgeBarcodeID": "13383916",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106561149",
                "UserID": "fsirak",
                "EmployeeName": "Fesehatsion,Sirak",
                "BadgeBarcodeID": "11756785",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "202440249",
                "UserID": "brijparm",
                "EmployeeName": "Dipakbhai,Parmar Brijesh",
                "BadgeBarcodeID": "11877327",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "109416768",
                "UserID": "kuresohe",
                "EmployeeName": "Kureshi,Sohel Yaseen",
                "BadgeBarcodeID": "14466087",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "201806014",
                "UserID": "pqvishal",
                "EmployeeName": "Patel,Vishal",
                "BadgeBarcodeID": "15081801",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106969731",
                "UserID": "lewakacp",
                "EmployeeName": "Lewandowski,Kacper",
                "BadgeBarcodeID": "11039732",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "104007718",
                "UserID": "gccsiki",
                "EmployeeName": "Paraschiv,Gestina Lavinia Verginica",
                "BadgeBarcodeID": "13705737",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111284910",
                "UserID": "surikauz",
                "EmployeeName": "Kaur,Surinder",
                "BadgeBarcodeID": "12872905",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "200460773",
                "UserID": "mamthirm",
                "EmployeeName": "Hira,Mamta",
                "BadgeBarcodeID": "14691273",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106658157",
                "UserID": "mubashu",
                "EmployeeName": "Hussain,Mubashir",
                "BadgeBarcodeID": "243183",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT2638"
            },
            {
                "EmployeeID": "112888445",
                "UserID": "nershres",
                "EmployeeName": "Shrestha,Nerisha",
                "BadgeBarcodeID": "12556339",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "101287101",
                "UserID": "jnirmal",
                "EmployeeName": "JOSEPH,NIRMAL",
                "BadgeBarcodeID": "11281269",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "200772158",
                "UserID": "faswinkr",
                "EmployeeName": "Aswin,Kritika",
                "BadgeBarcodeID": "12475574",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "108214675",
                "UserID": "coopeamy",
                "EmployeeName": "Cooper,Amy Leigh Marion",
                "BadgeBarcodeID": "13866409",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112944464",
                "UserID": "kantishb",
                "EmployeeName": "Kantilal,Shivani",
                "BadgeBarcodeID": "14619948",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105671525",
                "UserID": "jhamish",
                "EmployeeName": "Johnson,Hamish Max",
                "BadgeBarcodeID": "12752196",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "202327587",
                "UserID": "akhkuria",
                "EmployeeName": "Kuriakose,Akhil",
                "BadgeBarcodeID": "11939812",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108805306",
                "UserID": "kelcoopk",
                "EmployeeName": "Cooper,Kelly",
                "BadgeBarcodeID": "12724725",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109380077",
                "UserID": "gauranbn",
                "EmployeeName": "Nayee,Gaurang",
                "BadgeBarcodeID": "14425326",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105481147",
                "UserID": "vanditk",
                "EmployeeName": "Kantilal,Vandit",
                "BadgeBarcodeID": "15285454",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105318328",
                "UserID": "limacr",
                "EmployeeName": "Limachiya,Raj",
                "BadgeBarcodeID": "12908444",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107854834",
                "UserID": "wmasoand",
                "EmployeeName": "Mason,Andy",
                "BadgeBarcodeID": "13479269",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201723801",
                "UserID": "kakasara",
                "EmployeeName": "KASARAM.,Karishma",
                "BadgeBarcodeID": "13391137",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201552396",
                "UserID": "dechauhm",
                "EmployeeName": "Chauhan,Dev",
                "BadgeBarcodeID": "11959487",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "111034684",
                "UserID": "rebefito",
                "EmployeeName": "Fitzsimmons,Rebecca",
                "BadgeBarcodeID": "14078165",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105244285",
                "UserID": "anctudos",
                "EmployeeName": "Tudose,Anca",
                "BadgeBarcodeID": "11293170",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "102775947",
                "UserID": "mrakxana",
                "EmployeeName": "Mohanlal,Rakxana",
                "BadgeBarcodeID": "168703",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "105394115",
                "UserID": "haaantho",
                "EmployeeName": "Harrison,Anthony",
                "BadgeBarcodeID": "12445073",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201456076",
                "UserID": "arifmoht",
                "EmployeeName": "Arif,Mohammed Husein",
                "BadgeBarcodeID": "13223766",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "104953672",
                "UserID": "doyjosh",
                "EmployeeName": "Doyle,Joshua Luke",
                "BadgeBarcodeID": "149797",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT8227"
            },
            {
                "EmployeeID": "105256672",
                "UserID": "naomsm",
                "EmployeeName": "Smith,Naomi Latisha",
                "BadgeBarcodeID": "11777845",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "PT2024"
            },
            {
                "EmployeeID": "109411504",
                "UserID": "batemapa",
                "EmployeeName": "Bateman,Patrick",
                "BadgeBarcodeID": "14459757",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "101978860",
                "UserID": "ddanut",
                "EmployeeName": "Dobranis,Danut",
                "BadgeBarcodeID": "11930370",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105134153",
                "UserID": "andfaure",
                "EmployeeName": "Faure,Andy Michael",
                "BadgeBarcodeID": "12265562",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108534672",
                "UserID": "wsharonm",
                "EmployeeName": "Morris,Sharon",
                "BadgeBarcodeID": "12126114",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "101599413",
                "UserID": "peraalex",
                "EmployeeName": "Peralta,Alexandra",
                "BadgeBarcodeID": "11522322",
                "ManagerName": "Rose,Lyndsey",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201627257",
                "UserID": "dpappsin",
                "EmployeeName": "Singh,Pappu",
                "BadgeBarcodeID": "11500071",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "107840133",
                "UserID": "mcleespm",
                "EmployeeName": "McLees,Paul Samuel",
                "BadgeBarcodeID": "13461869",
                "ManagerName": "McFarlane,Adam",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE0-0700"
            },
            {
                "EmployeeID": "200207455",
                "UserID": "jennwhea",
                "EmployeeName": "Wheatley,Jen Janice Marion",
                "BadgeBarcodeID": "13965678",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105003433",
                "UserID": "rehowais",
                "EmployeeName": "Abdul Rehman,Owais",
                "BadgeBarcodeID": "11630677",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106464608",
                "UserID": "wlodno",
                "EmployeeName": "Wlodno,Joanna",
                "BadgeBarcodeID": "12471948",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "103519802",
                "UserID": "hnnasee",
                "EmployeeName": "Naseer,Haroon",
                "BadgeBarcodeID": "153345",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "109731976",
                "UserID": "pkulwind",
                "EmployeeName": "Dosanjh,kulwinder Singh",
                "BadgeBarcodeID": "14807099",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "104005677",
                "UserID": "neelant",
                "EmployeeName": "Tandel,Neelangi Dhirubhai",
                "BadgeBarcodeID": "11743593",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110100744",
                "UserID": "carsanra",
                "EmployeeName": "Carsane,Raxa",
                "BadgeBarcodeID": "15208330",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "107020479",
                "UserID": "zhhmed",
                "EmployeeName": "Ahmed,Zaheer",
                "BadgeBarcodeID": "11046283",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "107007411",
                "UserID": "rdiptibe",
                "EmployeeName": "Rana,Diptiben Kalpeshkumar",
                "BadgeBarcodeID": "12405473",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "107020512",
                "UserID": "patruma",
                "EmployeeName": "Patru,Marian Nicusor",
                "BadgeBarcodeID": "4042",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106417593",
                "UserID": "ncacere",
                "EmployeeName": "Caceres vera,Natacha Carolina",
                "BadgeBarcodeID": "109894",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT2026"
            },
            {
                "EmployeeID": "110991901",
                "UserID": "vinnrose",
                "EmployeeName": "Rose,Inna",
                "BadgeBarcodeID": "11463431",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "200634056",
                "UserID": "ahmedkus",
                "EmployeeName": "Ahmed,Usman",
                "BadgeBarcodeID": "13295070",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "109845658",
                "UserID": "rabkrish",
                "EmployeeName": "Rabari,Krishna Haribhai",
                "BadgeBarcodeID": "14929350",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "200394361",
                "UserID": "nmasirwa",
                "EmployeeName": "Mamandi,Sirwan",
                "BadgeBarcodeID": "12875467",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109409765",
                "UserID": "fferstlf",
                "EmployeeName": "Bastos,Joao Bernardo",
                "BadgeBarcodeID": "14457777",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "202440269",
                "UserID": "himanara",
                "EmployeeName": "Naran,Himat",
                "BadgeBarcodeID": "221654",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110331152",
                "UserID": "vaboleac",
                "EmployeeName": "Boleac,Vasilica",
                "BadgeBarcodeID": "12893819",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "102579279",
                "UserID": "pennacch",
                "EmployeeName": "Pennacchia,Roberto",
                "BadgeBarcodeID": "225778",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107897863",
                "UserID": "goodwjac",
                "EmployeeName": "Goodwin,Jacob",
                "BadgeBarcodeID": "13525983",
                "ManagerName": "Burton,Jake",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "200749759",
                "UserID": "alpapars",
                "EmployeeName": "Parsotam,Alpana",
                "BadgeBarcodeID": "14561872",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106307588",
                "UserID": "kssisawo",
                "EmployeeName": "Sisawo,Kebba Sisaho",
                "BadgeBarcodeID": "11330309",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "202501442",
                "UserID": "lovethoo",
                "EmployeeName": "Okafor,Loveth",
                "BadgeBarcodeID": "14360019",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "112677030",
                "UserID": "lilindep",
                "EmployeeName": "LIN,Linden",
                "BadgeBarcodeID": "12614039",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108534684",
                "UserID": "ditremus",
                "EmployeeName": "Ditei,Remus Dumitru",
                "BadgeBarcodeID": "11414290",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106647384",
                "UserID": "mmiljana",
                "EmployeeName": "Miletic,Miljana",
                "BadgeBarcodeID": "11747517",
                "ManagerName": "Cain,Sarah",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201838941",
                "UserID": "ekartpra",
                "EmployeeName": "Kartik,Prabhukar",
                "BadgeBarcodeID": "13640575",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "100222827",
                "UserID": "brunava",
                "EmployeeName": "Utinane,Karina",
                "BadgeBarcodeID": "116559",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "110360305",
                "UserID": "nandhruv",
                "EmployeeName": "Nanji,Dhruven",
                "BadgeBarcodeID": "193744",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "107020614",
                "UserID": "arimuska",
                "EmployeeName": "Arif,Muskan",
                "BadgeBarcodeID": "11402555",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105071332",
                "UserID": "tambers",
                "EmployeeName": "Tamber,Sukhraj Singh",
                "BadgeBarcodeID": "11603047",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110793141",
                "UserID": "thewetse",
                "EmployeeName": "Etse,Theophilus Dorgbe",
                "BadgeBarcodeID": "13784926",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "103606501",
                "UserID": "mghebre",
                "EmployeeName": "Ghebre,Michael",
                "BadgeBarcodeID": "11004509",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "2",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105263657",
                "UserID": "thurjame",
                "EmployeeName": "Thurgood,James Robert",
                "BadgeBarcodeID": "269972",
                "ManagerName": "Nicholson,Guy",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112760370",
                "UserID": "ilieclan",
                "EmployeeName": "Ilie,MIHAELA Mihaela",
                "BadgeBarcodeID": "12363768",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "103277739",
                "UserID": "odevashi",
                "EmployeeName": "Odedra,Devashi",
                "BadgeBarcodeID": "12751870",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "104817892",
                "UserID": "midnikol",
                "EmployeeName": "middleton,nik",
                "BadgeBarcodeID": "11161630",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106210403",
                "UserID": "khitas",
                "EmployeeName": "Khitarishvili,Sandeep",
                "BadgeBarcodeID": "13334049",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201686952",
                "UserID": "darpdhob",
                "EmployeeName": "DHOBI,DARPANKUMAR",
                "BadgeBarcodeID": "14543668",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110879772",
                "UserID": "gracejul",
                "EmployeeName": "Gracek,Julia Anna",
                "BadgeBarcodeID": "14007799",
                "ManagerName": "Stanley,Leigh",
                "ManagementAreaID": "34",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110450186",
                "UserID": "dsakruti",
                "EmployeeName": "Sanjiu,Krutika",
                "BadgeBarcodeID": "190256",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "109616556",
                "UserID": "zbigkome",
                "EmployeeName": "Komedera,Zbigniew",
                "BadgeBarcodeID": "14691614",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "109363542",
                "UserID": "pateqdax",
                "EmployeeName": "Patel,Daxa",
                "BadgeBarcodeID": "14407591",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "113099953",
                "UserID": "whinatam",
                "EmployeeName": "White,Natalie",
                "BadgeBarcodeID": "13026380",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "102668816",
                "UserID": "lhandfo",
                "EmployeeName": "Handford-Clegg,Leon",
                "BadgeBarcodeID": "221287",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "106885154",
                "UserID": "kabeermo",
                "EmployeeName": "Fawzul Kabeer,Mohamed Rishad",
                "BadgeBarcodeID": "12760023",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "109941528",
                "UserID": "akhtjunu",
                "EmployeeName": "Akhtar,Junaid",
                "BadgeBarcodeID": "15032725",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "103870740",
                "UserID": "rajkhanz",
                "EmployeeName": "Khan,Raja Saqib",
                "BadgeBarcodeID": "11728109",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106221100",
                "UserID": "tanamita",
                "EmployeeName": "Tandel,Amita",
                "BadgeBarcodeID": "13345354",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT2388"
            },
            {
                "EmployeeID": "837356",
                "UserID": "marprada",
                "EmployeeName": "Prada,Maria Gloria",
                "BadgeBarcodeID": "45385",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201641089",
                "UserID": "pathanmw",
                "EmployeeName": "Pathan,Mahaboob subhani",
                "BadgeBarcodeID": "14273809",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "112691687",
                "UserID": "kesedawi",
                "EmployeeName": "Kesete,Dawit",
                "BadgeBarcodeID": "11668224",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "103959539",
                "UserID": "chhabuvc",
                "EmployeeName": "Chhabu,Waz",
                "BadgeBarcodeID": "11424624",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105335371",
                "UserID": "wnnkonje",
                "EmployeeName": "Nkonjera,Wavya Kalimujiso",
                "BadgeBarcodeID": "11600675",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103214098",
                "UserID": "akkhista",
                "EmployeeName": "Khistariya,Ashok",
                "BadgeBarcodeID": "11725701",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "109358249",
                "UserID": "kaluzkam",
                "EmployeeName": "Kaluzny,Kamil",
                "BadgeBarcodeID": "14401509",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "109396272",
                "UserID": "sabnaseh",
                "EmployeeName": "Saber,Naseh",
                "BadgeBarcodeID": "14442850",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "104110272",
                "UserID": "hagmusye",
                "EmployeeName": "Hagos,Musye",
                "BadgeBarcodeID": "15186298",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110861680",
                "UserID": "garroisa",
                "EmployeeName": "Garrote,Isabel",
                "BadgeBarcodeID": "13787106",
                "ManagerName": "Stanley,Leigh",
                "ManagementAreaID": "34",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105126115",
                "UserID": "ainurame",
                "EmployeeName": "Amet,Ainur",
                "BadgeBarcodeID": "11676900",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105071333",
                "UserID": "ranbalji",
                "EmployeeName": "Ranu,Baljit Singh",
                "BadgeBarcodeID": "12290686",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108462207",
                "UserID": "sanjivkr",
                "EmployeeName": "sanjiv,krunal",
                "BadgeBarcodeID": "12323970",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105528064",
                "UserID": "tanminal",
                "EmployeeName": "Tandel,Minal Nareshbhai",
                "BadgeBarcodeID": "12593038",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105090732",
                "UserID": "lucianst",
                "EmployeeName": "Stan,Luciana",
                "BadgeBarcodeID": "11110015",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "105101233",
                "UserID": "newtmaxi",
                "EmployeeName": "Newton,Maxine Elizabeth",
                "BadgeBarcodeID": "11443225",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201510166",
                "UserID": "falbharo",
                "EmployeeName": "BHARODIYA,FALGUNI DHARMESH",
                "BadgeBarcodeID": "12974758",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "105449625",
                "UserID": "khurakht",
                "EmployeeName": "Akhtar,Khuram",
                "BadgeBarcodeID": "12506524",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "101744365",
                "UserID": "kaulinyt",
                "EmployeeName": "Kaulinyte,Simona",
                "BadgeBarcodeID": "11680312",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "101993507",
                "UserID": "cogavril",
                "EmployeeName": "Gavrila,Constantin",
                "BadgeBarcodeID": "11945428",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "19",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110500011",
                "UserID": "tortobre",
                "EmployeeName": "Orton,Brendon",
                "BadgeBarcodeID": "13278205",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201940162",
                "UserID": "duroshan",
                "EmployeeName": "Dutta,Roshan Kumar",
                "BadgeBarcodeID": "13036204",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "100365551",
                "UserID": "mamohah",
                "EmployeeName": "Hussain,Mohammed Nazrul",
                "BadgeBarcodeID": "12519547",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "104059170",
                "UserID": "hamidara",
                "EmployeeName": "Rashid,Hamida",
                "BadgeBarcodeID": "310786",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "101501945",
                "UserID": "alexakov",
                "EmployeeName": "Kovacs,Alexandra",
                "BadgeBarcodeID": "11418158",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "RT4634"
            },
            {
                "EmployeeID": "107441469",
                "UserID": "bld",
                "EmployeeName": "davis,blake",
                "BadgeBarcodeID": "12029481",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106137535",
                "UserID": "leitourg",
                "EmployeeName": "Leitourgis,Daniil",
                "BadgeBarcodeID": "13256117",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "109387139",
                "UserID": "sjamelul",
                "EmployeeName": "Lulham,James",
                "BadgeBarcodeID": "14432556",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201599105",
                "UserID": "ilshahgz",
                "EmployeeName": "Ilyas,Shahgul",
                "BadgeBarcodeID": "14508476",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "112632439",
                "UserID": "shaieaad",
                "EmployeeName": "Shaikh,Aadil",
                "BadgeBarcodeID": "11975779",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106884349",
                "UserID": "akrich",
                "EmployeeName": "Richards,Kevin",
                "BadgeBarcodeID": "13027397",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE1-0600"
            },
            {
                "EmployeeID": "106172963",
                "UserID": "mihaesav",
                "EmployeeName": "Savu,Mihaela Janina",
                "BadgeBarcodeID": "13293562",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAA"
            },
            {
                "EmployeeID": "112322958",
                "UserID": "hsoufoua",
                "EmployeeName": "Ouafiq,Soufiane",
                "BadgeBarcodeID": "14927856",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "108436543",
                "UserID": "stangina",
                "EmployeeName": "Stancu,Gina",
                "BadgeBarcodeID": "12351618",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT5295"
            },
            {
                "EmployeeID": "201845052",
                "UserID": "davharsw",
                "EmployeeName": "Dave,Harshad",
                "BadgeBarcodeID": "13625980",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201552321",
                "UserID": "ibwpatel",
                "EmployeeName": "Patel,Ibrahim",
                "BadgeBarcodeID": "12989602",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "202671746",
                "UserID": "hdaljerm",
                "EmployeeName": "Daley,Jermaine jason",
                "BadgeBarcodeID": "11894394",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105365407",
                "UserID": "olagok",
                "EmployeeName": "Tofade,Olagoke Thomas",
                "BadgeBarcodeID": "12414658",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105361242",
                "UserID": "rusniamh",
                "EmployeeName": "Russell,Niamh Elizabeth",
                "BadgeBarcodeID": "12408357",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106561142",
                "UserID": "khumubee",
                "EmployeeName": "Khurshid,Mubeen",
                "BadgeBarcodeID": "11438493",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108665079",
                "UserID": "dainaked",
                "EmployeeName": "Kedyte,Daina",
                "BadgeBarcodeID": "14541",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105738845",
                "UserID": "mangelan",
                "EmployeeName": "Mangela,Nisarg Narendra",
                "BadgeBarcodeID": "12577240",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "110484712",
                "UserID": "reshmidr",
                "EmployeeName": "Rajan,Reshmi KANAKUZHIYIL",
                "BadgeBarcodeID": "13727454",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "201723775",
                "UserID": "rjagjiva",
                "EmployeeName": "Jagjivan,Radhika",
                "BadgeBarcodeID": "14464652",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "200478382",
                "UserID": "johowoey",
                "EmployeeName": "Owoeye,Johnson",
                "BadgeBarcodeID": "11285649",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "103961613",
                "UserID": "esharaf",
                "EmployeeName": "Ellahee,Sharaf",
                "BadgeBarcodeID": "11638526",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "102706105",
                "UserID": "aasfiem",
                "EmployeeName": "Moosa,Ash",
                "BadgeBarcodeID": "12598703",
                "ManagerName": "Corish,Eleanor",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "104953683",
                "UserID": "nrruston",
                "EmployeeName": "Ruston,Nadine Marie",
                "BadgeBarcodeID": "11687841",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106279476",
                "UserID": "kareenan",
                "EmployeeName": "Naresh,Kareena",
                "BadgeBarcodeID": "12094620",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106166468",
                "UserID": "carinatc",
                "EmployeeName": "Carina,Telma Juliana Silva",
                "BadgeBarcodeID": "13286661",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "107915395",
                "UserID": "michabeo",
                "EmployeeName": "Bell,Michael",
                "BadgeBarcodeID": "13543359",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112894384",
                "UserID": "ankitahc",
                "EmployeeName": "Chandrakant,Ankita",
                "BadgeBarcodeID": "14156033",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106332298",
                "UserID": "chekoud",
                "EmployeeName": "Drammeh,Chekou",
                "BadgeBarcodeID": "243215",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "201800325",
                "UserID": "erummoha",
                "EmployeeName": "Erumbalakkal,Mohammed",
                "BadgeBarcodeID": "15268304",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "113107154",
                "UserID": "dhvijaik",
                "EmployeeName": "Vijaikumar,Dhyey",
                "BadgeBarcodeID": "11133814",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201940173",
                "UserID": "hardimah",
                "EmployeeName": "Mahesh,Hardik",
                "BadgeBarcodeID": "14874289",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201499071",
                "UserID": "tulshisa",
                "EmployeeName": "Tulshidas,Sandeep",
                "BadgeBarcodeID": "12428257",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "201436097",
                "UserID": "ramaabhf",
                "EmployeeName": "Ramani,Abhishek",
                "BadgeBarcodeID": "182743",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "113134256",
                "UserID": "tkavnavi",
                "EmployeeName": "Navin,Kavita",
                "BadgeBarcodeID": "14783484",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "103992022",
                "UserID": "bhratbh",
                "EmployeeName": "Patel,Bharatbhai",
                "BadgeBarcodeID": "11369950",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "104111000",
                "UserID": "ittsvetk",
                "EmployeeName": "Tsvetkov,Ivan Iliyanov",
                "BadgeBarcodeID": "11495503",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT5418"
            },
            {
                "EmployeeID": "106396885",
                "UserID": "brreton",
                "EmployeeName": "Barreto,Jose",
                "BadgeBarcodeID": "12087456",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "202501474",
                "UserID": "rozsachi",
                "EmployeeName": "Roka magar,Sachin",
                "BadgeBarcodeID": "15334295",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "202073397",
                "UserID": "hpriyyad",
                "EmployeeName": "YADAV,PRIYA",
                "BadgeBarcodeID": "11444122",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "101702615",
                "UserID": "skkoran",
                "EmployeeName": "Koran,Szilvia",
                "BadgeBarcodeID": "11633532",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106529755",
                "UserID": "espinhm",
                "EmployeeName": "Espinha,Madjane da Silva",
                "BadgeBarcodeID": "12877136",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "200551482",
                "UserID": "arzooram",
                "EmployeeName": "Ramesh,Arzoo",
                "BadgeBarcodeID": "13894344",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201899600",
                "UserID": "bethysha",
                "EmployeeName": "Bethi,Sharath",
                "BadgeBarcodeID": "14253721",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106235000",
                "UserID": "bterlizz",
                "EmployeeName": "Terlizzi,Barbara",
                "BadgeBarcodeID": "13360125",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "101884171",
                "UserID": "junmadar",
                "EmployeeName": "Madar,Junaid",
                "BadgeBarcodeID": "12814370",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "103606499",
                "UserID": "hggoito",
                "EmployeeName": "Goitom,Hermela Asgedom",
                "BadgeBarcodeID": "13120845",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106383935",
                "UserID": "victcost",
                "EmployeeName": "COSTA,VICTOR",
                "BadgeBarcodeID": "13558411",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103529788",
                "UserID": "patlnma",
                "EmployeeName": "Patel,Ankit",
                "BadgeBarcodeID": "11736808",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "106384022",
                "UserID": "mcnameep",
                "EmployeeName": "McNamee,Peter",
                "BadgeBarcodeID": "12285655",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200562633",
                "UserID": "andehruy",
                "EmployeeName": "Andemariam,Hruy Ghebrehiwet",
                "BadgeBarcodeID": "15318310",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "104953661",
                "UserID": "shinkley",
                "EmployeeName": "Hinkley,Scott",
                "BadgeBarcodeID": "128159",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201845059",
                "UserID": "pratispa",
                "EmployeeName": "Patel,Pratik",
                "BadgeBarcodeID": "15088455",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200615879",
                "UserID": "rhyjacks",
                "EmployeeName": "Jackson,Rhys",
                "BadgeBarcodeID": "15295298",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105671531",
                "UserID": "lambeg",
                "EmployeeName": "Lambert,George Louis",
                "BadgeBarcodeID": "12752200",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106172916",
                "UserID": "aslaabd",
                "EmployeeName": "Abdulrashid,Aslam",
                "BadgeBarcodeID": "13293729",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "105481667",
                "UserID": "geojoita",
                "EmployeeName": "Joita,George",
                "BadgeBarcodeID": "12542287",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109409540",
                "UserID": "humethar",
                "EmployeeName": "Hume,Harry",
                "BadgeBarcodeID": "14457520",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200551419",
                "UserID": "ychiwaib",
                "EmployeeName": "Yue,Chi wai Brian",
                "BadgeBarcodeID": "12553991",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "201672457",
                "UserID": "sbidhpou",
                "EmployeeName": "Poudel,Bidhya",
                "BadgeBarcodeID": "12347675",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "200597953",
                "UserID": "cmikenil",
                "EmployeeName": "Mistry,Kenil",
                "BadgeBarcodeID": "14731685",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "109355776",
                "UserID": "tanzinak",
                "EmployeeName": "khan,tanzina",
                "BadgeBarcodeID": "14398562",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200551476",
                "UserID": "ifaizsha",
                "EmployeeName": "Shaikh,Faizal",
                "BadgeBarcodeID": "12817175",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "111472227",
                "UserID": "scrisrus",
                "EmployeeName": "Rusuceanu,Cristian",
                "BadgeBarcodeID": "11655839",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105364715",
                "UserID": "thankint",
                "EmployeeName": "Thanki,Nisha Narendra",
                "BadgeBarcodeID": "12412127",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108548182",
                "UserID": "georgipr",
                "EmployeeName": "Price,Georgia",
                "BadgeBarcodeID": "11922706",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110511143",
                "UserID": "dugmorel",
                "EmployeeName": "Dugmore,Luke Ryan",
                "BadgeBarcodeID": "12003557",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "102007514",
                "UserID": "smthiwy",
                "EmployeeName": "Smith,Jason",
                "BadgeBarcodeID": "11959611",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105157698",
                "UserID": "dkkrumin",
                "EmployeeName": "Krumina,Dana",
                "BadgeBarcodeID": "12209949",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106137527",
                "UserID": "kakudae",
                "EmployeeName": "Mizuno Kakuda,Eduardo Yoshio",
                "BadgeBarcodeID": "13256116",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201838937",
                "UserID": "vrapatec",
                "EmployeeName": "Patel,Vrajkumar",
                "BadgeBarcodeID": "11916015",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200543891",
                "UserID": "saisurla",
                "EmployeeName": "Lakkana,Sai Surya",
                "BadgeBarcodeID": "13317402",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "104817973",
                "UserID": "enerilx",
                "EmployeeName": "Xhela,Enerild",
                "BadgeBarcodeID": "282507",
                "ManagerName": "Cain,Sarah",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "111244551",
                "UserID": "cpatelda",
                "EmployeeName": "Patel,Darshankumar Rameshbhai",
                "BadgeBarcodeID": "14249470",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "202106025",
                "UserID": "hchmanoj",
                "EmployeeName": "Chunilal,Manoj",
                "BadgeBarcodeID": "12432954",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "105157561",
                "UserID": "mitrant",
                "EmployeeName": "Mitran,Teodora Martiana",
                "BadgeBarcodeID": "132927",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103778361",
                "UserID": "katyat",
                "EmployeeName": "Toseva,Katya",
                "BadgeBarcodeID": "11731420",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106130093",
                "UserID": "mulateef",
                "EmployeeName": "Lateef,Hammad Hammad",
                "BadgeBarcodeID": "13248360",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108509252",
                "UserID": "calbenja",
                "EmployeeName": "Calvert,Benjamin",
                "BadgeBarcodeID": "11908670",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "112652087",
                "UserID": "glishiva",
                "EmployeeName": "Limachiya,Shivani",
                "BadgeBarcodeID": "11388918",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105835947",
                "UserID": "careyphi",
                "EmployeeName": "Carey,Phil",
                "BadgeBarcodeID": "12932136",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200569232",
                "UserID": "chmankur",
                "EmployeeName": "Chaudhary,Ankur",
                "BadgeBarcodeID": "15122286",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201552382",
                "UserID": "chankumn",
                "EmployeeName": "Kumar,Chand",
                "BadgeBarcodeID": "14287485",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "110221635",
                "UserID": "jpedilje",
                "EmployeeName": "PEDIL,Jean",
                "BadgeBarcodeID": "15336686",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT4918"
            },
            {
                "EmployeeID": "110360164",
                "UserID": "lowtom",
                "EmployeeName": "Lowe,Tom",
                "BadgeBarcodeID": "13775805",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "103904500",
                "UserID": "zhakimi",
                "EmployeeName": "Hakimi,Zaman",
                "BadgeBarcodeID": "13673958",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201316704",
                "UserID": "dhonridd",
                "EmployeeName": "Dhonde,Riddhi",
                "BadgeBarcodeID": "12043609",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105520129",
                "UserID": "lielkajs",
                "EmployeeName": "Lielkajs,Donna",
                "BadgeBarcodeID": "12584244",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "109421531",
                "UserID": "ybaggule",
                "EmployeeName": "Bagguley,Roy",
                "BadgeBarcodeID": "14470778",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105365356",
                "UserID": "cffreely",
                "EmployeeName": "Freely,Callum",
                "BadgeBarcodeID": "12412765",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "112209480",
                "UserID": "mouhssio",
                "EmployeeName": "Ouafiq,Mouhssine",
                "BadgeBarcodeID": "11009243",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "105126996",
                "UserID": "bartllis",
                "EmployeeName": "Lis,Bartlomiej Pawel",
                "BadgeBarcodeID": "12191522",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "201448719",
                "UserID": "chunhuya",
                "EmployeeName": "Yau,Chun Hung",
                "BadgeBarcodeID": "14364715",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106250762",
                "UserID": "asdmah",
                "EmployeeName": "Mahmood,Asad",
                "BadgeBarcodeID": "13376951",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200634070",
                "UserID": "vaghelch",
                "EmployeeName": "Vaghela,Chetansinh Kiritsinh",
                "BadgeBarcodeID": "15090198",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "111535640",
                "UserID": "frogeroc",
                "EmployeeName": "Rocha,Rogerio",
                "BadgeBarcodeID": "12492727",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110869070",
                "UserID": "rqaddour",
                "EmployeeName": "Qaddoura,Reema",
                "BadgeBarcodeID": "12938617",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT8356"
            },
            {
                "EmployeeID": "108829486",
                "UserID": "dossmaru",
                "EmployeeName": "dos Santos Josino,Marcos",
                "BadgeBarcodeID": "11839088",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "105342274",
                "UserID": "kulvd",
                "EmployeeName": "Dhillon,Kulvir Kaur",
                "BadgeBarcodeID": "11747262",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108719023",
                "UserID": "palakbep",
                "EmployeeName": "patel,palak Rakeshkumar",
                "BadgeBarcodeID": "13204291",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110863050",
                "UserID": "parehina",
                "EmployeeName": "Parekh,Hina",
                "BadgeBarcodeID": "12467532",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105611816",
                "UserID": "njalasan",
                "EmployeeName": "Njie,Alasan",
                "BadgeBarcodeID": "12685888",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108148450",
                "UserID": "elelangu",
                "EmployeeName": "Langu,Elena",
                "BadgeBarcodeID": "13794438",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "107402107",
                "UserID": "siriwn",
                "EmployeeName": "Siriwardhana,Nadeeka Tharangi",
                "BadgeBarcodeID": "13384102",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201436096",
                "UserID": "paashisp",
                "EmployeeName": "Pandya,Ashish Kumar",
                "BadgeBarcodeID": "12127760",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "112621648",
                "UserID": "mkaurjan",
                "EmployeeName": "Kaur,Jane",
                "BadgeBarcodeID": "11148978",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201564896",
                "UserID": "sacjasol",
                "EmployeeName": "Jasoliya,Sachin Nitinbhai",
                "BadgeBarcodeID": "11996708",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105244167",
                "UserID": "zainmush",
                "EmployeeName": "Mushtaq,Zain",
                "BadgeBarcodeID": "12042228",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "26",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "112944461",
                "UserID": "parindap",
                "EmployeeName": "Parkas,Parinda",
                "BadgeBarcodeID": "14614857",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202464894",
                "UserID": "pandykas",
                "EmployeeName": "Pandya,Kalpesh",
                "BadgeBarcodeID": "14403846",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "109933327",
                "UserID": "mccormky",
                "EmployeeName": "McCormack,Kyam",
                "BadgeBarcodeID": "15023644",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT773"
            },
            {
                "EmployeeID": "102842033",
                "UserID": "sagheeh",
                "EmployeeName": "Sagheer,Hussain",
                "BadgeBarcodeID": "12293245",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "RT2638"
            },
            {
                "EmployeeID": "108307664",
                "UserID": "vladimse",
                "EmployeeName": "Semov,Vladimir",
                "BadgeBarcodeID": "75043",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109897689",
                "UserID": "jalnoman",
                "EmployeeName": "Alam,Noman",
                "BadgeBarcodeID": "14984577",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200616301",
                "UserID": "lchandav",
                "EmployeeName": "Chandavolu,Vijay",
                "BadgeBarcodeID": "12941103",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "106144375",
                "UserID": "babikeg",
                "EmployeeName": "Gebriel,Babiker",
                "BadgeBarcodeID": "13263165",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "100117381",
                "UserID": "blazytek",
                "EmployeeName": "Blazyte,Kamile",
                "BadgeBarcodeID": "155249",
                "ManagerName": "Wheat,Sarah",
                "ManagementAreaID": "33",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106658372",
                "UserID": "goodgc",
                "EmployeeName": "Goodge,Catherine",
                "BadgeBarcodeID": "12497443",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "111011966",
                "UserID": "kurasaal",
                "EmployeeName": "Kurasadowicz,Aleksandra",
                "BadgeBarcodeID": "12774766",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "107805912",
                "UserID": "xecehsin",
                "EmployeeName": "Xec,Ehsin Abdulagis",
                "BadgeBarcodeID": "13425547",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112733745",
                "UserID": "arahetal",
                "EmployeeName": "Ratilal,Hetal",
                "BadgeBarcodeID": "14297503",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201475819",
                "UserID": "nilofarg",
                "EmployeeName": "Goraniya,Nilofar",
                "BadgeBarcodeID": "11872253",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "200772167",
                "UserID": "chowwayn",
                "EmployeeName": "Chow,Ying Wai Wayne",
                "BadgeBarcodeID": "160455",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "109387136",
                "UserID": "jamemurv",
                "EmployeeName": "Murray,James",
                "BadgeBarcodeID": "14432939",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "5",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106665011",
                "UserID": "frunc",
                "EmployeeName": "Frunza,Alexandru",
                "BadgeBarcodeID": "12714602",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "PT1029"
            },
            {
                "EmployeeID": "110526156",
                "UserID": "urodrsha",
                "EmployeeName": "Rodrigues,Shawn",
                "BadgeBarcodeID": "15237282",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201498902",
                "UserID": "cjenmano",
                "EmployeeName": "Manoj.,Jenali",
                "BadgeBarcodeID": "15189553",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "110002717",
                "UserID": "tbhavika",
                "EmployeeName": "Tandel,Bhavika Suresh",
                "BadgeBarcodeID": "15101340",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "105120267",
                "UserID": "dorinchi",
                "EmployeeName": "chirica,dorina",
                "BadgeBarcodeID": "12259387",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "201498897",
                "UserID": "darpanra",
                "EmployeeName": "Ramji,Darpan",
                "BadgeBarcodeID": "11203172",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "111205642",
                "UserID": "safaiabc",
                "EmployeeName": "Safai,Abdul Tawab",
                "BadgeBarcodeID": "12595967",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106193104",
                "UserID": "teofanet",
                "EmployeeName": "Teofilak,Aneta",
                "BadgeBarcodeID": "13315296",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201940133",
                "UserID": "gonischa",
                "EmployeeName": "Gona,Nischay",
                "BadgeBarcodeID": "13599231",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "110425710",
                "UserID": "chrtavei",
                "EmployeeName": "Tavernor,Chris",
                "BadgeBarcodeID": "11418178",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "202440181",
                "UserID": "qsaddash",
                "EmployeeName": "Shaikh,Sadda",
                "BadgeBarcodeID": "13809626",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105003445",
                "UserID": "pociud",
                "EmployeeName": "Pocius,Dovydas",
                "BadgeBarcodeID": "214151",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200676087",
                "UserID": "liltomit",
                "EmployeeName": "Tomita,Liliana",
                "BadgeBarcodeID": "14597307",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109897701",
                "UserID": "georxrad",
                "EmployeeName": "Raducu,George-Laurentiu",
                "BadgeBarcodeID": "14986542",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202018720",
                "UserID": "karnavgh",
                "EmployeeName": "Karavadra,Navghan",
                "BadgeBarcodeID": "14239875",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201893975",
                "UserID": "pateltna",
                "EmployeeName": "Patel,Nazimabanu",
                "BadgeBarcodeID": "11777358",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "110714072",
                "UserID": "leoniuwo",
                "EmployeeName": "Leoniuk,Wojciech",
                "BadgeBarcodeID": "12730528",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110879784",
                "UserID": "rdorapus",
                "EmployeeName": "Pusoma,Dora",
                "BadgeBarcodeID": "14008085",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201571076",
                "UserID": "pinadama",
                "EmployeeName": "Damania,Pinal",
                "BadgeBarcodeID": "12960948",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105501370",
                "UserID": "amamodsh",
                "EmployeeName": "Shafi,Abdul",
                "BadgeBarcodeID": "12563905",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110931100",
                "UserID": "jpapriti",
                "EmployeeName": "Parekh,Priti Rameshchandra",
                "BadgeBarcodeID": "12584568",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "102663871",
                "UserID": "andcris",
                "EmployeeName": "Andrei,Cristian",
                "BadgeBarcodeID": "330523",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110709320",
                "UserID": "randreav",
                "EmployeeName": "Rodriguez,Andrea",
                "BadgeBarcodeID": "13680064",
                "ManagerName": "Sommer,Hendrik",
                "ManagementAreaID": "26",
                "ShiftPattern": "DE0-0800"
            },
            {
                "EmployeeID": "202463758",
                "UserID": "minaxisy",
                "EmployeeName": "Shanti,Minaxi",
                "BadgeBarcodeID": "13312915",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200583948",
                "UserID": "jentmoni",
                "EmployeeName": "Jentilal,Monika",
                "BadgeBarcodeID": "12065103",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "104901302",
                "UserID": "kilbjaso",
                "EmployeeName": "Kilby,Jay",
                "BadgeBarcodeID": "11059127",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110840968",
                "UserID": "vaayazsi",
                "EmployeeName": "Vaid,Ayaz",
                "BadgeBarcodeID": "14048936",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201978173",
                "UserID": "premjrim",
                "EmployeeName": "Premji,Rima",
                "BadgeBarcodeID": "12210438",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "107107441",
                "UserID": "jcconach",
                "EmployeeName": "Conacher,Jack",
                "BadgeBarcodeID": "15287067",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "104909072",
                "UserID": "miterakm",
                "EmployeeName": "Mitera,Karina Agnieszka",
                "BadgeBarcodeID": "11875525",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112632442",
                "UserID": "narvaibi",
                "EmployeeName": "Naresh,Vaibhav",
                "BadgeBarcodeID": "12796373",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "108575500",
                "UserID": "hinksmar",
                "EmployeeName": "Hinksman,Roxy Jody",
                "BadgeBarcodeID": "12721963",
                "ManagerName": "Stanley,Leigh",
                "ManagementAreaID": "34",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105162499",
                "UserID": "sirmanea",
                "EmployeeName": "Sirmane,Aivita",
                "BadgeBarcodeID": "11171779",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "2",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "105573451",
                "UserID": "dunhillk",
                "EmployeeName": "Dunhill,Kevin",
                "BadgeBarcodeID": "12643409",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "104909156",
                "UserID": "nicofl",
                "EmployeeName": "Florea,Dan Dan",
                "BadgeBarcodeID": "11831171",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "5",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "112653463",
                "UserID": "yeeyuvli",
                "EmployeeName": "Li,Yee Yu",
                "BadgeBarcodeID": "14170414",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "201838940",
                "UserID": "fpahonch",
                "EmployeeName": "Pahonchiya,Fardinbhai Anvarhusen",
                "BadgeBarcodeID": "14294437",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "202010985",
                "UserID": "rrahupat",
                "EmployeeName": "Patel,Rahul",
                "BadgeBarcodeID": "14587929",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "201456084",
                "UserID": "plimachq",
                "EmployeeName": "Limachya,Pratham Vinodbhai",
                "BadgeBarcodeID": "193626",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "111384935",
                "UserID": "ciolacma",
                "EmployeeName": "Ciolacu,Marius",
                "BadgeBarcodeID": "12426561",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT2466"
            },
            {
                "EmployeeID": "109416767",
                "UserID": "joroboja",
                "EmployeeName": "Jawara Waggeh,Jorobo",
                "BadgeBarcodeID": "14466086",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "202018687",
                "UserID": "bhjesing",
                "EmployeeName": "Jesing,Bhumika",
                "BadgeBarcodeID": "14526491",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "112719347",
                "UserID": "edivecha",
                "EmployeeName": "Divecha,Nrup",
                "BadgeBarcodeID": "13822306",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "103346504",
                "UserID": "khusbn",
                "EmployeeName": "Narotamo,Khusbu",
                "BadgeBarcodeID": "14031705",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110714069",
                "UserID": "leonianm",
                "EmployeeName": "Leoniuk,Anna Maja",
                "BadgeBarcodeID": "11029801",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200403535",
                "UserID": "rutoumes",
                "EmployeeName": "Umesh,Ruti",
                "BadgeBarcodeID": "12815147",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110027136",
                "UserID": "ankijivv",
                "EmployeeName": "Jivan,Ankit",
                "BadgeBarcodeID": "11688616",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "107753531",
                "UserID": "clarjoss",
                "EmployeeName": "Clare,Joseph",
                "BadgeBarcodeID": "11584522",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201940161",
                "UserID": "purohank",
                "EmployeeName": "Purohit,Ankita Gaurang",
                "BadgeBarcodeID": "12912232",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105256680",
                "UserID": "masetha",
                "EmployeeName": "Massoudi,Ethan James",
                "BadgeBarcodeID": "12159086",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "107757483",
                "UserID": "garryjac",
                "EmployeeName": "Jackson,Garry",
                "BadgeBarcodeID": "12406220",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105134152",
                "UserID": "fhhamaim",
                "EmployeeName": "Hamaima,Michael",
                "BadgeBarcodeID": "11089545",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "26",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "102012748",
                "UserID": "atecklab",
                "EmployeeName": "Tecklab,Asmait",
                "BadgeBarcodeID": "11964825",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "201893973",
                "UserID": "tabrakhd",
                "EmployeeName": "Rakhda,Tabassum",
                "BadgeBarcodeID": "177416",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "110931101",
                "UserID": "janefoss",
                "EmployeeName": "Foss,Janette",
                "BadgeBarcodeID": "11783334",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "111102121",
                "UserID": "aminmiai",
                "EmployeeName": "Mr,Arman",
                "BadgeBarcodeID": "11893210",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200551472",
                "UserID": "masiuhol",
                "EmployeeName": "Mak,Shane",
                "BadgeBarcodeID": "12789599",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "109398622",
                "UserID": "snaymudi",
                "EmployeeName": "Naymudin,Shahrukh",
                "BadgeBarcodeID": "14445338",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "107726100",
                "UserID": "sintarsu",
                "EmployeeName": "Singh,Tarsem",
                "BadgeBarcodeID": "13320525",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "202105936",
                "UserID": "essaurav",
                "EmployeeName": "Saurav,Saurav",
                "BadgeBarcodeID": "15169779",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "202106042",
                "UserID": "arjupanc",
                "EmployeeName": "Panchal,Arjunkumar",
                "BadgeBarcodeID": "13247313",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "113127991",
                "UserID": "enabepat",
                "EmployeeName": "Patel,Enaben Nileshkumar",
                "BadgeBarcodeID": "15030269",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110351593",
                "UserID": "javerala",
                "EmployeeName": "Alam,Javed",
                "BadgeBarcodeID": "13463156",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "101672823",
                "UserID": "flericha",
                "EmployeeName": "Fletcher,Richard",
                "BadgeBarcodeID": "11601266",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "20",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "200478966",
                "UserID": "meghjril",
                "EmployeeName": "R,C",
                "BadgeBarcodeID": "11439197",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "100197421",
                "UserID": "robinsmr",
                "EmployeeName": "Gray-Robins,Matt Tully",
                "BadgeBarcodeID": "350681",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "112653455",
                "UserID": "chunfsin",
                "EmployeeName": "Sin,Michael",
                "BadgeBarcodeID": "13399929",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "102585641",
                "UserID": "sheehasa",
                "EmployeeName": "Sheek,Hasan",
                "BadgeBarcodeID": "11016083",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "200522527",
                "UserID": "mdsaiisl",
                "EmployeeName": "Islam,MD SAIFUL",
                "BadgeBarcodeID": "14028351",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201552353",
                "UserID": "sikhamuk",
                "EmployeeName": "Mukesh,Sikha",
                "BadgeBarcodeID": "14114248",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "103558258",
                "UserID": "ratilm",
                "EmployeeName": "ratilal,Monika",
                "BadgeBarcodeID": "12445607",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106254536",
                "UserID": "cmondini",
                "EmployeeName": "Mondini,Claudia",
                "BadgeBarcodeID": "13380946",
                "ManagerName": "Haye,Claire",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112652078",
                "UserID": "mavatsal",
                "EmployeeName": "Mangela,Vatsal",
                "BadgeBarcodeID": "15151205",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "108456512",
                "UserID": "hmuctabe",
                "EmployeeName": "Hemutkumar,Muctaben",
                "BadgeBarcodeID": "14812103",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200569244",
                "UserID": "hmuhammo",
                "EmployeeName": "Hayat,Muhammad Afzal",
                "BadgeBarcodeID": "11783490",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "110990427",
                "UserID": "abdulesh",
                "EmployeeName": "Shaikh,Abdul Rajjak sadikbhai",
                "BadgeBarcodeID": "11376058",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "200655727",
                "UserID": "harikbha",
                "EmployeeName": "BHAVSAR,HARIKRUSHNA",
                "BadgeBarcodeID": "12312768",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201838902",
                "UserID": "murukrat",
                "EmployeeName": "Murukan,Rathish Panokkil",
                "BadgeBarcodeID": "12486725",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200696313",
                "UserID": "amarshir",
                "EmployeeName": "Amarshing,Rahul",
                "BadgeBarcodeID": "13150242",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202105937",
                "UserID": "jammkish",
                "EmployeeName": "Jammula,Kishore",
                "BadgeBarcodeID": "11595618",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "109968523",
                "UserID": "mpatryso",
                "EmployeeName": "Sobczak,Patrycja",
                "BadgeBarcodeID": "15063570",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106279479",
                "UserID": "ibraimom",
                "EmployeeName": "Ibraimo,Mohamed",
                "BadgeBarcodeID": "11381502",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110713568",
                "UserID": "firlieya",
                "EmployeeName": "Firlieyanti,Antung",
                "BadgeBarcodeID": "12862037",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200571415",
                "UserID": "mzharkcr",
                "EmployeeName": "Reheman,Mzharkhan",
                "BadgeBarcodeID": "13282687",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105027982",
                "UserID": "ablanki",
                "EmployeeName": "Blankienberg,Anna",
                "BadgeBarcodeID": "11905722",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111118652",
                "UserID": "husuphap",
                "EmployeeName": "Hunt,Suphaphorn",
                "BadgeBarcodeID": "332710",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110157638",
                "UserID": "isaaadau",
                "EmployeeName": "Isaac,Adam",
                "BadgeBarcodeID": "15266047",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "108603680",
                "UserID": "nanctand",
                "EmployeeName": "Tandel,Nancy",
                "BadgeBarcodeID": "12681686",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110643257",
                "UserID": "blakbemr",
                "EmployeeName": "Bemrose,Blake",
                "BadgeBarcodeID": "11387757",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105082973",
                "UserID": "berig",
                "EmployeeName": "Mebrahtom,Biniam",
                "BadgeBarcodeID": "132747",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106254658",
                "UserID": "mchikhal",
                "EmployeeName": "Chikhalia,sahil Mohamedsalim",
                "BadgeBarcodeID": "13382314",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "202042504",
                "UserID": "acaciamt",
                "EmployeeName": "Taylor,Acacia",
                "BadgeBarcodeID": "11652598",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202440030",
                "UserID": "clintvar",
                "EmployeeName": "Varghese,Clintu",
                "BadgeBarcodeID": "12674358",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201499072",
                "UserID": "jachiran",
                "EmployeeName": "Jagdish,Chiranjan",
                "BadgeBarcodeID": "13029587",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105243070",
                "UserID": "smielai",
                "EmployeeName": "Smith,Elaine",
                "BadgeBarcodeID": "11482353",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105162493",
                "UserID": "ccopl",
                "EmployeeName": "Copeland,Chris",
                "BadgeBarcodeID": "358545",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "109618501",
                "UserID": "mitsevsk",
                "EmployeeName": "Mitsevska,Ana",
                "BadgeBarcodeID": "14684846",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "201940163",
                "UserID": "jaabhikh",
                "EmployeeName": "Bhikha,Jankil",
                "BadgeBarcodeID": "14908403",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "111639028",
                "UserID": "nagirama",
                "EmployeeName": "Nagilla,RAMA",
                "BadgeBarcodeID": "14637003",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202105976",
                "UserID": "henpawel",
                "EmployeeName": "Hensel,Pawel",
                "BadgeBarcodeID": "11186502",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "102607197",
                "UserID": "komlosyz",
                "EmployeeName": "Komlosy,Zoltan",
                "BadgeBarcodeID": "8581",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105003535",
                "UserID": "berguish",
                "EmployeeName": "Berhane,Guish",
                "BadgeBarcodeID": "11781057",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "109968535",
                "UserID": "marienu",
                "EmployeeName": "Enus,Marin",
                "BadgeBarcodeID": "15063578",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "102506360",
                "UserID": "fmmatkov",
                "EmployeeName": "Matkovics,Ferenc",
                "BadgeBarcodeID": "11948076",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110931221",
                "UserID": "bilbamag",
                "EmployeeName": "Bilba,Magda",
                "BadgeBarcodeID": "338572",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAA"
            },
            {
                "EmployeeID": "201965339",
                "UserID": "maijgohi",
                "EmployeeName": "Gohil,Maitri",
                "BadgeBarcodeID": "11788416",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104953716",
                "UserID": "tanslm",
                "EmployeeName": "Tansley,Marivic",
                "BadgeBarcodeID": "154691",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201592181",
                "UserID": "sheetins",
                "EmployeeName": "Shery,Tins",
                "BadgeBarcodeID": "12705298",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "110396159",
                "UserID": "albakari",
                "EmployeeName": "Arif,Albaksh",
                "BadgeBarcodeID": "11246072",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "106279471",
                "UserID": "seephgra",
                "EmployeeName": "Ephgrave,Sean",
                "BadgeBarcodeID": "3640",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112737051",
                "UserID": "vaishhem",
                "EmployeeName": "Hemantkumar,Vaishakhi",
                "BadgeBarcodeID": "12388513",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201838945",
                "UserID": "anjanaje",
                "EmployeeName": "Jerome,Anjana",
                "BadgeBarcodeID": "12945995",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108137739",
                "UserID": "ljowatts",
                "EmployeeName": "Watts,John",
                "BadgeBarcodeID": "13782477",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201940134",
                "UserID": "mittkosh",
                "EmployeeName": "Koshti,Mittal",
                "BadgeBarcodeID": "14233860",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "101732083",
                "UserID": "leeburge",
                "EmployeeName": "Burgess,Lee",
                "BadgeBarcodeID": "11665709",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "111187107",
                "UserID": "galambam",
                "EmployeeName": "Galamba,Francine",
                "BadgeBarcodeID": "12725802",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "201940164",
                "UserID": "premlbha",
                "EmployeeName": "Bhardwaj,Premlata",
                "BadgeBarcodeID": "15345856",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "105046738",
                "UserID": "navih",
                "EmployeeName": "Hussain,Navid",
                "BadgeBarcodeID": "11083347",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106314135",
                "UserID": "zahfelix",
                "EmployeeName": "Zaharia,Felix",
                "BadgeBarcodeID": "11112849",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "6",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106256917",
                "UserID": "bhadrec",
                "EmployeeName": "Cantilal,Bhadresh",
                "BadgeBarcodeID": "13383540",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "102810850",
                "UserID": "anadarii",
                "EmployeeName": "Darii,Ana",
                "BadgeBarcodeID": "11290399",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "5",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "103261768",
                "UserID": "fishayt",
                "EmployeeName": "Fishaye,Tekleab",
                "BadgeBarcodeID": "12256711",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT8135"
            },
            {
                "EmployeeID": "202011018",
                "UserID": "solpruth",
                "EmployeeName": "Solanki,Pruthviraj Mahendrasinh",
                "BadgeBarcodeID": "12340548",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "103684985",
                "UserID": "mjabe",
                "EmployeeName": "Jabed,Md Mahbubul",
                "BadgeBarcodeID": "11856857",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "105194023",
                "UserID": "ortonky",
                "EmployeeName": "Orton,Kye Richie",
                "BadgeBarcodeID": "11434856",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105069291",
                "UserID": "jmaddock",
                "EmployeeName": "Maddocks,James Paul",
                "BadgeBarcodeID": "225033",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE1-0800"
            },
            {
                "EmployeeID": "200677724",
                "UserID": "mavishot",
                "EmployeeName": "Ho,Mei Ling",
                "BadgeBarcodeID": "15379741",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105449554",
                "UserID": "hamlste",
                "EmployeeName": "Hamilton,Stephen",
                "BadgeBarcodeID": "12507512",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108098706",
                "UserID": "rakkjasj",
                "EmployeeName": "Rakkar,Jasjeet",
                "BadgeBarcodeID": "13741622",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "105021997",
                "UserID": "asakram",
                "EmployeeName": "Akram,Assad",
                "BadgeBarcodeID": "12185237",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108214677",
                "UserID": "seikhhus",
                "EmployeeName": "hussain,nahid",
                "BadgeBarcodeID": "13866411",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "105003439",
                "UserID": "szanas",
                "EmployeeName": "Shaikh,Anas Munaf",
                "BadgeBarcodeID": "12257804",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200666207",
                "UserID": "gebrkifl",
                "EmployeeName": "Gebregziabiher,Kifle",
                "BadgeBarcodeID": "15235586",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105844894",
                "UserID": "waqamo",
                "EmployeeName": "Mohammed,Waqar",
                "BadgeBarcodeID": "11347294",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106137480",
                "UserID": "rihardsi",
                "EmployeeName": "Ivanovs,Rihards",
                "BadgeBarcodeID": "13256109",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202106087",
                "UserID": "sankjaye",
                "EmployeeName": "Jayesh,Sanket",
                "BadgeBarcodeID": "13516561",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110472458",
                "UserID": "kamikram",
                "EmployeeName": "Ramesh,Kamika",
                "BadgeBarcodeID": "13236151",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "107863084",
                "UserID": "lewipeac",
                "EmployeeName": "Peach,Lewis",
                "BadgeBarcodeID": "13481939",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "104953682",
                "UserID": "ehearnd",
                "EmployeeName": "Radley,Robin Ophelia",
                "BadgeBarcodeID": "11493357",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "100268464",
                "UserID": "alesiuna",
                "EmployeeName": "Karaliune,Sandra",
                "BadgeBarcodeID": "239549",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "5",
                "ShiftPattern": "RT4642"
            },
            {
                "EmployeeID": "201940142",
                "UserID": "pmanthap",
                "EmployeeName": "Patel,Manthan",
                "BadgeBarcodeID": "14105771",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "111116244",
                "UserID": "nayoahme",
                "EmployeeName": "Nayef,Ahmed MOHAMMED AHMED",
                "BadgeBarcodeID": "14139186",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "PT8050"
            },
            {
                "EmployeeID": "112844570",
                "UserID": "wnirapat",
                "EmployeeName": "Patel,Nirav",
                "BadgeBarcodeID": "12633424",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "827515",
                "UserID": "mihaiist",
                "EmployeeName": "Istrate,Mihai",
                "BadgeBarcodeID": "12546569",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "105589621",
                "UserID": "anaameri",
                "EmployeeName": "Americano,Ana",
                "BadgeBarcodeID": "12661830",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "103157352",
                "UserID": "malgkwia",
                "EmployeeName": "Kwiatkowska,Malgorzata",
                "BadgeBarcodeID": "11398432",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "PT2024"
            },
            {
                "EmployeeID": "200643952",
                "UserID": "jaspasih",
                "EmployeeName": "Singh,Jaspal",
                "BadgeBarcodeID": "14445293",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "101569557",
                "UserID": "ndrwlk",
                "EmployeeName": "Walker,Andrew",
                "BadgeBarcodeID": "11491196",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107753559",
                "UserID": "varkerej",
                "EmployeeName": "Varkey,Reju",
                "BadgeBarcodeID": "13069861",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "101065482",
                "UserID": "gstoyan",
                "EmployeeName": "Georgiev,Stoyan",
                "BadgeBarcodeID": "11321132",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202501477",
                "UserID": "khatuwpr",
                "EmployeeName": "Hatuwal,Prayash",
                "BadgeBarcodeID": "14826520",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "105399428",
                "UserID": "faauzino",
                "EmployeeName": "Auzino,Francesco",
                "BadgeBarcodeID": "12448808",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "2",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112894372",
                "UserID": "wshpraka",
                "EmployeeName": "Prakash,Shivani",
                "BadgeBarcodeID": "14154240",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "110945135",
                "UserID": "foulkerh",
                "EmployeeName": "Foulkes,Rhianna",
                "BadgeBarcodeID": "11969504",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "201388760",
                "UserID": "prajdars",
                "EmployeeName": "Prajapati,Darshan",
                "BadgeBarcodeID": "13018164",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "108305351",
                "UserID": "umarcelj",
                "EmployeeName": "John,Marcelo",
                "BadgeBarcodeID": "12452687",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109618495",
                "UserID": "vsilpris",
                "EmployeeName": "Silva,Priscila",
                "BadgeBarcodeID": "14685776",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202042459",
                "UserID": "darjaa",
                "EmployeeName": "Darjaa,Naran Francis",
                "BadgeBarcodeID": "13001884",
                "ManagerName": "Thomas,Ashley",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201499073",
                "UserID": "modhnath",
                "EmployeeName": "MODHWADIYA,Natha B",
                "BadgeBarcodeID": "12123318",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "202463687",
                "UserID": "suremvis",
                "EmployeeName": "Suresh,Visal",
                "BadgeBarcodeID": "13529956",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110292531",
                "UserID": "paogugli",
                "EmployeeName": "Guglielmi,Paolo",
                "BadgeBarcodeID": "12316923",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "107855978",
                "UserID": "csikklau",
                "EmployeeName": "Csik,Klaudia",
                "BadgeBarcodeID": "13480453",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109380082",
                "UserID": "zorancni",
                "EmployeeName": "Nistor,Zoran-Catalin",
                "BadgeBarcodeID": "14425331",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "107833792",
                "UserID": "plfranci",
                "EmployeeName": "Lee,Francis",
                "BadgeBarcodeID": "13455605",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "102756840",
                "UserID": "milanmir",
                "EmployeeName": "Milanovic,Miroslav",
                "BadgeBarcodeID": "11925738",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "111427567",
                "UserID": "amanfkau",
                "EmployeeName": "kaur,Amanpreet",
                "BadgeBarcodeID": "14296195",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "201552372",
                "UserID": "arukuc",
                "EmployeeName": "Kumar,Arun",
                "BadgeBarcodeID": "71920",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202180899",
                "UserID": "himsreeq",
                "EmployeeName": "Sreeja,Hima",
                "BadgeBarcodeID": "13350244",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110002716",
                "UserID": "woarebec",
                "EmployeeName": "Wood,Rebecca",
                "BadgeBarcodeID": "15101339",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "104909135",
                "UserID": "nhardic",
                "EmployeeName": "Narendralal,Hardic",
                "BadgeBarcodeID": "214728",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "201940182",
                "UserID": "yrohaash",
                "EmployeeName": "Ashok,Rohan",
                "BadgeBarcodeID": "12660236",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "107863278",
                "UserID": "avolioma",
                "EmployeeName": "Avolio,max",
                "BadgeBarcodeID": "13489088",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "5",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200643950",
                "UserID": "srgsande",
                "EmployeeName": "Sreekumaran,Sandeep",
                "BadgeBarcodeID": "11655009",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "108316364",
                "UserID": "brdomink",
                "EmployeeName": "Brcina,Dominko",
                "BadgeBarcodeID": "13166549",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106561141",
                "UserID": "zarifsk",
                "EmployeeName": "Khurshid,Zari",
                "BadgeBarcodeID": "11390865",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106235007",
                "UserID": "shamull",
                "EmployeeName": "Mulla,Shahidkhan Yusuf",
                "BadgeBarcodeID": "13360132",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110157589",
                "UserID": "cibrchem",
                "EmployeeName": "CHEMLAL,IBRAHIM",
                "BadgeBarcodeID": "15267602",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107083402",
                "UserID": "idrez",
                "EmployeeName": "Zaman,Idrees",
                "BadgeBarcodeID": "11807702",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "108603682",
                "UserID": "ivanoivq",
                "EmployeeName": "Ivanov,Ivo Nikolov",
                "BadgeBarcodeID": "11726335",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "103274067",
                "UserID": "dquessou",
                "EmployeeName": "Quessou,Diviya",
                "BadgeBarcodeID": "12303061",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "107936328",
                "UserID": "qparmavi",
                "EmployeeName": "Parmar,Vishal",
                "BadgeBarcodeID": "13566700",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "101978862",
                "UserID": "corinpop",
                "EmployeeName": "Popescu,Corina",
                "BadgeBarcodeID": "11930449",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "100311631",
                "UserID": "tatijano",
                "EmployeeName": "Onoprijenko,Tatjana",
                "BadgeBarcodeID": "256716",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104901320",
                "UserID": "hyemt",
                "EmployeeName": "Hayes,Matt",
                "BadgeBarcodeID": "12385390",
                "ManagerName": "Burton,Jake",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "103217926",
                "UserID": "dvvssn",
                "EmployeeName": "Vassant,Darpan",
                "BadgeBarcodeID": "13160367",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "111500364",
                "UserID": "honepanb",
                "EmployeeName": "Pandya,Honey",
                "BadgeBarcodeID": "32810",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200666194",
                "UserID": "mokrunal",
                "EmployeeName": "Mohan,Krunal",
                "BadgeBarcodeID": "14573207",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105471394",
                "UserID": "sazza",
                "EmployeeName": "Choudhury,Saj Ahmed",
                "BadgeBarcodeID": "12530260",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200478965",
                "UserID": "vsiddeeq",
                "EmployeeName": "Verampilakkil,Aboobacker siddeeque",
                "BadgeBarcodeID": "14347535",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105365201",
                "UserID": "semikole",
                "EmployeeName": "Semikolenov,Vadim",
                "BadgeBarcodeID": "12412615",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "111244500",
                "UserID": "mohihosm",
                "EmployeeName": "Osmangani,Mohin",
                "BadgeBarcodeID": "13996660",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105162486",
                "UserID": "paucudwo",
                "EmployeeName": "Cudworth,Paul Matthew",
                "BadgeBarcodeID": "138059",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110911229",
                "UserID": "mjosebin",
                "EmployeeName": "Jose,Ebin",
                "BadgeBarcodeID": "12355802",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "101731342",
                "UserID": "gandrada",
                "EmployeeName": "Gavrila,Andrada",
                "BadgeBarcodeID": "11665052",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "5",
                "ShiftPattern": "PT6042"
            },
            {
                "EmployeeID": "202170252",
                "UserID": "csandsa",
                "EmployeeName": "SANDEEP,sandeep",
                "BadgeBarcodeID": "218607",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "109619156",
                "UserID": "nreencha",
                "EmployeeName": "Chavan,Reena",
                "BadgeBarcodeID": "12878265",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT8356"
            },
            {
                "EmployeeID": "108066796",
                "UserID": "wilsokan",
                "EmployeeName": "Wilson,Kane Edward",
                "BadgeBarcodeID": "13707288",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "105126095",
                "UserID": "naraanis",
                "EmployeeName": "Kutty Narayanan,Anish",
                "BadgeBarcodeID": "58364",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110496329",
                "UserID": "mardmana",
                "EmployeeName": "Marde,Manan",
                "BadgeBarcodeID": "13432433",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "108304766",
                "UserID": "shahkabi",
                "EmployeeName": "shah,kabir",
                "BadgeBarcodeID": "13122252",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105158867",
                "UserID": "andrastb",
                "EmployeeName": "Badea,Andra",
                "BadgeBarcodeID": "12257715",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "RT5418"
            },
            {
                "EmployeeID": "105000888",
                "UserID": "fmmaddoc",
                "EmployeeName": "Maddocks,Felix Charles",
                "BadgeBarcodeID": "126140",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201940165",
                "UserID": "sajidpau",
                "EmployeeName": "Patel,Sajid",
                "BadgeBarcodeID": "14984273",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "104706360",
                "UserID": "rakshaik",
                "EmployeeName": "Shaikh,Rakeeb",
                "BadgeBarcodeID": "12092370",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "112982601",
                "UserID": "kanervas",
                "EmployeeName": "Kanerawala,Vasim Nazir",
                "BadgeBarcodeID": "14488782",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "103262009",
                "UserID": "bhagess",
                "EmployeeName": "Bhagesh,Sangita",
                "BadgeBarcodeID": "12340974",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAA"
            },
            {
                "EmployeeID": "106615073",
                "UserID": "adbashar",
                "EmployeeName": "basharat,Adnan",
                "BadgeBarcodeID": "12613759",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "112983435",
                "UserID": "uulhabib",
                "EmployeeName": "Ullah,Habib",
                "BadgeBarcodeID": "14909933",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106663197",
                "UserID": "hamzashe",
                "EmployeeName": "Sheikh,Hamza Munir",
                "BadgeBarcodeID": "12389271",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "113108968",
                "UserID": "ndesanta",
                "EmployeeName": "De Santana,Andressa Drielly",
                "BadgeBarcodeID": "14662278",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201585410",
                "UserID": "vihemali",
                "EmployeeName": "Vinu,Hemali",
                "BadgeBarcodeID": "11426922",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "112621650",
                "UserID": "georgyjo",
                "EmployeeName": "John,Georgy",
                "BadgeBarcodeID": "11164452",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT4226"
            },
            {
                "EmployeeID": "112982988",
                "UserID": "bhaskabi",
                "EmployeeName": "Bhaskar,Abin",
                "BadgeBarcodeID": "11552219",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "104909077",
                "UserID": "marmatea",
                "EmployeeName": "Matea,Maria Alexandra",
                "BadgeBarcodeID": "11913101",
                "ManagerName": "Wheat,Sarah",
                "ManagementAreaID": "33",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112632443",
                "UserID": "tsdaljee",
                "EmployeeName": "SINGH,DALJEET",
                "BadgeBarcodeID": "12821831",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110514933",
                "UserID": "santakud",
                "EmployeeName": "Kudrenicka,Santa",
                "BadgeBarcodeID": "11580769",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "201466812",
                "UserID": "nenayant",
                "EmployeeName": "Nema,Nayan",
                "BadgeBarcodeID": "11485724",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "111245013",
                "UserID": "sanamsih",
                "EmployeeName": "Singh,Sanamdeep",
                "BadgeBarcodeID": "13581693",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "109942196",
                "UserID": "manosumi",
                "EmployeeName": "Manoj,Sumit",
                "BadgeBarcodeID": "14805096",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "105454506",
                "UserID": "pogag",
                "EmployeeName": "Pogan,Gabriel",
                "BadgeBarcodeID": "12512976",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "109398630",
                "UserID": "bhagarvi",
                "EmployeeName": "Arvind,Bhagyashree",
                "BadgeBarcodeID": "14445346",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "112732073",
                "UserID": "ramekera",
                "EmployeeName": "Ramesh,Keral",
                "BadgeBarcodeID": "13832852",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106358716",
                "UserID": "vansaj",
                "EmployeeName": "Vansan,Jessica Patricia Soares",
                "BadgeBarcodeID": "229295",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "103374935",
                "UserID": "tacot",
                "EmployeeName": "Tacor,Tanvi",
                "BadgeBarcodeID": "12375918",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "202018677",
                "UserID": "sardsufy",
                "EmployeeName": "Sufyan,Sardar",
                "BadgeBarcodeID": "13565678",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "202464904",
                "UserID": "shaarjuz",
                "EmployeeName": "Shaji,Arjun",
                "BadgeBarcodeID": "52288",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "108589428",
                "UserID": "smiricho",
                "EmployeeName": "Smith,Richard",
                "BadgeBarcodeID": "12988840",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108066811",
                "UserID": "katemcal",
                "EmployeeName": "McAlpine,Kate",
                "BadgeBarcodeID": "13707302",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105003474",
                "UserID": "iinnocen",
                "EmployeeName": "Esemre Ikoyo,Innocent Emokinovo",
                "BadgeBarcodeID": "12047884",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "105767574",
                "UserID": "jevikm",
                "EmployeeName": "Mahesh,Jevik",
                "BadgeBarcodeID": "12857760",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202179716",
                "UserID": "ettighar",
                "EmployeeName": "Ettigadda,Harish",
                "BadgeBarcodeID": "14372147",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "112604993",
                "UserID": "quickewi",
                "EmployeeName": "Quickenden,Will John",
                "BadgeBarcodeID": "12822551",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104909081",
                "UserID": "cochange",
                "EmployeeName": "Bailey,Ang Jean",
                "BadgeBarcodeID": "11913558",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "6",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "202073447",
                "UserID": "sivannva",
                "EmployeeName": "Sivannarayana,Vaka",
                "BadgeBarcodeID": "13080203",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "111015164",
                "UserID": "kamlpalg",
                "EmployeeName": "Kamli,Pallavi Suresh",
                "BadgeBarcodeID": "13918288",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "103311978",
                "UserID": "byyeman",
                "EmployeeName": "Yemane,Berhane",
                "BadgeBarcodeID": "12331128",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "107893750",
                "UserID": "ashmisom",
                "EmployeeName": "Somnat,Ashmita",
                "BadgeBarcodeID": "13396427",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "106454502",
                "UserID": "taivaras",
                "EmployeeName": "Tenzagolskis,Aivaras",
                "BadgeBarcodeID": "11716131",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110343240",
                "UserID": "tejalmad",
                "EmployeeName": "Dhonde,Tejal",
                "BadgeBarcodeID": "14728939",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107198057",
                "UserID": "warsopaw",
                "EmployeeName": "Warsop,Andrew",
                "BadgeBarcodeID": "12499773",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "PT345"
            },
            {
                "EmployeeID": "201592172",
                "UserID": "adicahir",
                "EmployeeName": "Ahir,Aditya",
                "BadgeBarcodeID": "12251869",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201498896",
                "UserID": "dimallik",
                "EmployeeName": "Dinesh,Mallika",
                "BadgeBarcodeID": "11864389",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "106127952",
                "UserID": "santsat",
                "EmployeeName": "Santos,Sofia Sofia",
                "BadgeBarcodeID": "13245955",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "S-B7L07G"
            },
            {
                "EmployeeID": "104909219",
                "UserID": "sverinde",
                "EmployeeName": "Sund,Vincent Kumar",
                "BadgeBarcodeID": "322307",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201552398",
                "UserID": "dhanvira",
                "EmployeeName": "Raju,Dhanvi",
                "BadgeBarcodeID": "14426648",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "108214687",
                "UserID": "jackkyle",
                "EmployeeName": "Jackson,Kyle",
                "BadgeBarcodeID": "13857941",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105728960",
                "UserID": "diemtra",
                "EmployeeName": "Tran,Hang",
                "BadgeBarcodeID": "12815904",
                "ManagerName": "Martin,Emily",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "112994497",
                "UserID": "eoingilb",
                "EmployeeName": "Gilbert,Eoin Jack",
                "BadgeBarcodeID": "14652022",
                "ManagerName": "Thomas,Ashley",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202073408",
                "UserID": "nevpates",
                "EmployeeName": "Patel,Nevil",
                "BadgeBarcodeID": "140780",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "106528335",
                "UserID": "rccotas",
                "EmployeeName": "Cotas,Ronnie",
                "BadgeBarcodeID": "12541269",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "201466806",
                "UserID": "krumalba",
                "EmployeeName": "Malbari,Krutika Ishverbhai",
                "BadgeBarcodeID": "11165703",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105110391",
                "UserID": "mcivort",
                "EmployeeName": "McIvor,Tom Anthony",
                "BadgeBarcodeID": "11657706",
                "ManagerName": "Elias,Melissa Rony",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106442576",
                "UserID": "tabacf",
                "EmployeeName": "Tabachuk,Fabricio Alexandre",
                "BadgeBarcodeID": "12215947",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110263708",
                "UserID": "donaobri",
                "EmployeeName": "O'Brien,Donald",
                "BadgeBarcodeID": "15382138",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104048174",
                "UserID": "llixandr",
                "EmployeeName": "Lixandru,Laura Mihaela",
                "BadgeBarcodeID": "15051405",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "104998022",
                "UserID": "donnbur",
                "EmployeeName": "Burton,Donna",
                "BadgeBarcodeID": "11785009",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "102035350",
                "UserID": "lacmanes",
                "EmployeeName": "Lacmane,Sandip",
                "BadgeBarcodeID": "12583625",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "104956530",
                "UserID": "meetasho",
                "EmployeeName": "Ashok,Meet",
                "BadgeBarcodeID": "13126156",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105141195",
                "UserID": "nwwhelb",
                "EmployeeName": "WHELBAND,NEIL",
                "BadgeBarcodeID": "11659507",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "200666162",
                "UserID": "prtulshi",
                "EmployeeName": "Tulshidas,Pratik",
                "BadgeBarcodeID": "14415075",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "111204869",
                "UserID": "siakaran",
                "EmployeeName": "Singh,Karanjeet",
                "BadgeBarcodeID": "14212594",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201627261",
                "UserID": "shresamf",
                "EmployeeName": "Shrestha,Samir",
                "BadgeBarcodeID": "13585500",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "104039655",
                "UserID": "hfatema",
                "EmployeeName": "Hossain,Fatema",
                "BadgeBarcodeID": "290944",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "101812184",
                "UserID": "dhirajlj",
                "EmployeeName": "Jadeja,Dhirajlal",
                "BadgeBarcodeID": "11606836",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200833830",
                "UserID": "jeelcpat",
                "EmployeeName": "Patel,Jeel",
                "BadgeBarcodeID": "13075429",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "202096969",
                "UserID": "zephywo",
                "EmployeeName": "Wong,Zephyr",
                "BadgeBarcodeID": "12760636",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "109336743",
                "UserID": "rmohiudd",
                "EmployeeName": "Mohi Uddin,Mohammed",
                "BadgeBarcodeID": "14378184",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT104"
            },
            {
                "EmployeeID": "105170238",
                "UserID": "devshik",
                "EmployeeName": "Kana,Dev",
                "BadgeBarcodeID": "12027111",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "107651805",
                "UserID": "lociobot",
                "EmployeeName": "Ciobotaru,Lorena",
                "BadgeBarcodeID": "11898324",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "105168114",
                "UserID": "raljoita",
                "EmployeeName": "Joita,Raluca Gabriela",
                "BadgeBarcodeID": "11611093",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "DB1-0500"
            },
            {
                "EmployeeID": "105157365",
                "UserID": "pciochin",
                "EmployeeName": "Ciochina,Petrut",
                "BadgeBarcodeID": "11957307",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105236495",
                "UserID": "rimjonat",
                "EmployeeName": "Richards,Jonathan F",
                "BadgeBarcodeID": "11427224",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202181074",
                "UserID": "bhiralpa",
                "EmployeeName": "PATEL,Hiral Vinod bhai",
                "BadgeBarcodeID": "14647751",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "200772169",
                "UserID": "dgisella",
                "EmployeeName": "Ferreira,Gisella Ferreira",
                "BadgeBarcodeID": "12635994",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105335398",
                "UserID": "mahaywoo",
                "EmployeeName": "Haywood,Marilyn",
                "BadgeBarcodeID": "12288664",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "200455422",
                "UserID": "jalxdave",
                "EmployeeName": "Dave,Jalpa",
                "BadgeBarcodeID": "14574449",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DQ1-0730"
            },
            {
                "EmployeeID": "200403497",
                "UserID": "aluvenka",
                "EmployeeName": "Alugubelli,Venkat Reddy",
                "BadgeBarcodeID": "14867714",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "106528325",
                "UserID": "purnimb",
                "EmployeeName": "Bhagesh,Purnima",
                "BadgeBarcodeID": "12556178",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "105109485",
                "UserID": "gffaulco",
                "EmployeeName": "Faulconbridge,Glen",
                "BadgeBarcodeID": "11838295",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "104998258",
                "UserID": "crdomr",
                "EmployeeName": "Cardoso,Marcos",
                "BadgeBarcodeID": "11226836",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106279447",
                "UserID": "tariabba",
                "EmployeeName": "Abbas,Tariq",
                "BadgeBarcodeID": "11481842",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106176242",
                "UserID": "belkhim",
                "EmployeeName": "Belkhir,Momo",
                "BadgeBarcodeID": "13296987",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "105100557",
                "UserID": "dmukooza",
                "EmployeeName": "Mukooza,David",
                "BadgeBarcodeID": "12349896",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105084132",
                "UserID": "mhrett",
                "EmployeeName": "Tesfaldet,Mhreteab",
                "BadgeBarcodeID": "12197928",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201466807",
                "UserID": "bapodras",
                "EmployeeName": "Bapodra,Satish",
                "BadgeBarcodeID": "11720758",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "202440327",
                "UserID": "marixrid",
                "EmployeeName": "Rida,Maria",
                "BadgeBarcodeID": "13402491",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201806011",
                "UserID": "jalokuma",
                "EmployeeName": "Kumar,Alok",
                "BadgeBarcodeID": "149229",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201664240",
                "UserID": "abduayjw",
                "EmployeeName": "Abdualah,Jwan",
                "BadgeBarcodeID": "14391871",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201893967",
                "UserID": "falgutan",
                "EmployeeName": "Tandel,Falguni Haresh",
                "BadgeBarcodeID": "11333715",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "200477586",
                "UserID": "jatwpate",
                "EmployeeName": "Patel,Jatin",
                "BadgeBarcodeID": "14471702",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "101406799",
                "UserID": "burliviu",
                "EmployeeName": "Buric,Liviu",
                "BadgeBarcodeID": "11053903",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105344323",
                "UserID": "shumansv",
                "EmployeeName": "Shumanski,Vladimir",
                "BadgeBarcodeID": "12247774",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108968113",
                "UserID": "gvidhara",
                "EmployeeName": "Dharam,Vikash",
                "BadgeBarcodeID": "15371367",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "105671495",
                "UserID": "churcste",
                "EmployeeName": "Church,Stephen",
                "BadgeBarcodeID": "12752173",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "106193111",
                "UserID": "conskati",
                "EmployeeName": "Constance,Katia",
                "BadgeBarcodeID": "13315244",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106179386",
                "UserID": "akhimd",
                "EmployeeName": "Akhimien,Desmond",
                "BadgeBarcodeID": "13300584",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "D52-0730"
            },
            {
                "EmployeeID": "109907540",
                "UserID": "matthefg",
                "EmployeeName": "Groves,Matthew",
                "BadgeBarcodeID": "14996196",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109859198",
                "UserID": "nmshoote",
                "EmployeeName": "Shooter,Nigel",
                "BadgeBarcodeID": "14943499",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "109156103",
                "UserID": "anthrp",
                "EmployeeName": "Thorpe,Andrew",
                "BadgeBarcodeID": "14179309",
                "ManagerName": "McFarlane,Adam",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE0-0700"
            },
            {
                "EmployeeID": "108214684",
                "UserID": "elishalo",
                "EmployeeName": "Loverock Sund,Elisha",
                "BadgeBarcodeID": "13866417",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "PT9974"
            },
            {
                "EmployeeID": "105038649",
                "UserID": "cobdenlc",
                "EmployeeName": "Cobden,Lorraine",
                "BadgeBarcodeID": "11078888",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105461750",
                "UserID": "iljinsvi",
                "EmployeeName": "Iljins,Vadims",
                "BadgeBarcodeID": "12520085",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110357282",
                "UserID": "chadvire",
                "EmployeeName": "Chandracant,Viren",
                "BadgeBarcodeID": "12623025",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "112719356",
                "UserID": "mahjenis",
                "EmployeeName": "Mahes,Jenish",
                "BadgeBarcodeID": "12247",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202010981",
                "UserID": "qaraiahr",
                "EmployeeName": "Araia haile,Rodas",
                "BadgeBarcodeID": "14553598",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "110107872",
                "UserID": "soaebmom",
                "EmployeeName": "Momin,Soaebmohammad Asikhusen",
                "BadgeBarcodeID": "15215719",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104953698",
                "UserID": "talwarh",
                "EmployeeName": "Talwar,Harbhajan Singh",
                "BadgeBarcodeID": "11158137",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "102669794",
                "UserID": "anacioa",
                "EmployeeName": "Cioata,Ana",
                "BadgeBarcodeID": "309450",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "107007278",
                "UserID": "jayarupa",
                "EmployeeName": "Jayantilal,Rupali",
                "BadgeBarcodeID": "14727594",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT527"
            },
            {
                "EmployeeID": "110796792",
                "UserID": "mumtaaam",
                "EmployeeName": "Mumtaz,Aamir",
                "BadgeBarcodeID": "13710933",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "2",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "200644113",
                "UserID": "marbotey",
                "EmployeeName": "BOTEJA,MARK CARLO",
                "BadgeBarcodeID": "13331827",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "105738741",
                "UserID": "maherhar",
                "EmployeeName": "Maher,Harsh",
                "BadgeBarcodeID": "12038624",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201510164",
                "UserID": "aftaboan",
                "EmployeeName": "Ansari,Aftab",
                "BadgeBarcodeID": "150974",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "744409",
                "UserID": "fidrychk",
                "EmployeeName": "Grzech,Karolina",
                "BadgeBarcodeID": "80017",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106308269",
                "UserID": "seskebba",
                "EmployeeName": "Sesawo,Kebba",
                "BadgeBarcodeID": "12092455",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "108566766",
                "UserID": "divyesge",
                "EmployeeName": "Geram,Divyesh",
                "BadgeBarcodeID": "11273526",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "109658650",
                "UserID": "jamimwal",
                "EmployeeName": "Walker,Jamie Lee",
                "BadgeBarcodeID": "14727828",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "112621627",
                "UserID": "sulemasu",
                "EmployeeName": "suleman,suleman   jabr",
                "BadgeBarcodeID": "12369079",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106410716",
                "UserID": "zuberah",
                "EmployeeName": "Khalifa,Zuberahmed",
                "BadgeBarcodeID": "278837",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "111566709",
                "UserID": "kaliszgs",
                "EmployeeName": "Kalisz,Grazyna",
                "BadgeBarcodeID": "11317519",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "106523262",
                "UserID": "ocgareth",
                "EmployeeName": "O'Connor,Gareth Michael",
                "BadgeBarcodeID": "12239192",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "104772131",
                "UserID": "dsstrode",
                "EmployeeName": "Strode,Donna",
                "BadgeBarcodeID": "11744049",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "19",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202096972",
                "UserID": "yarezzi",
                "EmployeeName": "Ezzi,Yara",
                "BadgeBarcodeID": "12757451",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "101791323",
                "UserID": "jayendpr",
                "EmployeeName": "jay,jayendrakumar",
                "BadgeBarcodeID": "11173515",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "105318850",
                "UserID": "amansei",
                "EmployeeName": "Aman,Seid",
                "BadgeBarcodeID": "12244424",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "105344174",
                "UserID": "rnader",
                "EmployeeName": "Rahimzada,Nader",
                "BadgeBarcodeID": "300704",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "102139616",
                "UserID": "devjiv",
                "EmployeeName": "Devji,Vivek",
                "BadgeBarcodeID": "12337714",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105018652",
                "UserID": "pujatand",
                "EmployeeName": "Tandel,Puja Devchand",
                "BadgeBarcodeID": "100907",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "200696291",
                "UserID": "framanoj",
                "EmployeeName": "RAMGI,MANOJ",
                "BadgeBarcodeID": "12517008",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "202018675",
                "UserID": "berhasar",
                "EmployeeName": "Berhane,Saron",
                "BadgeBarcodeID": "15383323",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "101277592",
                "UserID": "claypa",
                "EmployeeName": "Claypole,Andy David",
                "BadgeBarcodeID": "82134",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE1-0600"
            },
            {
                "EmployeeID": "106137505",
                "UserID": "semovars",
                "EmployeeName": "Semova,Radoslava",
                "BadgeBarcodeID": "13255888",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "108805274",
                "UserID": "chrgarnh",
                "EmployeeName": "Garnham,Chris",
                "BadgeBarcodeID": "12785250",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "107651783",
                "UserID": "mszczygl",
                "EmployeeName": "Szczyglowska,Magdalena",
                "BadgeBarcodeID": "11458916",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "201705642",
                "UserID": "opatelan",
                "EmployeeName": "Patel,Ankita",
                "BadgeBarcodeID": "11130880",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110579533",
                "UserID": "joyinlij",
                "EmployeeName": "Li,Joyin",
                "BadgeBarcodeID": "11541141",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "112894297",
                "UserID": "damianmz",
                "EmployeeName": "Damian,Maiara",
                "BadgeBarcodeID": "14040148",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "104624495",
                "UserID": "canjnika",
                "EmployeeName": "Chandrakant,Anjnikant",
                "BadgeBarcodeID": "12243772",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "112691795",
                "UserID": "motbfaiz",
                "EmployeeName": "Mota,Faizal",
                "BadgeBarcodeID": "12009952",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110955214",
                "UserID": "leegmark",
                "EmployeeName": "Leek,Mark",
                "BadgeBarcodeID": "62306",
                "ManagerName": "Smith,Georgina",
                "ManagementAreaID": "26",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105110571",
                "UserID": "whithoa",
                "EmployeeName": "Whitehouse,Ashley Charles",
                "BadgeBarcodeID": "11593696",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "202073399",
                "UserID": "happybha",
                "EmployeeName": "Patel,Happy bhaumik",
                "BadgeBarcodeID": "11403403",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "111566711",
                "UserID": "remigika",
                "EmployeeName": "Kalisz,Remigiusz",
                "BadgeBarcodeID": "14077201",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "109416783",
                "UserID": "azharmay",
                "EmployeeName": "Mahmood,Azhar",
                "BadgeBarcodeID": "14465088",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "200633506",
                "UserID": "hitesshl",
                "EmployeeName": "Shantilal,Hitesh",
                "BadgeBarcodeID": "14947988",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200666202",
                "UserID": "birkettj",
                "EmployeeName": "Birkett,Jonathan",
                "BadgeBarcodeID": "14448004",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201475835",
                "UserID": "snavanar",
                "EmployeeName": "Navas,Narshan",
                "BadgeBarcodeID": "13704716",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "102009537",
                "UserID": "cazacurc",
                "EmployeeName": "Cazacu,Robert",
                "BadgeBarcodeID": "11961533",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "102687435",
                "UserID": "clauuzea",
                "EmployeeName": "Uzea,Claudiu",
                "BadgeBarcodeID": "11132454",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202096930",
                "UserID": "imrarafk",
                "EmployeeName": "Rafik,Imran",
                "BadgeBarcodeID": "12402246",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "202179750",
                "UserID": "kaushmuj",
                "EmployeeName": "Mujat,Kaushik",
                "BadgeBarcodeID": "11384753",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "201516049",
                "UserID": "fmanoran",
                "EmployeeName": "Ranshing,Manoj",
                "BadgeBarcodeID": "13482871",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202018704",
                "UserID": "vpatmaha",
                "EmployeeName": "PATEL,MAHAMADANIS YUSUFBHAI",
                "BadgeBarcodeID": "14819892",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "111183401",
                "UserID": "degreesh",
                "EmployeeName": "Devarapalli,Greeshma",
                "BadgeBarcodeID": "12065973",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "105126065",
                "UserID": "grubick",
                "EmployeeName": "Grubick,Zoltanne",
                "BadgeBarcodeID": "12218401",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "202018695",
                "UserID": "jososara",
                "EmployeeName": "Joshi,Sarang PRAMESHKUMAR",
                "BadgeBarcodeID": "14417721",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "104953710",
                "UserID": "admures",
                "EmployeeName": "Muresan,Adriana",
                "BadgeBarcodeID": "11499803",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "201978159",
                "UserID": "bnmukesh",
                "EmployeeName": "Nangi,Mukesh",
                "BadgeBarcodeID": "13716767",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "108534685",
                "UserID": "jtayloni",
                "EmployeeName": "Taylor,Nigel David",
                "BadgeBarcodeID": "11804381",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "20",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "107631462",
                "UserID": "gmoletta",
                "EmployeeName": "MAZZARDO,GABRIEL",
                "BadgeBarcodeID": "11468947",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "111034519",
                "UserID": "mscotkiy",
                "EmployeeName": "Scott,Kiya",
                "BadgeBarcodeID": "12798767",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201516052",
                "UserID": "umanumes",
                "EmployeeName": "Umesh,Umang",
                "BadgeBarcodeID": "10804311",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "201599104",
                "UserID": "khushpks",
                "EmployeeName": "Kour,Khushpreet",
                "BadgeBarcodeID": "94801",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106279463",
                "UserID": "dttrosce",
                "EmployeeName": "Troscenko,Dace",
                "BadgeBarcodeID": "11446672",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "109954743",
                "UserID": "amandysi",
                "EmployeeName": "Singh,Amandeep",
                "BadgeBarcodeID": "15048170",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "105507969",
                "UserID": "ameemaji",
                "EmployeeName": "MAJID,A",
                "BadgeBarcodeID": "12570583",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110676381",
                "UserID": "donajohe",
                "EmployeeName": "Donaldson,John",
                "BadgeBarcodeID": "12935336",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "108148690",
                "UserID": "tarichak",
                "EmployeeName": "Chakour,Tarik",
                "BadgeBarcodeID": "13790337",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "111135623",
                "UserID": "sararqui",
                "EmployeeName": "Quinn,Sara",
                "BadgeBarcodeID": "12945246",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104380287",
                "UserID": "natandel",
                "EmployeeName": "Tandel,Nandini",
                "BadgeBarcodeID": "11657543",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "102250533",
                "UserID": "ghoalx",
                "EmployeeName": "Gheorghe,Alexandru-Ionut",
                "BadgeBarcodeID": "12209287",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DR7-0730"
            },
            {
                "EmployeeID": "201940138",
                "UserID": "isuregud",
                "EmployeeName": "Gude,Suresh",
                "BadgeBarcodeID": "11191925",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106210301",
                "UserID": "pmmortim",
                "EmployeeName": "Mortimer,Peter John",
                "BadgeBarcodeID": "13333341",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201510163",
                "UserID": "shantjal",
                "EmployeeName": "Shantilal,Jalpa",
                "BadgeBarcodeID": "13488930",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "103336215",
                "UserID": "tgerzghi",
                "EmployeeName": "Gerzghiar,Tsegay",
                "BadgeBarcodeID": "11808828",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT8356"
            },
            {
                "EmployeeID": "110799667",
                "UserID": "damdebor",
                "EmployeeName": "Damian,Debora",
                "BadgeBarcodeID": "11548784",
                "ManagerName": "Wheat,Sarah",
                "ManagementAreaID": "33",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "111363758",
                "UserID": "marjankz",
                "EmployeeName": "Zirak,Marjan",
                "BadgeBarcodeID": "228597",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106130097",
                "UserID": "melwin",
                "EmployeeName": "Christian,Melwin Madhubhai",
                "BadgeBarcodeID": "13248364",
                "ManagerName": "Musson,Connor",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "108925187",
                "UserID": "anjachin",
                "EmployeeName": "China,Anjali",
                "BadgeBarcodeID": "12795309",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "103388747",
                "UserID": "goandeep",
                "EmployeeName": "Goan,Deepali",
                "BadgeBarcodeID": "322360",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DY5-0800"
            },
            {
                "EmployeeID": "201516048",
                "UserID": "ahmanwaa",
                "EmployeeName": "Ahmed,Anwaar",
                "BadgeBarcodeID": "15286418",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "105245789",
                "UserID": "mubmha",
                "EmployeeName": "Mohammed-Taha,Mubarak Mohammed Zain",
                "BadgeBarcodeID": "12042067",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "111300733",
                "UserID": "wacmayib",
                "EmployeeName": "Wayal,Mayib Wayal",
                "BadgeBarcodeID": "268469",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "106137494",
                "UserID": "nuhag",
                "EmployeeName": "Gulammamodo,Nuha",
                "BadgeBarcodeID": "13255878",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "201965289",
                "UserID": "hemutjah",
                "EmployeeName": "Hemutkumar,Jay",
                "BadgeBarcodeID": "11172233",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "105195221",
                "UserID": "valanp",
                "EmployeeName": "Valand,Pratikshaben",
                "BadgeBarcodeID": "11392876",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "202501448",
                "UserID": "gandhadh",
                "EmployeeName": "GANDHI,DHVANI",
                "BadgeBarcodeID": "15288593",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "105558217",
                "UserID": "fmmangal",
                "EmployeeName": "Mangaliya,Faizan",
                "BadgeBarcodeID": "11823189",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "112894294",
                "UserID": "skmanojk",
                "EmployeeName": "Manojkumar,Kanchanben",
                "BadgeBarcodeID": "13950299",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "24",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "105577633",
                "UserID": "smithuck",
                "EmployeeName": "Smith,Amanda Jayne",
                "BadgeBarcodeID": "12648081",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "202179549",
                "UserID": "arsomaiu",
                "EmployeeName": "Somai Magar,Arjun",
                "BadgeBarcodeID": "14431966",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "PT120"
            },
            {
                "EmployeeID": "202073410",
                "UserID": "varshagi",
                "EmployeeName": "Giva,Varsha",
                "BadgeBarcodeID": "13181420",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "106130108",
                "UserID": "poysed",
                "EmployeeName": "Poyser,Dean",
                "BadgeBarcodeID": "12533065",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200461495",
                "UserID": "vasunago",
                "EmployeeName": "Vasudevula,Nagi",
                "BadgeBarcodeID": "11762686",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "102420118",
                "UserID": "nancyjor",
                "EmployeeName": "Woods,Nancy",
                "BadgeBarcodeID": "12382129",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "104909128",
                "UserID": "simukv",
                "EmployeeName": "Simukonis,Valentina",
                "BadgeBarcodeID": "11114488",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "106130082",
                "UserID": "lupudumi",
                "EmployeeName": "Lupu,Ionut",
                "BadgeBarcodeID": "13248001",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108316367",
                "UserID": "bhandalb",
                "EmployeeName": "Bhandal,Bhupinder",
                "BadgeBarcodeID": "13166553",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "200718869",
                "UserID": "bolcoli",
                "EmployeeName": "Bolt,Colin",
                "BadgeBarcodeID": "14391633",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "105243311",
                "UserID": "sastan",
                "EmployeeName": "Hayward,Sarah Jane",
                "BadgeBarcodeID": "12087843",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "111514874",
                "UserID": "kwoleund",
                "EmployeeName": "Leung,Kwok leung",
                "BadgeBarcodeID": "12613900",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106210406",
                "UserID": "khwislam",
                "EmployeeName": "Islam,Khwaja Afshin",
                "BadgeBarcodeID": "13334052",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "110002713",
                "UserID": "alcrisma",
                "EmployeeName": "Crismariu,Alexandru Daniel",
                "BadgeBarcodeID": "15104065",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106826940",
                "UserID": "mantaym",
                "EmployeeName": "Mantay,Medhanie",
                "BadgeBarcodeID": "11235943",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111383301",
                "UserID": "wateknat",
                "EmployeeName": "Wateridge,Nathan Ernest",
                "BadgeBarcodeID": "14390845",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106130091",
                "UserID": "michaowc",
                "EmployeeName": "Owczarek,Michal",
                "BadgeBarcodeID": "13248005",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "104901286",
                "UserID": "mrhammo",
                "EmployeeName": "Hammond,Mark Thomas",
                "BadgeBarcodeID": "11717827",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "202105911",
                "UserID": "suthaabd",
                "EmployeeName": "Suthar,Abdulraheman",
                "BadgeBarcodeID": "13928325",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "106279477",
                "UserID": "amazahid",
                "EmployeeName": "Amad,Zahid",
                "BadgeBarcodeID": "11759344",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "201940136",
                "UserID": "patelkeu",
                "EmployeeName": "Patel,Kevalkumar Nileshkumar",
                "BadgeBarcodeID": "11247115",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200500752",
                "UserID": "epagadah",
                "EmployeeName": "Pagadala,Hanu",
                "BadgeBarcodeID": "11461014",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "101812180",
                "UserID": "michatki",
                "EmployeeName": "Atkin,Michael",
                "BadgeBarcodeID": "11754096",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105003412",
                "UserID": "miloszyk",
                "EmployeeName": "Miloszyk,Maria",
                "BadgeBarcodeID": "323",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "200367798",
                "UserID": "svetlaga",
                "EmployeeName": "Gaponova,Svetlana",
                "BadgeBarcodeID": "217121",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "104357034",
                "UserID": "scripcat",
                "EmployeeName": "Scripca,Tudor",
                "BadgeBarcodeID": "12324731",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "109358229",
                "UserID": "dthindle",
                "EmployeeName": "Hindle,Dan Craig",
                "BadgeBarcodeID": "14401498",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "102755878",
                "UserID": "mitliviu",
                "EmployeeName": "Mitran,Liviu",
                "BadgeBarcodeID": "11264333",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108772391",
                "UserID": "manadeuo",
                "EmployeeName": "Deugi,Manav",
                "BadgeBarcodeID": "11959377",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "100950580",
                "UserID": "husmal",
                "EmployeeName": "Ali,Hussain Ahmed Mohammed",
                "BadgeBarcodeID": "13029117",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DI7-0800"
            },
            {
                "EmployeeID": "113108984",
                "UserID": "emamodou",
                "EmployeeName": "MAMODO,UNEZA",
                "BadgeBarcodeID": "14931054",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "108148338",
                "UserID": "bhavivis",
                "EmployeeName": "Vishnu,Bhavik",
                "BadgeBarcodeID": "13790140",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "101625942",
                "UserID": "naredixi",
                "EmployeeName": "Naresh,Dixita",
                "BadgeBarcodeID": "13281247",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT2388"
            },
            {
                "EmployeeID": "201255354",
                "UserID": "tjaykupa",
                "EmployeeName": "Patel,Jay",
                "BadgeBarcodeID": "11745403",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "201436094",
                "UserID": "gurdisla",
                "EmployeeName": "Lal,Gurdish",
                "BadgeBarcodeID": "14764394",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105573466",
                "UserID": "barisvan",
                "EmployeeName": "Mussagi Bai,Risvana",
                "BadgeBarcodeID": "12643425",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201641091",
                "UserID": "parpanci",
                "EmployeeName": "Panchal,Parth",
                "BadgeBarcodeID": "13546148",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "104539862",
                "UserID": "natuarla",
                "EmployeeName": "Natuarlal,Mayuri",
                "BadgeBarcodeID": "11337388",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT4610"
            },
            {
                "EmployeeID": "109380079",
                "UserID": "baouamal",
                "EmployeeName": "Baouane,Malik",
                "BadgeBarcodeID": "14425328",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "SB1-1330"
            },
            {
                "EmployeeID": "100269345",
                "UserID": "michamud",
                "EmployeeName": "Mudz,Michal",
                "BadgeBarcodeID": "11029155",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "108223589",
                "UserID": "albetang",
                "EmployeeName": "Tang,Albert",
                "BadgeBarcodeID": "13872698",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106964896",
                "UserID": "ioncojoc",
                "EmployeeName": "Cojocaru,John",
                "BadgeBarcodeID": "12772057",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110002433",
                "UserID": "moniindi",
                "EmployeeName": "Moniz,Indira Hacreman",
                "BadgeBarcodeID": "15099168",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT2024"
            },
            {
                "EmployeeID": "201664167",
                "UserID": "hareshrw",
                "EmployeeName": "Ramgi,Haresh",
                "BadgeBarcodeID": "15024730",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107440482",
                "UserID": "rakasi",
                "EmployeeName": "Raja,Kasim",
                "BadgeBarcodeID": "13184493",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105243618",
                "UserID": "eganjuli",
                "EmployeeName": "Egan,Jules",
                "BadgeBarcodeID": "12329375",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112901500",
                "UserID": "dayhpau",
                "EmployeeName": "Day,Paul",
                "BadgeBarcodeID": "14693300",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "109335874",
                "UserID": "dleabdal",
                "EmployeeName": "Ali,Dler",
                "BadgeBarcodeID": "14377555",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "102640322",
                "UserID": "chivulg",
                "EmployeeName": "Chivulescu,Gabriel-Gheorghe",
                "BadgeBarcodeID": "12118779",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "200561602",
                "UserID": "mamchawd",
                "EmployeeName": "Chawda,Mamta Jatin",
                "BadgeBarcodeID": "13527964",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "113023894",
                "UserID": "pritjivd",
                "EmployeeName": "Jiva,Priti",
                "BadgeBarcodeID": "14259791",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "109370032",
                "UserID": "harrilu",
                "EmployeeName": "Harris,Luke",
                "BadgeBarcodeID": "14414184",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "101272373",
                "UserID": "abdalbar",
                "EmployeeName": "Abd Albaree,Somia",
                "BadgeBarcodeID": "74933",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110458357",
                "UserID": "ravkarsa",
                "EmployeeName": "Karsan,Ravindra",
                "BadgeBarcodeID": "11770671",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201516051",
                "UserID": "basidapa",
                "EmployeeName": "Pathan,Basidali",
                "BadgeBarcodeID": "13886857",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "101066167",
                "UserID": "gaboroze",
                "EmployeeName": "Oze,Gabor",
                "BadgeBarcodeID": "11321851",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "19",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202064588",
                "UserID": "kumhshub",
                "EmployeeName": "Kumar,Shubam",
                "BadgeBarcodeID": "14176254",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "107419584",
                "UserID": "krasnas",
                "EmployeeName": "Krasnauskis,Stanislavs",
                "BadgeBarcodeID": "11383199",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "101457292",
                "UserID": "iddavide",
                "EmployeeName": "Davideanu,Ionut",
                "BadgeBarcodeID": "232027",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106861397",
                "UserID": "adhsuren",
                "EmployeeName": "Adhikari,Surendra",
                "BadgeBarcodeID": "12569128",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "105003488",
                "UserID": "faquirb",
                "EmployeeName": "Faquirbai,Allarakhu",
                "BadgeBarcodeID": "11780381",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT2638"
            },
            {
                "EmployeeID": "104998245",
                "UserID": "mehvisb",
                "EmployeeName": "Bashir,Mehvish",
                "BadgeBarcodeID": "142169",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "110722144",
                "UserID": "gseshasa",
                "EmployeeName": "TALLAPANENI,SESHASAI MANIKANTHA",
                "BadgeBarcodeID": "11264730",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "105134155",
                "UserID": "vandad",
                "EmployeeName": "Deva,Vandana",
                "BadgeBarcodeID": "11821990",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "108047480",
                "UserID": "luciaapp",
                "EmployeeName": "Appio,Luciane",
                "BadgeBarcodeID": "13684420",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "100353246",
                "UserID": "dvvijdea",
                "EmployeeName": "Vijdea,Dan",
                "BadgeBarcodeID": "224089",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105100304",
                "UserID": "gkerpe",
                "EmployeeName": "Kerpe,Gita",
                "BadgeBarcodeID": "11569554",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "109618531",
                "UserID": "smalleni",
                "EmployeeName": "Smalley,Nicola",
                "BadgeBarcodeID": "14684867",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110990455",
                "UserID": "shercruy",
                "EmployeeName": "Cruz,Sherwin Illescas",
                "BadgeBarcodeID": "11900762",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201705643",
                "UserID": "tejatand",
                "EmployeeName": "Tandel,Tejasvini Pravinbhai",
                "BadgeBarcodeID": "13707968",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107996424",
                "UserID": "pruthbab",
                "EmployeeName": "Babu,Pruthvi",
                "BadgeBarcodeID": "13631431",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110424498",
                "UserID": "marandur",
                "EmployeeName": "Marandure,Sean",
                "BadgeBarcodeID": "11981771",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT1823"
            },
            {
                "EmployeeID": "103558482",
                "UserID": "kjosyula",
                "EmployeeName": "Josyula,Venkata",
                "BadgeBarcodeID": "14329303",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "201499065",
                "UserID": "akhuzemg",
                "EmployeeName": "Assan,Khuzema",
                "BadgeBarcodeID": "13061202",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "112691622",
                "UserID": "sreedani",
                "EmployeeName": "ANIL KUMAR,SREEDHARAN PILLAI",
                "BadgeBarcodeID": "13196494",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "110990398",
                "UserID": "znicpate",
                "EmployeeName": "Patel,Nico",
                "BadgeBarcodeID": "12260396",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "111524944",
                "UserID": "nshamran",
                "EmployeeName": "Rani,Shama",
                "BadgeBarcodeID": "13906721",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "109618506",
                "UserID": "romankut",
                "EmployeeName": "Kutash,Roman",
                "BadgeBarcodeID": "14684851",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "202464900",
                "UserID": "rehamber",
                "EmployeeName": "Rehan,Amber",
                "BadgeBarcodeID": "15305904",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "104909101",
                "UserID": "sharplec",
                "EmployeeName": "Sharples,Chris Kenneth",
                "BadgeBarcodeID": "11979903",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "103277255",
                "UserID": "abbordek",
                "EmployeeName": "Bordekar,Ankita",
                "BadgeBarcodeID": "13177279",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "PT2388"
            },
            {
                "EmployeeID": "106120775",
                "UserID": "aksanade",
                "EmployeeName": "Nadeem,Aksa",
                "BadgeBarcodeID": "13238100",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "112924465",
                "UserID": "anavasik",
                "EmployeeName": "Nazim,Vasik",
                "BadgeBarcodeID": "11065007",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "109416765",
                "UserID": "cagacett",
                "EmployeeName": "Cet,Cagatay",
                "BadgeBarcodeID": "14466084",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "110851871",
                "UserID": "qjaskaur",
                "EmployeeName": "Kaur,Jasneet",
                "BadgeBarcodeID": "11446778",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "101880427",
                "UserID": "mohanlav",
                "EmployeeName": "MOHANLAL,VIJAISHINH",
                "BadgeBarcodeID": "12919703",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "104706537",
                "UserID": "tejasvt",
                "EmployeeName": "Tandel,Tejasvini Ramchandra",
                "BadgeBarcodeID": "12188793",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "200719117",
                "UserID": "fkesahar",
                "EmployeeName": "KESANI,HARISH",
                "BadgeBarcodeID": "15237480",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "108548207",
                "UserID": "kennikhi",
                "EmployeeName": "Keni,Nikhil Santosh",
                "BadgeBarcodeID": "12129908",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "110119999",
                "UserID": "bagomohe",
                "EmployeeName": "Bagoane,Mohitkumar",
                "BadgeBarcodeID": "15230196",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "107753500",
                "UserID": "mateimon",
                "EmployeeName": "Matei,Monica",
                "BadgeBarcodeID": "12533777",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105046733",
                "UserID": "buradele",
                "EmployeeName": "Burkey,Adele Marcia",
                "BadgeBarcodeID": "11741910",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105459931",
                "UserID": "lazagabr",
                "EmployeeName": "Willcox,Gabriel",
                "BadgeBarcodeID": "12518022",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111157973",
                "UserID": "safixabd",
                "EmployeeName": "Abdullahi,Safia",
                "BadgeBarcodeID": "14228195",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "111204057",
                "UserID": "agatinal",
                "EmployeeName": "Agatine,Alexandra Valentina",
                "BadgeBarcodeID": "13504848",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "109944805",
                "UserID": "krutisol",
                "EmployeeName": "Devendrakumar,Krutik",
                "BadgeBarcodeID": "11861517",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201945392",
                "UserID": "amadkham",
                "EmployeeName": "Khalid Qayyum,Amad",
                "BadgeBarcodeID": "11152481",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "202106044",
                "UserID": "tdipatel",
                "EmployeeName": "Patel,Dipen ashokbhai",
                "BadgeBarcodeID": "12410847",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "110311069",
                "UserID": "strawrob",
                "EmployeeName": "Straw,Rob",
                "BadgeBarcodeID": "13735973",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104901274",
                "UserID": "smmcrobe",
                "EmployeeName": "McRoberts,Sharon",
                "BadgeBarcodeID": "11138799",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201965343",
                "UserID": "mithilaj",
                "EmployeeName": "Dave,Mithila maganlal",
                "BadgeBarcodeID": "11875188",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "15",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "106528333",
                "UserID": "carmeili",
                "EmployeeName": "Ilia,Carmen Slagiana",
                "BadgeBarcodeID": "12540428",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106523286",
                "UserID": "nourmarc",
                "EmployeeName": "Nour,Marcel",
                "BadgeBarcodeID": "11803441",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201838935",
                "UserID": "praveewi",
                "EmployeeName": "William,Praveen",
                "BadgeBarcodeID": "11323972",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "104909105",
                "UserID": "gjasdeep",
                "EmployeeName": "Gill,Jasdeep Singh",
                "BadgeBarcodeID": "11171236",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105082226",
                "UserID": "rnapras",
                "EmployeeName": "Rana,Prashant Arvind",
                "BadgeBarcodeID": "248229",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "110646653",
                "UserID": "qsadhana",
                "EmployeeName": "Kantilal,Sadhana",
                "BadgeBarcodeID": "11863432",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "200368130",
                "UserID": "aanzuman",
                "EmployeeName": "Alo,Anzuman Ara",
                "BadgeBarcodeID": "13986333",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105256727",
                "UserID": "smanjac",
                "EmployeeName": "Jackson,Sam Jane",
                "BadgeBarcodeID": "11683165",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201940132",
                "UserID": "nagalael",
                "EmployeeName": "Eluri,Naga Lakshmi",
                "BadgeBarcodeID": "13898223",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "106210402",
                "UserID": "mhabtema",
                "EmployeeName": "Habtemariam,Mehari",
                "BadgeBarcodeID": "13334048",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "104772081",
                "UserID": "hefford",
                "EmployeeName": "Hefford,Andrew",
                "BadgeBarcodeID": "11557175",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE1-0800"
            },
            {
                "EmployeeID": "201679389",
                "UserID": "nimitand",
                "EmployeeName": "Tandel,Nimitt Rajeshkumar",
                "BadgeBarcodeID": "12562923",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT4912"
            },
            {
                "EmployeeID": "101569335",
                "UserID": "antonyv",
                "EmployeeName": "Viner,Antony",
                "BadgeBarcodeID": "11500528",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "107603417",
                "UserID": "xequshaf",
                "EmployeeName": "Shafi,Xeque Mohamed",
                "BadgeBarcodeID": "12833862",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "112655772",
                "UserID": "akbchira",
                "EmployeeName": "Akbari,Chirag",
                "BadgeBarcodeID": "14037305",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "106969849",
                "UserID": "ganespg",
                "EmployeeName": "Ganes,Priyank",
                "BadgeBarcodeID": "11849976",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106239286",
                "UserID": "vijendrq",
                "EmployeeName": "Quessou,Vijendra",
                "BadgeBarcodeID": "13364699",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "106172912",
                "UserID": "gniazdj",
                "EmployeeName": "Gniazdowska,Jolanta",
                "BadgeBarcodeID": "13293726",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111616505",
                "UserID": "kachakuc",
                "EmployeeName": "KACHAK,UFUK",
                "BadgeBarcodeID": "12853998",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "RT528"
            },
            {
                "EmployeeID": "109624459",
                "UserID": "ybogumil",
                "EmployeeName": "Kut,Bogumil",
                "BadgeBarcodeID": "14690384",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "202658880",
                "UserID": "hydgeorg",
                "EmployeeName": "Hyde,George William",
                "BadgeBarcodeID": "14739505",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "111564660",
                "UserID": "antpatel",
                "EmployeeName": "Patel,Anu Chandramaulik",
                "BadgeBarcodeID": "14353821",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DN4-0730"
            },
            {
                "EmployeeID": "106144374",
                "UserID": "menhart",
                "EmployeeName": "Menharth,Alexandru",
                "BadgeBarcodeID": "13263402",
                "ManagerName": "Tisca,Ioana",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "105461265",
                "UserID": "mayanki",
                "EmployeeName": "Tandel,Mayankini Dalpat",
                "BadgeBarcodeID": "12519722",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "RT593"
            },
            {
                "EmployeeID": "200633515",
                "UserID": "banapare",
                "EmployeeName": "Bana,Pareshbhai",
                "BadgeBarcodeID": "15350835",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "112747018",
                "UserID": "kolqbhav",
                "EmployeeName": "Koli,Bhavini Maheshbhai",
                "BadgeBarcodeID": "13924327",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "104909143",
                "UserID": "parjodie",
                "EmployeeName": "Parker,Jodie",
                "BadgeBarcodeID": "11807905",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "DB1-0500"
            },
            {
                "EmployeeID": "109335882",
                "UserID": "simopelf",
                "EmployeeName": "Pell,Simon",
                "BadgeBarcodeID": "14377562",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201552408",
                "UserID": "oprashav",
                "EmployeeName": "Vinu,Prashant",
                "BadgeBarcodeID": "11804210",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "102471520",
                "UserID": "bhaviram",
                "EmployeeName": "Ramesh,Bhavin",
                "BadgeBarcodeID": "12789488",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201633219",
                "UserID": "mazhjiti",
                "EmployeeName": "Mazhuvanchery joy,Jithin",
                "BadgeBarcodeID": "13513272",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "111204866",
                "UserID": "katpawel",
                "EmployeeName": "Pawelko,Katarzyna",
                "BadgeBarcodeID": "14212314",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "103160961",
                "UserID": "pshahd",
                "EmployeeName": "Patel,Shahid",
                "BadgeBarcodeID": "12234858",
                "ManagerName": "Wheat,Sarah",
                "ManagementAreaID": "33",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105391161",
                "UserID": "bhuprama",
                "EmployeeName": "Raman,Bhupendra",
                "BadgeBarcodeID": "12441765",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "108066792",
                "UserID": "urichdyl",
                "EmployeeName": "Richardson,Dylan",
                "BadgeBarcodeID": "15284041",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "109156250",
                "UserID": "grahkidd",
                "EmployeeName": "Kidd,Graham Bruce",
                "BadgeBarcodeID": "14179458",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "102444442",
                "UserID": "takantal",
                "EmployeeName": "Takacs,Antal",
                "BadgeBarcodeID": "25653",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT6582"
            },
            {
                "EmployeeID": "107788550",
                "UserID": "kingdool",
                "EmployeeName": "Kingdon,Oliver",
                "BadgeBarcodeID": "13405650",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "200468728",
                "UserID": "hmumaher",
                "EmployeeName": "Maher,Muhammad",
                "BadgeBarcodeID": "14573568",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "201806020",
                "UserID": "katrenuk",
                "EmployeeName": "Katariya,Renuka Vipulbhai",
                "BadgeBarcodeID": "14349704",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "109428715",
                "UserID": "wlparkin",
                "EmployeeName": "Parkinson,Lucy",
                "BadgeBarcodeID": "14478368",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "PT7114-1"
            },
            {
                "EmployeeID": "106909590",
                "UserID": "gadwalkg",
                "EmployeeName": "Gadwal,Karma",
                "BadgeBarcodeID": "12363412",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "PT101"
            },
            {
                "EmployeeID": "104817897",
                "UserID": "hitsimon",
                "EmployeeName": "Hitchcock,Simon",
                "BadgeBarcodeID": "11264572",
                "ManagerName": "Bull,Philip",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106172911",
                "UserID": "ksspilma",
                "EmployeeName": "Spilman,Kelly",
                "BadgeBarcodeID": "13293525",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105287531",
                "UserID": "zdybicka",
                "EmployeeName": "Zdybicka,Ewa Beata",
                "BadgeBarcodeID": "12085617",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201679386",
                "UserID": "bmajipat",
                "EmployeeName": "Patel,Majid",
                "BadgeBarcodeID": "13343409",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "200605380",
                "UserID": "ranjmaha",
                "EmployeeName": "Mahasamudram,Ranjith Sundaram",
                "BadgeBarcodeID": "13647907",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "200561487",
                "UserID": "maljimai",
                "EmployeeName": "Maljiwala,Maiz",
                "BadgeBarcodeID": "11384952",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "S-C8912G"
            },
            {
                "EmployeeID": "105461260",
                "UserID": "hmoheen",
                "EmployeeName": "Hussain,Moheen",
                "BadgeBarcodeID": "12519718",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "200477414",
                "UserID": "sanjmpat",
                "EmployeeName": "Patel,Sanjay",
                "BadgeBarcodeID": "14471100",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "104772104",
                "UserID": "warsimo",
                "EmployeeName": "Ward,Simon Lee",
                "BadgeBarcodeID": "11538011",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "DE1-0600"
            },
            {
                "EmployeeID": "101672388",
                "UserID": "noryat",
                "EmployeeName": "Zakariah,Noryati",
                "BadgeBarcodeID": "11600930",
                "ManagerName": "Percival,Howard",
                "ManagementAreaID": "26",
                "ShiftPattern": "DE1B0800"
            },
            {
                "EmployeeID": "105046729",
                "UserID": "wilucy",
                "EmployeeName": "Williamson,Lucy Lynda",
                "BadgeBarcodeID": "190534",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "109355817",
                "UserID": "jatintav",
                "EmployeeName": "Tandel,Jatin Ishwarbhai",
                "BadgeBarcodeID": "14398862",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201672430",
                "UserID": "kajakaru",
                "EmployeeName": "Karsan,Kajal",
                "BadgeBarcodeID": "11997786",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "106256864",
                "UserID": "ussekasi",
                "EmployeeName": "Ussenbai,Kasim",
                "BadgeBarcodeID": "13383490",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "RT6582"
            },
            {
                "EmployeeID": "201564650",
                "UserID": "tmeghtan",
                "EmployeeName": "Tandel,Megha",
                "BadgeBarcodeID": "13862696",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "15",
                "ShiftPattern": "DL4-0730"
            },
            {
                "EmployeeID": "109444150",
                "UserID": "brenkart",
                "EmployeeName": "Renjala,karthik",
                "BadgeBarcodeID": "14495572",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "110955127",
                "UserID": "bralongb",
                "EmployeeName": "Longburn,Brandon",
                "BadgeBarcodeID": "12398473",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "106774065",
                "UserID": "rzwahme",
                "EmployeeName": "Ahmed,Rizwan",
                "BadgeBarcodeID": "12468082",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105589605",
                "UserID": "czalazar",
                "EmployeeName": "Zalazar,Cecilia Ana Laura",
                "BadgeBarcodeID": "12661260",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "112370616",
                "UserID": "sismanvi",
                "EmployeeName": "Singh,Manvir",
                "BadgeBarcodeID": "14915652",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105071135",
                "UserID": "mahernm",
                "EmployeeName": "Maher,Neha Shyam",
                "BadgeBarcodeID": "12000350",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "103823920",
                "UserID": "tanded",
                "EmployeeName": "Tandel,Divyesh Ganeshbhai",
                "BadgeBarcodeID": "15137452",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106973427",
                "UserID": "dosangh",
                "EmployeeName": "Dosangh,Satnam",
                "BadgeBarcodeID": "11529268",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111567237",
                "UserID": "gurjjoha",
                "EmployeeName": "Johal,Gurjeet",
                "BadgeBarcodeID": "12241330",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110713477",
                "UserID": "jgavapat",
                "EmployeeName": "Gava,Patricia Miranda",
                "BadgeBarcodeID": "9890",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "200368131",
                "UserID": "kevaytan",
                "EmployeeName": "TANDEL,KEVAL",
                "BadgeBarcodeID": "13573898",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "2",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "111244543",
                "UserID": "kalqvagh",
                "EmployeeName": "Vaghela,Kalpesh",
                "BadgeBarcodeID": "14248442",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108730780",
                "UserID": "carruwil",
                "EmployeeName": "Carruthers,Billy",
                "BadgeBarcodeID": "13424865",
                "ManagerName": "Moosa,Ash",
                "ManagementAreaID": "26",
                "ShiftPattern": "DC4-0730"
            },
            {
                "EmployeeID": "105184388",
                "UserID": "ajaytand",
                "EmployeeName": "Tandel,Ajay Jayanti",
                "BadgeBarcodeID": "11940446",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "113107145",
                "UserID": "hashudax",
                "EmployeeName": "Hashmukhlal,Uday",
                "BadgeBarcodeID": "12264557",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "108548187",
                "UserID": "grzelpio",
                "EmployeeName": "Grzelak,Piotr",
                "BadgeBarcodeID": "12948468",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202501479",
                "UserID": "abhborka",
                "EmployeeName": "Borkar,Abhishek Amol",
                "BadgeBarcodeID": "12526111",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6903"
            },
            {
                "EmployeeID": "103926398",
                "UserID": "khrabia",
                "EmployeeName": "Khan,Rabia",
                "BadgeBarcodeID": "11987120",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "103716465",
                "UserID": "alberoli",
                "EmployeeName": "oliveira,alberto",
                "BadgeBarcodeID": "11789438",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "104953711",
                "UserID": "snnsnn",
                "EmployeeName": "Sunny,Sunny",
                "BadgeBarcodeID": "246756",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "5",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105146207",
                "UserID": "smatadar",
                "EmployeeName": "Matadar,Shahnawaz",
                "BadgeBarcodeID": "122002",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104953656",
                "UserID": "neujozef",
                "EmployeeName": "Neuman,Jozef Dawid",
                "BadgeBarcodeID": "240396",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "105712334",
                "UserID": "balagris",
                "EmployeeName": "Baltais,Agris",
                "BadgeBarcodeID": "12797419",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "110495527",
                "UserID": "qlaljiru",
                "EmployeeName": "Lalji,Rupeshkumar",
                "BadgeBarcodeID": "12367697",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "202464892",
                "UserID": "bambmoni",
                "EmployeeName": "Bambhaniya,Monika",
                "BadgeBarcodeID": "13395662",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "RT6902"
            },
            {
                "EmployeeID": "107997313",
                "UserID": "raimjone",
                "EmployeeName": "Jones,Rai",
                "BadgeBarcodeID": "13630612",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "PT2025"
            },
            {
                "EmployeeID": "113127994",
                "UserID": "wprabraj",
                "EmployeeName": "Raja,Prabhudas",
                "BadgeBarcodeID": "15031582",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "201633218",
                "UserID": "kzebibte",
                "EmployeeName": "Kahsay,Zebib tewelde",
                "BadgeBarcodeID": "14691023",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "201552395",
                "UserID": "rafadvay",
                "EmployeeName": "Dvarzeckaite,Rafaele",
                "BadgeBarcodeID": "11667746",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DN2-0800"
            },
            {
                "EmployeeID": "101649599",
                "UserID": "menhaa",
                "EmployeeName": "menharth,ana-maria",
                "BadgeBarcodeID": "11577447",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "26",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "202073421",
                "UserID": "kakaonil",
                "EmployeeName": "Kakadiya,Nilesh",
                "BadgeBarcodeID": "13910937",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "201899604",
                "UserID": "tandfalg",
                "EmployeeName": "Tandel,Falguni",
                "BadgeBarcodeID": "14207174",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "201436120",
                "UserID": "vanbonin",
                "EmployeeName": "Bonini Dias,Vanessa",
                "BadgeBarcodeID": "11047381",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "201633223",
                "UserID": "pentarsr",
                "EmployeeName": "Pentareddy,Srikanth reddy",
                "BadgeBarcodeID": "12106343",
                "ManagerName": "Knapp,Jonathan James",
                "ManagementAreaID": "21",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "108259225",
                "UserID": "kantilvi",
                "EmployeeName": "Kantilal,Vivek",
                "BadgeBarcodeID": "11069539",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201899603",
                "UserID": "nkameshv",
                "EmployeeName": "Nanji,Kameshvari",
                "BadgeBarcodeID": "11858107",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "110849721",
                "UserID": "faitailo",
                "EmployeeName": "Tailor,Faijal",
                "BadgeBarcodeID": "14054296",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "14",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "201672428",
                "UserID": "suntchi",
                "EmployeeName": "Sun,Chiu",
                "BadgeBarcodeID": "13466586",
                "ManagerName": "Vasilev,Yavor",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110169299",
                "UserID": "ndhrutik",
                "EmployeeName": "Dhanji,Dhrutika",
                "BadgeBarcodeID": "15279629",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "107854846",
                "UserID": "callhowe",
                "EmployeeName": "howen,callum",
                "BadgeBarcodeID": "13477661",
                "ManagerName": "Metcalf,Dan",
                "ManagementAreaID": "28",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "104149708",
                "UserID": "alinaure",
                "EmployeeName": "Rad,Alin-Aurel",
                "BadgeBarcodeID": "62177",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "103206218",
                "UserID": "abdibull",
                "EmployeeName": "Bulle,Abdi Muhumed",
                "BadgeBarcodeID": "11844535",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "108313540",
                "UserID": "atkinsem",
                "EmployeeName": "Atkinson,Emma",
                "BadgeBarcodeID": "11545678",
                "ManagerName": "Kerry,Lewis",
                "ManagementAreaID": "16",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "200660406",
                "UserID": "jimukes",
                "EmployeeName": "Mukesh,Jigar",
                "BadgeBarcodeID": "11201487",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "106256920",
                "UserID": "tannancy",
                "EmployeeName": "Tandel,Nancy Dalpat",
                "BadgeBarcodeID": "13383545",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "110357285",
                "UserID": "ahashmuk",
                "EmployeeName": "Hashmukhlal,Ashish",
                "BadgeBarcodeID": "11474793",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "107627276",
                "UserID": "craiyate",
                "EmployeeName": "Yates,Craig Darren",
                "BadgeBarcodeID": "11304605",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "201552351",
                "UserID": "cherucha",
                "EmployeeName": "Cherukuri,Chandu",
                "BadgeBarcodeID": "12562518",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DN2-0730"
            },
            {
                "EmployeeID": "201940171",
                "UserID": "fathimsp",
                "EmployeeName": "FATHIMA,SABA",
                "BadgeBarcodeID": "30063",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DH3-0800"
            },
            {
                "EmployeeID": "101546737",
                "UserID": "atthi",
                "EmployeeName": "Thi,Anna",
                "BadgeBarcodeID": "11466091",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DC4-0800"
            },
            {
                "EmployeeID": "109955820",
                "UserID": "pratrati",
                "EmployeeName": "Ratilal,Pratiksha",
                "BadgeBarcodeID": "15048418",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "110404722",
                "UserID": "raicdhru",
                "EmployeeName": "Raichande,Dhruvi",
                "BadgeBarcodeID": "12788800",
                "ManagerName": "Hussain,Rizwan",
                "ManagementAreaID": "3",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "110955112",
                "UserID": "lamagibb",
                "EmployeeName": "Gibbons,Lamarr Hezekiah",
                "BadgeBarcodeID": "12394515",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "105573445",
                "UserID": "vajasv",
                "EmployeeName": "Vaja,Shitalbahen Nirmal",
                "BadgeBarcodeID": "12643402",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "111566710",
                "UserID": "harminfs",
                "EmployeeName": "singh,Harminder",
                "BadgeBarcodeID": "11728712",
                "ManagerName": "Dassu,Faisal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "200543310",
                "UserID": "thurahul",
                "EmployeeName": "THUNDIYIL KALESAN,RAHUL KIRAN",
                "BadgeBarcodeID": "15243961",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "111102115",
                "UserID": "rasosajt",
                "EmployeeName": "Rasool,Sajjad",
                "BadgeBarcodeID": "11294703",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "105394116",
                "UserID": "givakrun",
                "EmployeeName": "Giva,Krunal",
                "BadgeBarcodeID": "14248409",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DB1-0800"
            },
            {
                "EmployeeID": "105460556",
                "UserID": "sherwste",
                "EmployeeName": "Sherwin,Stephen Ashley",
                "BadgeBarcodeID": "12518449",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "104901330",
                "UserID": "ianpartr",
                "EmployeeName": "Partridge,Ian",
                "BadgeBarcodeID": "11053237",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "104953667",
                "UserID": "jeetindd",
                "EmployeeName": "Dhillon,Jeetinder Singh",
                "BadgeBarcodeID": "11465148",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "110863248",
                "UserID": "gstefgri",
                "EmployeeName": "Grillo,Stefania",
                "BadgeBarcodeID": "13839185",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "AAAB"
            },
            {
                "EmployeeID": "201571079",
                "UserID": "jsvantla",
                "EmployeeName": "Jsvantlal,Nilesh",
                "BadgeBarcodeID": "12980170",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DK7-0730"
            },
            {
                "EmployeeID": "108427103",
                "UserID": "ecraharr",
                "EmployeeName": "Harrison,Craig",
                "BadgeBarcodeID": "13150999",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "106686778",
                "UserID": "aleksaad",
                "EmployeeName": "ADAMCZYK,ALEKSANDER",
                "BadgeBarcodeID": "12656648",
                "ManagerName": "Bramley,Graham Barrie",
                "ManagementAreaID": "3",
                "ShiftPattern": "DK7-0800"
            },
            {
                "EmployeeID": "201838939",
                "UserID": "tesfohab",
                "EmployeeName": "Habteselasie,Tesfom Gebrezghi",
                "BadgeBarcodeID": "13159114",
                "ManagerName": "Wysocka,Magdalena",
                "ManagementAreaID": "17",
                "ShiftPattern": "DH3-0730"
            },
            {
                "EmployeeID": "201723753",
                "UserID": "ukipatel",
                "EmployeeName": "patel,Kinjal",
                "BadgeBarcodeID": "11134639",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DL4-0800"
            },
            {
                "EmployeeID": "105091131",
                "UserID": "colinbar",
                "EmployeeName": "Barlow,Colin Mark",
                "BadgeBarcodeID": "11473102",
                "ManagerName": "Hayes,Matt",
                "ManagementAreaID": "1",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "110396570",
                "UserID": "gafuradi",
                "EmployeeName": "Gafur,Adil Husein",
                "BadgeBarcodeID": "12546636",
                "ManagerName": "Zar,Adil",
                "ManagementAreaID": "27",
                "ShiftPattern": "DA5-0800"
            },
            {
                "EmployeeID": "109908338",
                "UserID": "sutarima",
                "EmployeeName": "Sutaria,Mahesh Natvarlal",
                "BadgeBarcodeID": "14997024",
                "ManagerName": "Shorrock,Thomas Peter",
                "ManagementAreaID": "17",
                "ShiftPattern": "DF6-0730"
            },
            {
                "EmployeeID": "101159044",
                "UserID": "gordvict",
                "EmployeeName": "Gordon,Vicky",
                "BadgeBarcodeID": "240028",
                "ManagerName": "Allen,Luke",
                "ManagementAreaID": "21",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "103274334",
                "UserID": "eyotekle",
                "EmployeeName": "Tekle,Eyob",
                "BadgeBarcodeID": "15186285",
                "ManagerName": "Singh,Manjeet",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "109370025",
                "UserID": "elinvita",
                "EmployeeName": "Vitane,Elina",
                "BadgeBarcodeID": "14414179",
                "ManagerName": "Sachdev,Darshan",
                "ManagementAreaID": "18",
                "ShiftPattern": "RT5418"
            },
            {
                "EmployeeID": "101739930",
                "UserID": "swetia",
                "EmployeeName": "Sweti,Ahmed",
                "BadgeBarcodeID": "11673482",
                "ManagerName": "Howard,Aidan",
                "ManagementAreaID": "18",
                "ShiftPattern": "DB1-0730"
            },
            {
                "EmployeeID": "104946052",
                "UserID": "amohamho",
                "EmployeeName": "Hossain,Mohammed",
                "BadgeBarcodeID": "11374022",
                "ManagerName": "Hungund,Ashish",
                "ManagementAreaID": "3",
                "ShiftPattern": "DF6-0800"
            },
            {
                "EmployeeID": "202440050",
                "UserID": "dhaachau",
                "EmployeeName": "CHAUDHARY,DHAVAL BHAILAL",
                "BadgeBarcodeID": "13280293",
                "ManagerName": "Xhela,Enerild",
                "ManagementAreaID": "16",
                "ShiftPattern": "DA5-0730"
            },
            {
                "EmployeeID": "201633729",
                "UserID": "priqpati",
                "EmployeeName": "Patil,Priyanka Balasahed",
                "BadgeBarcodeID": "14893884",
                "ManagerName": "Dosangh,Deneal",
                "ManagementAreaID": "13",
                "ShiftPattern": "DH3-0730"
            }
          
          
    ];

    function renderUsers(users) {
        let div = document.querySelector("#data-output");
        let out = "";

        for (let user of users) {
            let shiftPatternsClass = escapeClassName(user.ShiftPattern);

            // Set background color based on ShiftPattern value
            let backgroundColor = getBackgroundColor(user.ShiftPattern);

            out += `
                <div id="user-${user.UserID}" class="user" draggable="true" style="background-color: ${backgroundColor}; border: 2px solid black; margin: 1px">
                    <div class="product">
                        <img src="https://internal-cdn.amazon.com/badgephotos.amazon.com/?login=${user.UserID}" alt="${user.EmployeeName}">
                        <div class="p-details">
                            <h2 class="name">${user.UserID}</h2>
                            <h3>${user.EmployeeName}</h3>
                            <h3 data-category="${user.ManagementAreaID}">${user.ManagementAreaID}</h3>
                            <h3>${user.BadgeBarcodeID}</h3>
                            <h3 data-category="${user.ManagerName}">${user.ManagerName}</h3>
                            <h3 data-category="${user.ShiftPattern}">${user.ShiftPattern}</h3>
                        </div>
                    </div>
                </div>`;
        }

        div.innerHTML = out;
    }
    function filterUsers() {
        const selectedManager = getSelectedCheckboxValues('managerDropdown2');
        const selectedShift = getSelectedCheckboxValues('shiftDropdown2');
        const selectedDepartment = getSelectedCheckboxValues('DepartmentDropdown2');
    
        // Get the currently selected user, if any
        const selectedUserId = document.querySelector('.selected')?.id;
    
        const filteredUsers = usersArray.filter(user => {
            return (
                (selectedManager.length === 0 || selectedManager.includes(user.ManagerName)) &&
                (selectedShift.length === 0 || selectedShift.includes(user.ShiftPattern)) &&
                (selectedDepartment.length === 0 || selectedDepartment.includes(user.ManagementAreaID))
            );
        });
    
        // Update the users displayed in the #data-output container
        renderUsers(filteredUsers);
    
        // Reattach event listeners for selecting child divs after updating the content
        reattachEventListeners();
    
        // Update the count of filtered users on the page
        const filteredUsersCountElement = document.getElementById('filteredUsersCount');
        const filteredUsersCount = filteredUsers.length;
        filteredUsersCountElement.textContent = `${filteredUsersCount}:AA's`;
    }
    
    // Function to reattach event listeners for selecting child divs
    function reattachEventListeners() {
        let users = document.querySelectorAll("#data-output .user");
        users.forEach(user => {
            user.addEventListener("click", function (event) {
                selectItem(event, user);
            });
        });
    
        // Other event listeners if needed...
    }
    
    // Initial rendering of all users
    renderUsers(usersArray);
    
    // Attach event listeners initially
    reattachEventListeners();


// Function to get selected checkbox values in a dropdown
function getSelectedCheckboxValues(dropdownId) {
    const checkboxes = document.querySelectorAll(`#${dropdownId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// Assuming you have dropdown change events that trigger the filterUsers function
document.getElementById('managerDropdown2').addEventListener('change', filterUsers);
document.getElementById('shiftDropdown2').addEventListener('change', filterUsers);
document.getElementById('DepartmentDropdown2').addEventListener('change', filterUsers);

// Initial rendering of all users
renderUsers(usersArray);

    function escapeClassName(str) {
        // Replace non-alphanumeric characters and handle other edge cases
        return `shift-${str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`;
    }

function getBackgroundColor(shiftPattern) {
    // Return the desired background color based on the ShiftPattern value
    // You can customize this function based on your specific requirements
    switch (shiftPattern) {
        case "DA5-0730":
        case "DA5-0800":
            return "#61834A";
        case "DF6-0730":
        case "DF6-0800":
            return "#FFB7C5";
        case "DL4-0730":
        case "DL4-0800":
            return "#FF8247";
        case "DN2-0730":
        case "DN2-0800":
            return "#dc4242";
        case "DB1-0730":
        case "DB1-0800":
            return "#6fa8dc";
        case "DC4-0730":
        case "DC4-0800":
            return "#C0C1CC";
        case "DH3-0730":
        case "DH3-0800":
            return "#C9BBCF";
        case "DK7-0730":
        case "DK7-0800":
            return "#ffd966";
        default:
            // Default color if no match is found
            return "#FFFFFF";
    }
}


            // Selecting an item
            let users = document.querySelectorAll(".user");
            users.forEach(user => {
                user.addEventListener("click", function (event) {
                    selectItem(event, user);
                });
            });

            // Removing a card (not used in this example)
            let removeButtons = document.querySelectorAll(".remove-card");
            removeButtons.forEach(button => {
                button.addEventListener("click", function (event) {
                    removeCard(event);
                });
            });

        });

        // Function to handle the drop and double-click to move back to #data-output container
function handleDropContainerClick(containerSelector) {
    document.addEventListener("click", function (event) {
        let selectedElement = document.querySelector('.selected');
        if (selectedElement) {
            let dropContainers = document.querySelectorAll(containerSelector);

            dropContainers.forEach(dropContainer => {
                if (dropContainer.contains(event.target)) {
                    let clonedElement = selectedElement.cloneNode(true);

                    // Clear the selected state
                    selectedElement.classList.remove('selected');

                    // Remove the original .user element from #data-output
                    selectedElement.remove();

                    // Add the cloned element to the container without the "selected" class
                    dropContainer.appendChild(clonedElement);

                    // Unselect the cloned element after a short delay (e.g., 100 milliseconds)
                    setTimeout(function () {
                        clonedElement.classList.remove('selected');
                        clonedElement.style.border = '2px solid black';
                        clonedElement.style.width = '150px'; // Set width to 300px
                    }, 1);

                    // Add a click event listener to the cloned element to reselect it
                    clonedElement.addEventListener("click", function (event) {
                        selectItem(event, clonedElement);
                    });

                    // Add a double-click event listener to move the cloned element back to #data-output
                    clonedElement.addEventListener("dblclick", function (event) {
                        let container2 = document.getElementById('data-output');
                        container2.appendChild(clonedElement);

                        // Unselect the cloned element after a short delay (e.g., 100 milliseconds)
                        setTimeout(function () {
                            clonedElement.classList.remove('selected');
                            clonedElement.style.border = null;
                            clonedElement.style.width = '150px';
                            clonedElement.style.border = '2px solid black';
                        }, 1);
                    });
                }
            });
        }
    });
}

// Use the function for each drop container
handleDropContainerClick('.calendar__dayPacker1');
handleDropContainerClick('.calendar__dayPacker2');
handleDropContainerClick('.calendar__dayPicker1');
handleDropContainerClick('.calendar__dayPicker2');
handleDropContainerClick('.calendar__day');

// Selecting an item
let users = document.querySelectorAll(".user");
users.forEach(user => {
    user.addEventListener("click", function (event) {
        selectItem(event, user);
    });
});

// Removing a card (not used in this example)
let removeButtons = document.querySelectorAll(".remove-card");
removeButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        removeCard(event);
    });
});



var filter_bar = document.querySelector('.filter-bar');
var filter_collapse_button = document.querySelector('.filter-collapse-button');

filter_collapse_button.addEventListener('click', function(){
  filter_bar.classList.toggle('expand');
});


// Reusable function to toggle dropdown and adjust container height
const toggleDropdown = (dropdownId, checkboxSelector, targetDropdown) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("expand");

    // Get all expanded dropdowns
    const expandedDropdowns = document.querySelectorAll('.filter-item.dropdown.selectable.expanded');

    // Calculate total height of expanded dropdowns
    let totalHeight = 0;
    expandedDropdowns.forEach(expandedDropdown => {
        totalHeight += expandedDropdown.offsetHeight;
    });

    // Extend the height by an additional 600px if the target dropdown is clicked
    if (dropdownId === targetDropdown) {
        totalHeight += 600;
    }

    // Get the .page-container element
    const pageContainer = document.getElementById("data-output");

    // Adjust the height based on the total height of expanded dropdowns
    pageContainer.style.height = totalHeight + "px";
};

// Function to handle dropdown functionality
const handleDropdown = (dropdownId, dropdownContentSelector, checkboxSelector) => {
    const dropdownButton = document.getElementById(dropdownId);
    const dropdownContent = document.querySelector(dropdownContentSelector);
    const dropdownCheckboxes = dropdownContent.querySelectorAll(checkboxSelector);

    // Function to toggle the dropdown's 'expand' class
    function toggleDropdown() {
        dropdownContent.classList.toggle('expand');
    }

    // Function to close the dropdown if the user clicks outside of it
    function closeDropdown(event) {
        if (!event.target.matches(`#${dropdownId}`)) {
            if (dropdownContent.classList.contains('expand')) {
                dropdownContent.classList.remove('expand');
            }
        }
    }

    // Add event listeners
    dropdownButton.addEventListener('click', toggleDropdown);
    window.addEventListener('click', closeDropdown);

    // Prevent the dropdown from closing when clicking inside it
    dropdownContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Add event listeners for checkbox changes
    dropdownCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Assuming you have a filterUsers function defined
            filterUsers(dropdownId, checkboxSelector);
            toggleDropdown(dropdownId);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    handleDropdown("shiftDropdown", '.shiftDropdown-content', 'input[type="checkbox"]');
    handleDropdown("managerDropdown", '.managerDropdown-content', 'input[type="checkbox"]');
    handleDropdown("DepartmentDropdown", '.DepartmentDropdown-content', 'input[type="checkbox"]');
});




// Selecting an item
function selectItem(event, user) {
    event.stopPropagation();
    let selectedElement = document.querySelector('.selected');
    if (selectedElement) {
        selectedElement.classList.remove('selected');
    }
    user.classList.add('selected');

    // Add styling to the selected element (red border, 5px width)
    user.style.border = '3px solid red';
    
}

// Removing a card (not used in this example)
function removeCard(event) {
    event.stopPropagation();

   
}


function filterDropdown(dropdownId, inputId) {
    var input, filter, ul, li, checkbox, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toLowerCase();
    
    ul = document.getElementById(dropdownId);
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      checkbox = li[i].getElementsByTagName('input')[0];
      txtValue = checkbox.value.toLowerCase();
      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }


  var managerDropdown = document.getElementById('managerDropdown');
  var managerContainer = document.querySelector('.AA-Select');
  
  var departmentDropdown = document.getElementById('DepartmentDropdown');
  var departmentContainer = document.querySelector('.AA-Select');
  
  var shiftDropdown = document.getElementById('shiftDropdown');
  var shiftContainer = document.querySelector('.AA-Select');
  
  managerDropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      managerContainer.style.marginTop = managerContainer.style.marginTop === '600px' ? '0' : '600px';
  });
  
  departmentDropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      // Untoggle managerDropdown
      managerContainer.style.marginTop = '0';
      // Toggle departmentDropdown
      departmentContainer.style.marginTop = departmentContainer.style.marginTop === '500px' ? '0' : '500px';
  });
  
  shiftDropdown.addEventListener('click', function (event) {
      event.stopPropagation();
  
      // Check if managerDropdown is visible and hide it
      if (managerContainer.style.marginTop !== '600px' ? '0' : '600px') {
          managerContainer.style.marginTop = '0';
      }
  
      // Check if departmentDropdown is visible and hide it
      if (departmentContainer.style.marginTop !== '500px' ? '0' : '500px') {
          departmentContainer.style.marginTop = '0';
      }
  
      // Toggle shiftDropdown
      shiftContainer.style.marginTop = shiftContainer.style.marginTop === '470px' ? '0' : '470px';
  });
  
  document.body.addEventListener('click', function (event) {
      // Reset all containers to default size when clicking outside dropdowns
      managerContainer.style.marginTop = '0';
      departmentContainer.style.marginTop = '0';
      shiftContainer.style.marginTop = '0';
  });
  


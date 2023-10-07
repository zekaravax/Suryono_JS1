/* Switch Case */
const expr = 'Apple'
switch (expr) {
    case "Semangka":
      console.log("Harga Semangka Adalah 50.000.");
      break;
    case "Apple":
      console.log("Harga Apple Adalah 5.000.");
      break;
    case "Pisang":
      console.log("Harga Pisang Adalah 30.000.");
      break;
    case "Nanas":
      console.log("Harga Nanas Adalah 5.000.");
      break;
    case "Mangga":
      console.log("Harga Mangga Adalah 8.000.");
      break;
    default:
      console.log(`Maaf, Kami Kehabisan ${expr}.`);
  }
  
  console.log("Apakah Ada Hal Lain Yang Anda Inginkan?");
 let runWay = 100;
function fatMan (john) {

        switch (john) {
            case 5: return "five"
            case 13: return "thirteen"
            case 22: return "twenty two"
            case 35: return "thirty five"
            case 98: return "ninety eight"
            default: return john
          }
}

for (let km = 0; km <= runWay; km++) {
   if (km === 5) {fatMan(5)}

   else if (km === 13) {console.log(fatMan(13))}
   else if (km === 22) {console.log(fatMan(22))}
   else if (km === 35) {console.log(fatMan(35))}
   else if (km === 98) {console.log(fatMan(98))}
   else console.log(km)
}




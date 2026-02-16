function numberToString(num) {
   let string = null;

   if (num < 0) string = "-" + num;
   else {
      string = " " + num;
      string = string.trim();
   }
   console.log(string);
}

numberToString(-44);

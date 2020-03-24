var str = prompt ('Enter a sentence, please.');
{
  var newstr =
    str.charAt (0).toUpperCase () +
    str.slice (1, -1) +
    str.charAt (str.length - 1).toUpperCase ();

  var newstr1 =
    newstr.charAt (newstr.length - 1) +
    newstr.slice (1, -1) +
    newstr.charAt (0);
}
alert (newstr1);

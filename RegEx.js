let Pincode = 400088;
let pinRegex = RegExp('^[1-9][0-9]{5}$');
let pinCheck = pinRegex.test(Pincode);
if (pinCheck == true)
{
    console.log("Regex Passed for Pincode: " + Pincode);
}
else 
{
    console.log("Regex Failed for PinCode:" + Pincode)
}
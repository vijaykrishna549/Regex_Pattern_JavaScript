let PincodeAlpha = 'A400088';
let pinRegex = RegExp('^[A-Z][1-9][0-9]{5}$');
let pinCheck = pinRegex.test(PincodeAlpha);
if (pinCheck == true)
{
    console.log("Regex Passed for Pincode: " + PincodeAlpha);
}
else 
{
    console.log("Regex Failed for PinCode:" + PincodeAlpha)
}
let PincodeWithoutAlphaSplCharacter = '400088B';
let pinRegex = RegExp('^[1-9][0-9]{5}$');
let pinCheck = pinRegex.test(PincodeWithoutAlphaSplCharacter);
if (pinCheck == true)
{
    console.log("Regex Passed for Pincode: " + PincodeWithoutAlphaSplCharacter);
}
else 
{
    console.log("Regex Failed for PinCode:" + PincodeWithoutAlphaSplCharacter)
}
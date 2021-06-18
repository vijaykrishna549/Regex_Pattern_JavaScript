let Pincode = '400088';
let PincodeWithSpace = '400 088'
let pinRegex = RegExp('^[1-9][0-9]{2}[ ]?[0-9]{3}$');
let Pin_Regex = RegExp('^[1-9][0-9]{2}[ ]?[0-9]{3}$');
let pinCheck = pinRegex.test(Pincode);
let Pin_Check = Pin_Regex.test(PincodeWithSpace)
if (pinCheck == true && Pin_Check == true)
{
    console.log("Regex Passed for: " + Pincode +" And " + PincodeWithSpace);
}
else 
{
    console.log("Regex Failed for: " + Pincode+ " And "+ PincodeWithSpace);
}

export const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];
export const countries = ["Åland Islands","Pakistan","Sweden","Bouvet Island","Belarus","Netherlands","Tonga","Maldives","Brazil","Macedonia","Italy","Saint Kitts and Nevis","Somalia","Lesotho","Congo, Democratic Republic","Cambodia","Pitcairn","Seychelles","Yemen","Saint Helena","Saudi Arabia","Falkland Islands (Malvinas)","Cape Verde","Cuba","Hong Kong","Palau","Micronesia","Estonia","Lithuania","Norway","Monaco","Botswana","Brunei Darussalam","Eritrea","Cote D\"Ivoire","Benin","Bermuda","Guadeloupe","Guernsey","Venezuela","Afghanistan","Sao Tome and Principe","Jersey","Bangladesh","Japan","Germany","Georgia","Taiwan, Province of China","China","United Arab Emirates","Namibia","Montserrat","Togo","Kiribati","Oman","Nepal","Cameroon","Wallis and Futuna","Singapore","Sierra Leone","Tanzania","Ukraine","Turks and Caicos Islands","Paraguay","France","Kosovo","Korea (South)","Mexico","Peru","Haiti","Western Sahara","Egypt","Rwanda","Argentina","Kuwait","Philippines","Sri Lanka","Reunion","Virgin Islands, British","Aruba","Equatorial Guinea","Montenegro","Panama","Congo","Cayman Islands","Morocco","Nigeria","Nicaragua","San Marino","Denmark","Malta","Dominican Republic","Djibouti","AndorrA","Burundi","Barbados","Lebanon","Bahrain","South Africa","Jamaica","Palestinian Territory, Occupied","Trinidad and Tobago","Niue","Belgium","Poland","Angola","Slovakia","Greenland","Uganda","Kenya","Mayotte","Cyprus","Antarctica","Antigua and Barbuda","Iceland","Honduras","Heard Island and Mcdonald Islands","Serbia","Thailand","Tokelau","Belize","Greece","Uruguay","Christmas Island","Puerto Rico","Albania","Jordan","Solomon Islands","Algeria","Tunisia","Libyan Arab Jamahiriya","Luxembourg","Turkey","Senegal","Czech Republic","Gibraltar","Madagascar","Bahamas","Martinique","Niger","Norfolk Island","Moldova","Azerbaijan","Bolivia","Mozambique","British Indian Ocean Territory","Turkmenistan","El Salvador","United States Minor Outlying Islands","Switzerland","Tajikistan","Anguilla","Uzbekistan","Spain","Cook Islands","Kazakhstan","United States","Finland","Isle of Man","Guinea-Bissau","Iran","Guatemala","Samoa","New Zealand","Viet Nam","Tuvalu","Slovenia","Vanuatu","Grenada","India","Syrian Arab Republic","Austria","Mauritania","Costa Rica","Ethiopia","Cocos (Keeling) Islands","United Kingdom","Nauru","Australia","Guam","Suriname","Virgin Islands, U.S.","Burkina Faso","French Guiana","Macao","Romania","Svalbard and Jan Mayen","Laos","Canada","Saint Pierre and Miquelon","Iraq","Mauritius","Comoros","Gabon","Israel","Latvia","Saint Vincent and the Grenadines","Sudan","French Polynesia","Malawi","American Samoa","Northern Mariana Islands","French Southern Territories","Korea (North)","Hungary","Russian Federation","Ghana","Mali","Timor-Leste","Bulgaria","Guinea","Portugal","Indonesia","Malaysia","Dominica","Faroe Islands","Zambia","Bosnia and Herzegovina","Chile","Liechtenstein","Papua New Guinea","Colombia","Central African Republic","Ireland","Zimbabwe","Fiji","Chad","Swaziland","South Georgia and the South Sandwich Islands","Liberia","Bhutan","Armenia","Holy See (Vatican City State)","Guyana","Croatia","New Caledonia","Marshall Islands","Gambia","Qatar","Myanmar","Kyrgyzstan","Mongolia","Netherlands Antilles","Saint Lucia","Ecuador","Bonaire, Sint Eustatius and Saba","Curaçao","Sint Maarten (Dutch part)","South Sudan"];

const SELECTS = {
  states,
  countries,
  pronoun: ['He', 'She', 'They', 'Prefer not to say'],
  familyStatus: ['Single', 'Married/Domestic Partner', 'Family With Children'],
  years: ['<1 yr', '1-2 years', '3+ years'],
  relationship: ['Spouse/Partner','Parent','Sibling','Friend','Roommate'],
  refRelations: ['Parent', 'Sibling', 'Family', 'Friend', 'Neighbor', 'Coworker'],
  species: ['Dog','Cat','Horse','Bird','Reptile','Other'],
  sex: ['Male, Neutered','Female, Spayed','Male, Unaltered','Female, Unaltered'],
  age: ['<6 months','6 months to 1 yr','1-3 years old','5-8 years old','9+ years old'],
  homeKind: ['Apartment/Condo', 'Co-Op', 'Brownstone', 'Townhouse', 'Single Family Home'],
  yard: ['Yes, it’s fenced','Yes, it’s unfenced','No fence'],
  dogLive: ['Inside','Outside','Kennel'],
  dogAlone: ['crated','free in the house','outside'],
  energyLevel: ['ouch potato','moderate/active','high energy']
}

const makeOptions = s => 
  Object.entries(SELECTS)
    .reduce((acc, [key, elements]) => {
      
      acc[key] = elements.map((e, i) => ({
        value: i,
        label: e,
      }));

      return acc;
    }, {});

export default makeOptions(SELECTS);